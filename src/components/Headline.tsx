'use client'
const Headline = () => {
    return (
        <div className="w-full h-fit mt-16 flex justify-center flex-col items-center ">
           <div className="mb-4 flex items-center relative justify-center border rounded-full px-4 py-1 border-[#FFB400] text-[#FFB400] text-sm gap-2">
            <img className="w-3" src="/cadeado-aberto.png" alt="" />Contrato livre de amarras
            {/* <span className="bg-[#FFB400] absolute right-[7px] h-1 w-1 inline-block rounded-full"></span> */}
           </div>
            <h1 className="text-5xl  [line-height:1] font-semibold text-center md:text-6xl max-w-6xl">
             A melhor equipe de <span> </span>
                <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,180,0,0.7)]">
                    Marketing para Restaurantes
                </span><span> </span>
                do Brasil
            </h1>
            <p className="text-center md:text-2xl mt-4 max-w-sm md:max-w-full px-4 xl:px-[10rem] 2xl:px-[30rem]">
                Com 5 anos de experiência no mercado gastronomico, validamos um método que faz qualquer um <strong>vender 10x mais</strong>.
            </p>
            <a href="#form" className="text-white bg-gradient-to-r hover:scale-[1.003] from-[#00ff2a] to-[#003f17] mt-12 transition font-semibold px-24 py-5 md:px-50 md:py-5 rounded-2xl">Entrar em Contato</a>
            <div className="w-full h-fit flex justify-center mt-8">
                <a href="#form">
                    <img src="/down-arrow.png" className="w-5 h-5 animate-bounce mt-6" />
                </a>
            </div>
        </div> 
    );
}
 
export default Headline;