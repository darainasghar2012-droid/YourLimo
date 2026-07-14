export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            YOUR<span className="text-gold">LIMO</span>
          </h3>
          <p className="text-sm">
            Niagara Region's Luxury Chauffeur Service.
          </p>
        </div>

        <div>
          <h4 className="text-gold uppercase text-sm tracking-widest mb-3">
            Contact
          </h4>
          <p className="text-sm">Phone: (647) 833-3003</p>
          <p className="text-sm">Email: YourEliteLimo@hotmail.com</p>
        </div>

        <div>
          <h4 className="text-gold uppercase text-sm tracking-widest mb-3">
            Service Areas
          </h4>
          <p className="text-sm">Niagara Falls · St. Catharines · Toronto Airport</p>
        </div>
      </div>

      <p className="text-center text-xs text-gray-600 mt-10">
        © {new Date().getFullYear()} YourLimo.ca — All Rights Reserved.
      </p>
    </footer>
  );
}