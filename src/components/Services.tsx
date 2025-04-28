"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      serviceName: "🤖 Automatização de Fluxos",
      serviceDescription:
        "Automatize processos e ganhe escala. Criamos fluxos inteligentes que conectam todas as etapas do seu funil: captação, nutrição, agendamento e fidelização. Tudo 100% no piloto automático.",
      icon: "⚡",
    },
    {
      serviceName: "💬 Chatbots Inteligentes",
      serviceDescription:
        "Atendimento 24/7 com IA personalizada. Seus clientes recebem respostas rápidas, claras e sempre atualizadas. Ideal para agendamentos, orçamentos e até fechamento de vendas.",
      icon: "🤖",
    },
    {
      serviceName: "🎯 Captação de Leads",
      serviceDescription:
        "Leads qualificados no automático. Atraímos e convertemos o público certo com estratégias que combinam tráfego pago, funis e iscas digitais sob medida para seu negócio.",
      icon: "🎯",
    },
    {
      serviceName: "🌐 Landing Pages de Alta Conversão",
      serviceDescription:
        "Sites e páginas pensadas para vender. Desenvolvemos landing pages modernas, responsivas e integradas com seus anúncios e chatbots, otimizadas para resultados reais.",
      icon: "🌐",
    },
    {
      serviceName: "📢 Tráfego Pago com IA",
      serviceDescription:
        "Campanhas otimizadas com IA para vender mais. Anúncios no Google, Facebook e Instagram com segmentações estratégicas, testes A/B automáticos e relatórios inteligentes.",
      icon: "📢",
    },
    {
      serviceName: "📲 Gerenciamento de Mídias Sociais",
      serviceDescription:
        "Sua presença digital forte e estratégica. Conteúdo, design, copywriting, agendamento e gestão completa das suas redes, com suporte da IA pra melhorar resultados.",
      icon: "📲",
    },
  ];

  return (
    <section id="services" className="relative py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#181818] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,143,255,0.05),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(68,82,254,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-8 h-8 text-[#008fff] mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Nossos <span className="text-[#008fff]">serviços</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Soluções inteligentes para impulsionar seu negócio
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-sm"
            >
              <div className="relative z-10">
                <motion.div
                  className="text-4xl mb-4"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                >
                  {item.serviceName}
                </motion.h3>
                <motion.p
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  {item.serviceDescription}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
