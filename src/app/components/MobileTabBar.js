"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileTabBar() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Fleet", href: "/fleet", icon: "🚙" },
    { name: "Book", href: "/contact", icon: "📅" },
    { name: "Contact", href: "/contact", icon: "💬" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-black/95 backdrop-blur-md border-t border-border pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center py-3">
        {tabs.map((tab) => {
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
  );
}