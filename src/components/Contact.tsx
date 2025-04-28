// app/agendamento/page.jsx ou em qualquer componente de página
"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="relative py-24 px-4 bg-gradient-to-b from-[#181818] to-[#0a0a0a] overflow-hidden">
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
            <Calendar className="w-8 h-8 text-[#008fff] mx-auto" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Agende sua <span className="text-[#008fff]">consultoria</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Vamos conversar sobre como podemos ajudar seu negócio a crescer com IA
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm p-8"
        >
          <div
            className="calendly-inline-widget w-full h-[700px]"
            data-url="https://calendly.com/agenciascalaai/consultoria-gratuita?background_color=0a0a0a&text_color=ffffff"
          />
        </motion.div>
      </div>
    </section>
  );
}
