"use client";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[86px] px-6 md:px-12">
      <nav className="w-full h-full flex items-center justify-between xl:px-50">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start w-full lg:w-fit">
          <img src="/logo.png" alt="Logo Nivix" className="w-40 md:w-34" />
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center space-x-10 text-white">
          <li>
            <a href="#" className="hover:text-[#FFBE2E] transition">Parceiros</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFBE2E] transition">Depoimentos</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#FFBE2E] transition">Sobre Nivix</a>
          </li>
          <li>
            <a
              href="#"
              className="bg-[#FFB400] hover:bg-yellow-400 transition text-black px-16 py-3 rounded-md"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
