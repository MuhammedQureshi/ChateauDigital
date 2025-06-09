"use client"
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f2ea] relative overflow-x-hidden pt-20">
      {/* Polka dot background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(180, 150, 120, 0.10) 2px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <Navbar />
      {/* Anchor for top scroll */}
      <div id="top" />
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
