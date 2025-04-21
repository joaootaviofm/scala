// app/agendamento/page.jsx ou em qualquer componente de página
"use client";
import { useEffect } from "react";

export default function Agendamento() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="flex flex-col items-center justify-center py-12 px-4 bg-[#181818] text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Agende sua consultoria <span className="text-[#008fff]">gratuitamente</span></h2>

      <div
        className="calendly-inline-widget md:w-[1000px] h-[700px]"
        data-url="https://calendly.com/agenciascalaai/consultoria-gratuita?background_color=0a0a0a&text_color=ffffff"
      ></div>
    </section>
  );
}
