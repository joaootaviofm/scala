"use client";
import { motion } from "framer-motion";
export default function Services() {
  const services = [
    {
      serviceName: "🤖 Automatização de Fluxos",
      serviceDescription:
        "Automatize processos e ganhe escala. Criamos fluxos inteligentes que conectam todas as etapas do seu funil: captação, nutrição, agendamento e fidelização. Tudo 100% no piloto automático.",
    },
    {
      serviceName: "💬 Chatbots Inteligentes",
      serviceDescription:
        "Atendimento 24/7 com IA personalizada. Seus clientes recebem respostas rápidas, claras e sempre atualizadas. Ideal para agendamentos, orçamentos e até fechamento de vendas.",
    },
    {
      serviceName: "🎯 Captação de Leads",
      serviceDescription:
        "Leads qualificados no automático. Atraímos e convertimos o público certo com estratégias que combinam tráfego pago, funis e iscas digitais sob medida para seu negócio.",
    },
    {
      serviceName: "🌐 Landing Pages de Alta Conversão",
      serviceDescription:
        "Sites e páginas pensadas para vender. Desenvolvemos landing pages modernas, responsivas e integradas com seus anúncios e chatbots, otimizadas para resultados reais.",
    },
    {
      serviceName: "📢 Tráfego Pago com IA",
      serviceDescription:
        "Campanhas otimizadas com IA para vender mais. Anúncios no Google, Facebook e Instagram com segmentações estratégicas, testes A/B automáticos e relatórios inteligentes.",
    },
    {
      serviceName: "📲 Gerenciamento de Mídias Sociais",
      serviceDescription:
        "Sua presença digital forte e estratégica. Conteúdo, design, copywriting, agendamento e gestão completa das suas redes, com suporte da IA pra melhorar resultados.",
    },
  ];

  return (
    <section id="services" className="text-white px-5 py-16 flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="tracking-[2px] text-[60px] font-bold hover:scale-105 duration-300 cursor-default"
      >
        Nossos <span className="text-[#008fff]">serviços</span>
      </motion.h1>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px]">
        {services.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 , delay: 0.2*index }}
            key={index}
            className="px-5 py-5 bg-white/5 rounded-lg hover:scale-110 hover:shadow-2xl shadow-white/15 cursor-default duration-300 border border-white/20 backdrop-blur-md flex flex-col gap-6"
          >
            <h1 className="text-center">{item.serviceName}</h1>
            <p className="leading-relaxed text-center">
              {item.serviceDescription}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
