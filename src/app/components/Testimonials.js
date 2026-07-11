"use client";

import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Michael R.",
    role: "Corporate Executive, Toronto",
    text: "The Escalade was immaculate and the driver was on time to the minute. This is now my go-to for every client pickup.",
  },
  {
    name: "Sarah & James L.",
    role: "Wedding Clients, Niagara-on-the-Lake",
    text: "The Navigator made our wedding day feel even more special. Professional, punctual, and genuinely kind service.",
  },
  {
    name: "David K.",
    role: "Frequent Traveler, Niagara Region",
    text: "I use YourLimo for every airport transfer now. They track my flight and are always waiting when I land.",
  },
  {
    name: "Patricia M.",
    role: "Corporate Client, Hamilton",
    text: "Booked for an executive retreat and the whole experience was seamless from booking to drop-off.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {reviews.map((review, i) => (
          <button
            key={review.name}
            onClick={() => setActive(i)}
            className={`text-left border rounded-lg p-5 transition-all duration-300 ${
              i === active
                ? "border-gold bg-gold/5"
                : "border-border hover:border-gold/40"
            }`}
          >
            <p className="text-gold text-sm mb-2">★★★★★</p>
            <p className="text-gray-400 text-xs line-clamp-3 mb-3">{review.text}</p>
            <p className="text-white text-sm font-medium">{review.name}</p>
          </button>
        ))}
      </div>

      {/* Featured expanded view */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl italic text-gray-200 mb-4 leading-relaxed">
          "{reviews[active].text}"
        </p>
        <p className="text-gold">{reviews[active].name}</p>
        <p className="text-gray-500 text-sm">{reviews[active].role}</p>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-gold" : "w-1.5 bg-gray-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}