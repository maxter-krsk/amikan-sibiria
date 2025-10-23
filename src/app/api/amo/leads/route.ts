import { NextResponse } from "next/server";
import { pushToAmo } from "@/app/lib/pushToAmo";

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "https://www.amikan-sshges.ru";
const DEV_ORIGIN = "http://localhost:3000";

function cors(req: Request, res: NextResponse) {
  const origin = req.headers.get("origin");
  const allow =
    origin && [ALLOWED_ORIGIN, DEV_ORIGIN].includes(origin) ? origin : ALLOWED_ORIGIN;
  res.headers.set("Access-Control-Allow-Origin", allow);
  res.headers.set("Vary", "Origin");
  res.headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "content-type, x-webhook-secret");
  return res;
}

function isSameAllowedOrigin(req: Request) {
  const origin = req.headers.get("origin");
  return origin === ALLOWED_ORIGIN || origin === DEV_ORIGIN;
}

function assertAuth(req: Request) {
  if (isSameAllowedOrigin(req)) return;

  const header = req.headers.get("x-webhook-secret");
  const expected = process.env.FORM_SECRET;
  if (!expected || header !== expected) throw new Error("unauthorized");
}

type Body = {
  name: string;
  phone: string;
  source?: string;
  pipeline_id?: number | string;
  status_id?: number | string;
};

async function readBody(req: Request): Promise<Body> {
  const ctype = req.headers.get("content-type") || "";
  if (ctype.includes("application/json")) {
    return (await req.json()) as Body;
  }
  if (ctype.includes("application/x-www-form-urlencoded")) {
    const text = await req.text();
    const p = Object.fromEntries(new URLSearchParams(text)) as any;
    return {
      name: p.name,
      phone: p.phone,
      source: p.source,
      pipeline_id: p.pipeline_id,
      status_id: p.status_id,
    };
  }
  if (ctype.includes("multipart/form-data")) {
    const fd = await req.formData();
    const get = (k: string) => fd.get(k)?.toString() || "";
    return {
      name: get("name"),
      phone: get("phone"),
      source: get("source") || undefined,
      pipeline_id: get("pipeline_id") || undefined,
      status_id: get("status_id") || undefined,
    };
  }
  throw new Error("unsupported content-type");
}

export async function OPTIONS(req: Request) {
  return cors(req, new NextResponse(null, { status: 204 }));
}

export async function GET(req: Request) {
  return cors(req, NextResponse.json({ ok: true }));
}

export async function POST(req: Request) {
  try {
    assertAuth(req);
    const body = await readBody(req);

    if (!body?.name || !body?.phone) {
      return cors(
        req,
        NextResponse.json({ ok: false, error: "name and phone are required" }, { status: 400 })
      );
    }

    await pushToAmo(body);
    return cors(req, NextResponse.json({ ok: true }));
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "failed";
    const status = msg === "unauthorized" ? 401 : msg === "unsupported content-type" ? 415 : 500;
    console.error("[/api/amo/leads] error:", msg);
    return cors(req, NextResponse.json({ ok: false, error: msg }, { status }));
  }
}
