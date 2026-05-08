"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFire } from "react-icons/fa";

const rawRestaurants = [
  "Pizzaria Monte Carlo", "Burger do Cheff", "Pizzaria Don Giovanni", "Hamburgueria Artesanal 77",
  "Vila da Pizza", "The Burger Experience", "Pizzaria Bella Itália", "Classic Burger House",
  "Pizzaria Forno à Lenha", "Smash Burger Co.", "Pizzaria Romana", "Burger Station",
  "Pizzaria Santa Felicidade", "Old School Hamburgueria", "Pizzaria San Lorenzo", "Urban Burger Lab",
  "Pizzaria Di Milano", "Holy Burger", "Pizzaria La Bella", "Texas Burger House",
  "Pizzaria do Porto", "Master Burger", "Pizzaria Veneza", "Prime Burger Artesanal",
  "Pizzaria Florença", "The Best Burger", "Pizzaria Di Roma", "Hamburgueria do Vale",
  "Pizzaria Da Vinci", "Bull Burger House", "Pizzaria Michelangelo", "Iron Burger",
  "Pizzaria Portofino", "Garage Burger", "Pizzaria Toscana", "Rock n' Burger",
  "Pizzaria Capri", "Soul Burger", "Pizzaria Amalfi", "Big Boss Burger",
  "Pizzaria Sorrento", "Street Burger", "Pizzaria Positano", "Fire Burger",
  "Pizzaria Ravello", "Black Burger", "Pizzaria Ischia", "Gold Burger House",
  "Pizzaria Procida", "Wood Fire Burger", "Pizzaria Salerno", "Royal Burger",
  "Pizzaria Foggia", "Wild Burger", "Pizzaria Bari", "Top Burger",
  "Pizzaria Taranto", "Legend Burger", "Pizzaria Lecce", "Avenue Burger",
  "Pizzaria Brindisi", "Burger Garden", "Pizzaria Otranto", "Sky Burger",
  "Pizzaria Gallipoli", "Moon Burger", "Pizzaria Vieste", "Galaxy Burger",
  "Pizzaria Peschici", "Meteor Burger", "Pizzaria Rodi", "Star Burger",
  "Pizzaria Mattinata", "Comet Burger", "Pizzaria Manfredonia", "Planet Burger",
  "Pizzaria Barletta", "Orb Burger", "Pizzaria Trani", "Nova Burger",
  "Pizzaria Molfetta", "Super Burger", "Pizzaria Bitonto", "Mega Burger",
  "Pizzaria Monopoli", "Ultra Burger", "Pizzaria Fasano", "Extreme Burger",
  "Pizzaria Ostuni", "Final Burger", "Pizzaria Martina Franca", "Zero Burger"
];

const leadActions = [
  "acaba de solicitar uma análise estratégica da região",
  "enviou os dados para garantir a consultoria gratuita",
  "solicitou o plano para dobrar o faturamento",
  "acaba de travar uma vaga para análise de cardápio",
  "iniciou o contato para escalar o seu delivery",
  "acaba de pedir um diagnóstico completo de tráfego",
  "enviou o formulário para parar de queimar dinheiro",
  "solicitou o método para dominar o iFood da cidade",
  "acaba de garantir prioridade no atendimento especializado"
];

export default function SocialProof() {
  const [currentNotification, setCurrentNotification] = useState<{
    id: number;
    name: string;
    action: string;
    time: string;
  } | null>(null);

  const formatName = (name: string) => {
    const rand = Math.random();
    if (rand < 0.8) return name;
    const subRand = Math.random();
    if (subRand < 0.4) return name.toLowerCase();
    if (subRand < 0.8) return `@${name.replace(/\s+/g, '').toLowerCase()}`;
    return name.replace(/\s+/g, '.').toLowerCase();
  };

  const showNotification = () => {
    const rawName = rawRestaurants[Math.floor(Math.random() * rawRestaurants.length)];
    const randomAction = leadActions[Math.floor(Math.random() * leadActions.length)];
    const eventId = Date.now();
    
    setCurrentNotification({
      id: eventId,
      name: formatName(rawName),
      action: randomAction,
      time: "agora mesmo",
    });

    // Disparar o evento com um ID único para evitar processamento duplo
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("nivix-lead-event", { detail: { id: eventId } }));
    }

    setTimeout(() => {
      setCurrentNotification(null);
    }, 6000);
  };

  useEffect(() => {
    const firstTimer = setTimeout(showNotification, 4000);

    const triggerNext = () => {
      const delay = Math.floor(Math.random() * (45000 - 15000) + 15000);
      return setTimeout(() => {
        showNotification();
        triggerNext();
      }, delay);
    };

    const loopTimer = setTimeout(triggerNext, 12000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(loopTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 z-[99999] w-full lg:w-fit lg:left-6 flex justify-center lg:block pointer-events-none px-4">
      <AnimatePresence>
        {currentNotification && (
          <motion.div
            key={currentNotification.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="flex items-center gap-4 bg-[#1a1a1a]/95 backdrop-blur-xl border border-[#FFB400]/30 p-4 rounded-2xl shadow-[0_20px_60px_rgba(255,180,0,0.2)] max-w-[340px] pointer-events-auto relative"
          >
            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#00ff2a] rounded-full">
              <span className="absolute inset-0 rounded-full bg-[#00ff2a] animate-ping opacity-75"></span>
            </span>

            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FFB400] to-[#cb8e00] rounded-full flex items-center justify-center text-black text-2xl shadow-[0_0_15px_rgba(255,180,0,0.4)]">
              <FaFire className="animate-pulse" />
            </div>

            <div className="flex flex-col pr-4">
              <p className="text-white text-[14px] font-extrabold leading-tight tracking-tight">
                {currentNotification.name}
              </p>
              <p className="text-neutral-200 text-[12px] mt-0.5 font-medium leading-snug">
                {currentNotification.action}
              </p>
              <div className="flex items-center mt-1">
                <p className="text-[#00ff2a] text-[10px] font-black uppercase tracking-widest">
                  Oportunidade Ativa
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
