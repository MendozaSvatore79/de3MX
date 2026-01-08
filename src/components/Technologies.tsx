'use client';

import React from 'react';
import HowDoWeDoIt1 from '../imports/HowDoWeDoIt-72-402';
import svgPaths from "../imports/svg-6ss0qc76a";
import { useLanguage } from '../context/LanguageContext';

// Mobile Version - Simple badges
function TechBadgeMobile({ text, variant = 'white' }: { text: string; variant?: 'white' | 'dark' | 'green' }) {
  const bgColor = variant === 'white' ? 'bg-white' : variant === 'green' ? 'bg-[#00da6b]' : 'bg-[#1e1e1f]';
  const textColor = variant === 'white' ? 'text-[#1e1e1f]' : 'text-white';
  const fontWeight = variant === 'green' ? "font-['Courier_Prime:Bold',sans-serif]" : "font-['Courier_Prime:Regular',sans-serif]";
  const shadow = variant === 'white' || variant === 'green' ? 'shadow-[0px_50px_80px_0px_#000000]' : '';

  return (
    <div className={`${bgColor} ${shadow} box-border flex items-center justify-center h-[60px] px-4 py-[22px] rounded-[5px] w-full`}>
      <p className={`${fontWeight} ${textColor} text-[24px] text-center`}>
        {text}
      </p>
    </div>
  );
}

function MobileVersion() {
  const { t } = useLanguage();
  
  return (
    <div className="block md:hidden bg-[#1e1e1f] w-full py-12 px-4">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-white" style={{ fontSize: '42px', fontWeight: 'bold', lineHeight: 'normal' }}>
          {t('technologies.title')}
        </h2>
      </div>

      {/* Tech Grid - 2 columns on mobile */}
      <div className="grid grid-cols-2 gap-4">
        {/* Column 1 */}
        <div className="bg-[#2b2b2c] flex flex-col gap-4 p-4">
          <TechBadgeMobile text="JAVA" variant="white" />
          <TechBadgeMobile text="REACT" variant="dark" />
        </div>

        {/* Column 2 */}
        <div className="bg-[#2b2b2c] flex flex-col gap-4 p-4">
          <TechBadgeMobile text="KOTLIN" variant="dark" />
          <TechBadgeMobile text="LARAVEL" variant="white" />
        </div>

        {/* Column 3 */}
        <div className="bg-[#2b2b2c] flex flex-col gap-4 p-4">
          <TechBadgeMobile text="AWS GIT" variant="green" />
          <TechBadgeMobile text="WP" variant="dark" />
        </div>

        {/* Column 4 - Full width */}
        <div className="bg-[#2b2b2c] flex flex-col gap-4 p-4 col-span-2">
          <TechBadgeMobile text="JS" variant="dark" />
          <TechBadgeMobile text="PHP" variant="white" />
        </div>
      </div>
    </div>
  );
}

function DesktopVersion() {
  return (
    <div className="hidden md:block bg-[#1e1e1f] w-full relative h-[570px]">
      <HowDoWeDoIt1 />
    </div>
  );
}

export default function Technologies() {
  return (
    <>
      <MobileVersion />
      <DesktopVersion />
    </>
  );
}