"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const googleReviewUrl = "https://g.page/r/CVnPe0oPZQrOECE/review";

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
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviewSending, setReviewSending] = useState(false);
  const [reviewError, setReviewError] = useState(false);
  const [rating, setRating] = useState(0);

  function handleReviewSubmit(event) {
    event.preventDefault();
    if (!rating) {
      setReviewError(true);
      return;
    }

    setReviewSending(true);
    setReviewError(false);
    const formData = new FormData(event.currentTarget);

    emailjs
      .send(
        "service_95rcxko",
        "template_w1x456m",
        {
          name: formData.get("name") || "Website visitor",
          email: formData.get("email") || "Not provided",
          phone: "Website review submission",
          pickup: "Customer review",
          dropoff: "",
          date: "",
          time: "",
          passengers: "",
          message: `Rating: ${rating}/5 stars\n\n${formData.get("review")}`,
        },
        "GTlJY6rGVOkzVuY6-"
      )
      .then(() => {
        setReviewSubmitted(true);
        setReviewSending(false);
      })
      .catch((error) => {
        console.error("Review submission failed:", error);
        setReviewError(true);
        setReviewSending(false);
      });
  }

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

      <div className="mt-12 border-t border-border pt-8">
        {reviewSubmitted ? (
          <div className="mx-auto max-w-xl text-center" role="status">
            <h3 className="text-xl text-gold mb-2">Thank you for sharing your experience.</h3>
            <p className="text-gray-400 text-sm">
              Your review has been sent to our team for review before it is published.
            </p>
            <p className="text-gray-400 text-sm mt-2 mb-4">
              Want to share it on Google too? Google will ask you to submit it there.
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold bg-gold text-black px-6 py-3 rounded-full uppercase tracking-widest text-xs hover:bg-gold-light transition-colors"
            >
              Continue to Google Reviews
            </a>
          </div>
        ) : (
          <div className="mx-auto max-w-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-xl text-foreground">Share your experience</h3>
                <p className="text-gray-400 text-sm">Send a review to our team for approval.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => setReviewOpen((open) => !open)}
                  aria-expanded={reviewOpen}
                  className="border border-gold bg-gold text-black px-6 py-3 rounded-full uppercase tracking-widest text-xs hover:bg-gold-light transition-colors"
                >
                  {reviewOpen ? "Close form" : "Write a review"}
                </button>
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold text-gold px-6 py-3 rounded-full uppercase tracking-widest text-xs hover:bg-card transition-colors"
                >
                  Review us on Google
                </a>
              </div>
            </div>

            {reviewOpen && (
              <form onSubmit={handleReviewSubmit} className="mt-6 border border-border bg-background/70 rounded-xl p-6 text-left">
                <fieldset className="mb-5">
                  <legend className="text-sm font-semibold mb-2">Your rating</legend>
                  <div className="flex gap-2" aria-label="Choose a rating from 1 to 5 stars">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setRating(value)}
                        aria-label={`${value} ${value === 1 ? "star" : "stars"}`}
                        aria-pressed={rating === value}
                        className={`text-2xl transition-colors ${value <= rating ? "text-gold" : "text-gray-500"}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label className="block text-sm font-semibold mb-1" htmlFor="review-name">Name (optional)</label>
                <input
                  id="review-name"
                  name="name"
                  autoComplete="name"
                  className="w-full bg-card border border-border rounded-md px-4 py-3 mb-4 focus:border-gold outline-none"
                />

                <label className="block text-sm font-semibold mb-1" htmlFor="review-email">Email (optional)</label>
                <input
                  id="review-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full bg-card border border-border rounded-md px-4 py-3 mb-4 focus:border-gold outline-none"
                />

                <label className="block text-sm font-semibold mb-1" htmlFor="review-text">Your review</label>
                <textarea
                  id="review-text"
                  name="review"
                  required
                  minLength={10}
                  maxLength={1500}
                  rows={4}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 mb-4 focus:border-gold outline-none"
                />

                {reviewError && (
                  <p className="text-red-800 text-sm mb-4" role="alert">
                    {rating ? "We couldn't send your review. Please try again." : "Please select a star rating."}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={reviewSending}
                  className="border border-gold bg-gold text-black px-6 py-3 rounded-full uppercase tracking-widest text-xs hover:bg-gold-light disabled:opacity-60 transition-colors"
                >
                  {reviewSending ? "Sending..." : "Send for review"}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}