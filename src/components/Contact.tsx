'use client';
import React, { useState } from 'react';
import svgPaths from '../imports/svg-uw6loka219';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    comments: '',
    services: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[66px] items-start justify-center">
          
          {/* Left Side - Title with 3D Illustration */}
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-[75px] items-start shrink-0 w-full lg:w-[340px]">
            {/* Title */}
            <h2 className="text-black col-span-1 self-end" style={{ fontSize: 'clamp(28px, 5vw, 65px)', fontWeight: 'bold', lineHeight: 'normal', maxWidth: '100%' }}>
              Wanna work together?
            </h2>
            
            {/* 3D Illustration */}
            <div className="h-[120px] md:h-[266.605px] overflow-clip relative shrink-0 w-[90px] md:w-[162.395px] col-span-1 justify-self-end md:mx-auto lg:mx-0">
              <div className="absolute bottom-[91.21%] left-[53.43%] right-[27.18%] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 24">
                  <path d={svgPaths.p128feef0} fill="#00DA6B" />
                </svg>
              </div>
              
              {/* Group stars top left */}
              <div className="absolute bottom-[92.24%] left-0 right-[92.68%] top-[3.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
                  <path d={svgPaths.p21ddc600} fill="#00DA6B" />
                  <path d={svgPaths.p1286aac0} fill="#00DA6B" />
                </svg>
              </div>
              
              {/* Group stars top right */}
              <div className="absolute inset-[3.25%_82.38%_92.24%_10.29%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
                  <path d={svgPaths.p21ddc600} fill="#00DA6B" />
                  <path d={svgPaths.p1286aac0} fill="#00DA6B" />
                </svg>
              </div>
              
              <div className="absolute inset-[11.43%_56.43%_77.42%_25.46%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                  <path d={svgPaths.p1ec69100} fill="#2B2B2C" />
                </svg>
              </div>
              
              <div className="absolute inset-[17.88%_67.36%_64.05%_3.28%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 49">
                  <path d={svgPaths.p1070e900} fill="#2B2B2C" />
                </svg>
              </div>
              
              {/* Main laptop group */}
              <div className="absolute bottom-0 left-[0.06%] right-[0.56%] top-[40.62%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162 159">
                  <path d={svgPaths.p3708ab80} fill="white" />
                  <path d={svgPaths.p2ac67c00} fill="#2B2B2C" />
                </svg>
              </div>
              
              <div className="absolute inset-[45.54%_8.78%_16.28%_8.28%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 102">
                  <path d={svgPaths.p83c9280} fill="white" />
                  <path d={svgPaths.p5230300} fill="#2B2B2C" />
                </svg>
              </div>
              
              <div className="absolute inset-[87.49%_36.15%_8.89%_35.65%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 10">
                  <path d={svgPaths.pf691d00} fill="#00DA6B" />
                  <path d={svgPaths.p1fb027f0} fill="#00DA6B" />
                  <path d={svgPaths.p159cf180} fill="#00DA6B" />
                </svg>
              </div>
              
              <div className="absolute inset-[9.35%_52.67%_62.12%_0.06%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 77">
                  <path d={svgPaths.pd401f00} fill="#2B2B2C" />
                </svg>
              </div>
              
              {/* Phone illustration */}
              <div className="absolute inset-[14.8%_9.58%_64.57%_66.89%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 55">
                  <path d={svgPaths.p36052600} fill="white" />
                  <path d={svgPaths.p129ce500} fill="#2B2B2C" />
                  <path d={svgPaths.p36724500} fill="#2B2B2C" />
                  <path d={svgPaths.p18cdb700} fill="#2B2B2C" />
                  <path d={svgPaths.p6b4f280} fill="#00DA6B" />
                  <path d={svgPaths.p234f2e00} fill="#2B2B2C" />
                  <path d={svgPaths.p31f40880} fill="#00DA6B" />
                  <path d={svgPaths.p186680} fill="#2B2B2C" />
                  <path d={svgPaths.p30ea2300} fill="#2B2B2C" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-[#F8F8F8] box-border content-stretch flex flex-col items-start justify-center px-6 md:px-10 lg:pl-10 lg:pr-20 py-8 md:py-12 relative shrink-0 w-full lg:w-[954px]">
            <form onSubmit={handleSubmit} className="w-full max-w-[834px]">
              {/* Form Grid */}
              <div className="gap-[24px] md:gap-[34px] grid grid-cols-1 md:grid-cols-2 mb-8 md:mb-12">
                {/* Name */}
                <div className="flex flex-col gap-[40px] items-start relative">
                  <p className="font-bold leading-normal text-[22px] text-black">Name*</p>
                  <div className="bg-[#1E1E1F] h-px w-full" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Pedro Leyva"
                    className="absolute top-[44px] left-0 font-normal text-[#717171] text-[16px] bg-transparent border-none outline-none w-full"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-[40px] items-start relative">
                  <p className="font-bold leading-normal text-[22px] text-black">Email*</p>
                  <div className="bg-[#1E1E1F] h-px w-full" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="pedro@mail.com"
                    className="absolute top-[44px] left-0 font-normal text-[#717171] text-[16px] bg-transparent border-none outline-none w-full"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-[40px] items-start relative">
                  <p className="font-bold leading-normal text-[22px] text-black">Phone</p>
                  <div className="bg-[#1E1E1F] h-px w-full" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+01 55 0000 0000"
                    className="absolute top-[44px] left-0 font-normal text-[#717171] text-[16px] bg-transparent border-none outline-none w-full"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-[40px] items-start relative">
                  <p className="font-bold leading-normal text-[22px] text-black">Company</p>
                  <div className="bg-[#1E1E1F] h-px w-full" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Website or company name"
                    className="absolute top-[44px] left-0 font-normal text-[#717171] text-[16px] bg-transparent border-none outline-none w-full"
                  />
                </div>

                {/* Comments - Full width */}
                <div className="md:col-span-2 flex flex-col gap-[40px] items-start relative">
                  <p className="font-bold leading-normal text-[22px] text-black">Comments</p>
                  <div className="bg-[#1E1E1F] h-px w-full" />
                  <textarea
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    placeholder="Pitch your project idea"
                    className="absolute top-[44px] left-0 font-normal text-[#717171] text-[16px] bg-transparent border-none outline-none w-full resize-none"
                    rows={1}
                  />
                  {/* Triangle decoration */}
                  <div className="absolute right-0 top-[54px] h-[13px] w-[15px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
                      <path d="M15 0L0 13H15V0Z" fill="#1E1E1F" />
                    </svg>
                  </div>
                </div>

                {/* Services you need */}
                <div className="flex flex-col gap-[40px] items-start relative">
                  <p className="font-bold leading-normal text-[22px] text-black">Services you need</p>
                  <div className="bg-[#1E1E1F] h-px w-full" />
                  <select
                    value={formData.services}
                    onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                    className="absolute top-[44px] left-0 font-normal text-[#717171] text-[16px] bg-transparent border-none outline-none w-full appearance-none cursor-pointer"
                  >
                    <option value="">Select services</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                  </select>
                  {/* Dropdown arrow */}
                  <div className="absolute right-[19px] top-[49px] h-[13.875px] w-[9.289px] pointer-events-none">
                    <svg className="block size-full rotate-[270deg] scale-y-[-100%]" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
                      <path d={svgPaths.p2c964d00} fill="#1E1E1F" />
                    </svg>
                  </div>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-[40px] items-start relative">
                  <p className="font-bold leading-normal text-[22px] text-black">Budget</p>
                  <div className="bg-[#1E1E1F] h-px w-full" />
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="absolute top-[44px] left-0 font-normal text-[#717171] text-[16px] bg-transparent border-none outline-none w-full appearance-none cursor-pointer"
                  >
                    <option value="">Select services</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                  {/* Dropdown arrow */}
                  <div className="absolute right-[19px] top-[49px] h-[13.875px] w-[9.289px] pointer-events-none">
                    <svg className="block size-full rotate-[270deg] scale-y-[-100%]" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
                      <path d={svgPaths.p2c964d00} fill="#1E1E1F" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#00DA6B] box-border flex gap-[10px] items-center justify-center px-[25px] py-[16px] rounded-[5px] hover:bg-[#00C060] transition-colors"
                >
                  <p className="font-bold leading-normal text-[18px] text-white uppercase">Submit</p>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom text with arrow */}
        <div className="flex gap-[10px] md:gap-[15px] items-center justify-center mt-8 md:mt-12 lg:mt-16 flex-wrap">
          <p className="font-normal leading-[35px] text-[#1E1E1F] text-[18px] md:text-[25px] text-center">
            Let's talk about your project...
          </p>
          <div className="flex items-center justify-center leading-[0] rotate-180 scale-y-[-100%]">
            <svg width="54" height="25" viewBox="0 0 54 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d={svgPaths.p30a52200} fill="#1E1E1F" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}