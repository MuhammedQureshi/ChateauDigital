"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-[#f5f2ea]/95 border-b border-[#e5ded2] px-4 sm:px-8 py-4 flex items-center justify-between">
      <a
        href="#top"
        className="text-2xl font-bold text-[#8b735b] font-serif focus:outline-none focus:ring-2 focus:ring-[#8b735b] rounded transition-colors duration-200"
      >
        ChateauDigital
      </a>
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-[#8b735b] font-medium text-base">
        <li>
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" className="hover:underline">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[#8b735b]"
        aria-label="Open menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span
          className={`block w-6 h-0.5 bg-[#8b735b] mb-1 transition-all duration-200 ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#8b735b] mb-1 transition-all duration-200 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#8b735b] transition-all duration-200 ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#f5f2ea] border-b border-[#e5ded2] shadow-lg animate-fade-in z-30">
          <ul className="flex flex-col py-4 px-8 space-y-2 text-[#8b735b] font-medium text-lg">
            <li>
              <a
                href="#"
                className="block py-2 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block py-2 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
} 