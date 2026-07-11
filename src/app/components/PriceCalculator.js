"use client";

import { useState } from "react";

const vehicles = [
  "Cadillac Escalade",
  "GMC Yukon Denali",
  "Chevrolet Suburban",
  "Lincoln Navigator",
  "Mercedes-Benz E-Class",
  "BMW 5 Series",
  "Mercedes-Benz S-Class",
];

export default function PriceCalculator() {
  const [mode, setMode] = useState("distance");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [hours, setHours] = useState(3);
  const [passengers, setPassengers] = useState(1);
  const [vehicle, setVehicle] = useState(vehicles[0]);

  function buildMessage() {
    let msg = `Hi! I'd like a quote for a ride with YourLimo.%0A%0A`;
    msg += `Vehicle: ${vehicle}%0A`;
    msg += `Passengers: ${passengers}%0A`;
    if (mode === "distance") {
      msg += `Pickup: ${pickup}%0A`;
      msg += `Dropoff: ${dropoff}%0A`;
    } else {
      msg += `Hours needed: ${hours}%0A`;
      msg += `Pickup: ${pickup}%0A`;
    }
    return msg;
  }

  function handleWhatsApp(e) {
    e.preventDefault();
    window.open(`https://wa.me/16478333003?text=${buildMessage()}`, "_blank");
  }

  function handleEmail(e) {
    e.preventDefault();
    const subject = "Quote Request - YourLimo";
    window.location.href = `mailto:YourEliteLimo@hotmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${buildMessage().replace(/%0A/g, "\n")}`;
  }

  return (
    <div className="max-w-3xl mx-auto border border-border rounded-xl p-8 bg-black text-left">
      {/* Mode toggle */}
      <div className="flex gap-2 mb-6 bg-card rounded-full p-1 w-fit mx-auto">
        <button
          onClick={() => setMode("distance")}
          className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
            mode === "distance" ? "bg-gold text-black" : "text-gray-400"
          }`}
        >
          Point-to-Point
        </button>
        <button
          onClick={() => setMode("hourly")}
          className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
            mode === "hourly" ? "bg-gold text-black" : "text-gray-400"
          }`}
        >
          Hourly
        </button>
      </div>

      <form className="flex flex-col gap-4">
        <div>
          <label className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
            Pickup Location
          </label>
          <input
            type="text"
            required
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="e.g. Niagara Falls, ON"
            className="w-full bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
          />
        </div>

        {mode === "distance" ? (
          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
              Dropoff Location
            </label>
            <input
              type="text"
              required
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="e.g. Toronto Pearson Airport"
              className="w-full bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
            />
          </div>
        ) : (
          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
              Hours (3 hour minimum)
            </label>
            <input
              type="number"
              min="3"
              required
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value) || 3)}
              className="w-full bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
              Vehicle Class
            </label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
            >
              {vehicles.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
              Passengers
            </label>
            <input
              type="number"
              min="1"
              max="7"
              value={passengers}
              onChange={(e) => setPassengers(parseInt(e.target.value) || 1)}
              className="w-full bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <button
            onClick={handleWhatsApp}
            className="text-center bg-[#25D366] text-white px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:opacity-90 transition-all duration-300"
          >
            Get Quote via WhatsApp
          </button>
          <button
            onClick={handleEmail}
            className="text-center border border-gold text-gold px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300"
          >
            Get Quote via Email
          </button>
        </div>
      </form>
    </div>
  );
}