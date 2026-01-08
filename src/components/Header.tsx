'use client';
import React, { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-vb64srnkaa';
import menuSvgPaths from '../imports/svg-k5krc1s3s1';

function LogoGroup() {
  return (
    <div className="h-[40px] relative shrink-0 w-[79.064px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 40">
        <g id="Group 7">
          <path d={svgPaths.p3bc96ac0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p86a3b00} fill="var(--fill-0, #00DA6B)" id="Vector_2" />
          <path d={svgPaths.p18c1af00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3cb25500} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p28a39200} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function LogoDe3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[50px] items-start p-[5px] relative shrink-0 w-[90px]" data-name="Logo De3">
      <LogoGroup />
    </div>
  );
}

function LanguageButton() {
  const [language, setLanguage] = useState('Ing');
  
  const toggleLanguage = () => {
    setLanguage(language === 'Esp' ? 'Ing' : 'Esp');
  };
  
  return (
    <button onClick={toggleLanguage} className="box-border content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[125px] shrink-0 hover:bg-[#00DA6B] transition-colors">
      <svg className="relative shrink-0 w-[16px] h-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap">
        {language === 'Esp' ? (
          <>
            <span className="text-white">ESP</span>
            <span className="text-white/40 mx-[4px]">/</span>
            <span className="text-white/40">ENG</span>
          </>
        ) : (
          <>
            <span className="text-white">ENG</span>
            <span className="text-white/40 mx-[4px]">/</span>
            <span className="text-white/40">ESP</span>
          </>
        )}
      </p>
    </button>
  );
}

function PortfolioButton() {
  return (
    <button className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[30px] py-0 relative rounded-[125px] shrink-0 hover:bg-[#00DA6B] hover:text-white transition-colors" data-name="Contacto">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[125px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre">Portafolio</p>
    </button>
  );
}

function WorkTogetherButton() {
  return (
    <button className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[30px] py-0 relative rounded-[125px] shrink-0 hover:bg-[#00DA6B] hover:text-white transition-colors" data-name="Contacto">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[125px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap whitespace-pre">Wanna work together?</p>
    </button>
  );
}

function CTAs() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="CTA´S">
      <PortfolioButton />
      <WorkTogetherButton />
    </div>
  );
}

function MenuIcon({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[30px] py-0 relative rounded-[125px] shrink-0 hover:bg-[#00DA6B] hover:text-white transition-colors" data-name="Menú">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[125px]" />
      <svg className="relative shrink-0 w-[20px] h-[14px]" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Menú">
          <path clipRule="evenodd" d={svgPaths.p73ead00} fill="currentColor" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </button>
  );
}

function DesktopContent({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Contenido">
      <CTAs />
      <LanguageButton />
      <MenuIcon onClick={onMenuClick} />
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section height is 675px
      const heroHeight = 675;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
          isScrolled ? 'bg-[#1E1E1F]/90' : 'bg-transparent'
        }`}
      >
        <div className="absolute box-border content-stretch flex items-center justify-between left-0 pl-[5px] pr-[10px] md:pl-[10px] md:pr-[20px] py-[16px] top-0 w-full max-w-[1440px] mx-auto relative">
          <LogoDe3 />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <DesktopContent onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#1e1e1f]">
          {/* Background with gradient */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 675">
              <defs>
                <radialGradient cx="0" cy="0" gradientTransform="translate(720 -170) rotate(90) scale(718 720)" gradientUnits="userSpaceOnUse" id="paint0_radial_menu" r="1">
                  <stop stopColor="#537166" />
                  <stop offset="0.463542" stopColor="#334941" />
                  <stop offset="1" stopColor="#1E1E1F" />
                </radialGradient>
              </defs>
              <ellipse cx="50%" cy="-25%" fill="url(#paint0_radial_menu)" opacity="0.5" rx="50%" ry="106%" />
            </svg>
          </div>

          {/* Background logo - large and faded */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[758px] h-[673px] opacity-20 overflow-hidden pointer-events-none hidden md:block">
            <div className="absolute bottom-[21.84%] left-0 right-0 top-[21.73%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 758 380">
                <g id="Group 40791">
                  <path d={menuSvgPaths.p29d61270} fill="white" />
                  <path d={menuSvgPaths.p7e85400} fill="#00DA6B" />
                  <path d={menuSvgPaths.p26caaf80} fill="white" />
                  <path d="M758 0H683.101V379.8H758V0Z" fill="white" />
                  <path d={menuSvgPaths.p24337d00} fill="white" />
                </g>
              </svg>
            </div>
          </div>

          {/* Menu items */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[19px] items-center text-center text-white w-[337px]">
            <button className="font-bold text-[22px] hover:text-[#00DA6B] transition-colors">Web</button>
            <button className="font-bold text-[22px] hover:text-[#00DA6B] transition-colors">Apps</button>
            <button className="font-bold text-[22px] hover:text-[#00DA6B] transition-colors">Marketing</button>
            <button className="font-semibold text-[62px] hover:text-[#00DA6B] transition-colors" style={{ textShadow: 'rgba(0,0,0,0.5) 0px 7px 44px' }}>Design</button>
            <button className="font-bold text-[22px] hover:text-[#00DA6B] transition-colors">Server</button>
            <button className="font-bold text-[22px] hover:text-[#00DA6B] transition-colors">De3 Team</button>
            <button className="font-bold text-[22px] hover:text-[#00DA6B] transition-colors">Contact</button>
          </div>

          {/* Close button */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-[13px] right-[20px] md:right-[80px] box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[12px] py-0 rounded-[125px] shrink-0 hover:bg-[#00DA6B] hover:text-white transition-colors group"
          >
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[125px]" />
            <svg className="relative shrink-0 w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
              <path 
                clipRule="evenodd" 
                d={menuSvgPaths.p2bd47c80} 
                fill="currentColor" 
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}