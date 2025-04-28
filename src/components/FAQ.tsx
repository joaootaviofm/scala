"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Com quais tipos de negócios vocês trabalham?",
      answer: "Trabalhamos com empresas de todos os portes e setores, desde pequenos negócios locais até grandes corporações. Nossa especialidade está em ajudar empresas que buscam implementar soluções de IA para melhorar seus processos e resultados."
    },
    {
      question: "Quanto tempo geralmente leva a implementação?",
      answer: "O tempo de implementação varia de acordo com o projeto, mas geralmente iniciamos com uma fase de consultoria de 1-2 semanas, seguida por 2-4 semanas de desenvolvimento e implementação. Projetos mais complexos podem levar mais tempo, mas sempre mantemos você informado sobre o progresso."
    },
    {
      question: "Como funciona o preçamento dos serviços?",
      answer: "Nossos preços são baseados no escopo do projeto e nas necessidades específicas do seu negócio. Oferecemos diferentes pacotes de serviços e também podemos criar soluções personalizadas. Após a consultoria inicial, apresentamos uma proposta detalhada com todos os custos transparentes."
    },
    {
      question: "Vocês oferecem cursos ou treinamentos gratuitos?",
      answer: "Sim! Além dos nossos serviços, oferecemos webinars gratuitos e materiais educativos sobre IA e automação. Também realizamos workshops e treinamentos para ajudar sua equipe a entender e aproveitar melhor as soluções implementadas."
    },
    {
      question: "Em quais indústrias vocês são especializados?",
      answer: "Temos experiência em diversos setores, incluindo varejo, saúde, educação, serviços financeiros, imobiliário e muito mais. Nossa equipe multidisciplinar nos permite adaptar soluções específicas para cada setor, garantindo os melhores resultados."
    },
    {
      question: "Vocês constroem soluções do zero ou utilizam ferramentas existentes?",
      answer: "Utilizamos uma abordagem híbrida. Para algumas necessidades, aproveitamos ferramentas robustas e testadas do mercado, enquanto para casos específicos, desenvolvemos soluções personalizadas. Isso nos permite oferecer a melhor solução para cada caso, com eficiência e custo-benefício."
    },
    {
      question: "Como saber se a IA é adequada para o meu negócio?",
      answer: "Durante nossa consultoria gratuita, avaliamos seu negócio e identificamos oportunidades onde a IA pode trazer benefícios reais. Analisamos fatores como volume de dados, processos repetitivos, necessidades de automação e objetivos de negócio para determinar a melhor abordagem."
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
              className="cursor-pointer bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm overflow-hidden"
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