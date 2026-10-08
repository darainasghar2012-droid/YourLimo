export default function Footer() {
  return (
    <footer className="bg-[#3B2314] border-t border-[#8B5E3C] text-[#F5EBDD] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-[#FAF3E8] mb-3">
            YOUR<span className="text-[#C9A27A]">LIMO</span>
          </h3>
          <p className="text-sm text-[#EADBC6]">
            Niagara Region's Luxury Chauffeur Service.
          </p>
        </div>

        <div>
          <h4 className="text-[#C9A27A] uppercase text-sm tracking-widest mb-3">
            Contact
          </h4>
          <p className="text-sm text-[#EADBC6]">Phone: (647) 833-3003</p>
          <p className="text-sm text-[#EADBC6]">Email: info@YourLimo.ca</p>
        </div>

        <div>
          <h4 className="text-[#C9A27A] uppercase text-sm tracking-widest mb-3">
            Service Areas
          </h4>
          <p className="text-sm text-[#EADBC6]">Niagara Falls · St. Catharines · Toronto Airport</p>
        </div>
      </div>

      <p className="text-center text-xs text-[#C9A27A] mt-10">
        © {new Date().getFullYear()} YourLimo.ca — All Rights Reserved.
      </p>
    </footer>
  );
}