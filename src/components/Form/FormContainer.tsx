"use client";

import React from "react";
import ContactForm from "./Form";

export default function FormContainer() {
  return (
    <div id="form" className="flex p-4 justify-center w-full h-fit mt-8">  
        <div className="border-2 border-neutral-700/70 bg-neutral-900/70 backdrop-blur-2xl gap-8 p-4 lg:p-8 rounded-3xl lg:w-[70%] h-fit  flex flex-col lg:flex-row lg:justify-center lg:items-start items-center py-8  ">
            <div className="px-4 flex flex-col items-center lg:w-1/2 py-8">
                <div>
                  <h2 className="lg:max-w-lg text-3xl lg:text-4xl font-semibold text-center">Exclusividade e alta performance</h2>
                  <p className="lg:max-w-lg text-xl font-normal text-center text-[#F4B400]">Ofertamos a maior qualidade em gestão de tráfego para o seu negócio alimentício</p>
                </div>
                <div className="flex flex-col  gap-8 mt-8">
                  {/* <img src="/logo.png" alt="Logo Nivix" className="w-25 border-2 border-[#FFB400] rounded-2xl" /> */}
                  <p className="text-center">1. Preencha o formulário ao lado <br /> 2. Nosso time entrará em contato para agendar uma reunião gratuita, personalizada para entender suas necessidades. <br /><br /><br />
                  O restante deixe conosco!
                  </p>
                </div>
                {/* <p className="mt-8 text-center text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquid voluptatibus! Quisquam accusamus voluptas magnam excepturi libero, deserunt veniam modi.</p> */}
            </div>
            <div className="lg:w-1/2">
                <ContactForm />
            </div>  
        </div>
    </div>
  );
}