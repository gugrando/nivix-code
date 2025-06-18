"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { clients } from "../data/clientsData";

export default function ClientsCarousel() {
  return (
    <section className="text-white py-8 mt-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 mt-4 text-yellow-400 text-center">
          Our Clients
        </h2>

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
  <div className="w-[250px] h-[250px] bg-neutral-800 rounded-lg p-4 mx-auto flex flex-col items-center justify-center">
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
    </section>
  );
}
