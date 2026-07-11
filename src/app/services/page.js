const services = [
  {
    icon: "✈️",
    title: "Airport Transfers",
    desc: "Pearson, Hamilton, and Buffalo Niagara airports — with live flight monitoring so we adjust for delays automatically.",
  },
  {
    icon: "💼",
    title: "Corporate Travel",
    desc: "Professional, punctual executive transportation for meetings, client visits, and corporate events.",
  },
  {
    icon: "❤️",
    title: "Weddings & Events",
    desc: "Arrive to your ceremony in complete elegance, with flexible scheduling for the whole wedding party.",
  },
  {
    icon: "🕐",
    title: "Hourly Chauffeur",
    desc: "A dedicated driver for events, tours, or nights out — book by the hour with full flexibility.",
  },
  {
    icon: "📍",
    title: "Long Distance Travel",
    desc: "Niagara to Toronto, Ottawa, and across Ontario — relax while we handle the drive.",
  },
  {
    icon: "❤️",
    title: "Bachelor & Bachelorette Parties",
    desc: "Group party transportation that keeps the celebration going, safely and in style.",
  },
];

export default function Services() {
  return (
    <main className="flex-1 pt-32 pb-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl mb-4">Our Services</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Whatever the occasion, YourLimo provides first-class transportation
          tailored to your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative border border-border rounded-lg p-8 hover:border-gold transition-all duration-300 overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-2xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl text-gold-light mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
              <a
                href="/contact"
                className="text-gold text-sm hover:underline"
              >
                Book This Service →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}