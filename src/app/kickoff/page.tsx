"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  FaStore, 
  FaPalette, 
  FaUtensils, 
  FaUsers, 
  FaGlobe, 
  FaChartLine, 
  FaBullseye, 
  FaCamera, 
  FaGear, 
  FaChevronRight, 
  FaChevronLeft, 
  FaCircleCheck,
  FaTriangleExclamation
} from "react-icons/fa6";

// --- SCHEMAS DE VALIDAÇÃO REFINADOS (FOCO OPERACIONAL) ---
const stepSchemas = [
  // Step 1: Restaurante
  z.object({
    nomeRestaurante: z.string().min(2, "Obrigatório para identificação"),
    nomeResponsavel: z.string().min(3, "Nome do contato obrigatório"),
    cargo: z.string().optional(),
    telefone: z.string().min(10, "WhatsApp de operação obrigatório"),
    email: z.string().optional(), // Já temos no CRM
    endereco: z.string().min(5, "Endereço exato é vital para os anúncios"),
    cidade: z.string().min(2, "Cidade obrigatória"),
    estado: z.string().min(2, "UF obrigatória"),
    qtdUnidades: z.string().optional(),
    tipoCozinha: z.string().optional(), // Provável que já sabemos
    tempoMercado: z.string().optional(),
    capacidade: z.string().optional(),
    diasFuncionamento: z.string().optional(),
    horarioFuncionamento: z.string().min(3, "Precisamos saber quando pausar os anúncios"),
  }),
  // Step 2: Identidade
  z.object({
    descricaoMarca: z.string().optional(),
    diferenciais: z.string().optional(),
    posicionamento: z.string().min(1, "Essencial para o tom dos anúncios"),
    tom: z.string().min(1, "Essencial para o copy"),
    maiorGargalo: z.string().min(10, "Por favor, detalhe um pouco mais o seu maior problema"),
    concorrentes: z.string().min(5, "Precisamos saber de quem vamos 'roubar' pedidos"),
  }),
  // Step 3: Cardápio
  z.object({
    pratosCarro: z.string().min(5, "Precisamos saber o que destacar no tráfego"),
    ticketMedio: z.string().optional(),
    temDelivery: z.string().min(1, "Obrigatório"),
    plataformasDelivery: z.array(z.string()).optional(),
    percentualDelivery: z.string().optional(),
    raioEntrega: z.string().min(1, "Vital para configurar o raio do Meta Ads"),
    statusCardapio: z.string().min(1, "Obrigatório para diagnóstico"),
    dificuldadesCardapio: z.string().optional(),
    cupons: z.string().min(1, "Obrigatório"),
    ofertasCombos: z.string().optional(),
    temCardapioDigital: z.string().optional(),
    urlCardapio: z.string().optional(),
  }),
  // Step 4: Público
  z.object({
    faixaEtaria: z.array(z.string()).min(1, "Necessário para segmentação"),
    genero: z.string().min(1, "Necessário para segmentação"),
    classeEconomica: z.string().optional(),
    raioAtendimento: z.string().optional(),
  }),
  // Step 5: Digital
  z.object({
    redesSociais: z.array(z.string()).optional(),
    seguidoresIG: z.string().min(1, "Análise de autoridade inicial"),
    seguidoresFB: z.string().optional(),
    seguidoresTT: z.string().optional(),
    temSite: z.string().optional(),
    urlSite: z.string().optional(),
    googleMeuNegocio: z.string().min(1, "Obrigatório para SEO Local"),
    notaGoogle: z.string().optional(),
    crm: z.string().optional(),
  }),
  // Step 6: Tráfego
  z.object({
    trafego: z.string().min(1, "Essencial para histórico"),
    investimentoAnterior: z.string().optional(),
    plataformaAnterior: z.string().optional(),
    resultadoAnterior: z.string().optional(),
    orcamentoMensal: z.string().min(1, "Limite de execução obrigatório"),
  }),
  // Step 7: Objetivos
  z.object({
    objetivos: z.array(z.string()).min(1, "Escolha ao menos um KPI"),
    metaPrincipal: z.string().min(5, "Precisamos de um alvo claro"),
    expectativaPrazo: z.string().optional(),
    kpiPrincipal: z.string().optional(),
  }),
  // Step 8: Conteúdo
  z.object({
    estiloConteudo: z.array(z.string()).min(1, "Direcionamento criativo obrigatório"),
    referenciasVisuais: z.string().optional(),
    gerenciamentoSocialMedia: z.string().min(1, "Obrigatório"),
    frequenciaPostagem: z.string().min(1, "Obrigatório"),
    temMaterialAudiovisual: z.string().min(1, "Obrigatório para planejar produção"),
    tipoMaterial: z.array(z.string()).optional(),
    restricoesConteudo: z.string().optional(),
  }),
  // Step 9: Operacional
  z.object({
    contatoOperacional: z.string().min(3, "Quem a Nivix deve chamar no dia a dia?"),
    cargoOperacional: z.string().optional(),
    telefoneOperacional: z.string().min(10, "Telefone direto obrigatório"),
    disponibilidade: z.string().optional(),
    observacoes: z.string().optional(),
  }),
];

