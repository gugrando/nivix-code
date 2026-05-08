'use client';

import React, { useRef } from "react";
import ContactForm from "./Form";
import { motion, AnimatePresence } from "framer-motion";
import { FaWpforms, FaWhatsapp, FaGem } from "react-icons/fa6";

export default function FormContainer() {
  const [spots, setSpots] = React.useState(14);
  const lastProcessedId = useRef<number | null>(null);

  React.useEffect(() => {
    const savedSpots = localStorage.getItem("nivix_scarcity_spots");
    if (savedSpots) {
      setSpots(parseInt(savedSpots));
    }
  }, []);

  React.useEffect(() => {
    const handleSync = (e: any) => {
      const eventId = e.detail?.id;
      if (!eventId || eventId === lastProcessedId.current) return;
      lastProcessedId.current = eventId;

      setTimeout(() => {
        setSpots((prev) => {
          if (prev <= 2) return prev; 
          const nextValue = prev - 1;
          localStorage.setItem("nivix_scarcity_spots", nextValue.toString());
          localStorage.setItem("nivix_scarcity_time", Date.now().toString());
          return nextValue;
        });
      }, 1800);
    };

    window.addEventListener("nivix-lead-event", handleSync as EventListener);
    return () => window.removeEventListener("nivix-lead-event", handleSync as EventListener);
  }, []);

  const steps = [
    {
      icon: <FaWpforms />,
      text: "Preencha o Formulário",
      desc: "Você leva menos de 1 minuto para enviar seus dados.",
      color: "#FFB400"
    },
    {
      icon: <FaWhatsapp />,
      text: "Respondemos na Hora",
      desc: "Um de nossos consultores te responde na hora.",
      color: "#00ff2a"
    },
    {
      icon: <FaGem />,
      text: "Consultoria Marcada",
      desc: "Marcamos sua consultoria gratuita em menos de 5 minutos.",
      color: "#FFB400"
    },
  ];

  return (
    <div id="form" className="z-50 relative flex flex-col p-4 items-center justify-center w-full h-fit mt-8 overflow-x-clip">  
        <div className="absolute w-60 lg:w-96 h-60 lg:h-96 rounded-full bg-[#FFB400]/30 blur-[120px] top-[-2rem] lg:left-[14rem] animate-pulse"></div>
        
        {/* CONTAINER PRINCIPAL */}
        <div className="w-full border-2 border-neutral-700/50 bg-neutral-900/80 backdrop-blur-3xl gap-6 p-6 lg:p-10 rounded-[40px] lg:w-[70%] h-fit flex flex-col lg:flex-row lg:justify-between lg:items-stretch py-12 shadow-2xl relative">
            
            {/* Badge de Escassez */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center bg-neutral-900 border border-[#FFB400]/50 text-white px-5 py-2.5 rounded-2xl gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-50 whitespace-nowrap"
            >
              <div className="flex items-center gap-2 pr-3 border-r border-neutral-700">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">Live</span>
              </div>
              <p className="text-xs md:text-sm font-bold text-neutral-200">
                <AnimatePresence mode="wait">
                    <motion.span 
                        key={spots}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-[#FFB400] text-lg tabular-nums inline-block min-w-[1.2em] text-center"
                    >
                        {spots}
                    </motion.span>
                </AnimatePresence> consultorias grátis disponíveis para esse mês
              </p>
            </motion.div>

            {/* Coluna Esquerda: Título e Etapas */}
            <div className="flex flex-col lg:w-[48%] justify-center">
                <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} className="text-center lg:text-left mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                    Método <span className="text-[#FFB400]">Validado</span>
                  </h2>
                  <p className="text-md lg:text-lg text-neutral-400 font-medium leading-tight mt-2">
                    Transformamos seu restaurante em uma máquina de pedidos.
                  </p>
                </motion.div>

                <div className="flex flex-col relative">
                  <motion.div initial={{ height: 0 }} whileInView={{ height: "70%" }} transition={{ duration: 1, delay: 0.5 }} className="absolute left-7 lg:left-8 top-10 w-[1px] lg:w-[2px] bg-gradient-to-b from-[#FFB400] via-[#00ff2a] to-[#FFB400] origin-top opacity-50 lg:opacity-100" />
                  <div className="flex flex-col gap-8 lg:gap-10 relative">
                    {steps.map((step, index) => (
                      <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.3, duration: 0.5 }} className="flex items-center gap-5 lg:gap-6 group">
                        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.4, ease: "easeInOut" }} className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-2xl bg-neutral-800 border-2 border-neutral-700 relative z-10 group-hover:scale-105 transition-transform duration-300" style={{ boxShadow: `0 0 15px ${step.color}15` }}>
                          <span className="text-2xl lg:text-3xl" style={{ color: step.color }}>{step.icon}</span>
                          <span className="absolute -top-2 -right-2 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-[10px] font-bold text-neutral-400">0{index + 1}</span>
                        </motion.div>
                        <div className="flex flex-col">
                          <p className="text-white text-md lg:text-lg font-bold group-hover:text-[#FFB400] transition-colors leading-tight">{step.text}</p>
                          <p className="text-neutral-400 text-xs lg:text-sm mt-1 leading-tight">{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
            </div>
            
            {/* Coluna Direita: O FORMULÁRIO */}
            <div className="w-full lg:w-[48%] mt-12 lg:mt-0 relative flex items-center">
                <div className="w-full relative">
                  <ContactForm />
                </div>
            </div>  
        </div>

        {/* DIVISOR DE SEÇÃO - HARD DIVIDER (CLEAN & REFINED) */}
        <div className="w-full flex flex-col items-center mt-12 relative">
            <div className="w-[1px] h-32 bg-gradient-to-b from-[#FFB400] to-transparent opacity-50"></div>
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-[#FFB400]/30 flex items-center justify-center my-4 shadow-[0_0_20px_rgba(255,180,0,0.2)] z-10">
                <FaGem className="text-[#FFB400] text-sm" />
            </div>
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700/20 to-transparent top-16 -z-0"></div>
        </div>

        {/* SEÇÃO DE REMARKETING */}
        <div className="w-full lg:w-[70%] mt-12 flex flex-col items-center relative">
            <div className="absolute w-full h-full bg-[#FFB400]/5 blur-[120px] -z-10 rounded-full top-0 animate-pulse"></div>
            
            <div className="text-center mb-16 px-4 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-6 inline-flex items-center bg-neutral-900/50 border rounded-full px-4 py-1.5 border-[#FFB400]/30 text-[#FFB400] text-sm gap-2 backdrop-blur-md"
                >
                    <img className="w-4" src="/alerta.png" alt="" />
                    <span className="font-medium tracking-wide">Atenção</span>
                </motion.div>

                <motion.h3 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  className="text-4xl md:text-6xl [line-height:1.1] font-semibold text-center text-white tracking-tight"
                >
                  Não saia <span> </span>
                  <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,180,0,0.7)]">
                      agora!
                  </span>
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  transition={{ delay: 0.2 }}
                  className="text-center md:text-2xl mt-2 max-w-4xl px-6 text-white/90 leading-relaxed"
                >
                  Cada minuto que você hesita é um pedido que cai no caixa do seu concorrente. 
                  <span className="text-white font-bold ml-1">Recupere o controle da sua operação hoje.</span>
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {[
                  {
                    icon: <FaWpforms />,
                    title: "Pare de perder tempo",
                    text: "Em 30 segundos você preenche os dados e entra em contato para marcar a consultoria que vai mudar o seu negócio.",
                    color: "#FFB400"
                  },
                  {
                    icon: <FaWhatsapp />,
                    title: "Resposta imediata",
                    text: "Nosso time te atende na hora para marcar a sua consultoria e tirar todas as suas dúvidas.",
                    color: "#00ff2a"
                  },
                  {
                    icon: <FaGem />,
                    title: "Risco Zero",
                    text: "Você ganha uma consultoria gratuita do seu negócio inteiro, sem compromisso. Você só tem a ganhar!",
                    color: "#FFB400"
                  }
                ].map((item, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex flex-col items-center justify-center text-center p-8 bg-neutral-900/30 border border-neutral-800/50 rounded-[40px] backdrop-blur-sm hover:border-[#FFB400]/20 transition-all duration-300 group min-h-[320px]"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-neutral-800/50 flex items-center justify-center text-2xl mb-6 border border-neutral-700/50 transition-colors group-hover:border-[#FFB400]/30" style={{ color: item.color }}>
                            {item.icon}
                        </div>
                        <h4 className="text-white text-xl font-bold mb-4 tracking-tight">{item.title}</h4>
                        <p className="text-neutral-400 text-sm md:text-base font-medium leading-relaxed">{item.text}</p>
                    </motion.div>
                ))}
            </div>

            <motion.a 
                href="#form" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-16 w-full max-w-md text-center text-white bg-gradient-to-r from-[#00ff2a] to-[#003f17] font-bold py-5 rounded-2xl shadow-[0_15px_40px_rgba(0,255,42,0.1)] text-lg tracking-tight"
            >
                Quero meu diagnóstico gratuito
            </motion.a>

            {/* SOFT-BREAK (APENAS CONTINUIDADE) */}
            <div className="mt-20 w-full flex flex-col items-center">
                <div className="w-[1px] h-24 bg-gradient-to-b from-neutral-800 to-[#FFB400] opacity-50"></div>
                <div className="w-2 h-2 rounded-full bg-[#FFB400] shadow-[0_0_15px_#FFB400] animate-pulse my-4"></div>
            </div>
        </div>
    </div>
  );
}
