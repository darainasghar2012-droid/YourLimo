"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BookingModal from "./BookingModal";

export default function MobileTabBar() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);

  const tabs = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Fleet", href: "/fleet", icon: "🚙" },
  ];

  const tabs2 = [
    { name: "Contact", href: "/contact", icon: "💬" },
  ];

  return (
    <>
      <nav
        className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-black/95 backdrop-blur-md border border-gold/30 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center gap-3 px-7 py-2.5">
          {tabs.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`flex flex-col items-center justify-center gap-0.5 px-4 py-2 rounded-full text-[10px] transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 ${
                  active ? "text-gold bg-gold/10" : "text-gray-500"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.name}
              </Link>
            );
          })}

          <button
            onClick={() => setModalOpen(true)}
            className="flex flex-col items-center justify-center gap-0.5 px-4 py-2 mx-1 rounded-full bg-gold text-black text-[10px] font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 shadow-[0_0_15px_rgba(201,164,76,0.5)]"
          >
            <span className="text-lg">📅</span>
            Book
          </button>

          {tabs2.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`flex flex-col items-center justify-center gap-0.5 px-4 py-2 rounded-full text-[10px] transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 ${
                  active ? "text-gold bg-gold/10" : "text-gray-500"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
    </>
  );
}