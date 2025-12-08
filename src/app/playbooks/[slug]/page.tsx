"use client";
import React, { useEffect, useState, use, useRef } from "react";

type Slide = {
  title: string;
  content: string;
  video?: string;
  link?: { label: string; url: string, description: string }[];
};
type Playbook = { title: string; slides: Slide[] };

export default function PlaybookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const [playbook, setPlaybook] = useState<Playbook | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [checkedSlides, setCheckedSlides] = useState<Record<number, boolean>>({});
  const [loading, setLoading] = useState(true);

// 🔹 Ref para o container com scroll
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);
    import(`../data/${slug}.json`)
      .then((mod) => setPlaybook(mod.default))
      .catch((err) => {
        console.error("❌ Erro ao carregar playbook:", err);
        setPlaybook(null);
      })
      .finally(() => setLoading(false));
  }, [slug]);
  // 🔹 Sempre que trocar de slide → volta para o topo
  useEffect(() => {
  // Dá prioridade para o container se ele for scrollável
  if (contentRef.current && contentRef.current.scrollHeight > contentRef.current.clientHeight) {
    contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Se o container não tiver rolagem interna, rola a janela
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [currentSlide]);

  useEffect(() => {
    const savedSlide = localStorage.getItem(`${slug}-currentSlide`);
    const savedChecks = localStorage.getItem(`${slug}-checkedSlides`);
    if (savedSlide) setCurrentSlide(parseInt(savedSlide));
    if (savedChecks) setCheckedSlides(JSON.parse(savedChecks));
  }, [slug]);

  useEffect(() => {
    localStorage.setItem(`${slug}-currentSlide`, String(currentSlide));
    localStorage.setItem(`${slug}-checkedSlides`, JSON.stringify(checkedSlides));
  }, [slug, currentSlide, checkedSlides]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-200">
        Carregando playbook...
      </div>
    );
  if (!playbook)
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-200">
        Playbook não encontrado.
      </div>
    );

  const slide = playbook.slides[currentSlide];
  const totalSlides = playbook.slides.length;
  const isFirstSlide = currentSlide === 0;

  const handleNext = () => currentSlide < totalSlides - 1 && setCurrentSlide(currentSlide + 1);
  const handlePrev = () => currentSlide > 0 && setCurrentSlide(currentSlide - 1);
  const handleCheck = () => setCheckedSlides((prev) => ({ ...prev, [currentSlide]: !prev[currentSlide] }));

  return (
    <>
    <div ref={contentRef} className="h-fit min-h-screen w-screen overflow-y-clip flex flex-col bg-gradient-to-b from-neutral-950 via-neutral-900  text-neutral-100">

      
      {/* 🔸 CONTEÚDO CENTRAL COM SCROLL */}
      <div className="flex-1">
        {/* 🔸 HEADER */}
      <div className="text-center mt-16 px-4">
        <h1 className="text-4xl md:text-5xl md:max-w-4xl md:mx-auto font-extrabold text-[#F4B400] drop-shadow-[0_0_15px_rgba(244,180,0,0.3)]">
          {isFirstSlide ? playbook.title : slide.title}
        </h1>
      </div>
        <div className="text-center px-8">
          <p className="text-lg md:text-xl md:max-w-3xl md:mx-auto text-neutral-300 leading-relaxed whitespace-pre-line mt-4">
            {slide.content}
          </p>

          {slide.video && (
  <div className="mt-8 flex justify-center">
    {/* container do vídeo, limita largura e força formato vertical */}
    <div className="relative w-full max-w-sm aspect-[9/16] md:max-w-xs rounded-2xl overflow-hidden shadow-lg border border-neutral-800 bg-black">
      <video
        controls
        src={slide.video}
        title={slide.title}
        className="w-full h-full object-contain"
      />
    </div>
  </div>
)}


          {/* 🔹 Links opcionais */}
            {slide.link && slide.link.length > 0 && (
            <div className="mt-6 space-y-3 w-full border-t border-neutral-800 pt-4">
                <ul className="space-y-2">
                {slide.link.map((links, index) => (
                    <li key={index} className="flex flex-col items-start">
                    <a
                        href={links.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                    >
                        <span className="flex text-start">
                            <p>
                                <span className="underline text-[#F4B400] hover:text-yellow-300 transition text-xl">
                                    {links.label}: 
                                </span>
                                <span className="text-neutral-600">
                                    &nbsp;{links.description}
                                </span>
                            </p>
                        </span>
                    </a>
                    </li>
                ))}
                </ul>
                </div>
                )}

        </div>
      </div>

    </div>
      {/* 🔸 RODAPÉ COM COMANDOS (agora parte natural do fluxo, não fixo) */}
      <div className="sticky bottom-0 w-full py-4">
        <div className="max-w-3xl mx-auto relative px-6 flex items-center justify-center">
          <div className="flex items-center gap-6 bg-neutral-800/30 backdrop-blur-md px-6 py-3 rounded-2xl border border-neutral-700/40 shadow-lg">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="w-36 px-4 py-2 rounded-xl flex items-center justify-center bg-neutral-800/70 hover:bg-neutral-700/70 text-neutral-200 font-semibold transition disabled:opacity-40"
            >
              ← Voltar
            </button>

            <button
              onClick={handleNext}
              disabled={currentSlide === totalSlides - 1}
              className="w-36 px-4 flex items-center justify-center py-2 rounded-xl bg-[#F4B400]/90 hover:bg-[#FFD84D] text-neutral-900 font-semibold transition disabled:opacity-40"
            >
              Avançar →
            </button>
          </div>
        </div>
        <div className="h-1 bg-neutral-800 mt-3">
          <div
            className="h-1 bg-[#F4B400] transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>
      </div>
      </>
  );
}




