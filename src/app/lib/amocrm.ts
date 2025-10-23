const BASE = process.env.AMO_BASE_URL!;
const CID = process.env.AMO_CLIENT_ID!;
const CSECRET = process.env.AMO_CLIENT_SECRET!;
const REDIRECT = process.env.AMO_REDIRECT_URI!;
const ACCESS = process.env.AMO_ACCESS_TOKEN;
const REFRESH = process.env.AMO_REFRESH_TOKEN;

if (!BASE || !CID || !CSECRET || !REDIRECT || !REFRESH) {
  console.warn("[AMO] Не заданы обязательные env: AMO_*");
}

async function refreshAccessToken() {
  const r = await fetch(`${BASE}/oauth2/access_token`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      client_id: CID,
      client_secret: CSECRET,
      grant_type: "refresh_token",
      refresh_token: REFRESH,
      redirect_uri: REDIRECT,
    }),
    cache: "no-store",
  });
  if (!r.ok) {
    const err = await r.text();
    throw new Error(`[AMO] refresh failed ${r.status}: ${err}`);
  }
  const j = (await r.json()) as { access_token: string };
  return j.access_token;
}

export async function amoFetch(path: string, init: RequestInit = {}) {
  let at = ACCESS;
  if (!at) {
    at = await refreshAccessToken();
  }
  const doFetch = (token: string) =>
    fetch(`${BASE}${path}`, {
      ...init,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(init.headers || {}),
      },
      cache: "no-store",
    });

  let res = await doFetch(at);
  if (res.status === 401) {
    const newAt = await refreshAccessToken();
    res = await doFetch(newAt);
  }
  return res;
}
