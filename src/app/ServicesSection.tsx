export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#e5decc] py-[7rem] px-2 md:px-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#8b735b] font-serif mb-2">Our Services</h2>
        <p className="text-center text-[#a89888] text-lg mb-12 max-w-2xl mx-auto">
          We provide comprehensive digital solutions to help your business thrive online.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Design Card */}
          <div className="bg-[#f5f2ea] rounded-xl shadow-md p-8 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-[#b49a78] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  {/* Monitor Icon */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="10" rx="2" stroke="#f5f2ea" strokeWidth="2"/><rect x="9" y="18" width="6" height="2" rx="1" fill="#f5f2ea"/></svg>
                </div>
                <span className="text-xl font-bold text-[#8b735b] font-serif">Web Design</span>
              </div>
              <p className="text-[#a89888] mb-4">Custom-designed websites that are visually stunning, responsive, and optimized for performance.</p>
              <ul className="text-[#8b735b] space-y-1 mb-6">
                <li className="flex items-center"><span className="mr-2 text-lg">✓</span>Responsive Design</li>
                <li className="flex items-center"><span className="mr-2 text-lg">✓</span>SEO Optimization</li>
                <li className="flex items-center"><span className="mr-2 text-lg">✓</span>Custom Functionality</li>
              </ul>
            </div>
            <div className="bg-[#ede6db] rounded-lg p-4 flex items-center justify-center mt-4">
              {/* Web Design Illustration */}
              <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="104" height="24" rx="4" fill="#f5f2ea" stroke="#b49a78" strokeWidth="2"/>
                <rect x="20" y="20" width="32" height="6" rx="2" fill="#b49a78"/>
                <rect x="20" y="28" width="24" height="4" rx="2" fill="#b49a78"/>
                <rect x="60" y="20" width="32" height="12" rx="2" fill="#d1c3b2"/>
              </svg>
            </div>
          </div>
          {/* Social Media Card */}
          <div className="bg-[#f5f2ea] rounded-xl shadow-md p-8 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-[#b49a78] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  {/* Chat Icon */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="10" rx="2" stroke="#f5f2ea" strokeWidth="2"/><circle cx="8" cy="11" r="1" fill="#f5f2ea"/><circle cx="12" cy="11" r="1" fill="#f5f2ea"/><circle cx="16" cy="11" r="1" fill="#f5f2ea"/></svg>
                </div>
                <span className="text-xl font-bold text-[#8b735b] font-serif">Social Media</span>
              </div>
              <p className="text-[#a89888] mb-4">Strategic social media management to grow your audience and increase engagement.</p>
              <ul className="text-[#8b735b] space-y-1 mb-6">
                <li className="flex items-center"><span className="mr-2 text-lg">✓</span>Content Creation</li>
                <li className="flex items-center"><span className="mr-2 text-lg">✓</span>Community Management</li>
                <li className="flex items-center"><span className="mr-2 text-lg">✓</span>Growth Strategy</li>
              </ul>
            </div>
            <div className="bg-[#ede6db] rounded-lg p-4 flex items-center justify-center mt-4">
              {/* Social Media Illustration */}
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="44" height="36" rx="6" fill="#f5f2ea" stroke="#b49a78" strokeWidth="2"/>
                <rect x="16" y="24" width="28" height="8" rx="2" fill="#b49a78"/>
                <rect x="16" y="36" width="20" height="4" rx="2" fill="#b49a78"/>
                <circle cx="44" cy="40" r="4" fill="#d1c3b2"/>
              </svg>
            </div>
          </div>
          {/* Digital Strategy Card */}
          <div className="bg-[#f5f2ea] rounded-xl shadow-md p-8 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-[#b49a78] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  {/* Bar Chart Icon */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="6" y="12" width="3" height="8" rx="1.5" fill="#f5f2ea"/><rect x="11" y="8" width="3" height="12" rx="1.5" fill="#f5f2ea"/><rect x="16" y="16" width="3" height="4" rx="1.5" fill="#f5f2ea"/></svg>
                </div>
                <span className="text-xl font-bold text-[#8b735b] font-serif">Digital Strategy</span>
              </div>
              <p className="text-[#a89888] mb-4">Comprehensive digital strategies tailored to your business goals and target audience.</p>
              <ul className="text-[#8b735b] space-y-1 mb-6">
                <li className="flex items-center"><span className="mr-2 text-lg">✓</span>Market Research</li>
                <li className="flex items-center"><span className="mr-2 text-lg">✓</span>Growth Planning</li>
                <li className="flex items-center"><span className="mr-2 text-lg">✓</span>Performance Analytics</li>
              </ul>
            </div>
            <div className="bg-[#ede6db] rounded-lg p-4 flex items-center justify-center mt-4">
              {/* Digital Strategy Illustration */}
              <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="20" width="16" height="16" rx="3" fill="#d1c3b2"/>
                <rect x="36" y="28" width="16" height="8" rx="2" fill="#b49a78"/>
                <rect x="60" y="16" width="16" height="20" rx="3" fill="#b49a78"/>
                <rect x="84" y="24" width="16" height="12" rx="3" fill="#d1c3b2"/>
                <rect x="12" y="20" width="88" height="16" rx="3" stroke="#b49a78" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 