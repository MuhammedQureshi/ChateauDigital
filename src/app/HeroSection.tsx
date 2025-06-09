export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 md:py-[15rem]">
      {/* Left: Text */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold text-[#8b735b] font-serif mb-4">
          Elevate Your Digital Presence
        </h1>
        <p className="text-[#8b735b] text-lg md:text-xl mb-8">
          We craft stunning websites and manage social media that help businesses stand out in the digital landscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            className="bg-[#8b735b] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#a68b6b] transition"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="border-2 border-[#8b735b] text-[#8b735b] px-6 py-3 rounded-md font-semibold hover:bg-[#8b735b] hover:text-white transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
      {/* Right: Illustration */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        {/* Improved Laptop SVG */}
        <svg width="340" height="220" viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow */}
          <ellipse cx="170" cy="200" rx="110" ry="18" fill="#e5ded2" />
          {/* Laptop base */}
          <rect x="60" y="170" width="220" height="18" rx="6" fill="#b49a78" />
          {/* Laptop body */}
          <rect x="40" y="40" width="260" height="130" rx="14" fill="#f5f2ea" stroke="#8b735b" strokeWidth="8" />
          {/* Screen area */}
          <rect x="60" y="60" width="220" height="90" rx="6" fill="#ede6db" />
          {/* Image placeholder */}
          <rect x="80" y="80" width="60" height="40" rx="5" fill="#d1c3b2" />
          <polygon points="85,115 95,95 110,110 120,100 135,120 85,120" fill="#b49a78" />
          {/* Text lines */}
          <rect x="150" y="85" width="100" height="10" rx="3" fill="#b49a78" />
          <rect x="150" y="105" width="80" height="8" rx="2" fill="#b49a78" />
          <rect x="150" y="120" width="60" height="8" rx="2" fill="#b49a78" />
        </svg>
      </div>
    </section>
  );
} 