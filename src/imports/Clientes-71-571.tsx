'use client';

import svgPaths from "./svg-5p71v9o6t0";
import { useLanguage } from '../context/LanguageContext';
// Placeholder images - replace with actual assets from Figma
const imgHelvetiaTravel16221 = "/img/helvetia.png";
const imgDownload1 = "/img/sanfer.png";

function Titulo() {
  const { t } = useLanguage();
  
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[10px] relative shrink-0 w-full" data-name="Titulo">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-black text-center w-full" style={{ fontSize: 'clamp(37px, 6vw, 62px)' }}>{t('clients.title')}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[32.5%_5.16%_33.68%_5.56%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225 28">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p1c63b00} fill="var(--fill-0, #BB1741)" id="Vector" />
            <path d={svgPaths.p2a0fe00} fill="var(--fill-0, #BB1741)" id="Vector_2" />
            <path d={svgPaths.p2d513400} fill="var(--fill-0, #BB1741)" id="Vector_3" />
            <path d={svgPaths.p2a03500} fill="var(--fill-0, #BB1741)" id="Vector_4" />
            <path d={svgPaths.pf153f00} fill="var(--fill-0, #BB1741)" id="Vector_5" />
            <g id="Group_3">
              <path d={svgPaths.p4a69100} fill="var(--fill-0, #1C2A4C)" id="Vector_6" />
              <path d={svgPaths.p4744600} fill="var(--fill-0, #1C2A4C)" id="Vector_7" />
              <path d={svgPaths.p17542500} fill="var(--fill-0, #BB1741)" id="Vector_8" />
            </g>
          </g>
          <path d={svgPaths.pd70d600} fill="var(--fill-0, #1C2A4C)" id="Vector_9" />
          <path d={svgPaths.p373e9800} fill="var(--fill-0, #BB1741)" id="Vector_10" />
          <path d={svgPaths.p4e51800} fill="var(--fill-0, #1C2A4C)" id="Vector_11" />
          <g id="Group_4">
            <path d={svgPaths.p467e940} fill="var(--fill-0, #1C2A4C)" id="Vector_12" />
            <path d={svgPaths.p36129e80} fill="var(--fill-0, #1C2A4C)" id="Vector_13" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Capa2() {
  return (
    <div className="absolute contents inset-[32.5%_5.16%_33.68%_5.56%]" data-name="Capa_1-2">
      <Group />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[32.5%_5.16%_33.68%_5.56%]">
      <Capa2 />
    </div>
  );
}

function Recubre() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Recubre">
      <Group37 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute inset-[32.5%_10.32%_31.44%_10.32%]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 29">
        <g id="Logo">
          <path d={svgPaths.p1c1a8680} fill="var(--fill-0, #003378)" id="Trazado 1352" />
          <path d={svgPaths.p20435b00} fill="var(--fill-0, #003378)" id="Trazado 1353" />
          <path d={svgPaths.p354fdf00} fill="var(--fill-0, #6389B3)" id="Trazado 1354" />
          <path d={svgPaths.p2932c580} fill="var(--fill-0, #003378)" id="Trazado 1355" />
          <path d={svgPaths.p2124600} fill="var(--fill-0, #EC0127)" id="Trazado 1356" />
          <path d={svgPaths.pb781300} fill="var(--fill-0, #003378)" id="Trazado 1357" />
          <path d={svgPaths.p11c1e000} fill="var(--fill-0, #003378)" id="Trazado 1358" />
          <path d={svgPaths.p31a5c100} fill="var(--fill-0, #003378)" id="Trazado 1359" />
          <path d={svgPaths.p1face9f2} fill="var(--fill-0, #003378)" id="Trazado 1360" />
          <path d={svgPaths.pb683b00} fill="var(--fill-0, #EC0127)" id="Trazado 1361" />
        </g>
      </svg>
    </div>
  );
}

function Imemsa() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Imemsa">
      <Logo />
    </div>
  );
}

