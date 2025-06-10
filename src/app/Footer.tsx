export default function Footer() {
  return (
    <footer className="bg-[#8b7a67] text-[#f5f2ea] pt-8 pb-4 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-6">
        {/* Left: Logo and tagline */}
        <div>
          <div className="text-2xl font-bold font-serif mb-1">ChateauDigital</div>
          <div className="text-[#ede6db] text-base">Elevating your digital presence</div>
        </div>
        {/* Right: Contact info */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-base">
          <div className="flex items-center gap-2">
            {/* Email Icon */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 6h16v12H4z" fill="#ede6db"/><path d="M4 6l8 7 8-7" stroke="#8b7a67" strokeWidth="2"/></svg>
            chateaudigital25@gmail.com
          </div>
          <div className="flex items-center gap-2">
            {/* Phone Icon */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" fill="#ede6db"/></svg>
            07309 470683
          </div>
          <div className="flex items-center gap-2">
            {/* Instagram Icon */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5" fill="#ede6db"/><circle cx="12" cy="12" r="4" fill="#8b7a67"/><circle cx="17" cy="7" r="1.5" fill="#8b7a67"/></svg>
            @chateau_digital25
          </div>
        </div>
      </div>
      <hr className="border-[#ede6db]/30 mb-4" />
      <div className="text-center text-[#ede6db] text-sm">
        © 2025 Chateau Digital. All rights reserved.
      </div>
    </footer>
  );
} 