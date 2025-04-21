"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      id="hero"
      className="md:mx-0 mx-4 text-white flex flex-col items-center md:pt-[180px] pt-[280px] md:justify-center h-screen gap-[17px]"
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:text-[60px] text-[25px] font-medium tracking-[0.2px] md:leading-[88px] text-center"
      >
        <span className="text-[#008fff]">Escale 2x</span> mais rápido <br />
        usando <span className="text-[#008fff]">Inteligência Artificial</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-[14px] md:text-[18px]"
      >
        Sistemas automatizados que captam clientes, respondem automaticamente e
        fecham negócios <br /> enquanto você só precisa se preocupar com seu
        trabalho.
      </motion.p>

      <div className="mt-10 flex gap-10 font-medium">
        <motion.a
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          href="#"
          className="md:px-7 md:py-5 px-3 py-3 bg-[#4452FE] hover:bg-transparent border border-transparent hover:shadow-xl shadow-white/10 hover:border-white hover:scale-110 duration-300 text-[17px]"
        >
          Análise gratuita
        </motion.a>

        <motion.a
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#"
          className="md:px-7 md:py-5 px-3 py-3 border text-[17px] hover:bg-[#4452FE] hover:border-transparent hover:shadow-xl shadow-white/10 hover:scale-110 duration-300"
        >
          Saiba mais
        </motion.a>
      </div>
    </section>
  );
}