function Ibero() {
  return (
    <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] relative mx-auto grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Ibero">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_71_945)" id="Ibero">
          <path d="M80 0H0V80H80V0Z" fill="var(--fill-0, #CF041D)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p3a66fd80} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p2ba3c100} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p3805f9f0} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p303e81f0} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p1edfa500} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p1c39dd00} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p13e15600} fill="var(--fill-0, white)" id="Vector_8" />
            <path d={svgPaths.p27a72900} fill="var(--fill-0, white)" id="Vector_9" />
            <path d={svgPaths.pe160f80} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p1c721280} fill="var(--fill-0, white)" id="Vector_11" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_71_945">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UniqLuxury() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Uniq Luxury">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 80">
        <g id="Uniq Luxury">
          <g id="LOGO">
            <path d={svgPaths.p3abb0700} fill="var(--fill-0, black)" />
            <path d={svgPaths.p15634100} fill="var(--fill-0, black)" />
            <path d={svgPaths.pe9c3300} fill="var(--fill-0, black)" />
            <path d={svgPaths.p38f7eb80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p29174800} fill="var(--fill-0, black)" />
            <path d={svgPaths.pd0f7a00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p345d8b80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p7cafa80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p31be7300} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1c5c5000} fill="var(--fill-0, black)" />
            <path d={svgPaths.p16271500} fill="var(--fill-0, black)" />
            <path d={svgPaths.p27d68700} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3da0e0b0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2cb7ad00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1b31af80} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nivel() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-[70px] items-center justify-items-center relative shrink-0 w-full" data-name="Nivel 1">
      <Recubre />
      <Imemsa />
      <Ibero />
      <UniqLuxury />
    </div>
  );
}

function Travel() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Travel">
      <div className="absolute h-[25px] left-[calc(50%+0.5px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[251px]" data-name="helvetia-travel-1622 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHelvetiaTravel16221} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-1/2 size-[80px] top-0 translate-x-[-50%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_71_892)" id="Frame">
          <path d={svgPaths.p2834a900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p632c200} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p10ed3f00} fill="var(--fill-0, #E97403)" id="Vector_3" />
          <path d={svgPaths.p32938e00} fill="var(--fill-0, #004A87)" id="Vector_4" />
          <path d={svgPaths.p49f8a00} fill="var(--fill-0, #004A87)" id="Vector_5" />
          <path d={svgPaths.p3c0a1300} fill="var(--fill-0, #004A87)" id="Vector_6" />
          <path d={svgPaths.p3faad500} fill="var(--fill-0, #004A87)" id="Vector_7" />
          <path d={svgPaths.pdc5b100} fill="var(--fill-0, #004A87)" id="Vector_8" />
          <path d={svgPaths.p24024b00} fill="var(--fill-0, #004A87)" id="Vector_9" />
          <path d={svgPaths.p273ddb30} fill="var(--fill-0, #004A87)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_71_892">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Naturgy() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Naturgy">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[55px] left-[38px] top-[12px] w-[176px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 176 55">
        <g clipPath="url(#clip0_71_908)" id="Frame">
          <g id="Group">
            <path d={svgPaths.p3bf7be00} fill="var(--fill-0, #5BAFF8)" id="Vector" />
            <path d={svgPaths.pa15d00} fill="var(--fill-0, #5BAFF8)" id="Vector_2" />
            <path d={svgPaths.p3fed0180} fill="var(--fill-0, #5BAFF8)" id="Vector_3" />
            <path d={svgPaths.p2c4f8500} fill="var(--fill-0, #5BAFF8)" id="Vector_4" />
            <path d={svgPaths.p352016d0} fill="var(--fill-0, #5BAFF8)" id="Vector_5" />
          </g>
          <path d={svgPaths.p3c0c5800} fill="var(--fill-0, #5BAFF8)" id="Vector_6" />
          <path d={svgPaths.p1c659580} fill="var(--fill-0, #FF8C24)" id="Vector_7" />
          <path d={svgPaths.p2603ca80} fill="var(--fill-0, #FF8C24)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_71_908">
            <rect fill="white" height="55" width="176" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents left-[38px] top-[12px]">
      <Frame1 />
    </div>
  );
}

function Optics() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Optics">
      <Group38 />
    </div>
  );
}

function Sanfer() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Sanfer">
      <div className="absolute h-[70px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[178px]" data-name="download 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDownload1} />
      </div>
    </div>
  );
}

