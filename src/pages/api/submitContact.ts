import type { NextApiRequest, NextApiResponse } from "next";

const HUBSPOT_API_URL = "https://api.hubapi.com/crm/v3/objects/deals";
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    // Resposta rápida para preflight
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("Requisição recebida na API de contato");

  const { nome, empresa, faturamento, investimento, telefone } = req.body;

  if (!nome || !telefone) {
    return res.status(400).json({
      error: "Nome e telefone são obrigatórios para criar o negócio (deal)",
    });
  }

  try {
    const body = {
      properties: {
        dealname: `${nome} - ${empresa ?? "Sem empresa"}`,
        faturamento_mensal: faturamento ?? "",
        investimento_marketing: investimento?.toString() ?? "",
        telefone: telefone ?? "",
        pipeline: "default",
        dealstage: "appointmentscheduled",
      },
    };

    const response = await fetch(HUBSPOT_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro HubSpot:", errorData);
      return res
        .status(500)
        .json({ error: errorData.message || "Erro ao enviar para HubSpot" });
    }

    return res
      .status(200)
      .json({ message: "Negócio (deal) criado com sucesso no HubSpot" });
  } catch (error) {
    console.error("Erro interno:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}
