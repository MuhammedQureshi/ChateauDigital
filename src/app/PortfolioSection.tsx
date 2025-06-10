import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-[#f5f2ea] py-16 px-2 md:px-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#8b735b] font-serif mb-2">Our Portfolio</h2>
        <p className="text-center text-[#a89888] text-lg mb-12 max-w-2xl mx-auto">
          Explore some of our recent projects that showcase our expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
            <div className="bg-white flex items-center justify-center h-56">
              <Image src="/boutique.jpeg" alt="Luxury Boutique Website" width={240} height={90} style={{objectFit: "fill"}} />
            </div>
            <div className="bg-white p-6 flex-1 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-[#8b735b] font-serif mb-1">Luxury Boutique Website</h3>
              <p className="text-[#a89888] text-base">E-commerce platform for a high-end fashion boutique</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
            <div className="bg-[#a8937c] flex items-center justify-center h-56">
              <Image src="/portfolio2.png" alt="Restaurant Social Media" width={140} height={90} style={{objectFit: "contain"}} />
            </div>
            <div className="bg-white p-6 flex-1 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-[#8b735b] font-serif mb-1">Restaurant Social Media</h3>
              <p className="text-[#a89888] text-base">Social media strategy for an upscale dining establishment</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col">
            <div className="bg-[#a8937c] flex items-center justify-center h-56">
              <Image src="/portfolio3.png" alt="Real Estate Platform" width={140} height={90} style={{objectFit: "contain"}} />
            </div>
            <div className="bg-white p-6 flex-1 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-[#8b735b] font-serif mb-1">Real Estate Platform</h3>
              <p className="text-[#a89888] text-base">Modern property listing website with search functionality</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a href="#contact" className="bg-[#a8937c] text-white font-semibold rounded-md px-8 py-3 text-lg shadow hover:bg-[#8b735b] transition">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
} 