function Nivel1() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-[70px] items-center justify-items-center relative shrink-0 w-full" data-name="Nivel 2">
      <Travel />
      <Naturgy />
      <Optics />
      <Sanfer />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[5.86%_76.1%_7.55%_2.89%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 50">
        <g id="Group">
          <path d={svgPaths.pa31b210} fill="var(--fill-0, #A5BFDE)" id="Vector" />
          <path d={svgPaths.pc9a8400} fill="var(--fill-0, #A5BFDE)" id="Vector_2" />
          <path d={svgPaths.p5c45300} fill="var(--fill-0, #A5BFDE)" id="Vector_3" />
          <path d={svgPaths.p9107b00} fill="var(--fill-0, #A5BFDE)" id="Vector_4" />
          <path d={svgPaths.p349a0a00} fill="var(--fill-0, #A5BFDE)" id="Vector_5" />
          <path d={svgPaths.p3a4a8ff0} fill="var(--fill-0, #A5BFDE)" id="Vector_6" />
          <path d={svgPaths.p30930b00} fill="var(--fill-0, #046AA9)" id="Vector_7" />
          <path d={svgPaths.p14742d60} fill="var(--fill-0, #046AA9)" id="Vector_8" />
          <path d={svgPaths.p1b9f0180} fill="var(--fill-0, #046AA9)" id="Vector_9" />
          <path d={svgPaths.pa384a80} fill="var(--fill-0, #046AA9)" id="Vector_10" />
          <path d={svgPaths.p39cd1680} fill="var(--fill-0, #046AA9)" id="Vector_11" />
          <path d={svgPaths.p11697300} fill="var(--fill-0, #046AA9)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[45.14%_1.3%_6.53%_25.42%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184 28">
        <g id="Group">
          <path d={svgPaths.p23934300} fill="var(--fill-0, #046AA9)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2c1f63c0} fill="var(--fill-0, #046AA9)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p18cbe600} fill="var(--fill-0, #046AA9)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p10d1b680} fill="var(--fill-0, #046AA9)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p29ec9840} fill="var(--fill-0, #046AA9)" fillRule="evenodd" id="Vector_5" />
          <path d={svgPaths.p2b07e880} fill="var(--fill-0, #046AA9)" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p1e607480} fill="var(--fill-0, #046AA9)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p2d295e00} fill="var(--fill-0, #046AA9)" fillRule="evenodd" id="Vector_8" />
          <path d={svgPaths.p781cd00} fill="var(--fill-0, #046AA9)" id="Vector_9" />
          <path d={svgPaths.p22580} fill="var(--fill-0, #046AA9)" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p3c696600} fill="var(--fill-0, #046AA9)" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p4f56900} fill="var(--fill-0, #046AA9)" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p3eddfb00} fill="var(--fill-0, #046AA9)" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p18b0af00} fill="var(--fill-0, #046AA9)" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p1c52eb00} fill="var(--fill-0, #046AA9)" fillRule="evenodd" id="Vector_15" />
          <path d={svgPaths.p84cda80} fill="var(--fill-0, #046AA9)" id="Vector_16" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[5.86%_1.3%_6.53%_2.89%]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function LogoBiogal() {
  return (
    <div className="absolute h-[57px] left-[calc(50%+0.5px)] overflow-clip top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[251px]" data-name="logoBiogal 1">
      <Group3 />
    </div>
  );
}

function Biogal() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Biogal">
      <LogoBiogal />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute bottom-0 left-[35.56%] right-[35.64%] top-0" data-name="Layer 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 80">
        <g id="Layer 1">
          <path d={svgPaths.p191a6600} fill="var(--fill-0, #34C6F4)" id="Elipse 619" opacity="0.7" />
          <path d={svgPaths.p30412700} fill="var(--fill-0, #34C6F4)" id="Elipse 620" opacity="0.7" />
          <path d={svgPaths.p336bfb00} fill="var(--fill-0, white)" id="Trazado 5816" />
          <path d={svgPaths.p62cc00} fill="var(--fill-0, white)" id="Trazado 5817" />
          <path d={svgPaths.p11a8ca00} fill="var(--fill-0, white)" id="Trazado 5818" />
          <path d={svgPaths.p2204fb00} fill="var(--fill-0, #002A38)" id="Trazado 5819" />
          <path d={svgPaths.p2d7a2800} fill="var(--fill-0, #002A38)" id="Trazado 5820" />
          <path d={svgPaths.p178d6d80} fill="var(--fill-0, #002A38)" id="Trazado 5821" />
          <path d={svgPaths.p7fa0b00} fill="var(--fill-0, #002A38)" id="Trazado 5822" />
        </g>
      </svg>
    </div>
  );
}

