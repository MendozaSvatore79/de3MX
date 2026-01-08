"use client";

import React from 'react';
import { motion } from "framer-motion";
import svgPaths from "../imports/svg-1ehv621gs1";

function Copy() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 w-full lg:w-auto" data-name="Copy">
      <motion.div 
        className="font-['Inter:Bold',sans-serif] font-bold not-italic relative shrink-0 text-[#2b2b2c] w-full text-center lg:text-left lg:text-nowrap lg:whitespace-pre"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="mb-0" style={{ fontSize: 'clamp(37px, 6vw, 62px)', lineHeight: 'clamp(47px, 7vw, 80px)', fontWeight: 'bold' }}>
          <span className="text-[#00da6b]">Our mission</span>
          <span>{` is to `}</span>
        </p>
        <p className="mb-0" style={{ fontSize: 'clamp(37px, 6vw, 62px)', lineHeight: 'clamp(47px, 7vw, 80px)', fontWeight: 'bold' }}>make your brand</p>
        <p className="mb-0" style={{ fontSize: 'clamp(37px, 6vw, 62px)', lineHeight: 'clamp(47px, 7vw, 80px)', fontWeight: 'bold' }}>grow.</p>
      </motion.div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[371.633px] relative shrink-0 w-[514.716px]">
      <div className="absolute bottom-[-15.71%] left-[-9.42%] right-[-33.81%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 738 430">
          <g id="Group 6975">
            <motion.g
              filter="url(#filter0_d_18_560)"
              id="Union"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path clipRule="evenodd" d={svgPaths.p3ab06480} fill="white" fillRule="evenodd" />
            </motion.g>
            <motion.g
              filter="url(#filter1_d_18_560)"
              id="Union_2"
              animate={{
                y: [0, -20, 0],
                rotate: [0, -3, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <path clipRule="evenodd" d={svgPaths.p205f8c00} fill="white" fillRule="evenodd" />
            </motion.g>
            <motion.g
              filter="url(#filter2_d_18_560)"
              id="Union_3"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 4, 0]
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <path clipRule="evenodd" d={svgPaths.p21b6c080} fill="white" fillRule="evenodd" />
            </motion.g>
            <g id="Group">
              <path d={svgPaths.p25708f00} fill="var(--fill-0, #2B2B2C)" id="Vector" />
              <path d={svgPaths.p19641980} fill="var(--fill-0, #00DA6B)" id="Vector_2" />
            </g>
            <motion.g
              id="Group_2"
              animate={{
                scaleX: [1, 1.08, 1],
                skewY: [0, 3, 0, -3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformOrigin: "left center" }}
            >
              <path d={svgPaths.p21ea3b00} fill="var(--fill-0, #00DA6B)" id="Vector_3" stroke="var(--stroke-0, #2B2B2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <path d={svgPaths.p12b25d00} id="Vector_4" stroke="var(--stroke-0, #2B2B2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <path d={svgPaths.p314d7f00} id="Vector_5" stroke="var(--stroke-0, #2B2B2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </motion.g>
            <motion.g
              id="Group_3"
              animate={{
                scaleX: [1, 1.07, 1],
                skewY: [0, 2.5, 0, -2.5, 0]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
              style={{ transformOrigin: "left center" }}
            >
              <path d={svgPaths.p36831580} fill="var(--fill-0, #00DA6B)" id="Vector_6" stroke="var(--stroke-0, #2B2B2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <path d={svgPaths.p1ab69b00} id="Vector_7" stroke="var(--stroke-0, #2B2B2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <path d={svgPaths.p22703300} fill="var(--fill-0, white)" id="Vector_8" stroke="var(--stroke-0, #2B2B2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </motion.g>
            <motion.g
              id="Group_4"
              animate={{
                scaleX: [1, 1.06, 1],
                skewY: [0, 2.8, 0, -2.8, 0]
              }}
              transition={{
                duration: 2.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
              style={{ transformOrigin: "left center" }}
            >
              <path d={svgPaths.p9371300} fill="var(--fill-0, #00DA6B)" id="Vector_9" stroke="var(--stroke-0, #2B2B2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <path d={svgPaths.p214cbe70} id="Vector_10" stroke="var(--stroke-0, #2B2B2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <path d={svgPaths.p1528ee00} fill="var(--fill-0, white)" id="Vector_11" stroke="var(--stroke-0, #2B2B2C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </motion.g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="369.633" id="filter0_d_18_560" width="368" x="155" y="60">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="30" dy="-6" />
              <feGaussianBlur stdDeviation="32" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18_560" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18_560" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="344" id="filter1_d_18_560" width="344.216" x="393" y="86">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="60" dy="-26" />
              <feGaussianBlur stdDeviation="57" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18_560" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18_560" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="344" id="filter2_d_18_560" width="343.217" x="0" y="86">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="60" dy="-26" />
              <feGaussianBlur stdDeviation="57" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18_560" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18_560" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Ilustracion() {
  return (
    <div className="absolute contents left-[47px] top-[29.08px]" data-name="Ilustración">
      <Group />
    </div>
  );
}

function Vector() {
  return (
    <div className="relative shrink-0 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[629px] h-auto aspect-[629/540]" data-name="Vector">
      <Ilustracion />
    </div>
  );
}

export default function OurMissionSection() {
  return (
    <section className="relative bg-white w-full py-8 md:py-12 lg:py-20 xl:py-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:flex-row gap-[21px] md:gap-10 lg:gap-20 xl:gap-[101px] items-center justify-center">
          <Copy />
          <div className="w-full flex justify-center">
            <Vector />
          </div>
        </div>
      </div>
    </section>
  );
}
