import { AnimatePresence, motion} from "framer-motion"
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

const OurWork = () => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);
    const questions = [
        {
            id: 1,
            question: 'Vai aumentar o número de pedidos?',
            answer: 'Não somos agência de curtida. Somos agência de comanda batendo. Somos feito de performance e conversão, já fizemos pizzaria saltar de 12 para 97 pedidos em 21 dias. O que entregamos são estratégias testadas, anúncios segmentados e criativos que fazem o cliente clicar, pedir e repetir. Se não entregarmos resultado, seu dinheiro de volta, simples assim.'
        },
        {
            id: 2,
            question: 'Isso aí é mais um gasto? Já tentei marketing antes e não deu em nada.',
            answer: 'Você não precisa de mais um post bonitinho. Você precisa de mesa cheia. Pedidos no iFood. Caixa batendo. A Nivix é focada em performance. Tem cliente que saiu de 3 pedidos por noite pra mais de 60 em 4 semanas.Se você já gastou com marketing e não deu resultado, o problema não era o marketing — era quem fez.'
        },
        {
            id: 3,
            question: 'Quanto eu preciso investir pra ter resultado?',
            answer: 'Tem pizzaria que fatura 30 mil com 1.500 de tráfego pago. E tem quem gaste 5 mil sem retorno porque não sabe o que está fazendo. Com a Nivix, cada real vai pra onde traz retorno, você não precisa gastar muito. Precisa investir certo.'
        },
        {
            id: 4,
            question: 'Minha pizzaria é pequena. Será que vale a pena pra mim?',
            answer: 'Quem cresce é quem tem coragem de sair na frente. Nossos maiores cases começaram pequenos — e hoje entregam mais de 300 pizzas por semana. Você quer ser mais um no bairro... ou quer dominar ele?'
        },
        {
            id: 5,
            question: 'O que exatamente a Nivix faz?',
            answer: 'Vendemos estratégia que dá lucro. Uma gama completa de serviços para que a estrategia seja perfeita para o seu negócio decolar, cuidamos do tráfego,design, desenvolvimento web, social media, otimização de cardápio, recuperação de clientes, treinamento do time, consultoria completa, gestão estratégia e muito mais!'
        },
        {
            id: 6,
            question: 'Em quanto tempo eu vejo resultado?',
            answer: 'Você pode ver resultados já na primeira semana. Já tivemos pizzaria que dobrou o número de pedidos nos primeiros 10 dias. Se você tá com produto bom e estrutura mínima pronta, o resto é com a gente. Em até 30 dias você tera toda estrutura e resultados prontos. Quer testar? Em 7 dias a gente te mostra mais resultado do que a última agência te deu em 3 meses.'
        },
        {
            id: 7,
            question: 'Quanto eu preciso investir?',
            answer: 'Menos do que você perde todo mês deixando a casa vazia! Com menos de R$50 por dia em tráfego, já colocamos pizzarias pra fazer R$15 mil a mais no mês. Isso não é um gasto, é investimento no seu negócio, no seu sonho! A maioria dos donos joga dinheiro em promoção errada, post sem estratégia ou cupom que só tira lucro. A Nivix transforma cada real em pedido. Temos planos a partir de R$600 reais e o investimento minimo recomendado em tráfego é de R$450 por mês'
        }
    ]

    return (
        <motion.section id="FAQ" className="w-full h-full flex flex-col justify-center items-center mt-40">  
            <h1 className=" text-2xl text-[#FFB400] font-semibold">O que faremos?</h1>
            <motion.div className="flex flex-col justify-center items-center lg:items-center lg:flex-row w-full lg:px-32">
                <motion.div className="gap-1 flex flex-col justify-center w-full md:w-11/12 lg:w-11/12 h-fit max-with-[1400px] p-2 md:p-8 rounded-lg">
                    {questions.map((questions) =>(
                        <motion.div key={questions.id} className="flex flex-col items-center mb-4 last:mb-0 w-full"> 
                            <motion.button whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }} initial={{ opacity: 0, x: -20 }}  id='al' aria-label="Abrir ou fechar pergunta" onClick={() => setOpenQuestion(openQuestion === questions.id ? null : questions.id)} className="shadow-white/10 shadow-[2px_2px_0px_0px] w-[83%] text-left text-xl focus:outline-none p-5 bg-neutral-800 text-white font-extrabold rounded-[10px] flex justify-between items center">
                                <span className="max-w-[90%] font-normal flex items-center gap-4">
                                    <img src="/verificar.png" alt="" className="w-6"/>
                                    {questions.question}
                                </span>
                                {openQuestion === questions.id ? <span className="text-[#FFB400]"><FaChevronUp  /></span> : <span><FaChevronDown /></span>}
                            </motion.button>
                            <AnimatePresence>
                                {openQuestion === questions.id && (
                                    <motion.div className="mt-2 text-[#FFB400] ml-4 w-[83%]"  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto"}} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                                        <motion.p>{questions.answer}</motion.p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <h1 className="mt-8 text-4xl text-white font-semibold text-center px-2">Faz sentido para você?</h1>
            <p className="text-white">Então entre em contato!</p>
        <a href="#form" className="text-white bg-gradient-to-r from-[#FFB400] to-[#cb8e00] mt-8 transition font-semibold px-24 py-4 md:px-33 md:py-4 rounded-md">Entrar em Contato</a>

        </motion.section>
    );
}
 
export default OurWork;