function Capa1() {
  return (
    <div className="absolute bottom-0 contents left-[35.56%] right-[35.64%] top-0" data-name="Capa 2">
      <Layer />
    </div>
  );
}

function Componente() {
  return (
    <div className="absolute bottom-0 contents left-[35.56%] right-[35.64%] top-0" data-name="Componente 17">
      <Capa1 />
    </div>
  );
}

function Venn() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="VENN">
      <Componente />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[36.98%_22.62%_35.92%_46.41%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 22">
        <g id="Group">
          <path d={svgPaths.p30174400} fill="var(--fill-0, #003595)" id="Vector" />
          <path d={svgPaths.p1d2e4f80} fill="var(--fill-0, #003595)" id="Vector_2" />
          <path d={svgPaths.p9a8f280} fill="var(--fill-0, #003595)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[23.38%_45.77%_65.41%_51.1%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
        <g id="Group">
          <path d={svgPaths.p364c5880} fill="var(--fill-0, #003595)" id="Vector" />
          <path d={svgPaths.p188e4980} fill="var(--fill-0, #003595)" id="Vector_2" />
          <path d={svgPaths.p26b4b280} fill="var(--fill-0, #003595)" id="Vector_3" />
          <path d={svgPaths.p238e78a0} fill="var(--fill-0, #003595)" id="Vector_4" />
          <path d={svgPaths.p3ce28b00} fill="var(--fill-0, #003595)" id="Vector_5" />
          <path d={svgPaths.p32e66080} fill="var(--fill-0, #003595)" id="Vector_6" />
          <path d={svgPaths.p2620a8f0} fill="var(--fill-0, #003595)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[21.95%_55.16%_21.52%_22.62%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 46">
        <g id="Group">
          <path d={svgPaths.p1989c700} fill="var(--fill-0, #003595)" id="Vector" />
          <path d={svgPaths.p16f4f700} fill="var(--fill-0, #003595)" id="Vector_2" />
          <path d={svgPaths.p2f8eb500} fill="var(--fill-0, #003595)" id="Vector_3" />
          <path d={svgPaths.p4a67400} fill="var(--fill-0, #003595)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[21.95%_22.62%_21.52%_22.62%]">
      <Group4 />
      <Group5 />
      <Group6 />
    </div>
  );
}

