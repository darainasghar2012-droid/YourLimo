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
    { name: "Contact", href: "/contact", icon: "💬" },
  ];

  return (
    <>
      <nav
        className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-black backdrop-blur-md border-t border-border"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex justify-around items-center py-3">
          {tabs.slice(0, 2).map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`flex flex-col items-center gap-1 text-xs transition-colors duration-300 ${
                  active ? "text-gold" : "text-gray-500"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.name}
              </Link>
            );
          })}

          <button
            onClick={() => setModalOpen(true)}
            className="flex flex-col items-center gap-1 text-xs text-gray-500 transition-colors duration-300"
          >
            <span className="text-lg">📅</span>
            Book
          </button>

          {tabs.slice(2).map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`flex flex-col items-center gap-1 text-xs transition-colors duration-300 ${
                  active ? "text-gold" : "text-gray-500"
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