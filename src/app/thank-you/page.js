export default function ThankYou() {
  return (
    <main className="flex-1 pt-40 pb-24 px-6 bg-black text-center">
      <div className="max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-gold/10 text-gold text-3xl flex items-center justify-center mx-auto mb-6">
          ✓
        </div>
        <h1 className="text-4xl mb-4">Booking Confirmed</h1>
        <p className="text-gray-400 mb-8">
          Thank you! Your deposit has been received and your ride is booked.
          We'll be in touch shortly to confirm the final details.
        </p>
        <a
          href="/"
          className="inline-block border border-gold text-gold px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}