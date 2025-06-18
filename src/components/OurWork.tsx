import { AnimatePresence, motion} from "framer-motion"
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

const OurWork = () => {
    const [openQuestion, setOpenQuestion] = useState(null);
    const questions = [
        {
            id: 1,
            question: 'Aumentaar o número de pedidos ',
            answer: 'Na Nivix, nosso foco é entregar resultados reais e personalizados. Trabalhamos lado a lado com nossos clientes, oferecendo soluções integradas que combinam criatividade, estratégia e tecnologia para alcançar seus objetivos de forma eficaz e sustentável.'
        },
        {
            id: 2,
            question: 'Como posso ter certeza de que a Nivix irá gerar resultados para meu negócio?',
            answer: 'Nossa abordagem é orientada por dados e análises contínuas. A cada etapa da campanha, monitoramos de perto os resultados e ajustamos as estratégias para garantir que sua empresa tenha o melhor desempenho possível.'
        },
        {
            id: 3,
            question: 'Como a Nivix pode ajudar a aumentar minhas vendas?',
            answer: 'Focamos em criar campanhas direcionadas e altamente eficazes, usando as melhores práticas de marketing digital e otimização de conversões. A combinação de estratégias de tráfego pago, SEO e design envolvente contribui diretamente para o aumento das vendas.'
        },
        {
            id: 4,
            question: 'Quais tipos de empresas vocês atendem?',
            answer: 'Temos 3 equipes especializadas (Automotiva, Moda, Delivery) e a equipe Geral, mas atendemos empresas de todos os tamanhos e setores. Seja você uma pequena empresa ou uma grande corporação, temos soluções personalizadas para impulsionar sua marca e alcançar seus objetivos de negócios.'
        },
        {
            id: 5,
            question: 'Quais serviços a Nivix oferece?',
            answer: 'Oferecemos uma gama completa de serviços, 360°, incluindo design gráfico, desenvolvimento web, gestão de tráfego pago, estratégias de marketing digital, branding e consultoria. Tudo para garantir que sua empresa se destaque no mercado.'
        },
        {
            id: 6,
            question: 'Qual é o prazo para ver resultados?',
            answer: 'Os resultados podem variar dependendo da estratégia adotada e do tipo de serviço contratado. No entanto, trabalhamos com um planejamento claro e realista, buscando gerar os primeiros resultados visíveis já nas primeiras semanas de campanha.'
        },
        {
            id: 7,
            question: 'Qual é o investimento necessário para começar a trabalhar com a Nivix?',
            answer: 'O investimento é personalizado, de acordo com as necessidades e objetivos da sua empresa. Após uma análise detalhada do seu negócio, criamos uma proposta que se encaixa no seu orçamento e entrega o maior valor possível para alcançar os resultados desejados. Se você tem essa dúvida, entre em contato e fale conosco sem compromisso!'
        }
    ]

    return (
        <motion.section className="w-full h-full flex flex-col justify-center items-center mt-40">  
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
                                {openQuestion === questions.id ? <FaChevronUp className="text-[#FFB400]" /> : <FaChevronDown className="" />}
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