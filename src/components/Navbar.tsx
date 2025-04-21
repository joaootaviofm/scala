"use client";

import { motion } from "framer-motion";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
  const navItems = ["Início", "Serviços", "Sobre", "Como funciona?"];

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
            <a href="#" className="tracking-[1px]">
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
      <div className="hover:scale-110 duration-300 md:flex hidden">
        <motion.a
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1}}
          href="#"
          className="tracking-[1px] text-[18px] border font-light border-white hover:bg-white hover:text-[#181818] duration-300 px-5 py-4"
        >
          Contato
        </motion.a>
      </div>
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
                <a
                  href="#"
                  className="block hover:text-[#008fff] transition-colors duration-300"
                  onClick={() => setNavOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
