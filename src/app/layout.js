import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroSplash from "./components/IntroSplash";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileTabBar from "./components/MobileTabBar";
import PageTransition from "./components/PageTransition";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "YourLimo | Luxury Chauffeur Service",
  description: "Premium limousine and chauffeur service. Airport transfers, weddings, corporate travel, and hourly rentals.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
<body className="min-h-full flex flex-col bg-black text-white pb-16 lg:pb-0">
       <IntroSplash />
       <Navbar />
<PageTransition>{children}</PageTransition>
<Footer />
        <WhatsAppButton />
        <MobileTabBar />
      </body>
    </html>
  );
}