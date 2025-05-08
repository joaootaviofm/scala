"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Com quais tipos de negócios imobiliários vocês trabalham?",
      answer: "Atendemos imobiliárias, corretores autônomos, construtoras e incorporadoras que desejam inovar e potencializar seus resultados com soluções de IA e automação específicas para o mercado imobiliário."
    },
    {
      question: "Como a Scala AI pode ajudar minha imobiliária a captar mais leads?",
      answer: "A Scala AI cria uma presença online forte, atraímos os clientes ideais todos os dias, automatizam atendimento com chatbots e mantêm suas campanhas rodando no piloto automático, sem você precisar se preocupar."
    },
    {
      question: "Quanto tempo leva para implementar uma solução de IA na minha imobiliária?",
      answer: "O prazo depende do escopo do projeto, mas sua solução será implementada o quanto antes, com a melhor qualidade e eficiência possível."
    },
    {
      question: "Como funciona a precificação dos serviços para imobiliárias?",
      answer: "A precificação é personalizada conforme as necessidades da sua imobiliária. Após uma análise inicial, apresentamos uma proposta detalhada, transparente e sem surpresas, com opções de pacotes ou soluções sob medida."
    },
    {
      question: "Vocês oferecem treinamentos para corretores e equipes?",
      answer: "Sim! Oferecemos treinamentos práticos e workshops para corretores, gestores e equipes, focando no uso de ferramentas digitais, automação e estratégias de IA para o mercado imobiliário."
    },
    {
      question: "Quais diferenciais vocês oferecem para o mercado imobiliário?",
      answer: "Nossa equipe é especializada no setor imobiliário, entendendo as dores e oportunidades do segmento. Oferecemos soluções inovadoras, suporte dedicado e foco total em resultados para imobiliárias e profissionais do ramo."
    }
  ];

  return (
    <section id="faq" className="relative py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#181818] overflow-hidden">
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Perguntas <span className="text-[#008fff]">Frequentes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Encontre respostas para as perguntas mais comuns sobre nossos serviços e soluções
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#008fff] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-gray-300">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 