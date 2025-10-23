import { amoFetch } from "./amocrm";

type PushParams = {
  name: string;
  phone: string;
  source?: string;
  pipeline_id?: number | string;
  status_id?: number | string;
};

export async function pushToAmo(p: PushParams) {
  const leadName =
    `Заявка с сайта - ${p.source || "Не указано"}`.slice(0, 250);

  const body = [
    {
      name: leadName,
      pipeline_id: p.pipeline_id || (process.env.AMO_PIPELINE_ID ? Number(process.env.AMO_PIPELINE_ID) : undefined),
      status_id: p.status_id || (process.env.AMO_STATUS_ID ? Number(process.env.AMO_STATUS_ID) : undefined),
      _embedded: {
        contacts: [
          {
            name: p.name,
            custom_fields_values: [
              {
                field_code: "PHONE",
                values: [{ value: p.phone }],
              },
            ],
          },
        ],
      },
    },
  ];

  const res = await amoFetch("/api/v4/leads", {
    method: "POST",
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`[AMO] create lead failed ${res.status}: ${err}`);
  }

  const created = await res.json();
  const leadId = created?.[0]?.id;
  if (leadId) {
    const noteHtml =
      `<b>Источник:</b> ${p.source || "Не указано"}<br/><b>Телефон:</b> ${p.phone}<br/><b>Имя:</b> ${p.name}`;
    await amoFetch(`/api/v4/leads/${leadId}/notes`, {
      method: "POST",
      body: JSON.stringify([
        { note_type: "common", params: { text: noteHtml } },
      ]),
    }).catch(() => {});
  }
}