"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";

const vehicles = [
  { name: "Cadillac Escalade", tag: "Flagship SUV", passengers: 7 },
  { name: "GMC Yukon Denali", tag: "Most Popular", passengers: 7 },
  { name: "Chevrolet Suburban", tag: "Group SUV", passengers: 7 },
  { name: "Lincoln Navigator", tag: "Ultra-Luxury SUV", passengers: 7 },
  { name: "Mercedes-Benz E-Class", tag: "Executive Sedan", passengers: 4 },
  { name: "BMW 5 Series", tag: "Sport Executive", passengers: 4 },
  { name: "Mercedes-Benz S-Class", tag: "Pinnacle Sedan", passengers: 4 },
];

export default function BookingModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [vehicle, setVehicle] = useState(null);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_95rcxko",
        "template_w1x456m",
        {
          name,
          phone,
          email,
          pickup,
          dropoff,
          date,
          time,
          passengers,
          message: `Vehicle requested: ${vehicle?.name}. ${notes}`,
        },
        "GTlJY6rGVOkzVuY6-"
      )
      .then(() => {
        setDone(true);
        setSending(false);
      })
      .catch(() => {
        setSending(false);
        alert("Something went wrong. Please try WhatsApp or call us instead.");
      });
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-8 overflow-y-auto">
      <div className="bg-black border border-gold/30 rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 relative my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gold text-xl"
        >
          ✕
        </button>

        {/* Step indicator */}
        {!done && (
          <div className="flex items-center justify-center gap-3 mb-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border ${
                    step >= n
                      ? "bg-gold text-black border-gold"
                      : "border-border text-gray-500"
                  }`}
                >
                  {n}
                </div>
                {n < 3 && <div className={`w-8 h-px ${step > n ? "bg-gold" : "bg-border"}`} />}
              </div>
            ))}
          </div>
        )}

        {done ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-gold/10 text-gold text-3xl flex items-center justify-center mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-2xl text-gold-light mb-2">Request Received</h3>
            <p className="text-gray-400 mb-6">
              We'll be in touch shortly with your custom quote.
            </p>
            <a
              href="https://wa.me/16478333003?text=Hi!%20I%20just%20submitted%20a%20booking%20request%20on%20the%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:opacity-90 transition-all duration-300 mb-3"
            >
              Also Send via WhatsApp
            </a>
            <br />
            <button
              onClick={onClose}
              className="text-gray-400 text-sm hover:text-gold mt-2"
            >
              Done
            </button>
          </div>
        ) : step === 1 ? (
          <div>
            <h3 className="text-2xl mb-6 text-center">Choose Your Vehicle</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {vehicles.map((v) => (
                <button
                  key={v.name}
                  onClick={() => setVehicle(v)}
                  className={`text-left border rounded-lg p-4 transition-all duration-300 ${
                    vehicle?.name === v.name
                      ? "border-gold bg-gold/5"
                      : "border-border hover:border-gold/50"
                  }`}
                >
                  <p className="text-xs text-gold uppercase tracking-widest mb-1">{v.tag}</p>
                  <p className="text-white">{v.name}</p>
                  <p className="text-gray-500 text-xs">{v.passengers} passengers</p>
                </button>
              ))}
            </div>
            <button
              disabled={!vehicle}
              onClick={() => setStep(2)}
              className="w-full border border-gold text-gold px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300 disabled:opacity-30"
            >
              Continue
            </button>
          </div>
        ) : step === 2 ? (
          <div>
            <h3 className="text-2xl mb-6 text-center">Trip Details</h3>
            <div className="flex flex-col gap-4 mb-6">
              <input
                type="text"
                placeholder="Pickup Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
                className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
              />
              <input
                type="text"
                placeholder="Dropoff Location"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                required
                className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
                />
              </div>
              <input
                type="number"
                min="1"
                max={vehicle?.passengers}
                placeholder="Passengers"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                required
                className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
              />
              <textarea
                placeholder="Occasion / Special Requests"
                rows="3"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 border border-border text-gray-300 px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all duration-300"
              >
                Back
              </button>
              <button
                disabled={!pickup || !dropoff || !date || !time}
                onClick={() => setStep(3)}
                className="flex-1 border border-gold text-gold px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300 disabled:opacity-30"
              >
                Continue
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl mb-6 text-center">Your Contact Info</h3>
            <div className="flex flex-col gap-4 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
              />

              {/* Summary */}
              <div className="border border-gold/30 bg-gold/5 rounded-lg p-4 text-sm text-gray-300">
                <p><span className="text-gold">Vehicle:</span> {vehicle?.name}</p>
                <p><span className="text-gold">From:</span> {pickup}</p>
                <p><span className="text-gold">To:</span> {dropoff}</p>
                <p><span className="text-gold">Date/Time:</span> {date} at {time}</p>
                <p><span className="text-gold">Passengers:</span> {passengers}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex-1 border border-border text-gray-300 px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-all duration-300"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={sending}
                className="flex-1 border border-gold text-gold px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300 disabled:opacity-50"
              >
                {sending ? "Sending..." : "Submit Request"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}