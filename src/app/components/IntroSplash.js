"use client";

import { useState, useEffect } from "react";

export default function IntroSplash() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("introSeen");
    if (!alreadySeen) {
      setVisible(true);
      sessionStorage.setItem("introSeen", "true");

      const autoClose = setTimeout(() => {
        handleClose();
      }, 3000);

      return () => clearTimeout(autoClose);
    }
  }, []);

  function handleClose() {
    setFadeOut(true);
    setTimeout(() => setVisible(false), 500);
  }

  if (!visible) return null;

  return (
    <div
className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-black to-card px-6 transition-all duration-500 ${        fadeOut ? "opacity-0 scale-95 -translate-y-4" : "opacity-100 scale-100"
      }`}
    >
      <p className="text-gold italic text-lg md:text-2xl mb-2 tracking-wide">
        Niagara's Premier Chauffeur Service
      </p>
      <p className="text-gray-400 text-sm md:text-base mb-8">
        Arrive in Style. Travel in Luxury.
      </p>
      <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />
      <button
        onClick={handleClose}
        className="border border-gold text-gold px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Continue to Website
      </button>
    </div>
  );
}