// components/ClientVideos.tsx

import React from "react";

const ClientVideos: React.FC = () => {
  return (
    <section id="depoimentos" className="w-full px-4 py-10 flex justify-center mt-20">
      <div className=" bg-neutral-900/70 border-t border-b border-neutral-700/70 backdrop-blur-2xl gap-8 py-8 md:w-[71%] rounded-3xl w-fit h-fit flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-2 text-[#F4B400] ">
            Você viu como é simples dar o primeiro passo?
          </h2>
          <p className="text-md font-normal text-white mb-8 px-4">
            Agora veja o que acontece com quem já fez isso e confiou no nosso trabalho.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {/* Vídeo 1 */}
          <video
            controls
            className="w-full md:w-1/3 rounded-2xl shadow-lg"
            src="/SaboresDaVila.webm"
            // poster="/SaboresDaVila.png"
          >
            Seu navegador não suporta vídeo.
          </video>
        </div>
        <a href="#form" className="text-white bg-gradient-to-r from-[#FFB400] to-[#cb8e00] transition font-semibold px-24 py-5 md:px-33 md:py-4 rounded-md">Quero Fazer Parte</a>
      </div>
    </section>
  );
};

export default ClientVideos;