export default function KickoffPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 9;

  const currentSchema = stepSchemas[step - 1];
  const methods = useForm({
    resolver: zodResolver(currentSchema),
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      console.log("FINAL DATA:", methods.getValues());
      alert("Kickoff concluído com sucesso!");
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const steps = [
    { id: 1, title: "Restaurante", icon: <FaStore /> },
    { id: 2, title: "Identidade", icon: <FaPalette /> },
    { id: 3, title: "Cardápio", icon: <FaUtensils /> },
    { id: 4, title: "Público", icon: <FaUsers /> },
    { id: 5, title: "Digital", icon: <FaGlobe /> },
    { id: 6, title: "Tráfego", icon: <FaChartLine /> },
    { id: 7, title: "Objetivos", icon: <FaBullseye /> },
    { id: 8, title: "Conteúdo", icon: <FaCamera /> },
    { id: 9, title: "Operacional", icon: <FaGear /> },
  ];

  const progress = (step / totalSteps) * 100;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center py-10 px-4">
      <FormProvider {...methods}>
        {/* Header Compacto */}
        <div className="w-full max-w-5xl flex items-center justify-between mb-8">
          <div className="flex flex-col">
             <p className="text-[10px] uppercase tracking-[0.3em] text-[#FFB400] font-black mb-1">Onboarding</p>
             <h1 className="text-xl md:text-2xl font-bold tracking-tight">Formulário de Kick-off</h1>
          </div>
          <div className="text-right">
            <img src="/logo.png" alt="Nivix" className="w-20 md:w-24 opacity-80 ml-auto" />
          </div>
        </div>

        {/* Guia de Onboarding */}
        <div className="w-full max-w-5xl mb-8 md:mb-12 bg-neutral-900/20 border border-white/5 p-6 md:p-8 rounded-[32px] backdrop-blur-sm">
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 items-center">
              <div className="md:col-span-2 text-center md:text-left">
                  <h2 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">Bem-vindo à Operação Elite</h2>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                      Este é o seu primeiro passo oficial com a Nivix. Nosso time construirá o seu 
                      <span className="text-white font-medium"> Plano de Escala.</span>
                  </p>
                  <div className="mt-4 flex justify-center md:justify-start gap-4">
                      <span className="flex items-center gap-2 text-[9px] md:text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFB400]"></div> 9 Etapas
                      </span>
                      <span className="flex items-center gap-2 text-[9px] md:text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFB400]"></div> aprox. 5 min
                      </span>
                  </div>
              </div>
              <div className="w-full flex flex-col gap-2 p-4 md:p-5 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-[9px] font-black text-[#FFB400] uppercase tracking-widest">O que fazer?</p>
                  <p className="text-[11px] text-neutral-300 leading-snug">
                      Preencha com precisão. Seus dados de endereço e horários guiarão a precisão dos nossos anúncios.
                  </p>
              </div>
          </div>
        </div>

        {/* Stepper Horizontal - Melhorado para Mobile */}
        <div className="w-full max-w-5xl mb-6 md:mb-10 overflow-x-auto no-scrollbar py-2">
          <div className="flex justify-between md:justify-between gap-4 md:min-w-0 px-2 min-w-max">
            {steps.map((s) => (
              <div 
                key={s.id} 
                className={`flex flex-col items-center gap-2 transition-all duration-500 ${step === s.id ? "opacity-100" : "opacity-30"}`}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center border transition-all duration-500 ${step === s.id ? "border-[#FFB400] bg-[#FFB400]/20 text-[#FFB400] scale-110 shadow-[0_0_20px_rgba(255,180,0,0.2)]" : step > s.id ? "border-[#FFB400]/40 bg-neutral-900 text-[#FFB400]/60" : "border-neutral-800 bg-neutral-900/50 text-neutral-500"}`}>
                  {s.icon}
                </div>
                <span className={`text-[8px] font-black uppercase tracking-widest ${step === s.id ? "block" : "hidden md:block"}`}>{s.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Barra de Progresso */}
        <div className="w-full max-w-5xl mb-8 md:mb-12 h-1 bg-neutral-900 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00]"
          />
        </div>

        {/* Container Principal */}
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full max-w-5xl bg-neutral-900/30 border border-neutral-800/60 backdrop-blur-3xl rounded-[32px] md:rounded-[40px] p-6 md:p-14 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-[#FFB400]/5 blur-[80px] md:blur-[120px] pointer-events-none"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="min-h-[400px] md:min-h-[500px]"
            >
              {step === 1 && <Step1_Restaurante />}
              {step === 2 && <Step2_Identidade />}
              {step === 3 && <Step3_Cardapio />}
              {step === 4 && <Step4_Publico />}
              {step === 5 && <Step5_Digital />}
              {step === 6 && <Step6_Trafego />}
              {step === 7 && <Step7_Objetivos />}
              {step === 8 && <Step8_Conteudo />}
              {step === 9 && <Step9_Operacional />}
            </motion.div>
          </AnimatePresence>

          {/* Navegação Sincronizada */}
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-between border-t border-neutral-800/60 pt-8 md:pt-10 gap-6 md:gap-0">
            <button 
              type="button"
              onClick={prevStep}
              disabled={step === 1}
              className={`w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all ${step === 1 ? "hidden" : "bg-neutral-800/50 hover:bg-neutral-800 text-white/60 hover:text-white"}`}
            >
              <FaChevronLeft /> Anterior
            </button>

            <div className="text-xs md:text-sm font-medium text-neutral-500 tracking-widest uppercase order-first md:order-none">
              Etapa {step} de {totalSteps}
            </div>

            <button 
              type="submit"
              className={`w-full md:w-auto flex items-center justify-center gap-2 px-12 py-4 rounded-2xl font-bold transition-all shadow-[0_10px_30px_rgba(255,180,0,0.15)] ${step < totalSteps ? "bg-[#FFB400] text-black hover:bg-[#FFEA00]" : "bg-gradient-to-r from-[#00ff2a] to-[#003f17] text-white hover:scale-[1.02]"}`}
            >
              {step < totalSteps ? "Próximo" : "Concluir Kickoff"} 
              {step < totalSteps ? <FaChevronRight /> : <FaCircleCheck />}
            </button>
          </div>
        </form>
      </FormProvider>
    </main>
  );
}

/* --- REUSABLE UI COMPONENTS --- */

const StepHeader = ({ title, description, icon }: any) => (
  <div className="mb-12 flex flex-col items-start">
    <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#FFB400]/10 flex items-center justify-center text-[#FFB400] border border-[#FFB400]/20">
            {icon}
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
    </div>
    <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">{description}</p>
  </div>
);

const FieldLayout = ({ children, cols = 2 }: any) => (
    <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-8`}>
        {children}
    </div>
);

const Input = ({ name, label, placeholder, type = "text", required = false, hint }: any) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex justify-between items-end px-1">
          <label className="text-[11px] font-black uppercase tracking-[0.15em] text-neutral-500">
              {label} {required && <span className="text-[#FFB400]">*</span>}
          </label>
          {hint && <span className="text-[10px] text-neutral-600 italic">{hint}</span>}
      </div>
      <input 
        {...register(name)}
        type={type} 
        placeholder={placeholder}
        className={`w-full bg-neutral-900/50 border rounded-2xl px-6 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:bg-neutral-800/50 transition-all text-sm ${error ? "border-red-500/50 focus:border-red-500" : "border-neutral-800/80 focus:border-[#FFB400]/50"}`}
      />
      {error && <span className="text-[10px] text-red-500 flex items-center gap-1 px-1"><FaTriangleExclamation /> {error.message as string}</span>}
    </div>
  );
};

const Select = ({ name, label, options, required = false }: any) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <div className="flex flex-col gap-2.5">
      <label className="text-[11px] font-black uppercase tracking-[0.15em] text-neutral-500 px-1">
        {label} {required && <span className="text-[#FFB400]">*</span>}
      </label>
      <select 
        {...register(name)}
        className={`w-full bg-neutral-900/50 border rounded-2xl px-6 py-4 text-white focus:outline-none transition-all text-sm appearance-none cursor-pointer ${error ? "border-red-500/50 focus:border-red-500" : "border-neutral-800/80 focus:border-[#FFB400]/50"}`}
      >
          <option value="">Selecione...</option>
          {options.map((opt: any) => (
              <option key={opt} value={opt}>{opt}</option>
          ))}
      </select>
      {error && <span className="text-[10px] text-red-500 flex items-center gap-1 px-1"><FaTriangleExclamation /> {error.message as string}</span>}
    </div>
  );
};

