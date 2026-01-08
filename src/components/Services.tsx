import React from 'react';
import Link from 'next/link';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Web from '../imports/Web';
import App from '../imports/App-44-1040';
import Design from '../imports/Design';
import Marketing from '../imports/Marketing';

export default function Services() {
  const services = [
    {
      title: 'Web',
      component: <Web />,
      href: '/services/web'
    },
    {
      title: 'App',
      component: <App />,
      href: '/services/app'
    },
    {
      title: 'Design',
      component: <Design />,
      href: '/services/design'
    },
    {
      title: 'Marketing',
      component: <Marketing />,
      href: '/services/marketing'
    }
  ];

  return (
    <section className="relative bg-[#1E1E1F] overflow-hidden">
      {/* Radial gradients background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00DA6B] opacity-5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00DA6B] opacity-5 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-[24px] md:py-[36px] lg:py-[48px] relative z-10">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-white mb-0" style={{ fontSize: 'clamp(40px, 6vw, 65px)', fontWeight: 'bold', lineHeight: '1.2' }}>
            You dream it,
          </h2>
          <h2 className="text-white" style={{ fontSize: 'clamp(40px, 6vw, 65px)', fontWeight: 'bold', lineHeight: '1.2' }}>
            we make it digital
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="flex flex-col items-center text-center group cursor-pointer will-change-transform transition-transform duration-100 ease-out hover:scale-105"
            >
              {/* SVG Illustration - Figma imported components */}
              <div className="relative w-[306px] h-[400px] mx-auto will-change-transform transition-transform duration-100 ease-out group-hover:-translate-y-2">
                {service.component}
              </div>

              {/* Subtle shadow effect */}
              <div className="w-3/4 h-3 bg-gradient-to-b from-black/20 to-transparent blur-lg -mt-1 transition-opacity duration-100 ease-out group-hover:opacity-60"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}