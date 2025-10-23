import { amoFetch } from "./amocrm";

type AmoCustomFieldValue = {
  field_id: number;
  values: Array<{ value?: string | number; enum_id?: number }>;
};

type AmoLeadPayload = {
  name: string;
  pipeline_id?: number | string;
  _embedded: { tags: Array<{ name: string }> };
  custom_fields_values: AmoCustomFieldValue[];
};

type PushParams = {
  name: string;
  phone: string;
  source?: string;
  pipeline_id?: number | string;
  status_id?: number | string;
};

const SOURCE_ENUMS: Record<string, number> = {
  сайт: 1624675,
  site: 1624675,
  website: 1624675,

  wa: 1624671,
  whatsapp: 1624671,

  instagram: 1624673,
  инстаграм: 1624673,
  ig: 1624673,

  рассылка: 1624677,
  email: 1624677,
  newsletter: 1624677,

  авито: 1740425,
  avito: 1740425,
};

function normalizeSource(raw?: string): string | undefined {
  if (!raw) return undefined;
  return raw.trim().toLowerCase();
}

export async function pushToAmo(p: PushParams) {
  const normalized = normalizeSource(p.source);
  const enumId =
    (normalized && SOURCE_ENUMS[normalized]) || SOURCE_ENUMS["сайт"];

  const leadName = `Заявка СШГЭС: ${p.source || "Сайт"}`.slice(0, 250);
  const SOURCE_FIELD_ID = Number(process.env.AMO_SOURCE_FIELD_ID || "873463"); // можно захардкодить или оставить из .env
  const LEAD_NAME_FIELD_ID = Number(process.env.AMO_LEAD_NAME_FIELD_ID || "");

  const customFields: AmoCustomFieldValue[] = [];
  if (SOURCE_FIELD_ID) {
    customFields.push({
      field_id: SOURCE_FIELD_ID,
      values: [{ enum_id: enumId }],
    });
  }
  if (LEAD_NAME_FIELD_ID) {
    customFields.push({
      field_id: LEAD_NAME_FIELD_ID,
      values: [{ value: p.name }],
    });
  }

  let contactId: number | null = null;
  try {
    const searchRes = await amoFetch(
      `/api/v4/contacts?query=${encodeURIComponent(p.phone)}`
    );
    if (searchRes.ok) {
      const data = await searchRes.json();
      contactId = data?._embedded?.contacts?.[0]?.id ?? null;
    }
  } catch {}

  if (!contactId) {
    const createContactRes = await amoFetch(`/api/v4/contacts`, {
      method: "POST",
      body: JSON.stringify([
        {
          name: p.name,
          custom_fields_values: [
            { field_code: "PHONE", values: [{ value: p.phone }] },
          ],
        },
      ]),
    });
    if (!createContactRes.ok) {
      const err = await createContactRes.text();
      throw new Error(
        `[AMO] create contact failed ${createContactRes.status}: ${err}`
      );
    }
    const cJson = await createContactRes.json();
    contactId = cJson?._embedded?.contacts?.[0]?.id ?? null;
  }

  const leadPayload: AmoLeadPayload = {
    name: leadName,
    pipeline_id:
      p.pipeline_id ||
      (process.env.AMO_PIPELINE_ID
        ? Number(process.env.AMO_PIPELINE_ID)
        : undefined),
    _embedded: {
      tags: [{ name: p.source || "Сайт" }],
    },
    custom_fields_values: customFields,
  };

  const createLeadRes = await amoFetch(`/api/v4/leads`, {
    method: "POST",
    body: JSON.stringify([leadPayload]),
  });

  if (!createLeadRes.ok) {
    const err = await createLeadRes.text();
    throw new Error(`[AMO] create lead failed ${createLeadRes.status}: ${err}`);
  }

  const lJson = await createLeadRes.json();
  const leadId: number | undefined = lJson?._embedded?.leads?.[0]?.id;

  if (leadId && contactId) {
    const linkRes = await amoFetch(`/api/v4/leads/${leadId}/link`, {
      method: "POST",
      body: JSON.stringify([
        { to_entity_id: contactId, to_entity_type: "contacts" },
      ]),
    });
    if (!linkRes.ok) {
      const err = await linkRes.text();
      console.error(`[AMO] link contact failed ${linkRes.status}: ${err}`);
    }
  }

  if (leadId) {
    const noteText =
      `Источник: ${p.source || "Сайт"}\n` +
      `Имя: ${p.name}\n` +
      `Телефон: ${p.phone}`;

    await amoFetch(`/api/v4/leads/${leadId}/notes`, {
      method: "POST",
      body: JSON.stringify([
        {
          note_type: "common",
          params: { text: noteText },
        },
      ]),
    }).catch(() => {});
  }
}