const TextArea = ({ name, label, placeholder, hint }: any) => {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name];

    return (
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between items-end px-1">
              <label className="text-[11px] font-black uppercase tracking-[0.15em] text-neutral-500">
                  {label}
              </label>
              {hint && <span className="text-[10px] text-neutral-600 italic">{hint}</span>}
          </div>
          <textarea 
            {...register(name)}
            placeholder={placeholder}
            className={`w-full bg-neutral-900/50 border rounded-2xl px-6 py-4 text-white placeholder:text-neutral-700 focus:outline-none h-32 text-sm transition-all ${error ? "border-red-500/50 focus:border-red-500" : "border-neutral-800/80 focus:border-[#FFB400]/50"}`}
          ></textarea>
          {error && <span className="text-[10px] text-red-500 flex items-center gap-1 px-1"><FaTriangleExclamation /> {error.message as string}</span>}
        </div>
    );
};

const CheckboxGroup = ({ name, label, options, hint }: any) => {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name];

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 px-1">
                <label className="text-[11px] font-black uppercase tracking-[0.15em] text-neutral-500">{label}</label>
                {hint && <span className="text-[10px] text-neutral-600 italic">{hint}</span>}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {options.map((opt: any) => (
                    <label key={opt} className="flex items-center gap-3 bg-neutral-900/30 p-4 rounded-2xl border border-neutral-800/60 cursor-pointer hover:border-[#FFB400]/30 hover:bg-neutral-800/30 transition-all group">
                        <input {...register(name)} type="checkbox" value={opt} className="w-4 h-4 accent-[#FFB400] rounded" />
                        <span className="text-xs text-neutral-400 group-hover:text-white transition-colors">{opt}</span>
                    </label>
                ))}
            </div>
            {error && <span className="text-[10px] text-red-500 flex items-center gap-1 px-1"><FaTriangleExclamation /> {error.message as string}</span>}
        </div>
    );
};

