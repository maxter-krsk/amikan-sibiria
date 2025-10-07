"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContact(formData: FormData) {
  try {
    const name    = String(formData.get("Имя") ?? "").trim();
    const phone   = String(formData.get("Телефон") ?? "").trim();

    if (!name || !phone) {
      return { ok: false, error: "Укажите имя и номер телефона" };
    }

    const fromEmail = process.env.RESEND_FROM || "onboarding@resend.dev";
    const to   = process.env.RESEND_TO   || "nigazzz2000@gmail.com";

    const { error } = await resend.emails.send({
      from: `Amikan-Siberia <${fromEmail}>`,
      to: [to],
      subject: `Заявка с сайта`,
      html: `
        <h2>Новая заявка с сайта Amikan-Siberia</h2>
        <p><b>Имя:</b> ${name}</p>
        <p><b>Телефон:</b> ${phone}</p>
      `,
    });

    if (error) throw error;
    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message ?? "Ошибка отправки" };
  }
}
