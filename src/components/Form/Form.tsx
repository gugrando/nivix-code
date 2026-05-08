'use client';

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const valoresPermitidos = [
  "Até R$ 20 mil",
  "De R$ 20 mil a R$ 40 mil",
  "De R$ 40 mil a R$ 60 mil",
  "De R$ 60 mil a R$ 80 mil",
  "De R$ 80 mil a R$ 100 mil",
  "De R$ 100 mil a R$ 150 mil",
  "De R$ 150 mil a R$ 250 mil",
  "De R$ 250 mil a R$ 400 mil",
  "De R$ 400 mil a R$ 600 mil",
  "Acima de R$ 1 milhão",
];

const investimentosPermitidos = [
  "Nada",
  "Até R$ 1.000",
  "De R$ 1.000 a R$ 5.000",
  "De R$ 5.000 a R$ 10.000",
  "De R$ 10.000 a R$ 20.000",
  "De R$ 20.000 a R$ 30.000",
  "Acima de R$ 30.000",
];

const schema = z.object({
  nome: z.string().min(2, "Mínimo 2 caracteres").max(50, "Máximo 50 caracteres"),
  telefone: z
    .string()
    .min(8, "Telefone inválido")
    .max(15, "Telefone muito longo")
    .refine((val) => /^\d+$/.test(val), {
      message: "Digite apenas números",
    })
    .transform((val) => val.replace(/\D/g, "")),
  empresa: z.string().min(2, "Mínimo 2 caracteres").max(50, "Máximo 50 caracteres"),
  faturamento: z.enum(valoresPermitidos as [string, ...string[]], {
    errorMap: () => ({ message: "Selecione uma opção válida" }),
  }),
  investimento: z.enum(investimentosPermitidos as [string, ...string[]], {
    errorMap: () => ({ message: "Selecione uma opção válida" }),
  }),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Número do WhatsApp da Nivix
    const whatsappNumber = "5554999656522"; 
    
    // Formatação da mensagem para o WhatsApp
    const message = `Olá, tenho interesse na consultoria gratuita para meu negócio! Seguem meus dados:%0A%0A` +
      `*Nome:* ${data.nome}%0A` +
      `*Telefone:* ${data.telefone}%0A` +
      `*Empresa:* ${data.empresa}%0A` +
      `*Faturamento:* ${data.faturamento}%0A` +
      `*Investimento em Marketing:* ${data.investimento}%0A%0A` +
      `_Lead vindo da Landing Page Elite_`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    try {
      // Simula um pequeno delay para feedback visual
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Redireciona para o WhatsApp
      window.open(whatsappUrl, "_blank");
      
      // Também redireciona a página atual para a página de sucesso
      window.location.replace("/CadastroConcluido");
      
      reset();
    } catch (error) {
      console.error("Erro ao processar redirecionamento:", error);
    }
  };

  const inputStyle = "w-full rounded-2xl bg-neutral-800/50 border-2 border-neutral-700/50 placeholder-neutral-500 text-white text-start px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#FFB400]/50 transition-all backdrop-blur-sm";

  return (
    <div className="w-full flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
        
        {/* Nome */}
        <div className="relative group">
          <input
            {...register("nome")}
            className={inputStyle}
            placeholder="Nome Completo"
          />
          {errors.nome && (
            <p className="text-red-400 text-xs mt-1 ml-2 font-medium">{errors.nome.message}</p>
          )}
        </div>

        {/* Telefone */}
        <div className="relative group">
          <input
            {...register("telefone")}
            className={inputStyle}
            placeholder="WhatsApp (ex: 11999999999)"
          />
          {errors.telefone && (
            <p className="text-red-400 text-xs mt-1 ml-2 font-medium">{errors.telefone.message}</p>
          )}
        </div>

        {/* Empresa */}
        <div className="relative group">
          <input
            {...register("empresa")}
            className={inputStyle}
            placeholder="Nome do seu Negócio"
          />
          {errors.empresa && (
            <p className="text-red-400 text-xs mt-1 ml-2 font-medium">{errors.empresa.message}</p>
          )}
        </div>

        {/* Faturamento */}
        <div className="relative">
          <select
            {...register("faturamento")}
            className={inputStyle + ` appearance-none cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>
              Qual seu faturamento mensal?
            </option>
            {valoresPermitidos.map((valor) => (
              <option key={valor} value={valor} className="bg-neutral-900 text-white">
                {valor}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </div>
          {errors.faturamento && (
            <p className="text-red-400 text-xs mt-1 ml-2 font-medium">{errors.faturamento.message}</p>
          )}
        </div>

        {/* Investimento */}
        <div className="relative">
          <select
            {...register("investimento")}
            className={inputStyle + ` appearance-none cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>
              Quanto investe em marketing hoje?
            </option>
            {investimentosPermitidos.map((valor) => (
              <option key={valor} value={valor} className="bg-neutral-900 text-white">
                {valor}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </div>
          {errors.investimento && (
            <p className="text-red-400 text-xs mt-1 ml-2 font-medium">{errors.investimento.message}</p>
          )}
        </div>

        {/* Botão */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#FFB400] to-[#cb8e00] hover:from-yellow-400 hover:to-yellow-500 disabled:opacity-50 text-black font-black py-5 rounded-2xl transition-all shadow-xl shadow-yellow-900/20 active:scale-[0.98] uppercase tracking-widest text-sm"
        >
          {isSubmitting ? "Enviando..." : "Entrar em Contato Agora"}
        </button>

        {isSubmitSuccessful && (
          <p className="mt-2 text-green-400 font-bold text-center text-xs animate-pulse">
            Redirecionando para nossa equipe de elite...
          </p>
        )}
      </form>
    </div>
  );
}
