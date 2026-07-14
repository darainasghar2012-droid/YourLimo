"use client";

import { useEffect, useRef, useState } from "react";

export let scriptLoadingPromise = null;

export function loadGoogleMapsScript() {
  if (window.google) return Promise.resolve();
  if (scriptLoadingPromise) return scriptLoadingPromise;

  scriptLoadingPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&libraries=places`;
    script.async = true;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
}

export default function AddressInput({ placeholder, value, onChange, required }) {
  const inputRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    loadGoogleMapsScript().then(() => setScriptLoaded(true));
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: ["ca", "us"] },
      fields: ["formatted_address"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        onChange(place.formatted_address);
      }
    });

    // Force dark styling directly, since Google injects this dropdown
    // outside our normal component tree and CSS can lag behind it.
    const styleInterval = setInterval(() => {
      const container = document.querySelector(".pac-container");
      if (container) {
        container.style.backgroundColor = "#0a0a0a";
        container.style.border = "1px solid rgba(201, 164, 76, 0.3)";
        container.style.color = "#f5f5f5";

        document.querySelectorAll(".pac-item").forEach((item) => {
          item.style.backgroundColor = "#0a0a0a";
          item.style.color = "#f5f5f5";
        });
      }
    }, 300);

    return () => clearInterval(styleInterval);
  }, [scriptLoaded]);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none w-full"
    />
  );
}