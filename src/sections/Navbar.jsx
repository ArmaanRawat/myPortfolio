import React, { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="#hero" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="#coding" className="nav-link">
          Coding
        </a>
      </li>
      <li className="nav-li">
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </li>
      <li className="nav-li">
        <a
          href="https://drive.google.com/file/d/15v9UhPkpxQDAK_S8P1a5rMTL2lyLD0dT/view?usp=share_link"
          className="nav-link border border-indigo-500 rounded-full px-4 py-1 ml-2 hover:bg-indigo-600 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          Open Resume
        </a>
      </li>
    </ul>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
            Armaan Rawat
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6 "
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}>
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