const RadioGroup = ({ name, label, options }: any) => {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name];

    return (
        <div className="flex flex-col gap-4">
            <label className="text-[11px] font-black uppercase tracking-[0.15em] text-neutral-500 px-1">{label}</label>
            <div className="flex flex-wrap gap-4">
                {options.map((opt: any) => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                        <input {...register(name)} type="radio" value={opt} className="w-4 h-4 accent-[#FFB400]" />
                        <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">{opt}</span>
                    </label>
                ))}
            </div>
            {error && <span className="text-[10px] text-red-500 flex items-center gap-1 px-1"><FaTriangleExclamation /> {error.message as string}</span>}
        </div>
    );
};

/* --- STEPS CONTENT --- */

const Step1_Restaurante = () => (
    <div>
        <StepHeader 
            icon={<FaStore />} 
            title="Sobre o Restaurante" 
            description="Informações operacionais básicas. Endereço e horários são vitais para a precisão dos anúncios." 
        />
        <FieldLayout>
            <Input name="nomeRestaurante" label="Nome do Restaurante" placeholder="Ex: Cantina da Nonna" required />
            <Input name="nomeResponsavel" label="Nome do Responsável" placeholder="Dono ou Gerente" required />
            <Input name="cargo" label="Cargo" placeholder="Ex: Proprietário" />
            <Input name="telefone" label="Telefone/WhatsApp" placeholder="(00) 00000-0000" required />
            <div className="md:col-span-2">
                <Input name="email" label="E-mail" placeholder="contato@restaurante.com" type="email" />
            </div>
            <div className="md:col-span-2">
                <Input name="endereco" label="Endereço completo" placeholder="Rua, número, bairro" required />
            </div>
            <Input name="cidade" label="Cidade" required />
            <Input name="estado" label="Estado / UF" required />
            <Input name="qtdUnidades" label="Qtd. de Unidades" type="number" placeholder="1" />
            <Select 
                name="tipoCozinha"
                label="Tipo de Cozinha" 
                options={["Brasileira", "Italiana", "Japonesa", "Mexicana", "Árabe", "Chinesa", "Francesa", "Hamburgueria", "Pizzaria", "Churrascaria", "Cafeteria", "Padaria", "Doceria/Confeitaria", "Açaí/Saudável", "Marmitaria", "Bar/Petiscaria", "Outro"]} 
            />
            <Input name="tempoMercado" label="Tempo de mercado" hint="Ex: 3 anos" />
            <Input name="capacidade" label="Capacidade do salão" hint="Qtd. de lugares" />
            <Input name="diasFuncionamento" label="Dias de funcionamento" hint="Ex: Seg a Sáb" />
            <Input name="horarioFuncionamento" label="Horário de funcionamento" hint="Ex: 18h às 23h" required />
        </FieldLayout>
    </div>
);

