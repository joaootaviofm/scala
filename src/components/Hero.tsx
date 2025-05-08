"use client";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#181818] to-[#0a0a0a] md:pt-[120px] pt-[120px]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,143,255,0.1),transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(68,82,254,0.1),transparent_50%)]" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center h-full gap-12 w-full">
          {/* Left Content */}
          <motion.div 
            className="flex-1 flex flex-col items-center md:items-start justify-center space-y-8 text-white text-center md:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Construímos Soluções de IA Inteligentes focadas no crescimento do seu negócio.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Ajudamos imobiliárias e corretores a multiplicar resultados com automações em Inteligência Artificial, geração de leads qualificados e estratégias comprovadas — para que você trabalhe menos, venda mais e escale seu negócio.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={700}
                offset={-140}
                className="group cursor-pointer px-8 py-4 bg-[#4452FE] text-white rounded-lg hover:bg-[#4452FE]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#4452FE]/20 relative overflow-hidden"
              >
                <span className="relative z-10">Análise gratuita</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={700}
                offset={-250}
                className="group cursor-pointer px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Saiba mais</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-2xl aspect-square">
              <motion.div
                className="absolute inset-0 bg-[#4452FE]/20 rounded-full blur-3xl"
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
              <Image
                src="/bg-semfundo.png"
                alt="Hero Image"
                fill
                className="object-contain relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays for mobile */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-transparent z-10" />
        <div className="md:hidden absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black/50 to-transparent z-10" />
      </div>
    </section>
  );
}
