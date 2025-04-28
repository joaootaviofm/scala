"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navItems = ["Início", "Sobre", "Serviços", "Como funciona?", "FAQ"];
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#181818]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={700}
              offset={0}
              className="cursor-pointer"
            >
              <h1 className="text-3xl font-bold text-white hover:text-[#008fff] transition-colors duration-300">
                scala <span className="text-[#008fff]">ai</span>
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={
                    item === "Início"
                      ? "hero"
                      : item === "Serviços"
                      ? "services"
                      : item === "Sobre"
                      ? "about"
                      : item === "Como funciona?"
                      ? "howitworks"
                      : item === "FAQ"
                      ? "faq"
                      : "#"
                  }
                  spy={true}
                  smooth={true}
                  offset={
                    item === "Início"
                      ? 0
                      : item === "Serviços"
                      ? -10
                      : item === "Sobre"
                      ? 0
                      : item === "Como funciona?"
                      ? -100
                      : item === "FAQ"
                      ? -100
                      : 0
                  }
                  duration={700}
                  className="text-white hover:cursor-pointer hover:text-[#008fff] transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#008fff] transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
            <motion.li
              className="hover:scale-110 duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={700}
                offset={-150}
                className="cursor-pointer px-4 py-2 bg-[#008fff] text-white rounded-lg hover:bg-[#008fff]/90 transition-colors duration-300"
              >
                Contato
              </Link>
            </motion.li>
          </motion.ul>

          {/* Mobile Navigation Toggle */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden text-white"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiOutlineMenu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: navOpen ? 1 : 0, y: navOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden absolute top-20 left-0 w-full bg-[#181818]/80 backdrop-blur-xl border-b border-white/10 ${
          navOpen ? "block" : "hidden"
        }`}
      >
        <ul className="py-4 px-4 space-y-4">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={
                  item === "Início"
                    ? "hero"
                    : item === "Serviços"
                    ? "services"
                    : item === "Sobre"
                    ? "about"
                    : item === "Como funciona?"
                    ? "howitworks"
                    : item === "FAQ"
                    ? "faq"
                    : "#"
                }
                spy={true}
                smooth={true}
                offset={
                  item === "Início"
                    ? -300
                    : item === "Serviços"
                    ? -100
                    : item === "Sobre"
                    ? -150
                    : item === "Como funciona?"
                    ? -120
                    : item === "FAQ"
                    ? -100
                    : 0
                }
                duration={700}
                className="block text-white hover:text-[#008fff] transition-colors duration-300 py-2"
                onClick={() => setNavOpen(false)}
              >
                {item}
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={700}
              offset={-120}
              className="block text-center px-4 py-2 bg-[#008fff] text-white rounded-lg hover:bg-[#008fff]/90 transition-colors duration-300"
              onClick={() => setNavOpen(false)}
            >
              Contato
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </motion.nav>
  );
}
