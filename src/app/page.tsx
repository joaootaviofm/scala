// import Image from "next/image";

import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
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
      <FAQ/>
      <Contact/>
    </div>
  );
}
