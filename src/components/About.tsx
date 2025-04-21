"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="text-white px-5 py-16 flex flex-col justify-center items-center bg-[#0a0a0a]">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="tracking-[2px] text-[60px] font-bold hover:scale-105 duration-300 cursor-default"
      >
        Sobre <span className="text-[#008fff]">nós</span>
      </motion.h1>

      <div className="flex flex-col gap-6 max-w-4xl mt-10 text-center text-lg text-gray-300 leading-relaxed">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          A Scala AI usa inteligência artificial pra colocar seu negócio local
          na frente dos concorrentes. Automação, anúncios e atendimento
          inteligente — tudo rodando 24 horas por dia pra gerar mais vendas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Você cuida do que sabe fazer. A IA faz o resto, campanhas que aprendem
          com o tempo, chatbots que respondem sozinhos, automatiza seu fluxo de
          trabalho e estratégias pensadas pra trazer clientes todos os dias.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Se você quer parar de depender da sorte e começar a escalar com
          estratégia, nós da Scala AI estamos prontos pra te levar pro próximo
          nível.
        </motion.p>
      </div>
    </section>
  );
}
