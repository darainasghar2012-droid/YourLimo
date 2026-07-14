"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PageTransition({ children }) {
  const router = useRouter();
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    function handleClick(e) {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || !href.startsWith("/") || link.target === "_blank") return;

      e.preventDefault();
      setOverlayVisible(true);

      setTimeout(() => {
        router.push(href);
        setTimeout(() => setOverlayVisible(false), 50);
      }, 150);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [router]);

  return (
    <>
      <div
className={`fixed inset-0 bg-black z-[200] pointer-events-none transition-opacity duration-150 ${          overlayVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      {children}
    </>
  );
}