const Step2_Identidade = () => (
    <div>
        <StepHeader 
            icon={<FaPalette />} 
            title="Identidade da Marca" 
            description="Informações essenciais para a criação de criativos e segmentação competitiva." 
        />
        <div className="flex flex-col gap-10">
            <TextArea name="descricaoMarca" label="Descreva seu restaurante em poucas palavras" />
            <TextArea name="diferenciais" label="Quais são os principais diferenciais?" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Select 
                    name="posicionamento"
                    label="Posicionamento de mercado" 
                    required
                    options={["Premium/Gourmet", "Intermediário", "Popular/Preço baixo", "Misto"]} 
                />
                <RadioGroup 
                    name="tom"
                    label="Tom de comunicação" 
                    required
                    options={["Formal", "Descontraído", "Divertido", "Informativo", "Emocional"]} 
                />
            </div>
            <TextArea 
                name="maiorGargalo" 
                label="Qual o maior 'gargalo' ou problema que impede o seu crescimento hoje?" 
                hint="Seja brutalmente sincero: falta de pedidos, equipe, margem baixa, iFood..." 
                required 
            />
            <TextArea name="concorrentes" label="Cite seus principais concorrentes" hint="Quem disputa o mesmo cliente com você?" required />
        </div>
    </div>
);

const Step3_Cardapio = () => (
    <div>
        <StepHeader 
            icon={<FaUtensils />} 
            title="Cardápio & Produto" 
            description="Defina os alvos das nossas campanhas de conversão." 
        />
        <FieldLayout>
            <div className="md:col-span-2">
                <TextArea name="pratosCarro" label="Principais pratos (Carros-chefe)" required />
            </div>
            <div className="md:col-span-2">
                <RadioGroup 
                    name="statusCardapio"
                    label="Como você avalia a estrutura atual do seu cardápio?" 
                    required
                    options={["Está estável e validado", "Precisa de pequenos ajustes", "Precisa de uma reestruturação completa"]} 
                />
            </div>
            <div className="md:col-span-2">
                <TextArea name="dificuldadesCardapio" label="Você tem tido problemas ou dificuldades com seu cardápio?" hint="Ex: Itens faltando, fotos ruins, preços errados..." />
            </div>
            <Input name="ticketMedio" label="Ticket médio por pessoa" placeholder="Ex: R$ 80,00" />
            <Select name="temDelivery" label="Trabalha com delivery?" required options={["Sim", "Não", "Pretendo iniciar"]} />
            <div className="md:col-span-2">
                <CheckboxGroup 
                    name="plataformasDelivery"
                    label="Plataformas de delivery utilizadas" 
                    options={["iFood", "Rappi", "99Food", "Site Próprio", "WhatsApp"]} 
                />
            </div>
            <Input name="percentualDelivery" label="Qual % do faturamento vem do delivery?" />
            <Input name="raioEntrega" label="Raio de entrega" placeholder="Ex: 5km" required />
            <div className="md:col-span-2">
                <RadioGroup 
                    name="cupons"
                    label="Utiliza cupons de desconto agressivos?" 
                    required
                    options={["Sim, frequentemente", "Raramente / Nunca"]} 
                />
            </div>
            <div className="md:col-span-2">
                <TextArea name="ofertasCombos" label="Ofertas & Combos Ativos" />
            </div>
            <Select name="temCardapioDigital" label="Possui cardápio digital?" options={["Sim", "Não"]} />
            <Input name="urlCardapio" label="Link do cardápio digital" placeholder="https://..." />
        </FieldLayout>
    </div>
);

