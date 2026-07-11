"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const formData = new FormData(e.target);
    const templateParams = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      pickup: formData.get("pickup"),
      dropoff: formData.get("dropoff"),
      date: formData.get("date"),
      time: formData.get("time"),
      passengers: formData.get("passengers"),
      message: formData.get("message"),
    };

    emailjs
      .send(
        "service_95rcxko",
        "template_w1x456m",
        templateParams,
        "GTlJY6rGVOkzVuY6-"
      )
      .then(() => {
        setSubmitted(true);
        setSending(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setSending(false);
      });
  }

  return (
    <main className="flex-1 pt-32 pb-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a quote as
            soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="border border-border rounded-lg p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                📞
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+16478333003" className="text-white hover:text-gold transition-colors">
                  (647) 833-3003
                </a>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                ✉️
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:YourEliteLimo@hotmail.com" className="text-white hover:text-gold transition-colors">
                  YourEliteLimo@hotmail.com
                </a>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                📍
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Location</p>
                <p className="text-white">Niagara Region, Ontario, Canada</p>
              </div>
            </div>

            <a
              href="https://wa.me/16478333003?text=Hi!%20I'd%20like%20to%20book%20a%20ride%20with%20YourLimo."
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-[#25D366] text-white px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:opacity-90 transition-all duration-300"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+16478333003"
              className="text-center border border-gold text-gold px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300"
            >
              Call Now
            </a>
          </div>

          {/* Right form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="border border-gold rounded-lg p-10 text-center">
                <h2 className="text-2xl text-gold-light mb-3">Thank you!</h2>
                <p className="text-gray-400">
                  Your request has been received. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="pickup"
                    placeholder="Pickup Location"
                    required
                    className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
                  />
                  <input
                    type="text"
                    name="dropoff"
                    placeholder="Dropoff Location"
                    required
                    className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="date"
                    required
                    className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
                  />
                  <input
                    type="time"
                    name="time"
                    required
                    className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
                  />
                </div>
                <input
                  type="number"
                  name="passengers"
                  placeholder="Number of Passengers"
                  min="1"
                  required
                  className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Special Requests"
                  rows="4"
                  className="bg-card border border-border rounded-md px-4 py-3 focus:border-gold outline-none"
                ></textarea>
                {error && (
                  <p className="text-red-400 text-sm">
                    Something went wrong sending your request. Please try calling or WhatsApp instead.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="border border-gold text-gold px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300 mt-2 disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}