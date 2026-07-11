import FleetShowcase from "../components/FleetShowcase";

export default function Fleet() {
  return (
    <main className="flex-1 pt-32 pb-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl mb-4">Our Fleet</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Every vehicle in our fleet is maintained to the highest standard,
          ensuring a smooth, safe, and elegant ride every time.
        </p>
      </div>

      <FleetShowcase />
    </main>
  );
}