function Olinka() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Olinka">
      <Group40 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[80px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[52px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 80">
        <g clipPath="url(#clip0_71_825)" id="Frame">
          <path d={svgPaths.p28fe32f0} fill="var(--fill-0, #6A2133)" id="Vector" />
          <path d={svgPaths.p18c90f00} fill="var(--fill-0, #6A2133)" id="Vector_2" />
          <path d={svgPaths.p17466600} fill="var(--fill-0, #6A2133)" id="Vector_3" />
          <path d={svgPaths.p27d6e7ea} fill="var(--fill-0, #6A2133)" id="Vector_4" />
          <g id="Group">
            <g id="Group_2">
              <path d={svgPaths.p205da00} fill="var(--fill-0, #6A2133)" id="Vector_5" />
              <path d={svgPaths.p19084c0} fill="var(--fill-0, #6A2133)" id="Vector_6" />
              <path d={svgPaths.p14a79600} fill="var(--fill-0, #6A2133)" id="Vector_7" />
              <path d={svgPaths.p3f5e8280} fill="var(--fill-0, #6A2133)" id="Vector_8" />
              <path d={svgPaths.p315df900} fill="var(--fill-0, #6A2133)" id="Vector_9" />
              <path d={svgPaths.pc671d60} fill="var(--fill-0, #6A2133)" id="Vector_10" />
              <path d={svgPaths.p397c3b80} fill="var(--fill-0, #6A2133)" id="Vector_11" />
              <path d={svgPaths.p17e9ce40} fill="var(--fill-0, #6A2133)" id="Vector_12" />
              <path d={svgPaths.p28227600} fill="var(--fill-0, #6A2133)" id="Vector_13" />
              <path d={svgPaths.p2bb46100} fill="var(--fill-0, #6A2133)" id="Vector_14" />
              <path d={svgPaths.p8f63400} fill="var(--fill-0, #6A2133)" id="Vector_15" />
              <path d={svgPaths.p14911d80} fill="var(--fill-0, #6A2133)" id="Vector_16" />
              <path d={svgPaths.p2f464b80} fill="var(--fill-0, #6A2133)" id="Vector_17" />
              <path d={svgPaths.p3d5fa200} fill="var(--fill-0, #6A2133)" id="Vector_18" />
              <path d={svgPaths.p3d461a80} fill="var(--fill-0, #6A2133)" id="Vector_19" />
              <path d={svgPaths.p25829780} fill="var(--fill-0, #6A2133)" id="Vector_20" />
              <path d={svgPaths.p3e59c300} fill="var(--fill-0, #6A2133)" id="Vector_21" />
              <path d={svgPaths.p26aeec80} fill="var(--fill-0, #6A2133)" id="Vector_22" />
              <path d={svgPaths.p36eb680} fill="var(--fill-0, #6A2133)" id="Vector_23" />
            </g>
            <g id="Group_3">
              <path d={svgPaths.pb423180} fill="var(--fill-0, #6A2133)" id="Vector_24" />
              <path d={svgPaths.p29057780} fill="var(--fill-0, #6A2133)" id="Vector_25" />
              <path d={svgPaths.p2ac38180} fill="var(--fill-0, #6A2133)" id="Vector_26" />
              <path d={svgPaths.p32b52800} fill="var(--fill-0, #6A2133)" id="Vector_27" />
              <path d={svgPaths.p8145400} fill="var(--fill-0, #6A2133)" id="Vector_28" />
              <path d={svgPaths.p3dfced00} fill="var(--fill-0, #6A2133)" id="Vector_29" />
              <path d={svgPaths.p1e7817b0} fill="var(--fill-0, #6A2133)" id="Vector_30" />
              <path d={svgPaths.p31e35700} fill="var(--fill-0, #6A2133)" id="Vector_31" />
              <path d={svgPaths.pd15e400} fill="var(--fill-0, #6A2133)" id="Vector_32" />
              <path d={svgPaths.p37698280} fill="var(--fill-0, #6A2133)" id="Vector_33" />
              <path d={svgPaths.p3c8e0c00} fill="var(--fill-0, #6A2133)" id="Vector_34" />
              <path d={svgPaths.p38fece00} fill="var(--fill-0, #6A2133)" id="Vector_35" />
              <path d={svgPaths.p2028e480} fill="var(--fill-0, #6A2133)" id="Vector_36" />
            </g>
            <path d={svgPaths.p22bcfa00} fill="var(--fill-0, #6A2133)" id="Vector_37" />
          </g>
          <path d={svgPaths.pdd551f0} fill="var(--fill-0, #6A2133)" id="Vector_38" />
          <path d={svgPaths.p38fe3280} fill="var(--fill-0, #6A2133)" id="Vector_39" />
          <path d={svgPaths.p1e854900} fill="var(--fill-0, #6A2133)" id="Vector_40" />
          <path d={svgPaths.p710c000} fill="var(--fill-0, #6A2133)" id="Vector_41" />
          <path d={svgPaths.p6c61280} fill="var(--fill-0, #6A2133)" id="Vector_42" />
          <path d={svgPaths.p7d9ae00} fill="var(--fill-0, #6A2133)" id="Vector_43" />
          <path d={svgPaths.p1939b900} fill="var(--fill-0, #6A2133)" id="Vector_44" />
          <path d={svgPaths.p8f32af1} fill="var(--fill-0, #6A2133)" id="Vector_45" />
          <path d={svgPaths.p8a434c0} fill="var(--fill-0, #6A2133)" id="Vector_46" />
          <path d={svgPaths.p18a33b00} fill="var(--fill-0, #6A2133)" id="Vector_47" />
        </g>
        <defs>
          <clipPath id="clip0_71_825">
            <rect fill="white" height="80" width="52" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Cuin() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="CUIN">
      <Frame2 />
    </div>
  );
}

