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