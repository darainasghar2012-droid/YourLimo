"use client";

import { useState } from "react";

const vehicles = [
  { name: "Cadillac Escalade", tag: "Flagship SUV", passengers: 7, image: "https://media.base44.com/images/public/69d46fab088f7d4b08dcce00/ac665e4dc_generated_image.png" },
  { name: "GMC Yukon Denali", tag: "Most Popular", passengers: 7, image: "https://media.base44.com/images/public/69d46fab088f7d4b08dcce00/2e43e5bac_generated_image.png" },
  { name: "Chevrolet Suburban", tag: "Group SUV", passengers: 7, image: "https://media.base44.com/images/public/69d46fab088f7d4b08dcce00/4f2b05cd6_generated_image.png" },
  { name: "Lincoln Navigator", tag: "Ultra-Luxury SUV", passengers: 7, image: "https://media.base44.com/images/public/69d46fab088f7d4b08dcce00/c6e47459b_generated_image.png" },
  { name: "Mercedes-Benz E-Class", tag: "Executive Sedan", passengers: 4, image: "https://media.base44.com/images/public/69d46fab088f7d4b08dcce00/212e74a02_generated_image.png" },
  { name: "BMW 5 Series", tag: "Sport Executive", passengers: 4, image: "https://media.base44.com/images/public/69d46fab088f7d4b08dcce00/cf776f04d_generated_image.png" },
  { name: "Mercedes-Benz S-Class", tag: "Pinnacle Sedan", passengers: 4, image: "https://media.base44.com/images/public/69d46fab088f7d4b08dcce00/3add36bc0_generated_image.png" },
];

export default function FleetShowcase() {
  const [active, setActive] = useState(0);
  const vehicle = vehicles[active];

  function next() {
    setActive((prev) => (prev + 1) % vehicles.length);
  }

  function prev() {
    setActive((prev) => (prev - 1 + vehicles.length) % vehicles.length);
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Featured display */}
      <div className="border border-border rounded-xl overflow-hidden mb-6">
        <div className="relative h-64 md:h-80 bg-card flex items-center justify-center overflow-hidden">
          <span className="absolute top-4 left-4 z-10 bg-gold text-black text-xs uppercase tracking-widest px-3 py-1 rounded-full font-medium">
            {vehicle.tag}
          </span>
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all"
          >
            ›
          </button>
        </div>
        <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-2xl text-gold-light mb-1">{vehicle.name}</h3>
            <p className="text-gray-400 text-sm">
              {vehicle.passengers} Passengers
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/contact"
              className="border border-gold text-gold px-5 py-2 rounded-full uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-all duration-300"
            >
              Book This Vehicle
            </a>
            <a
              href="tel:+16478333003"
              className="border border-border text-gray-300 px-5 py-2 rounded-full uppercase tracking-widest text-xs hover:border-gold hover:text-gold transition-all duration-300"
            >
              Call to Enquire
            </a>
          </div>
        </div>
      </div>

      {/* Thumbnail row */}
{/* Thumbnail row */}
      <div className="flex flex-wrap justify-center gap-3">        {vehicles.map((v, i) => (
          <button
            key={v.name}
            onClick={() => setActive(i)}
            className={`rounded-lg border overflow-hidden transition-all duration-300 w-[calc(25%-9px)] md:w-[calc(14.28%-11px)] ${
              i === active
                ? "border-gold bg-gold/10"
                : "border-border hover:border-gold/50"
            }`}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={v.image}
                alt={v.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className={`text-[10px] text-center py-1.5 px-1 leading-tight ${
                i === active ? "text-gold" : "text-gray-500"
              }`}
            >
              {v.name.split(" ")[0]}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}