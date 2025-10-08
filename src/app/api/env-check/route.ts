export async function GET() {
  const has = Boolean(process.env.RESEND_API_KEY);
  return new Response(JSON.stringify({ RESEND_API_KEY: has ? "present" : "missing" }), {
    headers: { "content-type": "application/json" },
  });
}
