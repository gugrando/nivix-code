export const nicheData = {
  geral: {
    name: "Restaurante",
    hero: {
      highlight: "Marketing para Restaurantes",
      subtext: "Com 5 anos de experiência no mercado gastronomico, validamos um método que faz qualquer um vender 10x mais."
    },
    form: {
        methodSubtitle: "Transformamos seu restaurante em uma máquina de pedidos.",
        authorityText: "Especialistas em Gestão GastronÔmica",
        riskZeroText: "Você ganha uma consultoria gratuita do seu negócio inteiro, sem compromisso. Você só tem a ganhar!"
    },
    ecosystem: {
      badge: "Assessoria 360º de Elite",
      title: "ecossistema gastronômico",
      desc: "Não somos apenas uma assessoria, somos um ecossistema gastronômico completo.",
      platformTitle: "gestão gastronômica"
    },
    plano: {
      desc: "Garantimos mais resultado e entrega que todas agências do mercado, elevamos o nível da gastronomia brasileira."
    },
    team: {
      subtext: "A parceria que seu negócio merece para atingir novos patamares. Faça parte da equipe que respira e escala o setor gastronômico brasileiro.",
      description: "Ative o centro de comando que respira gastronomia 24h por dia."
    },
    method: {
        description: "Nós validamos o custo médio de aquisição mais agressivo do mercado gastronômico brasileiro.",
        footer: "*Baseado no CPA médio de R$ 6,00 validado em mais de 600 operações gastronômicas."
    },
    finalCTA: {
        title: "A decisão que vai",
        highlight: "mudar a história do seu negócio.",
        subtitle: "O que separa o seu delivery do momento atual para estar travado de pedidos é apenas uma decisão. A mesma decisão que separa você do nível dos seus maiores concorrentes."
    }
  },
  pizzarias: {
    name: "Pizzaria",
    hero: {
      highlight: "Marketing para Pizzarias",
      subtext: "Com 5 anos de experiência, validamos um método que faz qualquer pizzaria <strong>vender 10x mais</strong>, com um custo médio por pedido de 4 reais."
    },
    form: {
        methodSubtitle: "Transformamos sua pizzaria em uma máquina de pedidos.",
        authorityText: "Somos 100% focados em Pizzarias",
        riskZeroText: "Você ganha uma consultoria gratuita da sua pizzaria, sem compromisso. Você só tem a ganhar!"
    },
    ecosystem: {
      badge: "Assessoria 360º para Pizzarias",
      title: "ecossistema de alta performance",
      desc: "Somos o braço direito da sua pizzaria. Do tráfego à engenharia do cardápio focado em pizza.",
      platformTitle: "gestão de pizzarias"
    },
    plano: {
      desc: "A estratégia exata que faz pizzarias saírem do amadorismo para a escala industrial de pedidos."
    },
    team: {
      subtext: "A parceria que sua pizzaria merece. Faça parte da equipe que respira o mercado de pizzarias 24h por dia.",
      description: "Ative o QG que entende tudo sobre massa, forno e escala de pedidos."
    },
    method: {
        description: "Nós validamos o custo médio de aquisição mais agressivo do mercado de pizzarias brasileiro.",
        footer: "*Baseado no CPA médio de R$ 6,00 validado em centenas de pizzarias de sucesso."
    },
    finalCTA: {
        title: "A decisão que vai",
        highlight: "mudar a história da sua pizzaria.",
        subtitle: "O que separa a sua pizzaria do faturamento atual para o forno travado de pedidos é apenas uma decisão. É hora de dominar a sua região e deixar o amadorismo para trás."
    }
  }
};

export type NicheType = keyof typeof nicheData;
