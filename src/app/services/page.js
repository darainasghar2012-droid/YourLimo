const services = [
  {
    title: "Airport Transfers",
    desc: "Reliable, on-time pickups and drop-offs to and from Toronto Pearson, Buffalo, and Hamilton airports. We track your flight and adjust for delays automatically.",
  },
  {
    title: "Weddings",
    desc: "Arrive to your ceremony in complete elegance. Decorated vehicles available, with flexible scheduling for the whole wedding party.",
  },
  {
    title: "Corporate Travel",
    desc: "Professional, punctual transportation for executives, client meetings, and corporate events across the Niagara Region.",
  },
  {
    title: "Hourly Rentals",
    desc: "Need a vehicle and driver for a night out, a tour, or a special event? Book by the hour with full flexibility.",
  },
];

export default function Services() {
  return (
    <main className="flex-1 pt-32 pb-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl mb-4">Our Services</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Whatever the occasion, YourLimo provides first-class transportation
          tailored to your needs.
        </p>

        <div className="flex flex-col gap-8 text-left">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-gray-800 rounded-lg p-8 hover:border-gold transition-all duration-300"
            >
              <h3 className="text-2xl text-gold-light mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}