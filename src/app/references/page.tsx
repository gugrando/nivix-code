"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaVideo, 
  FaLightbulb, 
  FaCirclePlay, 
  FaArrowLeft, 
  FaMicrophone, 
  FaCamera, 
  FaSliders, 
  FaXmark,
  FaInstagram,
  FaChevronRight,
  FaBookOpen,
  FaTriangleExclamation,
  FaCircleCheck,
  FaArrowUpRightFromSquare
} from "react-icons/fa6";

// --- DATA ---
const categories = [
  { id: "all", name: "Todos", icon: "✨" },
  { id: "pizzaria", name: "Pizzaria", icon: "🍕" },
  { id: "hamburgueria", name: "Hamburgueria", icon: "🍔" },
  { id: "japonesa", name: "Sushi/Japonesa", icon: "🍣" },
  { id: "churrascaria", name: "Churrascaria", icon: "🥩" },
  { id: "cafeteria", name: "Café/Doceria", icon: "☕" },
  { id: "marmitaria", name: "Marmitaria", icon: "🍱" },
];

const references = [
  {
    id: 1,
    category: "pizzaria",
    title: "Massa no Ar (Slow motion)",
    description: "Captura do movimento da massa sendo lançada.",
    videoUrl: "https://www.instagram.com/reel/DQsPmWtkjEX/",
    how_to_record: [
      "Use 60fps ou 120fps para câmera lenta",
      "Ilumine o fundo para destacar a farinha no ar",
      "Foque no topo da parábola do movimento",
      "Capture o som do impacto ao cair"
    ],
    why_it_works: "Demonstra habilidade técnica e produto artesanal, gerando autoridade.",
  },
  {
    id: 2,
    category: "hamburgueria",
    title: "Sizzle da Chapa",
    description: "O burger encostando na chapa fervendo.",
    videoUrl: "https://www.instagram.com/reel/DQ2mJfZEZvy/",
    how_to_record: [
      "Microfone muito próximo para captar o chiado",
      "Close no suco da carne borbulhando",
      "Mostre a espátula pressionando levemente",
      "Use luz quente para realçar a cor da carne"
    ],
    why_it_works: "Som + Visual ativam neurônios espelho ligados ao paladar (fome imediata).",
  },
  {
    id: 3,
    category: "japonesa",
    title: "Corte de Sashimi",
    description: "A precisão da faca no salão fresco.",
    videoUrl: "https://www.instagram.com/reel/DQcsiUJEvVi/",
    how_to_record: [
      "Faca extremamente amolada (reflexo da luz)",
      "Movimento contínuo e sem hesitação",
      "Destaque o brilho da gordura do peixe",
      "Fundo escuro para contrastar com o laranja"
    ],
    why_it_works: "Higiene e técnica são os pilares de venda do sushi premium.",
  },
  {
    id: 4,
    category: "churrascaria",
    title: "Fatiamento de Picanha",
    description: "Corte da peça principal saindo do fogo.",
    videoUrl: "https://www.instagram.com/reel/DQ2mJfZEZvy/",
    how_to_record: [
      "Mostre o sal grosso caindo na tábua",
      "Foco na crosta de gordura dourada",
      "Corte fatias médias para mostrar o ponto",
      "Capture o vapor saindo da carne"
    ],
    why_it_works: "A picanha é o 'showstopper' de qualquer churrascaria.",
  },
  {
    id: 5,
    category: "cafeteria",
    title: "Calda Escorrendo",
    description: "Foco no movimento lento do chocolate/doce.",
    videoUrl: "https://www.instagram.com/reel/DQcsiUJEvVi/",
    how_to_record: [
      "Luz lateral para dar brilho à calda",
      "Fundo desfocado (bokeh) para isolar o doce",
      "Movimento muito lento de despejo",
      "Close no impacto da calda no prato"
    ],
    why_it_works: "Visual extremamente 'satisfatório' que gera desejo por doces.",
  },
  {
    id: 6,
    category: "pizzaria",
    title: "Fatia Esticando (Cheese Pull)",
    description: "O queijo derretido esticando ao levantar a fatia.",
    videoUrl: "https://www.instagram.com/reel/DQsPmWtkjEX/",
    how_to_record: [
      "Pizza deve estar pelando de quente",
      "Luz frontal para brilhar nas bolhas de queijo",
      "Levante a fatia lentamente e pare no topo",
      "Foque nos fios de queijo que se formam"
    ],
    why_it_works: "O maior gatilho visual para venda de pizzas e massas.",
  },
];

