"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Имя: 2–40 символов, только буквы (любой алфавит) + пробел/дефис/апостроф между частями
const NAME_RE = /^(?=.{2,40}$)\p{L}+(?:[ \-'\u2019]\p{L}+)*$/u;

function normalizeName(raw: string) {
  return raw
    .normalize("NFC")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/^[\s\-'\u2019]+|[\s\-'\u2019]+$/g, "");
}

function normalizePhone(raw: string) {
  const digits = String(raw).replace(/\D+/g, "");
  if (digits.length < 10 || digits.length > 15) return null;
  return `+${digits}`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getErrorMessage(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof e === "string") return e;
  if (typeof e === "object" && e && "message" in e) {
    const msg = (e as { message?: unknown }).message;
    if (typeof msg === "string") return msg;
  }
  return "Ошибка отправки";
}

type SendContactResult = { ok: true } | { ok: false; error: string };

export async function sendContact(formData: FormData): Promise<SendContactResult> {
  try {
    const nameRaw = String(formData.get("Имя") ?? "");
    const phoneRaw = String(formData.get("Телефон") ?? "");

    const name = normalizeName(nameRaw);
    const phoneE164 = normalizePhone(phoneRaw);

    if (!NAME_RE.test(name)) {
      return { ok: false, error: "Введите корректное имя (2–40 символов, только буквы)." };
    }
    if (!phoneE164) {
      return { ok: false, error: "Введите корректный номер телефона." };
    }

    const source =
      String(
        formData.get("source") ??
          formData.get("Источник") ??
          formData.get("Форма:") ??
          ""
      ).trim() || "Не указано";

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phoneE164);
    const safeSource = escapeHtml(source);

    const fromEmail = process.env.RESEND_FROM || "onboarding@resend.dev";
    const to = process.env.RESEND_TO || "nigazzz2000@gmail.com";

    const { error } = await resend.emails.send({
      from: `Amikan-Siberia <${fromEmail}>`,
      to: [to],
      subject: `Заявка с сайта • ${safeSource}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #EFE5D9; padding: 30px;">
          <div style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(20, 43, 35, 0.15);">
            <div style="background-color: #142B23; color: #EFE5D9; text-align: center; padding: 20px 30px;">
              <h2 style="margin: 0; font-size: 22px;">Новая заявка с сайта <span style="color: #BC9C5F;">Amikan-Siberia</span></h2>
            </div>
            <div style="padding: 24px 30px; color: #142B23; background-color: #fff;">
              <p style="margin: 8px 0; font-size: 16px;"><b style="color: #5E785F;">Источник:</b> ${safeSource}</p>
              <p style="margin: 8px 0; font-size: 16px;"><b style="color: #5E785F;">Имя:</b> ${safeName}</p>
              <p style="margin: 8px 0; font-size: 16px;"><b style="color: #5E785F;">Телефон:</b> ${safePhone}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) throw error;
    return { ok: true };
  } catch (e: unknown) {
    return { ok: false, error: getErrorMessage(e) };
  }
}