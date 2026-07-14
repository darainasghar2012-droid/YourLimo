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

      <a
        href="https://wa.me/16478333003?text=Hi!%20I'd%20like%20to%20book%20a%20ride%20with%20YourLimo."
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-4 right-4 z-40 w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg active:scale-90 transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12.004 2c-5.523 0-10 4.477-10 10 0 1.766.458 3.492 1.33 5.012L2 22l5.13-1.315A9.955 9.955 0 0012.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.19a8.17 8.17 0 01-4.166-1.143l-.299-.177-3.106.797.83-3.03-.194-.31A8.19 8.19 0 1120.19 12c0 4.516-3.674 8.19-8.186 8.19z"/>
        </svg>
      </a>
    </>
  );
}