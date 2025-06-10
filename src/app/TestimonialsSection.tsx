export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#f5f2ea] py-16 px-2 md:px-0 relative overflow-hidden">
      {/* Wavy background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20 Q10 30 20 20 T40 20\' stroke=\'%23ded3bb\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat'}} />
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-[#b49a78]/20 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#8b735b] font-serif mb-2">What Our Clients Say</h2>
        <p className="text-center text-[#a89888] text-lg mb-12 max-w-2xl mx-auto">
          Hear from businesses that have transformed their digital presence with our services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center mb-4">
              {/* Avatar */}
              <div className="bg-[#a8937c] w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="#a8937c" />
                  <circle cx="24" cy="18" r="10" fill="#f5f2ea" />
                  <ellipse cx="24" cy="36" rx="14" ry="10" fill="#f5f2ea" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-[#8b735b] font-serif">Sarah Johnson</div>
                <div className="text-[#a89888] text-base">Boutique Owner</div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#a8937c] mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" /></svg>
              ))}
            </div>
            <div className="italic text-[#a89888] text-lg mb-6">
              "<span className="font-medium">Chateau Digital transformed our online presence. Our new website perfectly captures our brand's essence, and their social media management has significantly increased our engagement.</span>"
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center mb-4">
              {/* Avatar */}
              <div className="bg-[#a8937c] w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="#a8937c" />
                  <circle cx="24" cy="18" r="10" fill="#f5f2ea" />
                  <ellipse cx="24" cy="36" rx="14" ry="10" fill="#f5f2ea" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-[#8b735b] font-serif">Michael Roberts</div>
                <div className="text-[#a89888] text-base">Restaurant Owner</div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#a8937c] mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" /></svg>
              ))}
            </div>
            <div className="italic text-[#a89888] text-lg mb-6">
              "<span className="font-medium">The team at Chateau Digital understands our vision perfectly. Their social media strategy has helped us attract new customers and keep our existing ones engaged. Highly recommended!</span>"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 