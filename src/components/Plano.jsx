const Plano = () => {
    return (
        <div className="flex flex-col items-center justify-center px-2 mt-20">
            <h1 className="text-4xl font-bold text-center">Nosso Plano</h1>
            <p className="text-center text-lg text-[#FFB400] max-w-xl">Plano único, sem pegadinhas ou surpresas, nosso contrato é livre de quaisquer amarras, mensal ou trimestral sem mudança de valores.</p>
            <div className="flex flex-col items-center justify-center w-full md:w-[71%] gap-4 mt-4 px-2">
                
                <div className="w-full lg:w-2/3 h-fit bg-gradient-to-br from-yellow-800/50 to-[#F4B400]/80 border-2 border-[#F4B400]/50 rounded-2xl py-8 px-3 lg:px-8">
                    {/* <h1 className="text-2xl font-normal text-center">Nivix Essential</h1> */}
                    {/* <div className="flex flex-col items-center justify-center">
                        <p className="text-center text-red-900 text-lg line-through">R$2690/m</p>
                        <p className="text-center text-6xl font-bold text-green-600">R$800</p>
                        <p className="text-center text-green-600">Mensal</p>
                    </div> */}
                    <p className="text-center py-2 border-t border-neutral-700/50 mt-8">Você está no controle e sabe tudo que vai receber, afinal não somos uma agência de post bonitinho e sim parceiros que vão te trazer resultados reais.</p>
                    <div className="flex flex-col items-center justify-center mt-6 gap-3">
                        <span className="flex items-center justify-start px-4 gap-4 w-full h-16 bg-neutral-900/80  border border-neutral-800 rounded-2xl">
                            <span className="w-3 h-3 bg-[#F4B400] rounded-full"></span>
                            <p className="">Tráfego Pago de Conversão</p>
                        </span>
                        <span className="flex items-center justify-start px-4 gap-4 w-full h-16 bg-neutral-900/80  border border-neutral-800 rounded-2xl">
                            <span className="w-3 h-3 bg-[#F4B400] rounded-full"></span>
                            <p className="">Social Media Essencial</p>
                        </span>
                        <span className="flex items-center justify-start px-4 gap-4 w-full h-16 bg-neutral-900/80  border border-neutral-800 rounded-2xl">
                            <span className="w-3 h-3 bg-[#F4B400] rounded-full"></span>
                            <p className="">Otimização dos canais de venda</p>
                        </span>
                        <span className="flex items-center justify-start px-4 gap-4 w-full h-16 bg-neutral-900/80  border border-neutral-800 rounded-2xl">
                            <span className="w-3 h-3 bg-[#F4B400] rounded-full"></span>
                            <p className="">Análise de Resultados</p>
                        </span>
                        <span className="flex items-center justify-start px-4 gap-4 w-full h-16 bg-neutral-900/80  border border-neutral-800 rounded-2xl">
                            <span className="w-3 h-3 bg-[#F4B400] rounded-full"></span>
                            <p className="">Cobertura de Promoções</p>
                        </span>
                        <span className="flex items-center justify-start px-4 gap-4 w-full h-16 bg-neutral-900/80  border border-neutral-800 rounded-2xl">
                            <span className="w-3 h-3 bg-[#F4B400] rounded-full"></span>
                            <p className="">Relatórios Semanais e Mensal</p>
                        </span>
                        <span className="flex items-center justify-start px-4 gap-4 w-full h-16 bg-neutral-900/80  border border-neutral-800 rounded-2xl">
                            <span className="w-3 h-3 bg-[#F4B400] rounded-full"></span>
                            <p className="">Automação Essencial</p>
                        </span>
                        <span className="flex items-center justify-start px-4 gap-4 w-full h-16 bg-neutral-900/80  border border-neutral-800 rounded-2xl">
                            <span className="w-3 h-3 bg-[#F4B400] rounded-full"></span>
                            <p className="">Suporte 24h</p>
                        </span>
                         <span className="flex items-center justify-start px-4 gap-4 w-full h-16 bg-neutral-900/80  border border-neutral-800 rounded-2xl">
                            <span className="w-3 h-3 bg-[#F4B400] rounded-full"></span>
                            <p className="">Serviços Extras para o Seu Negócio</p>
                        </span>
                        <h2 className="text-2xl font-bold text-[#FFB400] mt-3">Por que um valor tão baixo?</h2>
                        <p className="text-center"> Nós sabemos que vamos te entregar resultados e você ficará mais tempo conosco, só ganhamos se você ganhar, acreditamos tanto no nosso serviço que temos um valor muito abaixo do mercado para atender a todos. <b>Não precisamos te prender por 3 meses pagando 2600/mês, acreditamos em parcerias duradouras e limpas.</b></p>
                    </div>
                </div>
                <a href="#form" className="text-white bg-gradient-to-r hover:scale-[1.003] from-[#00ff2a] to-[#003f17] mt-4 transition font-semibold px-24 py-5 md:px-50 md:py-5 rounded-2xl">Entrar em Contato</a>
                <span className="w-full h-16 bg-neutral-900/50 border border-neutral-700/50 rounded-2xl text-start flex items-center justify-center px-6 gap-2"><img src="alerta.png" alt="" />Todo risco é nosso, se não tiver resultado recebe seu dinheiro de volta</span> 
                <span className="w-full h-16 bg-neutral-900/50 border border-neutral-700/50 rounded-2xl text-start flex items-center justify-center px-6 gap-2"> <img className="w-8" src="cadeado-aberto.png" alt="" />Você não paga R$2600/mês em um contrato amarrado de 3 meses</span>
                <span className="w-full h-16 bg-neutral-900/50 border border-neutral-700/50 rounded-2xl text-start flex items-center justify-center px-6 gap-2"><img src="mais.png" alt="" />Você recebe mais entregáveis que qualquer outra agência</span>
            </div>
        </div>
    );
}     
 
export default Plano;