function Nivel2() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-[70px] items-center justify-items-center relative shrink-0 w-full" data-name="Nivel 3">
      <Biogal />
      <Venn />
      <Olinka />
      <Cuin />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[57.76%_57.5%_27.7%_30.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 11">
        <g id="Group">
          <path d={svgPaths.p130baa00} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.p2631c300} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[56.68%_45%_29.41%_41.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 10">
        <g id="Group">
          <path d={svgPaths.p109a7100} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.p273b6c00} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[57.76%_34.43%_27.7%_53.24%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 11">
        <g id="Group">
          <path d={svgPaths.p9a45000} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.p39c51100} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[57.8%_21.79%_29.2%_64.33%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 10">
        <g id="Group">
          <path d={svgPaths.pc3b6280} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.pcf46e00} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[52.27%_11.48%_29.76%_76.91%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 13">
        <g id="Group">
          <path d={svgPaths.p30476a00} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.p7974280} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute bottom-[23.44%] left-[86.89%] right-0 top-[40.88%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 25">
        <g id="Group">
          <path d={svgPaths.p16a4af40} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.p36e39080} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute bottom-[1.11%] left-0 right-[78.63%] top-[14.92%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 59">
        <g id="Group">
          <path d={svgPaths.pe9c700} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.p30c33580} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[55.32%_56%_36.79%_42.77%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 6">
        <g id="Group">
          <path d={svgPaths.p3af8c700} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.p16a3f700} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute bottom-0 left-[17.25%] right-[19.68%] top-[92.27%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126 6">
        <g id="Group">
          <path d={svgPaths.p2b2f41c0} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.p2a857500} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          <path d={svgPaths.p5e70c00} fill="var(--fill-0, #5B5B5B)" id="Vector_3" />
          <path d={svgPaths.p336a3b00} fill="var(--fill-0, #5B5B5B)" id="Vector_4" />
          <path d={svgPaths.p2dea29f1} fill="var(--fill-0, #5B5B5B)" id="Vector_5" />
          <path d={svgPaths.p2fdc1780} fill="var(--fill-0, #5B5B5B)" id="Vector_6" />
          <path d={svgPaths.pf033e00} fill="var(--fill-0, #5B5B5B)" id="Vector_7" />
          <path d={svgPaths.p105ad800} fill="var(--fill-0, #5B5B5B)" id="Vector_8" />
          <path d={svgPaths.p292b6d60} fill="var(--fill-0, #5B5B5B)" id="Vector_9" />
          <path d={svgPaths.p6515470} fill="var(--fill-0, #5B5B5B)" id="Vector_10" />
          <path d={svgPaths.p1452c00} fill="var(--fill-0, #5B5B5B)" id="Vector_11" />
          <path d={svgPaths.p21693940} fill="var(--fill-0, #5B5B5B)" id="Vector_12" />
          <path d={svgPaths.p381e2ef0} fill="var(--fill-0, #5B5B5B)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[22.18%_39.43%_64.8%_51.28%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 10">
        <g id="Group">
          <path d={svgPaths.p3678be80} fill="var(--fill-0, #DFD7D0)" id="Vector" />
          <path d={svgPaths.p9106d80} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[22.21%_51.56%_64.82%_39.16%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 10">
        <g id="Group">
          <path d={svgPaths.pb717680} fill="var(--fill-0, #DFD7D0)" id="Vector" />
          <path d={svgPaths.p23941000} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[12.43%_51.56%_76.06%_39.16%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 9">
        <g id="Group">
          <path d={svgPaths.p257f7700} fill="var(--fill-0, #FDE9D8)" id="Vector" />
          <path d={svgPaths.p308e3080} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[12.43%_48.1%_64.86%_47.85%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
        <g id="Group">
          <path d={svgPaths.pdf66300} fill="var(--fill-0, #E1BCA7)" id="Vector" />
          <path d={svgPaths.p16cec780} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute inset-[22.41%_57.68%_70.28%_39.27%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 6">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p26923740} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[22.43%_55.55%_65.36%_39.27%]" data-name="Group">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 9">
          <g id="Group">
            <g id="Vector"></g>
            <path d={svgPaths.p15bf7d00} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute inset-[22.43%_53.31%_64.96%_41.31%]" data-name="Group">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 9">
          <g id="Group">
            <g id="Vector"></g>
            <path d={svgPaths.p114a3a00} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute inset-[23.18%_51.66%_64.94%_43.64%]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
          <g id="Group">
            <g id="Vector"></g>
            <path d={svgPaths.p8298500} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute inset-[27.93%_51.64%_65.2%_45.94%]" data-name="Group">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <g id="Group">
            <g id="Vector"></g>
            <path d={svgPaths.p10afd80} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[22.41%_51.64%_64.94%_39.27%]" data-name="Group">
      <Group20 />
      <Group21 />
      <Group22 />
      <Group23 />
      <Group24 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[22.39%_45.59%_70.3%_51.36%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 6">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.pc9ec500} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[22.41%_43.46%_65.38%_51.36%]" data-name="Group">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 9">
          <g id="Group">
            <g id="Vector"></g>
            <path d={svgPaths.p15bf7d00} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[22.41%_41.22%_64.98%_53.4%]" data-name="Group">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 9">
          <g id="Group">
            <g id="Vector"></g>
            <path d={svgPaths.p2ff7b780} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute inset-[23.16%_39.57%_64.96%_55.73%]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
          <g id="Group">
            <g id="Vector"></g>
            <path d={svgPaths.p8298500} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[27.91%_39.55%_65.22%_58.03%]" data-name="Group">
      <div className="absolute bottom-[-0.02%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <g id="Group">
            <g id="Vector"></g>
            <path d={svgPaths.p167dd80} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[22.39%_39.55%_64.96%_51.36%]" data-name="Group">
      <Group26 />
      <Group27 />
      <Group28 />
      <Group29 />
      <Group30 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute bottom-[86.35%] left-[45.69%] right-[45.67%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
        <g id="Group">
          <path d={svgPaths.p14c6e780} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.pe4a5300} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[12.43%_39.43%_76.1%_51.28%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 9">
        <g id="Group">
          <path d={svgPaths.p114ead80} fill="var(--fill-0, #FDE9D8)" id="Vector" />
          <path d={svgPaths.p84f2580} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute bottom-[64.8%] contents left-[39.16%] right-[39.43%] top-0" data-name="Group">
      <Group16 />
      <Group17 />
      <Group18 />
      <Group19 />
      <Group25 />
      <Group31 />
      <Group32 />
      <Group33 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[70px] left-[27px] overflow-clip top-[5px] w-[198.687px]" data-name="Frame">
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <div className="absolute inset-[54.81%_54.74%_37.67%_41.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
          <path d={svgPaths.p2c40a580} fill="var(--fill-0, #5B5B5B)" id="Vector" />
        </svg>
      </div>
      <Group14 />
      <Group15 />
      <Group34 />
      <div className="absolute inset-[54.66%_68.12%_30.78%_20.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 11">
          <path d={svgPaths.p2b274400} fill="var(--fill-0, #5B5B5B)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function LogoDecocuitHeader() {
  return (
    <div className="absolute contents left-[27px] top-[5px]" data-name="Logo Decocuit header">
      <Frame3 />
    </div>
  );
}

function Decocuit() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Decocuit">
      <LogoDecocuitHeader />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute bottom-[41.82%] left-0 right-[0.04%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 35">
        <g id="Group">
          <path d={svgPaths.p32940a00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pce0bf00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.pbbfa9b2} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p27d9e500} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p3f0d0500} fill="var(--fill-0, black)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[76.31%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 15">
        <g id="Group">
          <path d={svgPaths.p2a82ba00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1f8b10c0} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p3aaf9a00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p178b6400} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p1dc76b80} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.pc4e9b80} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p3e2a600} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p1ec136f0} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p22e49780} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p3820e580} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.p15441500} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.ped30e70} fill="var(--fill-0, black)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[60px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[158px]" data-name="Frame">
      <Group35 />
      <Group36 />
    </div>
  );
}