const Step4_Publico = () => (
    <div>
        <StepHeader 
            icon={<FaUsers />} 
            title="Público-Alvo" 
            description="Dados para a configuração de públicos no Gerenciador de Anúncios." 
        />
        <FieldLayout>
            <CheckboxGroup 
                name="faixaEtaria"
                label="Faixa etária predominante" 
                required
                options={["18-25 anos", "25-35 anos", "35-45 anos", "45-60 anos", "60+ anos"]} 
            />
            <Select 
                name="genero"
                label="Gênero predominante" 
                required
                options={["Maioria masculino", "Maioria feminino", "Equilibrado", "Não sei"]} 
            />
            <Select 
                name="classeEconomica"
                label="Classe econômica predominante" 
                options={["A", "B", "C", "D/E", "Misto"]} 
            />
            <Input name="raioAtendimento" label="Raio de atendimento do delivery" />
        </FieldLayout>
    </div>
);

const Step5_Digital = () => (
    <div>
        <StepHeader 
            icon={<FaGlobe />} 
            title="Presença Digital Atual" 
            description="Mapeamento de ativos para análise de autoridade e SEO local." 
        />
        <div className="flex flex-col gap-10">
            <CheckboxGroup 
                name="redesSociais"
                label="Em quais redes sociais está presente?" 
                options={["Instagram", "Facebook", "TikTok", "YouTube"]} 
            />
            <FieldLayout cols={3}>
                <Input name="seguidoresIG" label="Seguidores IG" required />
                <Input name="seguidoresFB" label="Seguidores FB" />
                <Input name="seguidoresTT" label="Seguidores TT" />
            </FieldLayout>
            <FieldLayout>
                <Select name="temSite" label="Possui site?" options={["Sim", "Não"]} />
                <Input name="urlSite" label="URL do site" />
                <Select name="googleMeuNegocio" label="Google Meu Negócio configurado?" required options={["Sim", "Não", "Não sei"]} />
                <Input name="notaGoogle" label="Nota atual no Google" />
                <div className="md:col-span-2">
                    <Select 
                        name="crm"
                        label="Possui CRM ou base de dados de clientes?" 
                        options={["Sim (Lio, Hubster, etc)", "Apenas planilhas", "Não possuo"]} 
                    />
                </div>
            </FieldLayout>
        </div>
    </div>
);

const Step6_Trafego = () => (
    <div>
        <StepHeader 
            icon={<FaChartLine />} 
            title="Histórico de Tráfego Pago" 
            description="Entendimento de experiências anteriores para acelerar o aprendizado do pixel." 
        />
        <div className="flex flex-col gap-10">
            <RadioGroup 
                name="trafego"
                label="Já investiu em tráfego pago antes?" 
                required
                options={["Sim, com agência", "Sim, por conta própria", "Nunca investi"]} 
            />
            <FieldLayout>
                <Input name="investimentoAnterior" label="Investimento mensal anterior" />
                <Input name="plataformaAnterior" label="Plataforma" />
            </FieldLayout>
            <TextArea name="resultadoAnterior" label="Como foram os resultados?" />
            <Input name="orcamentoMensal" label="Orçamento mensal disponível para Nivix" required placeholder="R$ 0,00" />
        </div>
    </div>
);

