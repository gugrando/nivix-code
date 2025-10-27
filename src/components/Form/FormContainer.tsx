"use client";

import React from "react";
import ContactForm from "./Form";
import { motion } from "framer-motion";

export default function FormContainer() {
  return (
    <div id="form" className="z-50 relative flex flex-col p-4 items-center justify-center w-full h-fit mt-8 overflow-x-clip">  
        <div className="absolute w-60 lg:w-80 h-60 lg:h-80 rounded-full bg-[#FFB400]/70 lg:bg-[#FFB400]/50 blur-3xl top-[0rem] lg:left-[14rem] left-[1/2] animate-pulse"></div>
        <div className="w-full border-2 border-neutral-700/70 bg-neutral-900/70 backdrop-blur-2xl gap-8 p-4 lg:p-8 rounded-3xl lg:w-[70%] h-fit  flex flex-col lg:flex-row lg:justify-center lg:items-start items-center py-12">
            <div className="px-4 flex flex-col items-center lg:w-1/2">
                <div>
                  <h2 className="lg:max-w-lg text-4xl lg:text-4xl font-semibold text-center">Método Validado</h2>
                  <p className="lg:max-w-lg text-lg font-normal text-center text-[#F4B400]">Vamos transformar sua pizzaria em uma máquina de pedidos, como fizemos para <strong>mais de 600 clientes</strong></p>
                </div>
                <div className="hidden lg:block">
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <img className="w-14" src="/google-forms.png" alt="" />
                    <img className="w-6" src="/right-arrows.png" alt="" />
                    <img className="w-14" src="/chat.png" alt="" />
                    <img className="w-6" src="/right-arrows.png" alt="" />
                    <img className="w-14" src="/diamond.png" alt="" />
                  </div>
                  <div className="flex flex-col items-center px-8 text-center gap-2 mt-10">
                    <span className="text-lg font-semibold text-center text-[#F4B400]">3 passos para o sucesso</span>
                    <p>Você preenche o formulário para contato, em até 5 minutos chamamos você, e marcamos uma consultoria gratuita e completa para seu negócio.</p>
                  </div>
                </div>
                {/* <p className="mt-8 text-center text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquid voluptatibus! Quisquam accusamus voluptas magnam excepturi libero, deserunt veniam modi.</p> */}
            </div>
            <div className="w-full lg:w-1/2">
                <ContactForm />
            </div>  
        </div>
        <div className="lg:hidden w-full h-fit mt-30 flex flex-col items-center gap-4 px-1">
            <div className="">
              <motion.h3 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.2 }} className="text-4xl font-semibold text-center text-white">Não saia agora!</motion.h3>
              <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.3 }} className="px-4 text-lg text-center text-[#F4B400] ">Você está a 3 passos de tranformar a história do seu negócio em uma maquina de pedidos</motion.p>
            </div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.3 }} className="mt-2 flex items-center justify-start px-6 gap-2 border-2 border-neutral-700/70 bg-neutral-900/70 backdrop-blur-2xl rounded-2xl w-full py-5">
              <img className="w-8" src="/google-forms.png" alt="" />
              <p>Você preenche o formulário para contato</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.3 }} className="flex items-center justify-start px-6 gap-2 border-2 border-neutral-700/70 bg-neutral-900/70 backdrop-blur-2xl rounded-2xl w-full py-5">
              <img className="w-8" src="/chat.png" alt="" />
              <p>Em 5 minutos, nossa equipe chama você</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.3 }} className="flex items-center justify-start px-6 gap-2 border-2 border-neutral-700/70 bg-neutral-900/70 backdrop-blur-2xl rounded-2xl w-full py-5">
              <img className="w-8" src="/diamond.png" alt="" />
              <p>Agendamos uma consultoria gratuita e completa para seu negócio decolar</p>
            </motion.div>
            
            <a href="#form" className="w-full text-center text-white bg-gradient-to-r hover:scale-[1.003] from-[#00ff2a] to-[#003f17] mt-6 transition font-semibold px-4 py-5 md:px-50 md:py-5 rounded-2xl">Preencher Formulário</a>

        </div> 
    </div>
  );
}