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
  // email: z.string().email("Email inválido"),
  telefone: z.string().min(8, "Telefone inválido").max(15, "Telefone muito longo"),
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
    try {
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
        console.log("Dados enviados com sucesso");
        window.location.replace("/CadastroConcluido");
      } else {
        console.error("Erro ao enviar");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const inputStyle =
    "w-full rounded-md bg-neutral-700/70 border-2 border-neutral-700 placeholder-white text-white px-10 py-3 md:py-4.5 md:px-4 focus:outline-none focus:ring-2 focus:ring-[#FFB400]/50";

  return (
    <div className="w-full flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="lg:w-[90%] space-y-4">
        {/* Nome */}
        <div>
          <input
            {...register("nome")}
            className={inputStyle}
            placeholder="Seu nome"
          />
          {errors.nome && (
            <p className="text-red-400 text-sm">{errors.nome.message}</p>
          )}
        </div>

        {/* Telefone */}
        <div>
          <input
            {...register("telefone")}
            className={inputStyle}
            placeholder="Telefone"
          />
          {errors.telefone && (
            <p className="text-red-400 text-sm">{errors.telefone.message}</p>
          )}
        </div>

        {/* Empresa */}
        <div>
          <input
            {...register("empresa")}
            className={inputStyle}
            placeholder="Nome da empresa"
          />
          {errors.empresa && (
            <p className="text-red-400 text-sm">{errors.empresa.message}</p>
          )}
        </div>

        {/* Faturamento */}
        <div>
          <select
            {...register("faturamento")}
            className={inputStyle + ` appearance-none `}
            defaultValue=""
          >
            <option value="" disabled>
              Qual seu faturamento mensal?
            </option>
            {valoresPermitidos.map((valor) => (
              <option key={valor} value={valor}>
                {valor}
              </option>
            ))}
          </select>
          {errors.faturamento && (
            <p className="text-red-400 text-sm">{errors.faturamento.message}</p>
          )}
        </div>

        {/* Investimento */}
        <div>
          <select
            {...register("investimento")}
            className={inputStyle + ` appearance-none `}
            defaultValue=""
          >
            <option value="" disabled>
              Quanto investe em marketing?
            </option>
            {investimentosPermitidos.map((valor) => (
              <option key={valor} value={valor}>
                {valor}
              </option>
            ))}
          </select>
          {errors.investimento && (
            <p className="text-red-400 text-sm">{errors.investimento.message}</p>
          )}
        </div>

        {/* Botão */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-300 text-black font-semibold py-3 rounded-md transition"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>

        {isSubmitSuccessful && (
          <p className="mt-2 text-green-400 font-semibold text-center">
            Contato enviado com sucesso!
          </p>
        )}
      </form>
    </div>
  );
}
