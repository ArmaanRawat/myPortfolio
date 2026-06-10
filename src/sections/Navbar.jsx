import React, { useState } from "react";
import { motion as Motion } from "motion/react";

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
          href="https://drive.google.com/file/d/1wMBDn461G_V4foKJWsXj4qffMfaxQg40/view?usp=sharing"
          className="nav-link ml-1 border-black/10 bg-neutral-950 px-4 text-white shadow-sm hover:border-white/70 hover:bg-neutral-950/80 hover:text-white hover:backdrop-blur-2xl"
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
    <div className="fixed inset-x-0 z-20 w-full border-b border-white/50 bg-white/55 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="font-display text-xl font-bold text-neutral-950 transition-colors hover:text-neutral-600">
            Armaan Rawat
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-900 hover:text-neutral-600 focus:outline-none sm:hidden">
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="h-6 w-6 invert"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <Motion.div
          className="block overflow-hidden border-t border-white/60 bg-white/80 text-center shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}>
          <nav className="pb-5">
            <Navigation />
          </nav>
        </Motion.div>
      )}
    </div>
  );
}

export default Navbar;