const guideData = [
    {
        icon: <FaSliders />,
        title: "Configuração",
        items: [
            "Grave sempre em formato vertical 9:16",
            "Use boa iluminação — luz natural é ideal",
            "Mantenha a câmera estável — use tripé se necessário",
            "Limpe a lente da câmera antes de gravar",
            "Configure resolução em Full HD ou 4K"
        ],
        referenceLink: "https://www.instagram.com/reel/DQsPmWtkjEX/",
        referenceDescription: "Ângulo, iluminação e resultado final"
    },
    {
        icon: <FaCamera />,
        title: "Captação",
        items: [
            "Faça closes no produto (macro)",
            "Movimentos lentos e suaves",
            "Takes curtos de 5 a 12 segundos",
            "Varie os ângulos: lateral e superior",
            "Capture detalhes de textura e vapor"
        ],
        referenceLink: "https://www.instagram.com/reel/DQ2mJfZEZvy/",
        referenceDescription: "Técnicas de captação e enquadramento"
    },
    {
        icon: <FaMicrophone />,
        title: "Áudio e Ambiente",
        items: [
            "Grave em ambiente silencioso",
            "Sons naturais (crocância) agregam valor",
            "Fundo neutro destaca o produto",
            "Evite pessoas alheias no background",
            "Preste atenção à limpeza do local"
        ],
        referenceLink: "https://www.instagram.com/reel/DQcsiUJEvVi/",
        referenceDescription: "Som ambiente e limpeza visual"
    }
];

const avoidsData = [
    "Vídeo escuro ou mal iluminado",
    "Câmera tremida ou instável",
    "Takes muito longos (acima de 15s)",
    "Sem close no produto",
    "Fundo poluído ou desorganizado",
    "Áudio com muito ruído",
    "Lente da câmera suja"
];

