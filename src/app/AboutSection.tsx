export default function AboutSection() {
  return (
    <section id="about" className="bg-[#e5decc] py-20 px-2 md:px-0 flex justify-center">
      <div className="w-full max-w-3xl bg-[#f5f2ea] rounded-2xl shadow-lg px-6 py-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#8b735b] font-serif mb-4 text-center">About Chateau Digital</h2>
        <p className="text-[#a89888] text-lg mb-4 text-center">
          At Chateau Digital, we believe that every business deserves a strong online presence. Our team of passionate designers and digital strategists work together to create beautiful, functional websites and engaging social media content.
        </p>
        <p className="text-[#a89888] text-lg mb-8 text-center">
          Founded with a vision to make professional digital services accessible to businesses of all sizes, we combine creativity with technical expertise to deliver solutions that drive results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
          <div className="bg-[#ede6db] rounded-lg px-8 py-6 text-center min-w-[120px] flex-1">
            <div className="text-2xl md:text-3xl font-bold text-[#8b735b] mb-1">50+</div>
            <div className="text-[#a89888] text-base font-semibold">Clients</div>
          </div>
          <div className="bg-[#ede6db] rounded-lg px-8 py-6 text-center min-w-[120px] flex-1">
            <div className="text-2xl md:text-3xl font-bold text-[#8b735b] mb-1">100+</div>
            <div className="text-[#a89888] text-base font-semibold">Projects</div>
          </div>
          <div className="bg-[#ede6db] rounded-lg px-8 py-6 text-center min-w-[120px] flex-1">
            <div className="text-2xl md:text-3xl font-bold text-[#8b735b] mb-1">5+</div>
            <div className="text-[#a89888] text-base font-semibold">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
} 