const Step7_Objetivos = () => (
    <div>
        <StepHeader 
            icon={<FaBullseye />} 
            title="Objetivos & Metas" 
            description="Onde queremos chegar nos próximos 3 a 6 meses." 
        />
        <div className="flex flex-col gap-10">
            <CheckboxGroup 
                name="objetivos"
                label="Quais são seus principais objetivos?" 
                required
                hint="Selecione ao menos um"
                options={["Aumentar pedidos delivery", "Encher o salão", "Fortalecer marca local", "Recuperar clientes inativos"]} 
            />
            <TextArea name="metaPrincipal" label="Qual é a sua meta principal hoje?" required />
            <FieldLayout>
                <Input name="expectativaPrazo" label="Em quanto tempo espera ver resultados?" />
                <Input name="kpiPrincipal" label="Qual indicador é mais importante?" />
            </FieldLayout>
        </div>
    </div>
);

const Step8_Conteudo = () => (
    <div>
        <StepHeader 
            icon={<FaCamera />} 
            title="Conteúdo & Criativo" 
            description="Definição do padrão visual e análise da presença em redes sociais." 
        />
        <div className="flex flex-col gap-10">
            <CheckboxGroup 
                name="estiloConteudo"
                label="Estilo visual desejado" 
                required
                options={["Premium", "Descontraído", "Minimalista", "Rústico", "Gourmet", "Popular"]} 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Select 
                    name="gerenciamentoSocialMedia"
                    label="Quem cuida do seu Instagram hoje?" 
                    required
                    options={["Eu mesmo (Dono)", "Um funcionário interno", "Agência/Freelancer terceirizado", "Ninguém cuida no momento"]} 
                />
                <Select 
                    name="frequenciaPostagem"
                    label="Frequência de postagem (Feed/Reels)" 
                    required
                    options={["Diária", "3x a 5x por semana", "1x a 2x por semana", "Raramente / Não posto"]} 
                />
            </div>

            <TextArea name="referenciasVisuais" label="Referências visuais (Links ou @s)" />
            
            <RadioGroup 
                name="temMaterialAudiovisual" 
                label="Possui material de fotos e vídeos atualizado?" 
                required
                options={["Sim, material profissional", "Sim, mas material amador", "Não, preciso produzir"]} 
            />
            
            <CheckboxGroup 
                name="tipoMaterial" 
                label="O que você tem disponível?" 
                options={["Fotos dos pratos", "Vídeos curtos (Reels)", "Fotos da fachada/salão"]} 
            />
            
            <TextArea name="restricoesConteudo" label="Alguma restrição de conteúdo?" />
        </div>
    </div>
);

const Step9_Operacional = () => (
    <div>
        <StepHeader 
            icon={<FaGear />} 
            title="Alinhamento Operacional" 
            description="Pessoas de contato para o sucesso do projeto." 
        />
        <FieldLayout>
            <Input name="contatoOperacional" label="Nome do contato operacional" required />
            <Input name="cargoOperacional" label="Cargo" />
            <Input name="telefoneOperacional" label="WhatsApp operacional direto" required />
            <Input name="disponibilidade" label="Melhor horário para contato" />
            <div className="md:col-span-2">
                <TextArea name="observacoes" label="Observações finais" />
            </div>
        </FieldLayout>
        <div className="mt-10 p-6 bg-[#FFB400]/5 border border-[#FFB400]/20 rounded-[32px] flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-[#FFB400] flex items-center justify-center text-black text-2xl animate-pulse">
                <FaCircleCheck />
            </div>
            <div>
                <h4 className="font-bold text-white text-lg">Tudo pronto!</h4>
                <p className="text-sm text-neutral-400 max-w-sm">Ao finalizar, os dados serão enviados ao seu gestor de conta para a reunião de estratégia.</p>
            </div>
        </div>
    </div>
);
