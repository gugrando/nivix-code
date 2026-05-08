'use client';
import { motion } from "framer-motion";
import { FaUsersViewfinder, FaRocket, FaUserShield, FaHandshake } from "react-icons/fa6";

const Team = () => {
    const values = [
      {
        icon: <FaUsersViewfinder />,
        title: "Olhar de Dono",
        desc: "Não somos apenas técnicos. Entramos na sua operação para entender cada detalhe do seu custo e lucro."
      },
      {
        icon: <FaRocket />,
        title: "Escala Vertical",
        desc: "Nossa equipe foca em dobrar sua capacidade produtiva com demanda real e previsível."
      },
      {
        icon: <FaUserShield />,
        title: "Suporte Blindado",
        desc: "Você terá um gestor dedicado. Nada de tickets ou esperas infinitas. É parceria direta."
      }
    ];

    return (
        <section id="time" className="relative flex flex-col items-center justify-center px-4 py-32 w-full overflow-hidden">
            {/* Background Accent */}
            <div className="absolute w-[800px] h-[800px] rounded-full bg-[#FFB400]/5 blur-[160px] -z-10 -top-20 -right-40"></div>
            
            <div className="w-full lg:w-[75%] flex flex-col items-center">
                
                {/* Storytelling Header */}
                <div className="text-center mb-20 max-w-4xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-6 inline-flex items-center bg-neutral-900/50 border rounded-full px-4 py-2 border-[#FFB400]/30 text-[#FFB400] text-sm gap-3 backdrop-blur-md"
                    >
                        <FaHandshake className="text-xs" />
                        <span className="font-medium tracking-widest uppercase">Mais que uma agência, seu braço direito</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]"
                    >
                        Atrás de cada grande delivery, existe uma <br/>
                        <span className="bg-gradient-to-r from-[#FFD700] via-[#FFB400] to-[#FFEA00] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,180,0,0.4)]">
                            Equipe de Elite
                        </span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-400 text-lg md:text-2xl mt-8 leading-relaxed"
                    >
                        Você não está contratando um "freelancer de post". Você está ativando um **Squad de Performance** que respira o mercado gastronômico 24h por dia. 
                        Nosso escritório é o centro de comando onde sua escala é planejada.
                    </motion.p>
                </div>

                {/* Team Visual / Placeholder for Office Photo */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative w-full aspect-[21/9] bg-neutral-900/60 border-2 border-neutral-800 rounded-[40px] overflow-hidden group shadow-2xl mb-20"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                    {/* Placeholder content - representativo do escritório/time */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center group-hover:scale-105 transition-transform duration-700">
                             <img src="/logo.png" className="w-48 opacity-20 grayscale mb-4 mx-auto" alt="" />
                             <p className="text-neutral-500 font-bold tracking-[0.3em] uppercase text-xs">[ Espaço Reservado para Foto do QG Lead Elite ]</p>
                        </div>
                    </div>
                    
                    {/* Floating Info Badge over photo */}
                    <div className="absolute bottom-8 left-8 z-20 flex flex-col gap-2">
                        <div className="bg-[#FFB400] text-black text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider w-fit">QG NIVIX</div>
                        <h4 className="text-white font-bold text-xl md:text-2xl tracking-tight">Onde a mágica acontece.</h4>
                    </div>
                </motion.div>

                {/* Values/Exclusivity Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {values.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-neutral-900/40 border border-neutral-800/50 backdrop-blur-xl rounded-[32px] hover:border-[#FFB400]/20 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-[#FFB400] text-2xl mb-6 border border-neutral-700/50 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h4 className="text-white text-xl font-bold mb-3 tracking-tight">{item.title}</h4>
                            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Final Call to Action for Team Section */}
                <div className="mt-20 flex flex-col items-center">
                    <p className="text-white/60 text-sm font-bold uppercase tracking-[0.2em] mb-8">Não jogue sozinho contra o mercado</p>
                    <motion.a 
                        href="#form" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white bg-gradient-to-r from-[#00ff2a] to-[#003f17] font-bold px-20 py-5 rounded-2xl shadow-[0_15px_40px_rgba(0,255,42,0.1)] text-lg tracking-tight uppercase"
                    >
                        Quero esse time comigo
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

export default Team;
