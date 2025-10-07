"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContact(formData: FormData) {
  try {
    const name = String(formData.get("Имя") ?? "").trim();
    const phone = String(formData.get("Телефон") ?? "").trim();

    const source =
      String(formData.get("source") ?? formData.get("Форма:") ?? "").trim() ||
      "Не указано";

    if (!name || !phone) {
      return { ok: false, error: "Укажите имя и номер телефона" };
    }

    const fromEmail = process.env.RESEND_FROM || "onboarding@resend.dev";
    const to = process.env.RESEND_TO || "nigazzz2000@gmail.com";

    const { error } = await resend.emails.send({
      from: `Amikan-Siberia <${fromEmail}>`,
      to: [to],
      subject: `Заявка с сайта • ${source}`,
      html: `
         <div style="font-family: Arial, sans-serif; background-color: #EFE5D9; padding: 30px;">
          <div style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(20, 43, 35, 0.15);">
            <div style="background-color: #142B23; color: #EFE5D9; text-align: center; padding: 20px 30px;">
              <h2 style="margin: 0; font-size: 22px;">Новая заявка с сайта <span style="color: #BC9C5F;">Amikan-Siberia</span></h2>
            </div>

            <div style="padding: 24px 30px; color: #142B23; background-color: #fff;">
              <p style="margin: 8px 0; font-size: 16px;"><b style="color: #5E785F;">Источник:</b> ${source}</p>
              <p style="margin: 8px 0; font-size: 16px;"><b style="color: #5E785F;">Имя:</b> ${name}</p>
              <p style="margin: 8px 0; font-size: 16px;"><b style="color: #5E785F;">Телефон:</b> ${phone}</p>
            </div>
            
          </div>
        </div>
      `,
    });

    if (error) throw error;
    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message ?? "Ошибка отправки" };
  }
}
