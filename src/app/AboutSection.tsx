export default function AboutSection() {
  return (
    <section id="about" className="bg-[#e5decc] py-20 px-2 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left: Illustration */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative w-[380px] h-[340px]">
            {/* Polka dots */}
            <div className="absolute left-12 top-0 w-16 h-16 rounded-full bg-[#ded3bb] opacity-60" />
            <div className="absolute left-64 top-16 w-10 h-10 rounded-full bg-[#ded3bb] opacity-60" />
            <div className="absolute left-24 bottom-0 w-24 h-24 rounded-full bg-[#ded3bb] opacity-60" />
            {/* Dotted lines */}
            <svg className="absolute left-28 top-24" width="180" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="40" y1="20" x2="90" y2="80" stroke="#b49a78" strokeWidth="3" strokeDasharray="8 8" />
              <line x1="140" y1="20" x2="90" y2="80" stroke="#b49a78" strokeWidth="3" strokeDasharray="8 8" />
              <line x1="40" y1="20" x2="140" y2="20" stroke="#b49a78" strokeWidth="3" strokeDasharray="8 8" />
            </svg>
            {/* People */}
            <div className="absolute left-16 top-8">
              {/* Person 1 */}
              <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="55" cy="55" r="55" fill="#a8937c" />
                <circle cx="55" cy="45" r="25" fill="#f5f2ea" />
                <ellipse cx="55" cy="80" rx="30" ry="28" fill="#f5f2ea" />
                <ellipse cx="55" cy="45" rx="18" ry="16" fill="#f5f2ea" />
                <circle cx="47" cy="43" r="3" fill="#a8937c" />
                <circle cx="63" cy="43" r="3" fill="#a8937c" />
                <path d="M50 55 Q55 60 60 55" stroke="#a8937c" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="absolute left-56 top-8">
              {/* Person 2 */}
              <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="55" cy="55" r="55" fill="#a8937c" />
                <circle cx="55" cy="45" r="25" fill="#f5f2ea" />
                <ellipse cx="55" cy="80" rx="30" ry="28" fill="#f5f2ea" />
                <ellipse cx="55" cy="45" rx="18" ry="16" fill="#f5f2ea" />
                <rect x="40" y="30" width="30" height="10" rx="5" fill="#a8937c" />
                <circle cx="47" cy="43" r="3" fill="#a8937c" />
                <circle cx="63" cy="43" r="3" fill="#a8937c" />
                <path d="M50 55 Q55 60 60 55" stroke="#a8937c" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="absolute left-36 top-44">
              {/* Person 3 */}
              <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="55" cy="55" r="55" fill="#a8937c" />
                <circle cx="55" cy="45" r="25" fill="#f5f2ea" />
                <ellipse cx="55" cy="80" rx="30" ry="28" fill="#f5f2ea" />
                <ellipse cx="55" cy="45" rx="18" ry="16" fill="#f5f2ea" />
                <rect x="40" y="30" width="30" height="10" rx="5" fill="#a8937c" />
                <circle cx="47" cy="43" r="3" fill="#a8937c" />
                <circle cx="63" cy="43" r="3" fill="#a8937c" />
                <path d="M50 55 Q55 60 60 55" stroke="#a8937c" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        {/* Right: Text */}
        <div className="flex-1 max-w-2xl mx-auto md:mx-0 md:pl-8 mt-12 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8b735b] font-serif mb-4">About Chateau Digital</h2>
          <p className="text-[#a89888] text-lg mb-4">
            At Chateau Digital, we believe that every business deserves a strong online presence. Our team of passionate designers and digital strategists work together to create beautiful, functional websites and engaging social media content.
          </p>
          <p className="text-[#a89888] text-lg mb-8">
            Founded with a vision to make professional digital services accessible to businesses of all sizes, we combine creativity with technical expertise to deliver solutions that drive results.
          </p>
          <div className="flex gap-4 flex-wrap">
            <div className="bg-[#f5f2ea] rounded-lg px-8 py-6 text-center min-w-[120px]">
              <div className="text-2xl md:text-3xl font-bold text-[#8b735b] mb-1">50+</div>
              <div className="text-[#a89888] text-base font-semibold">Clients</div>
            </div>
            <div className="bg-[#f5f2ea] rounded-lg px-8 py-6 text-center min-w-[120px]">
              <div className="text-2xl md:text-3xl font-bold text-[#8b735b] mb-1">100+</div>
              <div className="text-[#a89888] text-base font-semibold">Projects</div>
            </div>
            <div className="bg-[#f5f2ea] rounded-lg px-8 py-6 text-center min-w-[120px]">
              <div className="text-2xl md:text-3xl font-bold text-[#8b735b] mb-1">5+</div>
              <div className="text-[#a89888] text-base font-semibold">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 