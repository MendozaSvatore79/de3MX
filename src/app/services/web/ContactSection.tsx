import React from 'react';

const ContactSection: React.FC = () => (
  <section className="w-full max-w-[1440px] mx-auto px-4 lg:px-12 py-24 flex flex-col md:flex-row gap-12 items-center mb-20">
    {/* Ilustración y texto */}
    <div className="flex-1 flex flex-col items-start justify-center gap-8 min-w-[320px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-2">Wanna<br />work<br />together?</h2>
        <img src="/img/contact-figma-illu.png" alt="Contact Illustration" className="w-32 md:w-40 mb-2" />
      </div>
      <p className="text-gray-300 text-lg mb-4">Let's talk about your project...</p>
      <a href="#contact" className="text-[#00DA6B] text-base font-semibold flex items-center gap-2 group">
        <span>Let's talk about your project...</span>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="#00DA6B" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </a>
    </div>
    {/* Formulario */}
    <form className="flex-1 bg-[#181818] rounded-2xl shadow-xl border border-[#232323] p-8 grid grid-cols-1 md:grid-cols-2 gap-6 min-w-[320px] max-w-xl">
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Name*</label>
        <input className="bg-[#232323] rounded-lg px-4 py-3 text-white outline-none border border-[#333] focus:border-[#00DA6B]" required />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Email*</label>
        <input type="email" className="bg-[#232323] rounded-lg px-4 py-3 text-white outline-none border border-[#333] focus:border-[#00DA6B]" required />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Phone</label>
        <input className="bg-[#232323] rounded-lg px-4 py-3 text-white outline-none border border-[#333] focus:border-[#00DA6B]" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Company</label>
        <input className="bg-[#232323] rounded-lg px-4 py-3 text-white outline-none border border-[#333] focus:border-[#00DA6B]" />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="text-white font-semibold">Comments</label>
        <textarea className="bg-[#232323] rounded-lg px-4 py-3 text-white outline-none border border-[#333] focus:border-[#00DA6B] min-h-[64px]" placeholder="Pitch your project idea" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Services you need</label>
        <select className="bg-[#232323] rounded-lg px-4 py-3 text-white outline-none border border-[#333] focus:border-[#00DA6B]">
          <option>Select services</option>
          <option>Web</option>
          <option>App</option>
          <option>Design</option>
          <option>Marketing</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold">Budget</label>
        <select className="bg-[#232323] rounded-lg px-4 py-3 text-white outline-none border border-[#333] focus:border-[#00DA6B]">
          <option>Select budget</option>
          <option>Less than $5,000</option>
          <option>$5,000 - $10,000</option>
          <option>$10,000 - $20,000</option>
          <option>More than $20,000</option>
        </select>
      </div>
      <div className="md:col-span-2 flex justify-end mt-2">
        <button type="submit" className="bg-[#00DA6B] text-black font-bold px-8 py-3 rounded-full hover:bg-[#00DA6B]/90 transition-colors">SUBMIT</button>
      </div>
    </form>
  </section>
);

export default ContactSection;
