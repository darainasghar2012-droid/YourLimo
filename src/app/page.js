export default function Home() {
  return (
    <main className="flex-1">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 bg-gradient-to-b from-black via-dark-grey to-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          YOUR<span className="text-gold">LIMO</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-xl">
          Niagara Region's Luxury Chauffeur Service
        </p>
        <a
          href="/contact"
          className="border border-gold text-gold px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300"
        >
          Request a Quote
        </a>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 px-6 bg-black text-center">
        <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          From airport transfers to weddings, we provide reliable, first-class transportation across the Niagara Region.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Airport Transfers", desc: "On-time pickups and drop-offs, every time." },
            { title: "Weddings", desc: "Arrive to your big day in complete elegance." },
            { title: "Corporate Travel", desc: "Professional, punctual travel for business." },
            { title: "Hourly Rentals", desc: "Flexible chauffeur service, by the hour." },
          ].map((service) => (
            <div
              key={service.title}
              className="border border-gray-800 rounded-lg p-8 hover:border-gold transition-all duration-300"
            >
              <h3 className="text-xl mb-3 text-gold-light">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="py-24 px-6 bg-dark-grey text-center">
        <h2 className="text-3xl md:text-4xl mb-4">Our Fleet</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          A curated selection of premium vehicles, maintained to the highest standard.
        </p>
        <a
          href="/fleet"
          className="border border-gold text-gold px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300"
        >
          View Fleet
        </a>
      </section>
    </main>
  );
}