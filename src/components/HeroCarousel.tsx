'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import svgPaths from "../imports/svg-spcno8h19m";
import Slide2DesignWrapper from './Slide2DesignWrapper';
import Slide3DesignWrapper from './Slide3DesignWrapper';
import Slide4DigitalWrapper from './Slide4DigitalWrapper';

// Slide 1 - Logo Central (original hero)
function LogoIng({ isActive }: { isActive: boolean }) {
  return (
    <motion.div 
      className="w-full h-full relative shrink-0" 
      data-name="LOGO-ING"
      animate={{ 
        rotate: isActive ? 360 : 0 
      }}
      transition={{ 
        duration: 1.2, 
        ease: "easeInOut" 
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 387 343">
        <g clipPath="url(#clip0_16_131)" id="LOGO-ING">
          <path d={svgPaths.p351e9b00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pf60a00} fill="var(--fill-0, #00DA6B)" id="Vector_2" />
          <path d={svgPaths.p3a726600} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p22221400} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p572e600} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3bfb1100} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p272c8300} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p6481480} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p2128bb00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1c798c00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p36aa1800} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p34a84d00} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p7efcf00} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p30babb80} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p3a02ff80} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p394c0e00} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p2a5f2b40} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p11581f10} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p34acd400} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p1dfd5a80} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p18be1140} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p11e85380} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p26053b80} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p191327c0} fill="var(--fill-0, white)" id="Vector_24" />
        </g>
        <defs>
          <clipPath id="clip0_16_131">
            <rect fill="white" height="342.88" width="386.354" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
}

// Slide 2 - Design
function Slide2Design({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className="absolute inset-0"
      style={{ transformOrigin: "center center" }}
      animate={{
        rotate: isActive ? 360 : 0
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut"
      }}
    >
      <Slide2DesignWrapper />
    </motion.div>
  );
}

// Slide 3 - Development
function Slide3Development({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className="absolute inset-0"
      style={{ transformOrigin: "center center" }}
      animate={{
        rotate: isActive ? 360 : 0
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut"
      }}
    >
      <Slide3DesignWrapper />
    </motion.div>
  );
}

// Slide 4 - Digital
function Slide4Digital({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className="absolute inset-0"
      style={{ transformOrigin: "center center" }}
      animate={{
        rotate: isActive ? 360 : 0
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut"
      }}
    >
      <Slide4DigitalWrapper />
    </motion.div>
  );
}

