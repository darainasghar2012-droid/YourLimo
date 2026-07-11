const cars = [
  {
    name: "Executive Sedan",
    desc: "Perfect for airport transfers and business travel. Seats up to 3 passengers.",
  },
  {
    name: "Stretch Limousine",
    desc: "Classic elegance for weddings and special occasions. Seats up to 8 passengers.",
  },
  {
    name: "Luxury SUV",
    desc: "Spacious comfort for groups and corporate travel. Seats up to 6 passengers.",
  },
  {
    name: "Sprinter Van",
    desc: "Ideal for larger groups and events. Seats up to 12 passengers.",
  },
];

export default function Fleet() {
  return (
    <main className="flex-1 pt-32 pb-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl mb-4">Our Fleet</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Every vehicle in our fleet is maintained to the highest standard,
          ensuring a smooth, safe, and elegant ride every time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cars.map((car) => (
            <div
              key={car.name}
              className="border border-gray-800 rounded-lg overflow-hidden hover:border-gold transition-all duration-300"
            >
              <div className="h-56 bg-dark-grey flex items-center justify-center text-gray-600 text-sm">
                Photo Coming Soon
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl text-gold-light mb-2">{car.name}</h3>
                <p className="text-gray-400 text-sm">{car.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}