"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-black/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-black/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold tracking-widest uppercase">
          YOUR<span className="text-gold">LIMO</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+16478333003"
            className="text-sm text-white/70 hover:text-gold transition-colors duration-300"
          >
            (647) 833-3003
          </a>
          <Link
            href="/contact"
            className="border border-gold text-gold px-5 py-2 rounded-full uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-all duration-300"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gold text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-black border-t border-border">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-white/70 hover:text-gold"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+16478333003"
            className="text-sm text-white/70 hover:text-gold"
          >
            (647) 833-3003
          </a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="border border-gold text-gold px-6 py-2 rounded-full uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}