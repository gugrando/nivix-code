"use client";

import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-gray-300 mt-40">
      <div className="max-w-7xl mx-auto md:px-20 py-10 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo e descrição */}
        <div className="flex items-center gap-6 justify-center md:justify-start">
          <a href="#top">
            <Image src="/logo2.png" alt="Logo da NIVIX"width={50} height={50} priority/>
          </a>
          <p className="text-sm max-w-[300px] text-center md:text-start">
            Agência especializada em tráfego pago, social media e desenvolvimento de sites e sistemas.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
            <FaInstagram size={30} className="hover:text-[#FFB400] cursor-pointer" />
            <FaFacebook size={30} className="hover:text-[#FFB400] cursor-pointer" />
            <FaLinkedin size={30} className="hover:text-[#FFB400] cursor-pointer" />
        </div>
      </div>
    
      {/* Copyright */}
      <div className="border-t border-neutral-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} NIVIX. Todos os direitos reservados.
      </div>
    </footer>
  );
}