function Pz() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="PZ">
      <Frame4 />
    </div>
  );
}

function Capa() {
  return (
    <div className="absolute h-[50.431px] left-[14px] top-[15px] w-[225px]" data-name="Capa_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225 51">
        <g clipPath="url(#clip0_71_617)" id="Capa_1">
          <path d={svgPaths.p112ab680} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p23c90b80} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.pd43480} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p18856840} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p28206000} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p2d27980} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.paebf100} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p77af900} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p121611a0} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p3dfb6c40} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.p34406100} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.p18664100} fill="var(--fill-0, black)" id="Vector_12" />
          <path d={svgPaths.pea0f680} fill="var(--fill-0, black)" id="Vector_13" />
          <path d={svgPaths.p3ae09b00} fill="var(--fill-0, black)" id="Vector_14" />
          <path d={svgPaths.p2a9e3600} fill="var(--fill-0, black)" id="Vector_15" />
          <path d={svgPaths.p5b890c0} fill="var(--fill-0, black)" id="Vector_16" />
          <path d={svgPaths.p10b66500} fill="var(--fill-0, black)" id="Vector_17" />
          <path d={svgPaths.p199d8680} fill="var(--fill-0, black)" id="Vector_18" />
        </g>
        <defs>
          <clipPath id="clip0_71_617">
            <rect fill="white" height="50.431" width="225" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents left-[14px] top-[15px]">
      <Capa />
    </div>
  );
}

