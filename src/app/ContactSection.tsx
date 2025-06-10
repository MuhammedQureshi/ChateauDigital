import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("meokandy");

  return (
    <section id="contact" className="bg-[#e5decc] py-20 px-2 md:px-0">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#8b735b] font-serif mb-2">Get in Touch</h2>
        <p className="text-center text-[#a89888] text-lg mb-12 max-w-2xl mx-auto">
          Ready to elevate your digital presence? Contact us today to discuss your project.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow-md p-8 flex-1 max-w-md flex flex-col justify-between mb-6 md:mb-0">
            <div>
              <h3 className="text-xl font-bold text-[#8b735b] font-serif mb-6">Contact Information</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="bg-[#ede6db] p-2 rounded-full">
                    {/* Email Icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 6h16v12H4z" fill="#b49a78"/><path d="M4 6l8 7 8-7" stroke="#fff" strokeWidth="2"/></svg>
                  </span>
                  <div>
                    <div className="text-[#8b735b] font-semibold">Email</div>
                    <div className="text-[#a89888] text-sm">chateaudigital25@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-[#ede6db] p-2 rounded-full">
                    {/* Phone Icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#b49a78"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2"/></svg>
                  </span>
                  <div>
                    <div className="text-[#8b735b] font-semibold">Phone</div>
                    <div className="text-[#a89888] text-sm">07309 470683</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-[#ede6db] p-2 rounded-full">
                    {/* Instagram Icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5" fill="#b49a78"/><circle cx="12" cy="12" r="4" fill="#fff"/><circle cx="17" cy="7" r="1.5" fill="#fff"/></svg>
                  </span>
                  <div>
                    <div className="text-[#8b735b] font-semibold">Instagram</div>
                    <div className="text-[#a89888] text-sm">@chateau_digital25</div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-[#8b735b] font-semibold mb-2">Follow Us</div>
                <div className="flex gap-4">
                  <a href="https://instagram.com/chateau_digital25" target="_blank" rel="noopener" className="bg-[#ede6db] p-2 rounded-full"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5" fill="#b49a78"/><circle cx="12" cy="12" r="4" fill="#fff"/><circle cx="17" cy="7" r="1.5" fill="#fff"/></svg></a>
                  <a href="#" className="bg-[#ede6db] p-2 rounded-full"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#b49a78"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2"/></svg></a>
                  <a href="#" className="bg-[#ede6db] p-2 rounded-full"><svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#b49a78"/><path d="M8 10a4 4 0 108 0 4 4 0 00-8 0zm8 4v2a2 2 0 01-2 2H10a2 2 0 01-2-2v-2" stroke="#fff" strokeWidth="2"/></svg></a>
                </div>
              </div>
            </div>
            <div className="bg-[#ede6db] rounded-lg p-6 flex items-center justify-center mt-4">
              {/* Mail Illustration */}
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="80" height="60" rx="8" fill="#ede6db" />
                <rect x="16" y="20" width="48" height="20" rx="4" fill="#b49a78" />
                <path d="M16 20l24 16 24-16" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8 flex-1 max-w-xl flex flex-col justify-between">
            {state.succeeded ? (
              <div className="text-center text-[#8b735b] text-xl font-semibold py-16">
                Thank you for your message! We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="flex-1 border border-[#ede6db] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b49a78] bg-[#f5f2ea] text-[#8b735b]"
                  />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="flex-1 border border-[#ede6db] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b49a78] bg-[#f5f2ea] text-[#8b735b]"
                  />
                </div>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full border border-[#ede6db] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b49a78] bg-[#f5f2ea] text-[#8b735b]"
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                  rows={5}
                  className="w-full border border-[#ede6db] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b49a78] bg-[#f5f2ea] text-[#8b735b]"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-[#b49a78] text-white font-semibold rounded-md px-8 py-3 text-lg shadow hover:bg-[#8b735b] transition w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
            {/* Dots/steps UI at the bottom */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <span className="h-8 w-8 bg-[#ede6db] rounded-full flex items-center justify-center">
                <span className="h-4 w-4 bg-[#ded3bb] rounded-full block" />
              </span>
              <span className="h-1 w-12 bg-[#ded3bb] rounded block" />
              <span className="h-8 w-8 bg-[#b49a78] rounded-full flex items-center justify-center border-4 border-[#ede6db]">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#fff" strokeWidth="2"/><path d="M8 4v4m0 0v4m0-4h4m-4 0H4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <span className="h-1 w-12 bg-[#ded3bb] rounded block" />
              <span className="h-8 w-8 bg-[#ede6db] rounded-full flex items-center justify-center">
                <span className="h-4 w-4 bg-[#ded3bb] rounded-full block" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 