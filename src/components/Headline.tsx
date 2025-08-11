'use client'
const Headline = () => {
    return (
        <div className="w-full h-fit mt-13 flex justify-center flex-col items-center ">
           <div className="mb-4 flex items-center relative justify-center border rounded-full px-4 py-1 border-[#FFB400] text-[#FFB400] text-sm gap-2">
            <img className="w-3" src="/cadeado-aberto.png" alt="" />Contrato livre de amarras
            {/* <span className="bg-[#FFB400] absolute right-[7px] h-1 w-1 inline-block rounded-full"></span> */}
           </div>
            <h1 className="text-4xl font-semibold text-center px-4 md:text-6xl max-w-6xl">
             A melhor equipe de <span className="text-[#FFB400]">Marketing para Restaurantes</span> da América do Sul
            </h1>
            <p className="text-center md:text-2xl mt-4 max-w-[24rem] md:max-w-full px-4 xl:px-[10rem] 2xl:px-[30rem]">
                Venha ser um case de sucesso da maior equipe de marketing de restaurantes da America do Sul, experiência com mais de 600 cases bem sucedidos.
            </p>
            <a href="#form" className="text-white bg-gradient-to-r from-[#00ff2a] to-[#003f17] mt-8  transition font-semibold px-24 py-4 md:px-50 md:py-5 rounded-md">Entrar em Contato</a>
            <div className="w-full h-fit flex justify-center mt-8">
                <a href="#form">
                    <img src="/down-arrow.png" className="w-5 h-5 animate-bounce" />
                </a>
            </div>
        </div>
        
    );
}
 
export default Headline;