"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="flex-1 pt-32 pb-24 px-6 bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl mb-4">Request a Quote</h1>
        <p className="text-gray-400 mb-12">
          Fill out the form below and we'll get back to you with a quote as
          soon as possible.
        </p>

        {submitted ? (
          <div className="border border-gold rounded-lg p-10">
            <h2 className="text-2xl text-gold-light mb-3">Thank you!</h2>
            <p className="text-gray-400">
              Your request has been received. We'll be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="bg-dark-grey border border-gray-800 rounded-md px-4 py-3 focus:border-gold outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="bg-dark-grey border border-gray-800 rounded-md px-4 py-3 focus:border-gold outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-dark-grey border border-gray-800 rounded-md px-4 py-3 focus:border-gold outline-none"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Pickup Location"
                required
                className="bg-dark-grey border border-gray-800 rounded-md px-4 py-3 focus:border-gold outline-none"
              />
              <input
                type="text"
                placeholder="Dropoff Location"
                required
                className="bg-dark-grey border border-gray-800 rounded-md px-4 py-3 focus:border-gold outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                required
                className="bg-dark-grey border border-gray-800 rounded-md px-4 py-3 focus:border-gold outline-none"
              />
              <input
                type="time"
                required
                className="bg-dark-grey border border-gray-800 rounded-md px-4 py-3 focus:border-gold outline-none"
              />
            </div>
            <input
              type="number"
              placeholder="Number of Passengers"
              min="1"
              required
              className="bg-dark-grey border border-gray-800 rounded-md px-4 py-3 focus:border-gold outline-none"
            />
            <textarea
              placeholder="Special Requests"
              rows="4"
              className="bg-dark-grey border border-gray-800 rounded-md px-4 py-3 focus:border-gold outline-none"
            ></textarea>
            <button
              type="submit"
              className="border border-gold text-gold px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300 mt-2"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
