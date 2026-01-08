'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Web from '../imports/Web';
import App from '../imports/App-44-1040';
import Design from '../imports/Design';
import Marketing from '../imports/Marketing';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafIds = useRef<number[]>([]);

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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, index: number) => {
    // Cancelar animación anterior si existe
    if (rafIds.current[index]) {
      cancelAnimationFrame(rafIds.current[index]);
    }

    rafIds.current[index] = requestAnimationFrame(() => {
      const rect = serviceRefs.current[index]?.getBoundingClientRect();
      const imageElement = serviceRefs.current[index]?.querySelector('.service-image') as HTMLElement;
      
      if (rect && imageElement) {
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const translateX = x * 0.1;
        const translateY = y * 0.1;
        
        imageElement.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      }
    });
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    if (rafIds.current[index]) {
      cancelAnimationFrame(rafIds.current[index]);
    }
    
    const imageElement = serviceRefs.current[index]?.querySelector('.service-image') as HTMLElement;
    if (imageElement) {
      imageElement.style.transform = 'translate3d(0, 0, 0)';
    }
    setHoveredIndex(null);
  }, []);

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
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div
                ref={(el) => { serviceRefs.current[index] = el; }}
                className="relative w-[306px] h-[400px] mx-auto"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* SVG Illustration - Figma imported components */}
                <div
                  className="service-image absolute inset-0"
                  style={{ 
                    willChange: 'transform',
                    transform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    perspective: 1000,
                    WebkitPerspective: 1000
                  }}
                >
                  {service.component}
                </div>
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