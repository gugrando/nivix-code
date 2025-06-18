"use client";

import React from "react";

export default function Exclusivist() {
  return (
    <div className="flex w-full h-fit mt-40 items-center justify-center bg-[#1c1c1c] px-4">
      <div className="flex flex-col items-center md:w-[40%] bg-neutral-800 py-10 px-4 md:px-40 rounded-lg">
        <h2 className="text-4xl font-semibold mb-4 text-[#FFB400]">Atenção!</h2>
        <p className="text-lg mb-6 text-center">
            Para manter a qualidade máxima, nossa equipe tem um compromisso em trabalhar com exclusividade para cada cliente.
            Por esse motivo nem sempre nosso formulário está aberto para novos clientes contratarem nossos serviços, então se você
            está vendo esse site e tem duvidas, é bom se apressar antes que fechamos as vagas mais uma vez.
        </p>
      </div>
    </div>
  );
}