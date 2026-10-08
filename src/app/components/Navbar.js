"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BookingModal from "./BookingModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Services", href: "/services" },
    { name: "Fleet", href: "/fleet" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#3B2314]/95 backdrop-blur-md border-b border-[#8B5E3C] shadow-lg"
          : "bg-[#3B2314]/85 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto text-[#FAF3E8]">
        <Link href="/" className="text-xl font-bold tracking-widest uppercase">
          YOUR<span className="text-[#C9A27A]">LIMO</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[#F5EBDD]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#C9A27A] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+16478333003"
            className="text-sm text-[#F5EBDD] hover:text-[#C9A27A] transition-colors duration-300"
          >
            (647) 833-3003
          </a>
         <button
            onClick={() => setModalOpen(true)}
            className="shine-button border border-[#C9A27A] bg-[#C9A27A] text-[#3B2314] px-5 py-2 rounded-full uppercase tracking-widest text-xs hover:bg-[#E2C8A8] hover:text-[#3B2314] transition-all duration-300"
          >
            Book Now
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#C9A27A] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#3B2314] border-t border-[#8B5E3C]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-[#F5EBDD] hover:text-[#C9A27A]"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+16478333003"
            className="text-sm text-[#F5EBDD] hover:text-[#C9A27A]"
          >
            (647) 833-3003
          </a>
          <button
            onClick={() => {
              setModalOpen(true);
              setMenuOpen(false);
            }}
            className="border border-[#C9A27A] bg-[#C9A27A] text-[#3B2314] px-6 py-2 rounded-full uppercase tracking-widest text-xs hover:bg-[#E2C8A8] hover:text-[#3B2314] transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      )}

      {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
    </header>
  );
}