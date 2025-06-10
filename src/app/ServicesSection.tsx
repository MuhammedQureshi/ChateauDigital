import Image from "next/image";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#e5decc] py-16 px-2 md:px-0">
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
              <Image className="rounded-lg" src="/webDesign.jpg" alt="Web Design Illustration" width={120} height={48} style={{objectFit: "contain"}} />
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
              <Image src="/socialM.jpg" alt="Social Media Illustration" width={120} height={48} style={{objectFit: "contain"}} />
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
              <Image src="/strategy.jpg" alt="Digital Strategy Illustration" width={120} height={48} style={{objectFit: "contain"}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 