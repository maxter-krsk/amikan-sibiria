// app/api/amo/leads/route.ts
import { NextResponse } from "next/server";
import { pushToAmo } from "@/app/lib/pushToAmo";

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "*"; // лучше указать точный домен

function cors(res: NextResponse) {
  res.headers.set("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "content-type, x-webhook-secret");
  return res;
}

function assertAuth(req: Request) {
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

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 204 }));
}

export async function GET() {
  return cors(NextResponse.json({ ok: true }));
}

export async function POST(req: Request) {
  try {
    assertAuth(req);
    const body = (await req.json()) as Body;

    if (!body?.name || !body?.phone) {
      return cors(
        NextResponse.json({ ok: false, error: "name and phone are required" }, { status: 400 })
      );
    }

    await pushToAmo(body);
    return cors(NextResponse.json({ ok: true }));
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "failed";
    const status = msg === "unauthorized" ? 401 : 500;
    return cors(NextResponse.json({ ok: false, error: msg }, { status }));
  }
}