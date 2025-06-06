"use client";

import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 bg-gradient-to-b from-[#181818] to-[#0a0a0a] overflow-hidden"
    >
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
            <BrainCircuit className="w-8 h-8 text-[#008fff] mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Sobre <span className="text-[#008fff]">nós</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Transformando negócios imobiliários com inteligência artificial e
            presença digital.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                A Scala AI posiciona sua imobiliária no digital com estratégias
                inteligentes. Criamos uma presença online forte, atraímos os
                leads certos e automatizamos seus processos com IA — tudo
                funcionando 24h por dia pra te gerar mais oportunidades de
                venda.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Você foca nas negociações. A gente cuida do digital. Nossos
                sistemas de IA atraem clientes ideais todos os dias, automatizam
                atendimento com chatbots e mantêm suas campanhas rodando no
                piloto automático, sem você precisar se preocupar.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Chega de contar com sorte ou indicações. Com a Scala AI, sua
                imobiliária atrai leads prontos pra comprar, ganha presença
                digital de verdade e escala com processos inteligentes — sem
                sobrecarregar sua rotina.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4452FE]/20 to-[#008fff]/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div
                      key={item}
                      className="aspect-square bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: item * 0.1 }}
                    >
                      <span className="text-4xl">✨</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
