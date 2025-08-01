import { NextRequest, NextResponse } from "next/server";

const HUBSPOT_API_URL = "https://api.hubapi.com/crm/v3/objects/deals";
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { nome, empresa, faturamento, investimento, telefone } = data;

    if (!nome || !telefone) {
      return NextResponse.json(
        { error: "Nome e telefone são obrigatórios para criar o negócio (deal)" },
        { status: 400 }
      );
    }

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
      return NextResponse.json(
        { error: errorData.message || "Erro ao enviar para HubSpot" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Negócio (deal) criado com sucesso no HubSpot" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro interno:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
