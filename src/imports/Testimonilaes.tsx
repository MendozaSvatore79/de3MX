import svgPaths from "./svg-srlcamm6wp";
// Placeholder image - replace with actual asset from Figma
const imgCapturaDePantalla20230116ALaS192 = "https://via.placeholder.com/100x100?text=Avatar";
import { imgCapturaDePantalla20230116ALaS0191 } from "./svg-5s68k";

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[65px] text-black w-[340px]">Reviews matter</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[63.342px] relative shrink-0 w-[123px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123 64">
        <g clipPath="url(#clip0_44_1653)" id="Frame">
          <path d={svgPaths.p303957f0} id="Vector" stroke="var(--stroke-0, #282828)" strokeMiterlimit="10" strokeWidth="2.25" />
          <g id="Group">
            <path d={svgPaths.p9f4ab00} fill="var(--fill-0, #00DA6B)" id="Vector_2" stroke="var(--stroke-0, #282828)" strokeMiterlimit="10" strokeWidth="2.25" />
            <path d={svgPaths.p55e0600} fill="var(--fill-0, #00DA6B)" id="Vector_3" stroke="var(--stroke-0, #282828)" strokeMiterlimit="10" strokeWidth="2.25" />
            <path d={svgPaths.p28555680} fill="var(--fill-0, #00DA6B)" id="Vector_4" stroke="var(--stroke-0, #282828)" strokeMiterlimit="10" strokeWidth="2.25" />
            <path d={svgPaths.p1022b200} fill="var(--fill-0, #00DA6B)" id="Vector_5" stroke="var(--stroke-0, #282828)" strokeMiterlimit="10" strokeWidth="2.25" />
            <path d={svgPaths.p1e082100} fill="var(--fill-0, #00DA6B)" id="Vector_6" stroke="var(--stroke-0, #282828)" strokeMiterlimit="10" strokeWidth="2.25" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_44_1653">
            <rect fill="white" height="63.3415" width="123" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Titulo() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Titulo">
      <Frame5 />
      <Frame />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[54.25px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9.25px_0px] mask-size-[50px_50px] ml-[-9.25px] mt-0 relative w-[68.25px]" data-name="Captura de Pantalla 2023-01-16 a la(s) 0.19 1" style={{ maskImage: `url('${imgCapturaDePantalla20230116ALaS0191}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCapturaDePantalla20230116ALaS192} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23px] not-italic relative shrink-0 text-[#1e1e1f] text-[16px] text-nowrap whitespace-pre">Luis García</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[23px] not-italic relative shrink-0 text-[#1e1e1f] text-[16px] text-nowrap whitespace-pre">| Puesto y/o nombre de la empresa</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[270px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <MaskGroup />
      <Frame3 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[107px] items-center relative shrink-0 w-full" data-name="Header">
      <Frame4 />
      <div className="h-[30px] relative shrink-0 w-[59.574px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 30">
          <path d={svgPaths.pcf5d040} fill="var(--fill-0, #E4E4E4)" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Copy">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23px] not-italic relative shrink-0 text-[#1e1e1f] text-[16px] w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[502px]" data-name="Content">
      <Header />
      <div className="bg-[#d9d9d9] h-px shrink-0 w-full" data-name="Space" />
      <Copy />
    </div>
  );
}

function CardTestimonial() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[340px] items-center justify-center px-[60px] py-[52px] relative shadow-[0px_20px_30px_0px_rgba(43,43,44,0.16)] shrink-0 w-[626px]" data-name="Card_testimonial">
      <Content />
    </div>
  );
}

function Indicadores() {
  return (
    <div className="h-[15px] relative shrink-0 w-[207px]" data-name="indicadores">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 15">
        <g id="indicadores">
          <circle cx="7.5" cy="7.5" fill="var(--fill-0, #1E1E1F)" id="Ellipse 14" r="7.5" />
          <circle cx="55.5" cy="7.5" fill="var(--fill-0, #CBCBCB)" id="Ellipse 15" r="7.5" />
          <circle cx="103.5" cy="7.5" fill="var(--fill-0, #CBCBCB)" id="Ellipse 16" r="7.5" />
          <circle cx="151.5" cy="7.5" fill="var(--fill-0, #CBCBCB)" id="Ellipse 17" r="7.5" />
          <circle cx="199.5" cy="7.5" fill="var(--fill-0, #CBCBCB)" id="Ellipse 18" r="7.5" />
        </g>
      </svg>
    </div>
  );
}

function ArrowBack() {
  return (
    <div className="[grid-area:1_/_1] h-[36.667px] ml-0 mt-0 relative w-[78.571px]" data-name="arrow-back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 37">
        <g id="arrow-back">
          <path clipRule="evenodd" d={svgPaths.p24507300} fill="var(--fill-0, #00DA6B)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Core() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Core">
      <ArrowBack />
    </div>
  );
}

function Back() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 top-[375px] w-[78.571px]" data-name="back">
      <Core />
    </div>
  );
}

function ArrowBack1() {
  return (
    <div className="[grid-area:1_/_1] h-[36.667px] ml-0 mt-0 relative w-[78.571px]" data-name="arrow-back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 37">
        <g id="arrow-back">
          <path clipRule="evenodd" d={svgPaths.p24507300} fill="var(--fill-0, #00DA6B)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Core1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Core">
      <ArrowBack1 />
    </div>
  );
}

function Next() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative w-[78.571px]" data-name="next">
      <Core1 />
    </div>
  );
}

function Testimonio() {
  return (
    <div className="content-stretch flex flex-col gap-[46px] items-center justify-center relative shrink-0" data-name="Testimonio">
      <CardTestimonial />
      <Indicadores />
      <Back />
      <div className="absolute flex items-center justify-center right-0 top-[375px] w-[78.571px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Next />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[167px] items-center justify-center relative shrink-0" data-name="Content">
      <Titulo />
      <Testimonio />
    </div>
  );
}

function Testimonilaes() {
  return (
    <div className="absolute bg-[#f8f8f8] box-border content-stretch flex flex-col items-start justify-center left-1/2 px-[80px] py-[48px] top-0 translate-x-[-50%] w-[1440px]" data-name="Testimonilaes">
      <Content1 />
    </div>
  );
}

export default function Testimonilaes1() {
  return (
    <div className="relative size-full" data-name="Testimonilaes">
      <Testimonilaes />
    </div>
  );
}