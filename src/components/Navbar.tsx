"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
  const navItems = ["Início", "Sobre", "Serviços", "Como funciona?"];

  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="backdrop-blur-2xl bg-[#181818]/20 border-b border-white/10 fixed z-10 w-full flex items-center justify-around py-14 font-regular text-white">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="tracking-[2px] text-4xl font-bold hover:scale-105 duration-300 cursor-default"
        >
          scala <span className="text-[#008fff]">ai</span>
        </motion.h1>
      </div>
      <ul className="md:flex gap-10 hidden">
        {navItems.map((item, index) => (
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 * index }}
            key={index}
            className="hover:scale-110 duration-300 border-b border-transparent hover:border-white py-[2px]"
          >
            <Link
              to={
                item == "Início"
                  ? "hero"
                  : item == "Serviços"
                  ? "services"
                  : item == "Sobre"
                  ? "about"
                  : item == "Como funciona?"
                  ? "howitworks"
                  : "#"
              }
              spy={true}
              smooth={true}
              offset={
                item == "Início"
                  ? 0
                  : item == "Serviços"
                  ? -150
                  : item == "Sobre"
                  ? -200
                  : item == "Como funciona?"
                  ? -200
                  : 0
              }
              duration={700}
              className="tracking-[1px] cursor-pointer"
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hover:scale-110 duration-300 md:flex cursor-pointer hidden"
      >
        <Link
          to="contact"
          onClick={() => setNavOpen(false)}
          spy={true}
          smooth={true}
          duration={700}
          offset={-150}
          className="tracking-[1px] text-[18px] border font-light border-white hover:bg-white hover:text-[#181818] duration-300 px-5 py-4"
        >
          Contato
        </Link>
      </motion.div>
      <div className="flex md:hidden">
        <HiOutlineMenu
          onClick={() => setNavOpen(!navOpen)}
          className="text-3xl text-white cursor-pointer"
        />
        {navOpen && (
          <ul className="bg-black border border-white/30 text-white rounded-2xl absolute w-[80%] top-[160px] left-1/2 -translate-x-1/2 p-4 z-50 shadow-white/40 shadow-lg">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="py-3 text-center border-b border-white/10 last:border-0"
              >
                <Link
                  to={
                    item == "Início"
                      ? "hero"
                      : item == "Serviços"
                      ? "services"
                      : item == "Sobre"
                      ? "about"
                      : item == "Como funciona?"
                      ? "howitworks"
                      : "#"
                  }
                  spy={true}
                  smooth={true}
                  offset={
                    item == "Início"
                      ? -300
                      : item == "Serviços"
                      ? -100
                      : item == "Sobre"
                      ? -150
                      : item == "Como funciona?"
                      ? -120
                      : 0
                  }
                  duration={700}
                  className="block hover:text-[#008fff] transition-colors duration-300"
                  onClick={() => setNavOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li className="py-3 text-center border-b border-white/10">
              <Link
                onClick={() => setNavOpen(false)}
                to="contact"
                spy={true}
                smooth={true}
                duration={700}
                offset={-120}
              >
                Contato
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