export default function ReferencesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRef, setSelectedRef] = useState<any>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const filteredRefs = selectedCategory === "all" 
    ? references 
    : references.filter(r => r.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-10 px-4 md:px-10 lg:px-20">
      {/* Header Sincronizado */}
      <header className="max-w-6xl mx-auto flex items-center justify-between mb-12 border-b border-white/5 pb-8">
        <div className="flex flex-col">
           <p className="text-[10px] uppercase tracking-[0.3em] text-[#FFB400] font-black mb-1">Biblioteca</p>
           <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Referências de Criativos</h1>
        </div>
        <img src="/logo.png" alt="Nivix" className="w-20 md:w-24 opacity-80" />
      </header>

      {/* Banner Manual Nivix - Design Clean */}
      <section className="max-w-6xl mx-auto mb-12">
        <div className="bg-neutral-900/40 border border-neutral-800/60 p-6 md:p-8 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl group transition-all duration-300">
            <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[#FFB400] text-xl">
                    <FaBookOpen />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold text-white">Manual de Captação Nivix</h2>
                    <p className="text-neutral-400 text-sm">O padrão de qualidade exigido para seus anúncios.</p>
                </div>
            </div>
            <button 
                onClick={() => setIsGuideOpen(true)}
                className="w-full md:w-auto px-10 py-4 bg-[#FFB400] text-black rounded-2xl font-bold text-sm transition-all hover:bg-[#FFEA00] active:scale-95"
            >
                Abrir Guia
            </button>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="max-w-6xl mx-auto mb-10 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl border transition-all duration-300 text-xs font-medium ${selectedCategory === cat.id ? "bg-[#FFB400] text-black border-[#FFB400]" : "bg-white/5 border-white/5 text-neutral-500 hover:border-white/10 hover:text-white"}`}
            >
              <span className="text-base">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Referências */}
      <section className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredRefs.map((ref) => (
            <motion.div
              layout
              key={ref.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group bg-neutral-900/30 border border-neutral-800/40 rounded-[24px] overflow-hidden backdrop-blur-3xl hover:border-[#FFB400]/30 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedRef(ref)}
            >
              <div className="aspect-[3/4] bg-neutral-800 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                 <FaCirclePlay className="text-4xl text-white/20 group-hover:text-[#FFB400] group-hover:scale-110 transition-all duration-500 z-20" />
                 
                 <div className="absolute bottom-4 left-4 right-4 z-20">
                    <p className="text-[10px] font-medium text-[#FFB400] mb-1 opacity-90">{ref.category.charAt(0).toUpperCase() + ref.category.slice(1)}</p>
                    <h3 className="text-sm md:text-base font-bold text-white leading-tight group-hover:text-[#FFB400] transition-colors">{ref.title}</h3>
                 </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* Pop-up: Guia de Captação Nivix */}
      <AnimatePresence>
        {isGuideOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-[150] p-4">
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsGuideOpen(false)}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-6xl max-h-[90vh] bg-[#0d0d0d] border border-neutral-800 rounded-[48px] shadow-3xl overflow-y-auto no-scrollbar p-8 md:p-16 lg:p-20"
            >
                <button onClick={() => setIsGuideOpen(false)} className="absolute top-10 right-10 w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center hover:bg-neutral-700 transition-colors z-50"><FaXmark className="text-xl" /></button>
                
                <div className="text-center mb-16">
                    <div className="mb-6 inline-flex items-center bg-neutral-900/50 border rounded-full px-5 py-2 border-[#FFB400]/30 text-[#FFB400] text-sm gap-2 backdrop-blur-md">
                        <FaBookOpen className="text-xs" />
                        <span className="font-semibold tracking-wide uppercase text-[10px]">Padrão Elite</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Guia de Captação</h2>
                    <p className="text-neutral-400 mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Domine os pilares técnicos essenciais para transformar o material bruto do seu restaurante em <span className="text-white font-medium">Anúncios de Alta Performance.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
                    {guideData.map((pillar, i) => (
                        <div key={i} className="flex flex-col bg-neutral-900/40 border border-neutral-800/60 rounded-[40px] p-10 hover:border-[#FFB400]/20 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[#FFB400] text-2xl mb-8">
                                {pillar.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">{pillar.title}</h3>
                            <ul className="space-y-5 flex-1">
                                {pillar.items.map((item, j) => (
                                    <li key={j} className="text-sm md:text-base text-neutral-400 flex items-start gap-3 leading-relaxed">
                                        <FaCircleCheck className="text-[#FFB400] mt-1.5 shrink-0 text-xs" /> {item}
                                    </li>
                                ))}
                            </ul>
                            
                            <a 
                                href={pillar.referenceLink} target="_blank"
                                className="mt-12 flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#FFB400]/30 transition-all group"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-black text-neutral-500 group-hover:text-[#FFB400] uppercase tracking-[0.2em]">Exemplo Real</span>
                                    <span className="text-xs text-neutral-400 group-hover:text-white font-medium">Ver Referência</span>
                                </div>
                                <FaArrowUpRightFromSquare className="text-sm text-neutral-700 group-hover:text-[#FFB400] transition-colors" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="bg-red-500/5 border border-red-500/10 p-12 rounded-[48px]">
                    <div className="flex items-center gap-4 text-red-500 mb-10">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                            <FaTriangleExclamation />
                        </div>
                        <h4 className="font-bold uppercase tracking-[0.2em] text-sm">O que evitar a todo custo</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6">
                        {avoidsData.map((avoid, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500/40"></div>
                                <p className="text-sm text-neutral-500 font-medium">{avoid}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="mt-20 flex justify-center">
                    <button 
                        onClick={() => setIsGuideOpen(false)}
                        className="w-full max-w-md py-6 bg-white text-black rounded-3xl font-black text-xs uppercase tracking-[0.3em] transition-all hover:bg-neutral-200 active:scale-[0.98] shadow-2xl"
                    >
                        Entendido, Vamos às Referências
                    </button>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Side Panel (Reference Details) */}
      <AnimatePresence>
        {selectedRef && (
          <>
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedRef(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] cursor-pointer"
            />
            <motion.div 
                initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-full max-w-xl bg-[#0d0d0d] border-l border-neutral-800 z-[110] shadow-2xl p-8 md:p-10 overflow-y-auto no-scrollbar"
            >
                <div className="flex justify-between items-center mb-10">
                    <button onClick={() => setSelectedRef(null)} className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-widest"><FaArrowLeft /> Voltar</button>
                    <button onClick={() => setSelectedRef(null)} className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center hover:bg-neutral-700 transition-colors"><FaXmark /></button>
                </div>

                <div className="mb-10 text-center md:text-left">
                    <span className="text-[10px] font-bold text-[#FFB400] uppercase tracking-widest bg-[#FFB400]/10 px-3 py-1 rounded-full border border-[#FFB400]/20 mb-4 inline-block">{selectedRef.category}</span>
                    <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">{selectedRef.title}</h2>
                    <p className="text-neutral-400 text-base leading-relaxed">{selectedRef.description}</p>
                </div>

                <div className="space-y-12">
                    <div className="p-8 bg-neutral-900/40 border border-neutral-800/60 rounded-[32px]">
                        <div className="flex items-center gap-3 mb-6 text-[#FFB400]">
                            <FaVideo className="text-lg" />
                            <h4 className="font-bold uppercase tracking-widest text-xs">Como Gravar</h4>
                        </div>
                        <ul className="space-y-4">
                            {selectedRef.how_to_record.map((step: string, i: number) => (
                                <li key={i} className="flex items-start gap-4 text-white/80 text-sm leading-relaxed">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] font-bold text-[#FFB400]">{i+1}</span>
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-[#FFB400]">
                            <FaLightbulb className="text-lg" />
                            <h4 className="font-bold uppercase tracking-widest text-xs">Por que vende?</h4>
                        </div>
                        <p className="text-neutral-300 leading-relaxed text-base italic border-l-2 border-[#FFB400]/30 pl-6">
                            "{selectedRef.why_it_works}"
                        </p>
                    </div>

                    <a 
                        href={selectedRef.videoUrl} target="_blank" 
                        className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-[#FFB400] text-black font-bold text-sm transition-all hover:bg-[#FFEA00] shadow-[0_15px_40px_rgba(255,180,0,0.1)]"
                    >
                        <FaInstagram className="text-xl" /> Ver no Instagram
                    </a>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
