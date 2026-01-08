import svgPaths from "./svg-vb64srnkaa";

function Group() {
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

function LogoDe() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[50px] items-start p-[5px] relative shrink-0 w-[90px]" data-name="Logo De3">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[40px] items-center justify-center relative shrink-0 w-[26px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold h-[40px] leading-[46px] not-italic relative shrink-0 text-[14px] text-center text-white w-full">Esp</p>
    </div>
  );
}

function Contacto() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[30px] py-0 relative rounded-[125px] shrink-0" data-name="Contacto">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[125px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Portafolio</p>
    </div>
  );
}

function Contacto1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[30px] py-0 relative rounded-[125px] shrink-0" data-name="Contacto">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[125px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">Wanna work together?</p>
    </div>
  );
}

function CtaS() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="CTA´S">
      <Contacto />
      <Contacto1 />
    </div>
  );
}

function Menu() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Menú">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="MenÃº">
          <rect height="39" rx="4.5" stroke="var(--stroke-0, white)" width="39" x="0.5" y="0.5" />
          <path clipRule="evenodd" d={svgPaths.p73ead00} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Conenido() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Conenido">
      <Frame />
      <CtaS />
      <Menu />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-1/2 px-[80px] py-[8px] top-0 translate-x-[-50%] w-[1440px]" data-name="Header">
      <LogoDe />
      <Conenido />
    </div>
  );
}

export default function Header1() {
  return (
    <div className="relative size-full" data-name="Header">
      <Header />
    </div>
  );
}