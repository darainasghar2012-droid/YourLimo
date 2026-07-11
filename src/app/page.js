import MovingLimo from "./components/MovingLimo";
import Testimonials from "./components/Testimonials";
import PriceCalculator from "./components/PriceCalculator";

export default function Home() {
  return (
    <main className="flex-1">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.base44.com/images/public/69d46fab088f7d4b08dcce00/9a62969fe_generated_image.png')",
          }}
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Headline */}
          <div className="text-center md:text-left">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 flex items-center gap-2 justify-center md:justify-start">
              <span className="w-8 h-px bg-gold inline-block" />
              Niagara's Premier Chauffeur Service
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Arrive in Style.
              <br />
              <span className="text-gold">Travel in Luxury.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto md:mx-0">
              Premium Chauffeur SUV Service across Ontario, headquartered in
              the Niagara Region.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto md:mx-0">
              <div className="border border-border rounded-lg py-4 text-center">
                <p className="text-gold text-xl font-bold">24/7</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Available</p>
              </div>
              <div className="border border-border rounded-lg py-4 text-center">
                <p className="text-gold text-xl font-bold">7+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Vehicles</p>
              </div>
              <div className="border border-border rounded-lg py-4 text-center">
                <p className="text-gold text-xl font-bold">100%</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">On-Time</p>
              </div>
            </div>

            <a
              href="tel:+16478333003"
              className="md:hidden inline-block border border-gold text-gold px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300"
            >
              Call (647) 833-3003
            </a>
          </div>

          {/* Right: Quote Request CTA (simplified for now) */}
          <div className="bg-black/80 backdrop-blur-md border border-gold/30 rounded-xl p-8">
            <p className="text-gold uppercase tracking-widest text-xs mb-2">
              Instant Quote
            </p>
            <h3 className="text-2xl mb-6">Book Your Ride</h3>
            <a
              href="/contact"
              className="block text-center border border-gold text-gold px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-black border-y border-border py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "🕐", title: "24/7 Availability", desc: "On-demand service any time, any day" },
            { icon: "🛡️", title: "Professional Chauffeurs", desc: "Vetted, trained & courteous drivers" },
            { icon: "⚡", title: "Punctuality Guaranteed", desc: "On-time arrival, every single trip" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-2xl shrink-0">
                {item.icon}
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-white font-medium">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MovingLimo />

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

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-black text-center">
        <h2 className="text-3xl md:text-4xl mb-4">The YourLimo Difference</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          What sets us apart from every other ride service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {[
            { title: "24/7 Availability", desc: "On-demand service any time, any day of the week." },
            { title: "Professional Chauffeurs", desc: "Licensed, background-checked, and courteous drivers." },
            { title: "On-Time Guarantee", desc: "Live flight tracking ensures we're always exactly on time." },
            { title: "Immaculate Vehicles", desc: "Every vehicle is detailed before every single trip." },
            { title: "VIP Experience", desc: "Water, Wi-Fi, and premium amenities on every ride." },
            { title: "Safe & Reliable", desc: "Fully insured and GPS-tracked for total peace of mind." },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 border border-border rounded-lg p-6 hover:border-gold transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                ✓
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* PRICE CALCULATOR */}
      <section className="py-24 px-6 bg-black text-center">
        <h2 className="text-3xl md:text-4xl mb-4">Fare Calculator</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Get an accurate price estimate for your trip.
        </p>
        <PriceCalculator />
      </section>
{/* SERVICE AREA */}
      <section className="py-24 px-6 bg-card text-center">
        <h2 className="text-3xl md:text-4xl mb-4">Service Area</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Ontario-Wide Coverage, headquartered in the Niagara Region.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
          {/* Map placeholder */}
          <div className="md:col-span-2 h-[420px] rounded-lg border border-border bg-black flex items-center justify-center">
            <p className="text-gray-600 text-sm">Map Coming Soon</p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-gold uppercase tracking-widest text-xs mb-3">
                Airport Connections
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { code: "YYZ", name: "Toronto Pearson" },
                  { code: "YHM", name: "Hamilton" },
                  { code: "BUF", name: "Buffalo & Niagara" },
                  { code: "YTZ", name: "Billy Bishop" },
                ].map((airport) => (
                  <div
                    key={airport.code}
                    className="border border-border rounded-md p-3 text-sm"
                  >
                    <span className="text-gold font-medium">{airport.code}</span>
                    <p className="text-gray-400 text-xs">{airport.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-gold uppercase tracking-widest text-xs mb-3">
                Cities We Serve
              </h4>
              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-300">
                <p className="text-gold">Niagara Falls (HQ)</p>
                <p>St. Catharines</p>
                <p>Toronto</p>
                <p>Hamilton</p>
                <p>Mississauga</p>
                <p>Oakville</p>
                <p>Brampton</p>
                <p>Burlington</p>
                <p>Ottawa (LDR)</p>
                <p>Kingston (LDR)</p>
                <p>London ON (LDR)</p>
                <p>Buffalo NY (USA)</p>
              </div>
            </div>

            <a
              href="/contact"
              className="text-center border border-gold text-gold px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300"
            >
              Book Any Route →
            </a>
          </div>
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

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-card text-center">
        <h2 className="text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Real experiences from real clients across Ontario.
        </p>
        <Testimonials />
      </section>
    </main>
  );
}