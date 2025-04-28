"use client";

import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Consultoria Gratuita",
      description: "Iniciamos com uma consultoria gratuita para entender profundamente seus objetivos de negócio e requisitos técnicos.",
      items: [
        "Identificação de necessidades",
        "Análise de objetivos",
        "Avaliação inicial de viabilidade",
      ],
    },
    {
      number: "2",
      title: "Proposta Detalhada",
      description: "Com base na consultoria, elaboramos um escopo completo com todos os detalhes do projeto.",
      items: [
        "Cronograma de execução",
        "Orçamento transparente",
        "Especificações técnicas claras",
      ],
    },
    {
      number: "3",
      title: "Desenvolvimento do Projeto",
      description: "Após a aprovação da proposta, iniciamos o desenvolvimento da sua solução personalizada de IA.",
      items: [
        "Implementação especializada",
        "Acompanhamento contínuo",
        "Entrega de resultados mensuráveis",
      ],
    },
  ];

  return (
    <section id="howitworks" className="relative py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#181818] overflow-hidden">
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
            Como <span className="text-[#008fff]">funciona?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Nossa abordagem simplificada para implementar soluções de IA no seu negócio
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4452FE]/20 to-[#008fff]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-[#008fff]/20 p-3 rounded-full mr-4">
                    <span className="text-[#008fff] font-bold text-xl">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + itemIndex * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle size={18} className="text-[#008fff] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={700}
            offset={-150}
            className="group inline-flex items-center gap-2 cursor-pointer bg-[#4452FE] hover:bg-transparent text-white font-medium py-4 px-8 rounded-lg border border-transparent hover:border-white transition-all duration-300 hover:scale-105"
          >
            Agende sua consultoria gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
