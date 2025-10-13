// data/clientsData.ts
'use client';
import React from "react";


//Instalar biblioteca FA para icones

export interface Client {
  id: number;
  companyName: string;
  description: string;
  imagePath: string;
  fireImagePath: string;
  fireText: string;
}

export const clients: Client[] = [
  {
    id: 1,
    companyName: "Forno e Famiglia",
    description: "A pizzaria Forno e Famiglia fazia 12 pedidos por noite com dependencia total do Ifood, hoje com cardápio proprio e com o nosso serviço, fazem mais de 60 pedidos no dia com recorde nos finais de semana.",
    imagePath: "/logoclientes4.png",                                                        
    fireImagePath: "/fogo.png",
    fireText: "1 ano",
  },
  {
    id: 2,
    companyName: "Vellaro Pizzaria",
    description: "Desacreditado de marketing, já tinha feito serviços frustrados com outra agência, a Vellaro confiou em nós e se tornou um dos maiores cases da Nivix",
    imagePath: "/vellarologo.jpeg",
    fireImagePath: "/fogo-azul.png",
    fireText: "3 anos",

  },
  {
    id: 3,
    companyName: "Hober Pizzaria",
    description: "Enfrentava forte concorrencia na cidade, ajustamos o social media e canal de vendas, junto a trafégo de reconhecimento, ocasionou no maior numero de pedidos da história da pizzaria.",
    imagePath: "/logoclientes2.png",
    fireImagePath: "/fogo-amarelo.png",
    fireText: "7 meses",

  },
  {
    id: 4,
    companyName: "Anabela - Forno a Lenha",
    description: "Um grande desafio, problemas na frota de entregadores, demora na entrega, midia social desorganizada e marketing mal feito. Reprojetamos por completo, hoje a Anabela se consolida a maior pizzaria da cidade",
    imagePath: "/logoclientes3.png",
    fireImagePath: "/fogo.png",
    fireText: "4 anos",

  },
  {
    id: 5,
    companyName: "Gambito Bar",
    description: "Social media bem feito, reconhecido na cidade, mas com baixo pedidos no delivery e um site que não condizia com o nível do estabelecimento. Foi onde entramos para mudar o jogo.",
    imagePath: "/gamblogo.jpg",
    fireImagePath: "/fogo.png",
    fireText: "1 mês",

  },
  {
    id: 6,
    companyName: "Restaurante Sabores da Vila",
    description: "Salão vazio sem previsibilidade, dificuldade de atrair clientes, ajustamos o posicionamento da marca junto a trafégo de reconhecimento, começamos a encher o salão e ter clientes fiéis.",
    imagePath: "/svlogo.jpeg",
    fireImagePath: "/fogo.png",
    fireText: "10 meses",

  },
];