function CommerceSociety() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Commerce Society">
      <Group41 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[60px] left-[25px] top-[10px] w-[202.451px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 60">
        <g clipPath="url(#clip0_71_701)" id="Frame">
          <path d={svgPaths.p3c7b970} fill="var(--fill-0, #2A3867)" id="Vector" />
          <path d={svgPaths.p113fcb40} fill="var(--fill-0, #2A3867)" id="Vector_2" />
          <path d={svgPaths.p29b23c00} fill="var(--fill-0, #2A3867)" id="Vector_3" />
          <path d={svgPaths.p1d2e4e80} fill="var(--fill-0, #2A3867)" id="Vector_4" />
          <path d={svgPaths.p5a95f80} fill="var(--fill-0, #2A3867)" id="Vector_5" />
          <path d={svgPaths.p21b56f00} fill="var(--fill-0, #2A3867)" id="Vector_6" />
          <path d={svgPaths.p2f9d6c80} fill="var(--fill-0, #00A0E0)" id="Vector_7" />
          <path d={svgPaths.p37d58d00} fill="var(--fill-0, #2A3867)" id="Vector_8" />
          <g id="Group">
            <path d={svgPaths.p279e000} fill="var(--fill-0, #0F9D58)" id="Vector_9" />
            <path d={svgPaths.pc44cd80} fill="var(--fill-0, #0F9D58)" id="Vector_10" />
            <path d={svgPaths.p3b54d500} fill="var(--fill-0, #0F9D58)" id="Vector_11" />
            <path d={svgPaths.p264ccc40} fill="var(--fill-0, #0F9D58)" id="Vector_12" />
            <path d={svgPaths.p3c68b600} fill="var(--fill-0, #0F9D58)" id="Vector_13" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_71_701">
            <rect fill="white" height="60" width="202.451" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents left-[25px] top-[10px]">
      <Frame5 />
    </div>
  );
}

function Zaz() {
  return (
    <div className="h-[60px] md:h-[70px] lg:h-[80px] relative w-full max-w-[180px] md:max-w-[220px] lg:max-w-[252px] grayscale hover:grayscale-0 transition-all duration-200 ease-out cursor-pointer hover:scale-105" data-name="Zaz">
      <Group39 />
    </div>
  );
}

function Nivel3() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-[70px] items-center justify-items-center relative shrink-0 w-full" data-name="Nivel 4">
      <Decocuit />
      <Pz />
      <CommerceSociety />
      <Zaz />
    </div>
  );
}

function Logos() {
  return (
    <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] min-h-[520px] items-center justify-center relative shrink-0 w-full py-6" data-name="Logos">
      <Nivel />
      <Nivel1 />
      <Nivel2 />
      <Nivel3 />
    </div>
  );
}

function Clientes() {
  return (
    <div className="relative bg-white box-border content-stretch flex flex-col gap-[24px] items-start w-full max-w-[1440px] mx-auto overflow-visible px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[80px] py-0" data-name="Clientes">
      <Titulo />
      <Logos />
    </div>
  );
}

export default function Clientes1() {
  return (
    <div className="relative size-full" data-name="Clientes">
      <Clientes />
    </div>
  );
}