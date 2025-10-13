"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { clients } from "../data/clientsData";

export default function ClientsCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
    },
    [autoplay.current]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();

    // Reset autoplay ao interagir
    const resetAutoplay = () => autoplay.current.reset();
    emblaApi.on("pointerDown", resetAutoplay);

    return () => {
      emblaApi.off("pointerDown", resetAutoplay);
    };
  }, [emblaApi, onSelect]);


  const [clientes, setClientes] = useState(621);
  useEffect(() => {
    const timer = setTimeout(() => {
      setClientes(622);
    }, 40000); // 40 segundos

    return () => clearTimeout(timer);
  }, []);


  return (
    <section className="text-white bg-[#101010] w-full flex flex-col items-center py-12 select-none overflow-hidden relative">
      <div className=" mb-4 flex w-[70%] lg:w-[18%] items-center justify-center text-center relative border rounded-full px-4 py-2 border-[#FFB400] text-[#FFB400] text-sm gap-2">
          <span className="w-3 h-3 animate-pulse bg-[#FFB400] rounded-full"></span>
          <p className="text-sm font-medium text-center">Atualmente com: <span className="animate-pulse">{clientes}</span> Clientes Ativos</p>
          {/* <span className="bg-[#FFB400] absolute right-[7px] h-1 w-1 inline-block rounded-full"></span> */}
      </div>
      <div className="mb-8 flex flex-col items-center">
        <h1 className="text-4xl max-w-3xl text-center font-bold">De pizzarias de bairro a grandes franquias</h1>
        <p className="text-lg px-6 max-w-2xl text-center text-[#F4B400]">Sem depender de sorte, pessoas como você confiaram em nós para dobrar os pedidos todos os dias com nosso método</p>
      </div>
      <div className="w-full mx-auto flex flex-col items-center">
        
        {/* Slide */}
        <div ref={emblaRef} className="overflow-hidden w-full lg:w-[68.7%]">
          {/* Adiciona padding para garantir gap no último slide */}
          <div className="flex gap-4 px-4">
            {clients.map((client) => (
              <div
                key={client.id}
                className="border-t border-b border-neutral-700/70 flex-shrink-0 p-6 w-[95%] md:w-[45%] lg:w-[33%] h-fit aspect-square bg-neutral-900 rounded-2xl flex flex-col items-center justify-start text-center"
              >
                
                <div className="flex flex-col items-center gap-4 relative w-full">
                  <img
                    src={client.imagePath}
                    alt={client.companyName}
                    className="w-25 h-25 z-50 border-b border-neutral-700/70 object-cover rounded-xl"
                  />
                  <h3 className="text-2xl mt-6 font-semibold">{client.companyName}</h3>
                  <div className="absolute top-[6rem] bg-neutral-900 border-t z-40 flex items-center justify-center gap-2 w-[70%] py-2 lg:py-2  border-neutral-700/70 rounded-full">
                    <img className="w-6 animate-pulse" src={client.fireImagePath} alt="" />
                    <p className="text-[#FFB400]">A {client.fireText} Conosco</p>
                  </div>
                </div>
                
                {/* Mid Baixo */}
                <div className="mt-8 px-2 relative w-[100%] rounded-2xl flex flex-col items-center justify-center">
                  <p className="text-neutral-400 text-center">"{client.description}"</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-4">
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === selectedIndex ? "bg-[#FFB400] w-4" : "bg-gray-500/70"
              }`}
            />
          ))}
        </div>

        {/* Chamada */}
        <div className="text-center mt-10">
            <a href="#form" className="text-white bg-gradient-to-r from-[#FFB400] to-[#cb8e00] transition font-semibold px-24 py-5 md:px-33 md:py-4 rounded-md">Quero Fazer Parte</a>
              {/* <button className="text-[#ffffff] font-semibold border-none rounded-lg py-3 px-6 underline opacity-30 mt-2">Ver detalhes do projeto</button> */}
        </div>
      </div>
    </section>
  );
}
