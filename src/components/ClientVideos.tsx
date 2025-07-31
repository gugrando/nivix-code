// components/ClientVideos.tsx

import React from "react";

const ClientVideos: React.FC = () => {
  return (
    <section id="depoimentos" className="w-full px-4 py-10 flex justify-center">
      <div className="border-2 border-neutral-700/70 bg-neutral-900/70 backdrop-blur-2xl gap-8 p-4 lg:p-8 rounded-3xl w-full max-w-7xl h-fit flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-2 text-[#F4B400] ">
            Clientes satisfeitos
          </h2>
          <p className="text-md font-normal text-white mb-8 ">
            Veja o que falam de nós, e seus resultados
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20 w-full">
          {/* Vídeo 1 */}
          <video
            controls
            className="w-full md:w-1/3 rounded-2xl shadow-lg"
            src="/SaboresDaVila.webm"
          >
            Seu navegador não suporta vídeo.
          </video>

          {/* Vídeo 2 */}
          <video
            controls
            className="w-full md:w-1/3 rounded-2xl shadow-lg"
            src="/VellaroCase.webm"
          >
            Seu navegador não suporta vídeo.
          </video>
        </div>
        <a href="#form" className="text-white bg-gradient-to-r from-[#FFB400] to-[#cb8e00] mt-8 transition font-semibold px-24 py-4 md:px-33 md:py-4 rounded-md">Entrar em Contato</a>
      </div>
    </section>
  );
};

export default ClientVideos;
