"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { clients } from "../data/clientsData";

export default function ClientsCarousel() {
  return (
    <section className="text-white w-full">
      <div id="parceiros" className="rounded-2xl max-w-[90%] md:max-w-[73%] mx-auto py-4">
            <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
                breakpoints={{
            0: {
            slidesPerView: 1,
            spaceBetween: 8,
            },
            640: {
            slidesPerView: 2,
            spaceBetween: 10,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 12,
            },
            1280: {
            slidesPerView: 4,
            spaceBetween: 16,
            },
        }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
  <div className="w-[250px] h-[250px] bg-neutral-900 rounded-lg p-4 mx-auto flex flex-col items-center justify-center">
    <img
      src={client.imagePath}
      alt={client.companyName}
      className="w-20 h-20 object-contain mb-2"
    />
    <div className="text-lg font-semibold text-center">
      {client.companyName}
    </div>
    <p className="text-gray-400 text-xs text-center px-2">
      {client.description}
    </p>
  </div>
    </SwiperSlide>

          ))}
        </Swiper>
      </div>
        <div className="mt-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-center">
            Alguns de nossos clientes
          </h2>
          <p className="text-[#FFB400]">Venha ser um case de sucesso também</p>
          <a href="#form" className="text-black bg-gradient-to-r from-[#FFB400] to-[#cb8e00] mt-2 transition font-semibold px-24 py-4 md:px-33 md:py-4 rounded-md">Entrar em Contato</a>
        </div>

    </section>
  );
}