// Componentes decorativos compartidos
function MaskResplandor() {
  return (
    <div className="absolute inset-0 w-full h-full" data-name="Mask resplandor">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 850">
        <g id="Mask resplandor">
          <mask height="850" id="mask0_carousel" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="1440" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="850" id="Rectangle 9931" width="1440" />
          </mask>
          <g mask="url(#mask0_carousel)">
            <ellipse cx="720" cy="-170" fill="url(#paint0_radial_carousel)" id="Resplandor" rx="720" ry="850" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(720 -170) rotate(90) scale(850 720)" gradientUnits="userSpaceOnUse" id="paint0_radial_carousel" r="1">
            <stop stopColor="#537166" />
            <stop offset="0.463542" stopColor="#334941" />
            <stop offset="1" stopColor="#1E1E1F" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Indicadores({ currentSlide, onClick }: { currentSlide: number; onClick: (index: number) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[81px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[36px] z-50" data-name="Indicadores">
      <button 
        onClick={() => onClick(0)}
        className={`shrink-0 w-full transition-all duration-300 ${currentSlide === 0 ? 'bg-[#00da6b] h-[10px]' : 'bg-white h-[3px]'}`} 
      />
      <button 
        onClick={() => onClick(1)}
        className={`shrink-0 w-full transition-all duration-300 ${currentSlide === 1 ? 'bg-[#00da6b] h-[10px]' : 'bg-white h-[3px]'}`} 
      />
      <button 
        onClick={() => onClick(2)}
        className={`shrink-0 w-full transition-all duration-300 ${currentSlide === 2 ? 'bg-[#00da6b] h-[10px]' : 'bg-white h-[3px]'}`} 
      />
      <button 
        onClick={() => onClick(3)}
        className={`shrink-0 w-full transition-all duration-300 ${currentSlide === 3 ? 'bg-[#00da6b] h-[10px]' : 'bg-white h-[3px]'}`} 
      />
    </div>
  );
}

function Fb() {
  return (
    <button className="h-[27.564px] relative shrink-0 w-[29.879px] transition-all duration-300 hover:scale-110 group" data-name="FB">
      <svg className="block size-full transition-colors duration-300 group-hover:[&_path]:fill-[#00DA6B]" fill="none" preserveAspectRatio="none" viewBox="0 0 30 28">
        <g id="FB">
          <path d={svgPaths.p1de1c500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function Ig() {
  return (
    <button className="relative shrink-0 size-[30px] transition-all duration-300 hover:scale-110 group" data-name="IG">
      <svg className="block size-full transition-colors duration-300 group-hover:[&_path]:fill-[#00DA6B]" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="IG">
          <path d={svgPaths.pca9100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function In() {
  return (
    <button className="h-[29.522px] relative shrink-0 w-[30.609px] transition-all duration-300 hover:scale-110 group" data-name="IN">
      <svg className="block size-full transition-colors duration-300 group-hover:[&_path]:fill-[#00DA6B]" fill="none" preserveAspectRatio="none" viewBox="0 0 31 30">
        <g id="IN">
          <path d={svgPaths.p1493f580} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function Rrss() {
  return (
    <div className="absolute bg-[#1e1e1f]/90 backdrop-blur-sm box-border content-stretch flex flex-col gap-[20px] h-[160px] items-center px-[12px] py-[20px] right-0 rounded-bl-[8px] rounded-tl-[8px] top-[50%] translate-y-[-50%] w-[50px] transition-all duration-300 hover:bg-[#1e1e1f] hover:w-[54px] z-50" data-name="RRSS">
      <div aria-hidden="true" className="absolute border border-solid border-white/20 inset-0 pointer-events-none rounded-bl-[8px] rounded-tl-[8px] transition-colors duration-300 hover:border-white/40" />
      <Fb />
      <Ig />
      <In />
    </div>
  );
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSlideChange = (newSlide: number) => {
    if (isAnimating || newSlide === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isAnimating) {
      e.preventDefault();
      return;
    }
    
    // Si estamos en el último slide y scrolleamos hacia abajo, permitir scroll natural
    if (currentSlide === 3 && e.deltaY > 0) {
      // No prevenir, dejar que el scroll continúe normalmente
      return;
    }
    
    // Si estamos en el primer slide y scrolleamos hacia arriba, permitir scroll natural
    if (currentSlide === 0 && e.deltaY < 0) {
      // No prevenir, dejar que el scroll continúe normalmente
      return;
    }
    
    // Prevenir scroll de la página mientras cambiamos slides
    e.preventDefault();
    
    if (e.deltaY > 0 && currentSlide < 3) {
      // Scroll down - next slide
      handleSlideChange(currentSlide + 1);
    } else if (e.deltaY < 0 && currentSlide > 0) {
      // Scroll up - previous slide
      handleSlideChange(currentSlide - 1);
    }
  };

  // Agregar event listener nativo con { passive: false } para prevenir scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const wheelHandler = (e: WheelEvent) => {
      if (isAnimating) {
        e.preventDefault();
        return;
      }
      
      // Si estamos en el último slide y scrolleamos hacia abajo, permitir scroll natural
      if (currentSlide === 3 && e.deltaY > 0) {
        return;
      }
      
      // Si estamos en el primer slide y scrolleamos hacia arriba, permitir scroll natural
      if (currentSlide === 0 && e.deltaY < 0) {
        return;
      }
      
      // Prevenir scroll de la página mientras cambiamos slides
      e.preventDefault();
      
      if (e.deltaY > 0 && currentSlide < 3) {
        handleSlideChange(currentSlide + 1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        handleSlideChange(currentSlide - 1);
      }
    };

    section.addEventListener('wheel', wheelHandler, { passive: false });

    return () => {
      section.removeEventListener('wheel', wheelHandler);
    };
  }, [currentSlide, isAnimating]);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#1e1e1f] relative h-[600px] sm:h-[700px] md:h-[750px] lg:h-[850px] xl:h-screen w-full flex items-center justify-center overflow-hidden" 
      data-name="Sección Hero Carousel"
    >
      <div className="relative w-full max-w-[1440px] h-[600px] sm:h-[700px] md:h-[750px] lg:h-[850px] xl:h-screen">
        {/* Background gradient */}
        <MaskResplandor />

        {/* Slides container */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            {/* Slide 1 - Logo */}
            {currentSlide === 0 && (
              <motion.div
                key="slide-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center 2xl:translate-y-[6vh]"
              >
                <div className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[386.354px]">
                  <LogoIng isActive={currentSlide === 0} />
                </div>
              </motion.div>
            )}

            {/* Slide 2 - Design */}
            {currentSlide === 1 && (
              <motion.div
                key="slide-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center 2xl:translate-y-[6vh]"
              >
                <Slide2Design isActive={currentSlide === 1} />
              </motion.div>
            )}

            {/* Slide 3 - Development */}
            {currentSlide === 2 && (
              <motion.div
                key="slide-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center 2xl:translate-y-[6vh]"
              >
                <Slide3Development isActive={currentSlide === 2} />
              </motion.div>
            )}

            {/* Slide 4 - Digital */}
            {currentSlide === 3 && (
              <motion.div
                key="slide-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center 2xl:translate-y-[6vh]"
              >
                <Slide4Digital isActive={currentSlide === 3} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Social media - hidden on mobile, visible on desktop */}
        <div className="hidden lg:block">
          <Rrss />
        </div>

        {/* Indicators - hidden on mobile, visible on tablet+ */}
        <div className="hidden md:block">
          <Indicadores currentSlide={currentSlide} onClick={handleSlideChange} />
        </div>
      </div>
      {/* Bottom cover to hide initial white gap below hero on large screens */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[120px] bg-[#1e1e1f]"
      />
    </section>
  );
}