// import Image from "next/image";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Services/>
      <HowItWorks/>
      <Contact/>
    </div>
  );
}
