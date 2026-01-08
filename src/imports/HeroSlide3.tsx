import svgPaths from "./svg-iaza1v44gp";

function MaskResplandor() {
  return (
    <div className="absolute h-[675px] left-1/2 top-0 translate-x-[-50%] w-[1440px]" data-name="Mask resplandor">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 675">
        <g id="Mask resplandor">
          <mask height="675" id="mask0_136_1755" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="1440" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="675" id="Rectangle 9931" width="1440" />
          </mask>
          <g mask="url(#mask0_136_1755)">
            <circle cx="720" cy="-279" fill="url(#paint0_radial_136_1755)" id="Resplandor" r="861.75" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(720 -279) rotate(90) scale(861.75)" gradientUnits="userSpaceOnUse" id="paint0_radial_136_1755" r="1">
            <stop stopColor="#537166" />
            <stop offset="0.463542" stopColor="#334941" />
            <stop offset="1" stopColor="#1E1E1F" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Deco1() {
  return (
    <div className="h-[124.486px] relative w-[54.677px]" data-name="deco2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 125">
        <g clipPath="url(#clip0_136_1661)" id="deco2">
          <g id="Vector">
            <path d={svgPaths.pba46b80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1216780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b31c300} fill="var(--fill-0, white)" />
            <path d={svgPaths.pf51c900} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa384000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p16569440} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3c5e0d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p39ac7b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p16dbe000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b13b800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1bb4a680} fill="var(--fill-0, white)" />
            <path d={svgPaths.pea67500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p264dcd00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p37dbf4f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2c5a44f0} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_136_1661">
            <rect fill="white" height="124.486" width="54.6769" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Deco() {
  return (
    <div className="absolute h-[54.251px] left-[120px] top-[101.25px] w-[111.75px]" data-name="deco1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 55">
        <g clipPath="url(#clip0_136_1653)" id="deco1">
          <g id="Vector">
            <path d="M4.3276 0H0V12.778H4.3276V0Z" fill="var(--fill-0, white)" />
            <path d={svgPaths.p6c07d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2d544100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p14f00d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8f90840} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2300900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33cc0ec0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1567f400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p824b900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p280d6e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3478cfb0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d366400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1e96bc00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p36052600} fill="var(--fill-0, white)" />
            <path d={svgPaths.pe9dd80} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_136_1653">
            <rect fill="white" height="54.2506" width="111.75" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Back() {
  return (
    <div className="absolute contents left-0 top-0" data-name="BACK">
      <MaskResplandor />
      <div className="absolute flex h-[124.486px] items-center justify-center left-[1263.75px] top-[489px] w-[54.677px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Deco1 />
        </div>
      </div>
      <Deco />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[675px] left-0 top-0 w-[1440px]">
      <Back />
    </div>
  );
}

function Fb() {
  return (
    <div className="absolute h-[27.564px] left-[19px] top-[27px] w-[29.879px]" data-name="FB">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 28">
        <g id="FB">
          <path d={svgPaths.p1de1c500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Ig() {
  return (
    <div className="absolute left-[19px] size-[30px] top-[86.56px]" data-name="IG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="IG">
          <path d={svgPaths.pca9100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function In() {
  return (
    <div className="absolute h-[29.522px] left-[19px] top-[148.56px] w-[30.609px]" data-name="IN">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 30">
        <g id="IN">
          <path d={svgPaths.p1493f580} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Rrss() {
  return (
    <div className="absolute bg-[#1e1e1f] border border-solid border-white h-[210px] right-0 rounded-bl-[10px] rounded-tl-[10px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[70px]" data-name="RRSS">
      <Fb />
      <Ig />
      <In />
    </div>
  );
}

function Indicadores() {
  return (
    <div className="absolute h-[67px] left-[81px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[36px]" data-name="Indicadores">
      <div className="absolute bg-[#00da6b] h-[10px] left-0 top-0 w-[36px]" />
      <div className="absolute bg-white h-[3px] left-0 top-[26px] w-[36px]" />
      <div className="absolute bg-white h-[3px] left-0 top-[45px] w-[36px]" />
      <div className="absolute bg-white h-[3px] left-0 top-[64px] w-[36px]" />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute inset-[30.34%_85.63%_52.2%_4.92%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 63">
        <g id="Group 6990">
          <g id="Group">
            <path d={svgPaths.p184d5980} fill="url(#paint0_linear_136_1475)" fillOpacity="0.2" id="Vector" />
            <path d={svgPaths.p30de4680} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
          <path d={svgPaths.p1a37af00} fill="var(--fill-0, #00DA6B)" id="Vector_3" />
          <path d={svgPaths.p2b58fcc0} fill="var(--fill-0, #00DA6B)" id="Vector_4" />
          <path d={svgPaths.pe473c00} fill="var(--fill-0, #00DA6B)" id="Vector_5" />
          <path d={svgPaths.p37672900} fill="var(--fill-0, #00DA6B)" id="Vector_6" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_136_1475" x1="36.2219" x2="36.2219" y1="0.30765" y2="62.0341">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[75.54%_7.97%_16.35%_82.38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 29">
        <g id="Group">
          <path d={svgPaths.p1062ec80} fill="var(--fill-0, #282828)" id="Vector" />
          <path d={svgPaths.p1d186300} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[77.4%_9.71%_18.67%_83.62%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 15">
        <g id="Group">
          <path d={svgPaths.p36774500} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p32d19880} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p216d9280} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1aaaac80} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[75.54%_7.97%_16.35%_82.38%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[83.62%_78.64%_10.01%_14.57%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 23">
        <g id="Group">
          <path d={svgPaths.p14a7c080} fill="var(--fill-0, #282828)" id="Vector" />
          <path d={svgPaths.p2632e300} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[85.67%_79.83%_12.33%_15.71%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 8">
        <g id="Group">
          <path d={svgPaths.p24d4d80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p5339e00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p14af3b80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p29881500} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3f96480} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[83.62%_78.64%_10.01%_14.57%]" data-name="Group">
      <Group3 />
      <Group4 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute inset-[91.71%_53.09%_0.01%_42.99%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 30">
        <g id="Group 6985">
          <g id="Group">
            <path d={svgPaths.p11cbf1c0} fill="var(--fill-0, #00DA6B)" id="Vector" />
            <path d={svgPaths.p3e165e00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
          <path d={svgPaths.p1455bc80} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[64.04%_95.05%_29.92%_0.92%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 22">
        <g id="Group">
          <path d={svgPaths.p3b6feb00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p371cb8c0} fill="var(--fill-0, #282828)" id="Vector_2" />
          <path d={svgPaths.pede6500} fill="var(--fill-0, #282828)" id="Vector_3" />
          <path d={svgPaths.p147e0100} fill="var(--fill-0, #282828)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[64.04%_95.05%_29.92%_0.92%]">
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[0.02%_72.72%_93.54%_22.82%]" data-name="Group">
      <div className="absolute bottom-[-65.27%] left-[-46.88%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 38">
          <g id="Group">
            <g filter="url(#filter0_d_136_1469)" id="Vector">
              <path d={svgPaths.p1f8c7100} fill="var(--fill-0, white)" />
            </g>
            <g id="Group_2">
              <path d={svgPaths.p1c5b9300} fill="var(--fill-0, #282828)" id="Vector_2" />
              <path d={svgPaths.p15090e00} fill="var(--fill-0, #282828)" id="Vector_3" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="37.983" id="filter0_d_136_1469" width="50.1306" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-9" dy="8" />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_136_1469" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_136_1469" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[10.55%_93.9%_84.93%_2.92%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 17">
        <g id="Group">
          <path d={svgPaths.p14d79200} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2b862200} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p10486480} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute inset-[10.22%_3.02%_64.61%_89.93%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 90">
        <g id="Group 6987">
          <path d={svgPaths.p3c3ce00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pf280900} fill="var(--fill-0, white)" id="Vector_2" />
          <g id="Group">
            <path d={svgPaths.p3d9c9100} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p32daa700} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[12.46%_43.46%_26.92%_12.99%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 334 217">
        <g id="Group">
          <path d={svgPaths.p150f5780} fill="var(--fill-0, #282828)" id="Vector" />
          <path d={svgPaths.p31639780} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[69.98%_50.14%_26.62%_19.87%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230 13">
        <g id="Group">
          <path d={svgPaths.p3ac10400} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.pd0b0d80} fill="var(--fill-0, #263238)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[71.49%_50.14%_26.62%_19.87%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230 7">
        <g id="Group">
          <path d={svgPaths.p3269ef00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p34c43480} fill="var(--fill-0, #263238)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[75.05%_40.1%_22.47%_9.44%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 387 9">
        <g id="Group">
          <path d={svgPaths.p22fa9700} fill="var(--fill-0, #282828)" id="Vector" />
          <path d={svgPaths.p3f506280} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[72.75%_40.02%_24.65%_9.38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 388 10">
        <g id="Group">
          <path d={svgPaths.p6433700} fill="var(--fill-0, #282828)" id="Vector" />
          <path d={svgPaths.p3a7c17f0} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[13.41%_64.8%_84.69%_34.31%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g id="Group">
          <path d={svgPaths.p395a2f00} fill="var(--fill-0, #00DA6B)" id="Vector" />
          <path d={svgPaths.p280e0900} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[17.19%_45.23%_34.29%_14.76%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 307 174">
        <g id="Group">
          <path d={svgPaths.p29a20d00} fill="var(--fill-0, #1E1E1F)" id="Vector" />
          <path d={svgPaths.pf83180} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[46.91%_46.96%_48.74%_48.37%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 16">
        <g id="Group">
          <path d={svgPaths.p39558d40} fill="var(--fill-0, #2C2334)" id="Vector" />
          <path d={svgPaths.p100f2400} fill="var(--fill-0, #2C2334)" id="Vector_2" />
          <path d={svgPaths.p22dd9600} fill="var(--fill-0, #2C2334)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[22.04%_47.01%_65.46%_48.86%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 45">
        <g id="Group" opacity="0.2">
          <path d={svgPaths.p10d4f400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pdbc4ef0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3248400} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1f622c80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3e848c80} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[43.08%_63.16%_37.67%_16.36%] opacity-20" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157 69">
        <g id="Group">
          <path d={svgPaths.p3e5a7900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p67cb480} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p10cc8b00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p34a9ca00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p388d00f1} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3b59ca00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p369c7400} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2ab5ab00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1a1cd080} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3048a600} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p290d3a40} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p6666200} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p3f58eb00} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p142f9f80} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p33b6a900} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p243d80} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p2cc7e300} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p10971b2} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p1f185090} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p1eaae80} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p3c234d80} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p2ee96200} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p3361e500} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p11d21380} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p3a9bce00} fill="var(--fill-0, white)" id="Vector_25" />
          <path d={svgPaths.p17395c80} fill="var(--fill-0, white)" id="Vector_26" />
          <path d={svgPaths.p1009ca00} fill="var(--fill-0, white)" id="Vector_27" />
          <path d={svgPaths.p2251b600} fill="var(--fill-0, white)" id="Vector_28" />
          <path d={svgPaths.p8d11d00} fill="var(--fill-0, white)" id="Vector_29" />
          <path d={svgPaths.pec1e800} fill="var(--fill-0, white)" id="Vector_30" />
          <path d={svgPaths.pcf01a40} fill="var(--fill-0, white)" id="Vector_31" />
          <path d={svgPaths.p34edc3f0} fill="var(--fill-0, white)" id="Vector_32" />
          <path d={svgPaths.p573af80} fill="var(--fill-0, white)" id="Vector_33" />
          <path d={svgPaths.p21da3d40} fill="var(--fill-0, white)" id="Vector_34" />
          <path d={svgPaths.p2e54c980} fill="var(--fill-0, white)" id="Vector_35" />
          <path d={svgPaths.p2e5c98c0} fill="var(--fill-0, white)" id="Vector_36" />
          <path d={svgPaths.p36258380} fill="var(--fill-0, white)" id="Vector_37" />
          <path d={svgPaths.p2c34ab00} fill="var(--fill-0, white)" id="Vector_38" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[20.52%_54.45%_60.22%_16.36%] opacity-20" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 69">
        <g id="Group">
          <path d={svgPaths.p3e5a7900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2c070b00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p10cc8b00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p34a9ca00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p388d00f1} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p6c6e00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p369c7400} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p1fbc2380} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1a1cd080} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p13f3f3f0} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p2761f7d0} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p21b685c0} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p22df57f0} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p17468240} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p23e97300} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p25947700} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p76f4e00} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p2d268400} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p1b149900} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p293292a0} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p3b63e000} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.pf5fec00} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p35441340} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p17380100} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p28e3500} fill="var(--fill-0, white)" id="Vector_25" />
          <path d={svgPaths.p120ef900} fill="var(--fill-0, white)" id="Vector_26" />
          <path d={svgPaths.p2f818680} fill="var(--fill-0, white)" id="Vector_27" />
          <path d={svgPaths.pa173500} fill="var(--fill-0, white)" id="Vector_28" />
          <path d={svgPaths.p3506c280} fill="var(--fill-0, white)" id="Vector_29" />
          <path d={svgPaths.p29e62b00} fill="var(--fill-0, white)" id="Vector_30" />
          <path d={svgPaths.pecfed00} fill="var(--fill-0, white)" id="Vector_31" />
          <path d={svgPaths.p3c34e700} fill="var(--fill-0, white)" id="Vector_32" />
          <path d={svgPaths.pd274f00} fill="var(--fill-0, white)" id="Vector_33" />
          <path d={svgPaths.p15dcfe00} fill="var(--fill-0, white)" id="Vector_34" />
          <path d={svgPaths.p1f1a4f00} fill="var(--fill-0, white)" id="Vector_35" />
          <path d={svgPaths.p3e69ae80} fill="var(--fill-0, white)" id="Vector_36" />
          <path d={svgPaths.p349e4b00} fill="var(--fill-0, white)" id="Vector_37" />
          <path d={svgPaths.p2e683e80} fill="var(--fill-0, white)" id="Vector_38" />
          <path d={svgPaths.p13955900} fill="var(--fill-0, white)" id="Vector_39" />
          <path d={svgPaths.p16667b00} fill="var(--fill-0, white)" id="Vector_40" />
          <path d={svgPaths.p38dc0300} fill="var(--fill-0, white)" id="Vector_41" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[20.52%_54.45%_37.67%_16.36%]" data-name="Group">
      <Group18 />
      <Group19 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[12.46%_40.02%_22.47%_9.38%]">
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
      <Group20 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[62.29%_32.1%_19.88%_49.37%] opacity-[0.69]" data-name="Group">
      <div className="absolute bottom-[-23.57%] left-[-11.27%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 79">
          <g id="Group">
            <path d={svgPaths.p1e49f00} fill="var(--fill-0, white)" id="Vector" />
            <g filter="url(#filter0_d_136_1297)" id="Vector_2">
              <path d={svgPaths.p16ee9800} fill="var(--fill-0, white)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="78.6508" id="filter0_d_136_1297" width="157.984" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-9" dy="8" />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_136_1297" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_136_1297" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[62.29%_32.1%_19.88%_49.37%]" data-name="Group">
      <Group21 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute bottom-[33.74%] left-1/2 right-[32.73%] top-[63.64%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 10">
        <g id="Group">
          <path d={svgPaths.p9185e80} fill="var(--fill-0, #9671FA)" id="Vector" />
          <path d={svgPaths.p27e83500} fill="var(--fill-0, #9772FA)" id="Vector_2" />
          <path d={svgPaths.p2a9ca200} fill="var(--fill-0, #9873FA)" id="Vector_3" />
          <path d={svgPaths.p25c329f0} fill="var(--fill-0, #9974FA)" id="Vector_4" />
          <path d={svgPaths.p9931d00} fill="var(--fill-0, #9A74FA)" id="Vector_5" />
          <path d={svgPaths.p2ec37900} fill="var(--fill-0, #9B75FA)" id="Vector_6" />
          <path d={svgPaths.p1308af00} fill="var(--fill-0, #9C76FA)" id="Vector_7" />
          <path d={svgPaths.pf60f1f0} fill="var(--fill-0, #9D77FA)" id="Vector_8" />
          <path d={svgPaths.p296f40f0} fill="var(--fill-0, #9E77FA)" id="Vector_9" />
          <path d={svgPaths.p31993600} fill="var(--fill-0, #9F78F9)" id="Vector_10" />
          <path d={svgPaths.p1a45e300} fill="var(--fill-0, #A079F9)" id="Vector_11" />
          <path d={svgPaths.p24c8c580} fill="var(--fill-0, #A17AF9)" id="Vector_12" />
          <path d={svgPaths.p2e96a100} fill="var(--fill-0, #A27AF9)" id="Vector_13" />
          <path d={svgPaths.p1d59f300} fill="var(--fill-0, #A37BF9)" id="Vector_14" />
          <path d={svgPaths.p33c89280} fill="var(--fill-0, #A47CF9)" id="Vector_15" />
          <path d={svgPaths.p3eeeee80} fill="var(--fill-0, #A57DF9)" id="Vector_16" />
          <path d={svgPaths.p3e578ac0} fill="var(--fill-0, #A67DF9)" id="Vector_17" />
          <path d={svgPaths.p10a03400} fill="var(--fill-0, #A77EF9)" id="Vector_18" />
          <path d={svgPaths.p126cd1f0} fill="var(--fill-0, #A87FF9)" id="Vector_19" />
          <path d={svgPaths.p2d633900} fill="var(--fill-0, #A980F9)" id="Vector_20" />
          <path d={svgPaths.p1da14f00} fill="var(--fill-0, #AA80F9)" id="Vector_21" />
          <path d={svgPaths.p28029900} fill="var(--fill-0, #AB81F9)" id="Vector_22" />
          <path d={svgPaths.p3d2a4f00} fill="var(--fill-0, #AD82F8)" id="Vector_23" />
          <path d={svgPaths.pfbb6ac0} fill="var(--fill-0, #AE83F8)" id="Vector_24" />
          <path d={svgPaths.p2aaf5100} fill="var(--fill-0, #AF83F8)" id="Vector_25" />
          <path d={svgPaths.p2f015e00} fill="var(--fill-0, #B084F8)" id="Vector_26" />
          <path d={svgPaths.p21979580} fill="var(--fill-0, #B185F8)" id="Vector_27" />
          <path d={svgPaths.p2784d300} fill="var(--fill-0, #B286F8)" id="Vector_28" />
          <path d={svgPaths.p399a3380} fill="var(--fill-0, #B386F8)" id="Vector_29" />
          <path d={svgPaths.p2552ce00} fill="var(--fill-0, #B487F8)" id="Vector_30" />
          <path d={svgPaths.p9ac0000} fill="var(--fill-0, #B588F8)" id="Vector_31" />
          <path d={svgPaths.p19217a80} fill="var(--fill-0, #B689F8)" id="Vector_32" />
          <path d={svgPaths.p3271bc00} fill="var(--fill-0, #B789F8)" id="Vector_33" />
          <path d={svgPaths.p1b362200} fill="var(--fill-0, #B88AF8)" id="Vector_34" />
          <path d={svgPaths.p1a432800} fill="var(--fill-0, #B98BF8)" id="Vector_35" />
          <path d={svgPaths.p25cb600} fill="var(--fill-0, #BA8CF7)" id="Vector_36" />
          <path d={svgPaths.pd5a5600} fill="var(--fill-0, #BB8CF7)" id="Vector_37" />
          <path d={svgPaths.p10bf5600} fill="var(--fill-0, #BC8DF7)" id="Vector_38" />
          <path d={svgPaths.p2f236c70} fill="var(--fill-0, #BD8EF7)" id="Vector_39" />
          <path d={svgPaths.p20636e80} fill="var(--fill-0, #BE8FF7)" id="Vector_40" />
          <path d={svgPaths.p3076b400} fill="var(--fill-0, #BF8FF7)" id="Vector_41" />
          <path d={svgPaths.pe749cc0} fill="var(--fill-0, #C090F7)" id="Vector_42" />
          <path d={svgPaths.p3fd9af00} fill="var(--fill-0, #C191F7)" id="Vector_43" />
          <path d={svgPaths.p3999f00} fill="var(--fill-0, #C292F7)" id="Vector_44" />
          <path d={svgPaths.p18ff1c00} fill="var(--fill-0, #C392F7)" id="Vector_45" />
          <path d={svgPaths.p7904000} fill="var(--fill-0, #C493F7)" id="Vector_46" />
          <path d={svgPaths.p203a5700} fill="var(--fill-0, #C594F7)" id="Vector_47" />
          <path d={svgPaths.p146a8200} fill="var(--fill-0, #C695F6)" id="Vector_48" />
          <path d={svgPaths.p1e183500} fill="var(--fill-0, #C795F6)" id="Vector_49" />
          <path d={svgPaths.p20d16100} fill="var(--fill-0, #C896F6)" id="Vector_50" />
          <path d={svgPaths.p26d8000} fill="var(--fill-0, #C997F6)" id="Vector_51" />
          <path d={svgPaths.p2b0de580} fill="var(--fill-0, #CA97F6)" id="Vector_52" />
          <path d={svgPaths.p1f117100} fill="var(--fill-0, #CB98F6)" id="Vector_53" />
          <path d={svgPaths.p3ba23a00} fill="var(--fill-0, #CC99F6)" id="Vector_54" />
          <path d={svgPaths.pb628f80} fill="var(--fill-0, #CD9AF6)" id="Vector_55" />
          <path d={svgPaths.p68ffe30} fill="var(--fill-0, #CE9AF6)" id="Vector_56" />
          <path d={svgPaths.p39c4d780} fill="var(--fill-0, #CF9BF6)" id="Vector_57" />
          <path d={svgPaths.p991fe00} fill="var(--fill-0, #D09CF6)" id="Vector_58" />
          <path d={svgPaths.pcb7dc40} fill="var(--fill-0, #D19DF6)" id="Vector_59" />
          <path d={svgPaths.p27067400} fill="var(--fill-0, #D29DF6)" id="Vector_60" />
          <path d={svgPaths.p296abe00} fill="var(--fill-0, #D39EF5)" id="Vector_61" />
          <path d={svgPaths.p2fb46b00} fill="var(--fill-0, #D49FF5)" id="Vector_62" />
          <path d={svgPaths.p1349da80} fill="var(--fill-0, #D5A0F5)" id="Vector_63" />
          <path d={svgPaths.p38faf0} fill="var(--fill-0, #D6A0F5)" id="Vector_64" />
          <path d={svgPaths.p2bdd4f00} fill="var(--fill-0, #D7A1F5)" id="Vector_65" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute bottom-[21.23%] left-1/2 right-[32.73%] top-[63.64%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 55">
        <g id="Group">
          <path d={svgPaths.pad9b920} fill="var(--fill-0, #FFF8FF)" id="Vector" />
          <path d={svgPaths.pf82800} fill="var(--fill-0, #FFF7FF)" id="Vector_2" />
          <path d={svgPaths.p1c154400} fill="var(--fill-0, #FFF6FF)" id="Vector_3" />
          <path d={svgPaths.p2e921500} fill="var(--fill-0, #FFF5FF)" id="Vector_4" />
          <path d={svgPaths.p31d85700} fill="var(--fill-0, #FFF4FF)" id="Vector_5" />
          <path d={svgPaths.p16fb1580} fill="var(--fill-0, #FFF3FF)" id="Vector_6" />
          <path d={svgPaths.p35943900} fill="var(--fill-0, #FFF2FF)" id="Vector_7" />
          <path d={svgPaths.p31986e40} fill="var(--fill-0, #FFF1FF)" id="Vector_8" />
          <path d={svgPaths.p27b212f0} fill="var(--fill-0, #FFF0FF)" id="Vector_9" />
          <path d={svgPaths.p29829fc0} fill="var(--fill-0, #FFEFFF)" id="Vector_10" />
          <path d={svgPaths.p30cec080} fill="var(--fill-0, #FFEEFF)" id="Vector_11" />
          <path d={svgPaths.p2aa45200} fill="var(--fill-0, #FFEDFF)" id="Vector_12" />
          <path d={svgPaths.p204a8d00} fill="var(--fill-0, #FFECFF)" id="Vector_13" />
          <path d={svgPaths.p585fa80} fill="var(--fill-0, #FFEBFF)" id="Vector_14" />
          <path d={svgPaths.p4d3c600} fill="var(--fill-0, #FFEAFF)" id="Vector_15" />
          <path d={svgPaths.p3f6b9500} fill="var(--fill-0, #FFE9FF)" id="Vector_16" />
          <path d={svgPaths.p116d5280} fill="var(--fill-0, #FFE8FF)" id="Vector_17" />
          <path d={svgPaths.pa219480} fill="var(--fill-0, #FFE7FF)" id="Vector_18" />
          <path d={svgPaths.p24126380} fill="var(--fill-0, #FFE6FF)" id="Vector_19" />
          <path d={svgPaths.p3a7a7f00} fill="var(--fill-0, #FFE5FF)" id="Vector_20" />
          <path d={svgPaths.p642fd40} fill="var(--fill-0, #FFE4FF)" id="Vector_21" />
          <path d={svgPaths.pe1b7100} fill="var(--fill-0, #FFE3FF)" id="Vector_22" />
          <path d={svgPaths.p1eb6320} fill="var(--fill-0, #FFE2FF)" id="Vector_23" />
          <path d={svgPaths.p43a0380} fill="var(--fill-0, #FFE1FF)" id="Vector_24" />
          <path d={svgPaths.p182dad80} fill="var(--fill-0, #FFE0FF)" id="Vector_25" />
          <path d={svgPaths.p3be7bf00} fill="var(--fill-0, #FFDFFF)" id="Vector_26" />
          <path d={svgPaths.p7d7d580} fill="var(--fill-0, #FFDEFF)" id="Vector_27" />
          <path d={svgPaths.p27532a10} fill="var(--fill-0, #FFDDFF)" id="Vector_28" />
          <path d={svgPaths.p2d07b300} fill="var(--fill-0, #FFDCFF)" id="Vector_29" />
          <path d={svgPaths.p15970a80} fill="var(--fill-0, #FFDAFF)" id="Vector_30" />
          <path d={svgPaths.p165f0600} fill="var(--fill-0, #FFD9FF)" id="Vector_31" />
          <path d={svgPaths.p13197000} fill="var(--fill-0, #FFD8FF)" id="Vector_32" />
          <path d={svgPaths.p1b286f80} fill="var(--fill-0, #FFD7FF)" id="Vector_33" />
          <path d={svgPaths.p3eddc5f8} fill="var(--fill-0, #FFD6FF)" id="Vector_34" />
          <path d={svgPaths.p229dfb00} fill="var(--fill-0, #FFD5FF)" id="Vector_35" />
          <path d={svgPaths.p17757d00} fill="var(--fill-0, #FFD4FF)" id="Vector_36" />
          <path d={svgPaths.p17b03d00} fill="var(--fill-0, #FFD3FF)" id="Vector_37" />
          <path d={svgPaths.p3d1a9500} fill="var(--fill-0, #FFD2FF)" id="Vector_38" />
          <path d={svgPaths.p2bf45c80} fill="var(--fill-0, #FFD1FF)" id="Vector_39" />
          <path d={svgPaths.p127ff970} fill="var(--fill-0, #FFD0FF)" id="Vector_40" />
          <path d={svgPaths.p27252400} fill="var(--fill-0, #FFCFFF)" id="Vector_41" />
          <path d={svgPaths.p22db8a80} fill="var(--fill-0, #FFCEFF)" id="Vector_42" />
          <path d={svgPaths.p256b6d00} fill="var(--fill-0, #FFCDFF)" id="Vector_43" />
          <path d={svgPaths.pd2b6610} fill="var(--fill-0, #FFCCFF)" id="Vector_44" />
          <path d={svgPaths.p9a2b700} fill="var(--fill-0, #FFCBFF)" id="Vector_45" />
          <path d={svgPaths.p1f61a800} fill="var(--fill-0, #FFF8FF)" id="Vector_46" />
          <path d={svgPaths.p34a33c00} fill="var(--fill-0, #FFF7FF)" id="Vector_47" />
          <path d={svgPaths.p20b232c0} fill="var(--fill-0, #FFF6FF)" id="Vector_48" />
          <path d={svgPaths.p209d92f0} fill="var(--fill-0, #FFF5FF)" id="Vector_49" />
          <path d={svgPaths.p2514200} fill="var(--fill-0, #FFF4FF)" id="Vector_50" />
          <path d={svgPaths.p1558200} fill="var(--fill-0, #FFF3FF)" id="Vector_51" />
          <path d={svgPaths.p3f04000} fill="var(--fill-0, #FFF2FF)" id="Vector_52" />
          <path d={svgPaths.p2d8ec400} fill="var(--fill-0, #FFF1FF)" id="Vector_53" />
          <path d={svgPaths.p3fed1f00} fill="var(--fill-0, #FFF0FF)" id="Vector_54" />
          <path d={svgPaths.pfe37980} fill="var(--fill-0, #FFEFFF)" id="Vector_55" />
          <path d={svgPaths.p203a0000} fill="var(--fill-0, #FFEEFF)" id="Vector_56" />
          <path d={svgPaths.p2b72100} fill="var(--fill-0, #FFEDFF)" id="Vector_57" />
          <path d={svgPaths.p19473700} fill="var(--fill-0, #FFECFF)" id="Vector_58" />
          <path d={svgPaths.p1f61ad00} fill="var(--fill-0, #FFEBFF)" id="Vector_59" />
          <path d={svgPaths.pbb87700} fill="var(--fill-0, #FFEAFF)" id="Vector_60" />
          <path d={svgPaths.p3fcb3670} fill="var(--fill-0, #FFE9FF)" id="Vector_61" />
          <path d={svgPaths.p1c8220c0} fill="var(--fill-0, #FFE8FF)" id="Vector_62" />
          <path d={svgPaths.p1896a780} fill="var(--fill-0, #FFE7FF)" id="Vector_63" />
          <path d={svgPaths.p17e95380} fill="var(--fill-0, #FFE6FF)" id="Vector_64" />
          <path d={svgPaths.p18a59100} fill="var(--fill-0, #FFE5FF)" id="Vector_65" />
          <path d={svgPaths.p1ef8b000} fill="var(--fill-0, #FFE4FF)" id="Vector_66" />
          <path d={svgPaths.p2f9baf00} fill="var(--fill-0, #FFE3FF)" id="Vector_67" />
          <path d={svgPaths.p2d2b3a00} fill="var(--fill-0, #FFE2FF)" id="Vector_68" />
          <path d={svgPaths.p10ff2000} fill="var(--fill-0, #FFE1FF)" id="Vector_69" />
          <path d={svgPaths.p308c1a00} fill="var(--fill-0, #FFE0FF)" id="Vector_70" />
          <path d={svgPaths.p21a55d80} fill="var(--fill-0, #FFDFFF)" id="Vector_71" />
          <path d={svgPaths.pc02c900} fill="var(--fill-0, #FFDEFF)" id="Vector_72" />
          <path d={svgPaths.p34215700} fill="var(--fill-0, #FFDDFF)" id="Vector_73" />
          <path d={svgPaths.p23bbc80} fill="var(--fill-0, #FFDCFF)" id="Vector_74" />
          <path d={svgPaths.p3d25b280} fill="var(--fill-0, #FFDAFF)" id="Vector_75" />
          <path d={svgPaths.p10e4ba80} fill="var(--fill-0, #FFD9FF)" id="Vector_76" />
          <path d={svgPaths.p195ddca0} fill="var(--fill-0, #FFD8FF)" id="Vector_77" />
          <path d={svgPaths.p1304d2b0} fill="var(--fill-0, #FFD7FF)" id="Vector_78" />
          <path d={svgPaths.p2391500} fill="var(--fill-0, #FFD6FF)" id="Vector_79" />
          <path d={svgPaths.p2d518500} fill="var(--fill-0, #FFD5FF)" id="Vector_80" />
          <path d={svgPaths.pe7e6500} fill="var(--fill-0, #FFD4FF)" id="Vector_81" />
          <path d={svgPaths.p2955f480} fill="var(--fill-0, #FFD3FF)" id="Vector_82" />
          <path d={svgPaths.p10a16432} fill="var(--fill-0, #FFD2FF)" id="Vector_83" />
          <path d={svgPaths.p31112d80} fill="var(--fill-0, #FFD1FF)" id="Vector_84" />
          <path d={svgPaths.p37409200} fill="var(--fill-0, #FFD0FF)" id="Vector_85" />
          <path d={svgPaths.p25997680} fill="var(--fill-0, #FFCFFF)" id="Vector_86" />
          <path d={svgPaths.p102b5400} fill="var(--fill-0, #FFCEFF)" id="Vector_87" />
          <path d={svgPaths.p39edd700} fill="var(--fill-0, #FFCDFF)" id="Vector_88" />
          <path d={svgPaths.p35d32000} fill="var(--fill-0, #FFCCFF)" id="Vector_89" />
          <path d={svgPaths.p2db5800} fill="var(--fill-0, #FFCBFF)" id="Vector_90" />
          <path d={svgPaths.p3204ad80} fill="var(--fill-0, #FFCAFF)" id="Vector_91" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[68.31%_40.41%_23.87%_51.57%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 28">
        <g id="Group">
          <path d={svgPaths.p320d0692} fill="var(--fill-0, #00DA6B)" id="Vector" />
          <path d={svgPaths.p3c8e8750} fill="var(--fill-0, #00DA6B)" id="Vector_2" />
          <path d={svgPaths.p36dee100} fill="var(--fill-0, #00DA6B)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[62.29%_32.1%_19.88%_49.37%]" data-name="Group">
      <Group22 />
      <div className="absolute bottom-[21.23%] left-1/2 right-[32.73%] top-[63.64%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 55">
          <path d={svgPaths.p31cded00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group23 />
      <Group24 />
      <div className="absolute bottom-[33.74%] left-1/2 right-[32.73%] top-[63.64%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 10">
          <path d={svgPaths.p2883eb80} fill="var(--fill-0, #282828)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[21.23%] left-1/2 right-[32.73%] top-[63.64%]" data-name="Vector">
        <div className="absolute bottom-[-112.91%] left-[-44.58%] right-[-0.76%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193 116">
            <g filter="url(#filter0_d_136_1463)" id="Vector">
              <path d={svgPaths.p1564a60} fill="var(--fill-0, #282828)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="115.023" id="filter0_d_136_1463" width="192.344" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-29" dy="31" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_136_1463" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_136_1463" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group25 />
      <div className="absolute inset-[68.26%_34.57%_24.68%_61.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 26">
          <path d={svgPaths.p2762bc00} fill="var(--fill-0, #00DA6B)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[66.72%_15.12%_10.24%_16.26%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 19">
        <g id="Group">
          <path d={svgPaths.pf3a6a00} fill="var(--fill-0, #282828)" id="Vector" />
          <path d={svgPaths.pa585600} fill="var(--fill-0, #282828)" id="Vector_2" />
          <path d={svgPaths.p262bac0} fill="var(--fill-0, #282828)" id="Vector_3" />
          <path d={svgPaths.p3ea73f00} fill="var(--fill-0, #282828)" id="Vector_4" />
          <path d={svgPaths.p34af700} fill="var(--fill-0, #282828)" id="Vector_5" />
          <path d={svgPaths.p15047f00} fill="var(--fill-0, #282828)" id="Vector_6" />
          <path d={svgPaths.p3e990100} fill="var(--fill-0, #282828)" id="Vector_7" />
          <path d={svgPaths.p3a26e200} fill="var(--fill-0, #282828)" id="Vector_8" />
          <path d={svgPaths.p221f9580} fill="var(--fill-0, #282828)" id="Vector_9" />
          <path d={svgPaths.p172f2c80} fill="var(--fill-0, #282828)" id="Vector_10" />
          <path d={svgPaths.p39d91000} fill="var(--fill-0, #282828)" id="Vector_11" />
          <path d={svgPaths.p2e778900} fill="var(--fill-0, #282828)" id="Vector_12" />
          <path d={svgPaths.p28653900} fill="var(--fill-0, #282828)" id="Vector_13" />
          <path d={svgPaths.p3c18b400} fill="var(--fill-0, #282828)" id="Vector_14" />
          <path d={svgPaths.p26f3c780} fill="var(--fill-0, #282828)" id="Vector_15" />
          <path d={svgPaths.p12757480} fill="var(--fill-0, #282828)" id="Vector_16" />
          <path d={svgPaths.p3af9d000} fill="var(--fill-0, #282828)" id="Vector_17" />
          <path d={svgPaths.p234b5b00} fill="var(--fill-0, #282828)" id="Vector_18" />
          <path d={svgPaths.p393d5900} fill="var(--fill-0, #282828)" id="Vector_19" />
          <path d={svgPaths.p2de9c600} fill="var(--fill-0, #282828)" id="Vector_20" />
          <path d={svgPaths.p29481680} fill="var(--fill-0, #282828)" id="Vector_21" />
          <path d={svgPaths.p504f930} fill="var(--fill-0, #282828)" id="Vector_22" />
          <path d={svgPaths.p11766900} fill="var(--fill-0, #282828)" id="Vector_23" />
          <path d={svgPaths.p1d648c00} fill="var(--fill-0, #282828)" id="Vector_24" />
          <path d={svgPaths.p386c7700} fill="var(--fill-0, #282828)" id="Vector_25" />
          <path d={svgPaths.p25573500} fill="var(--fill-0, #282828)" id="Vector_26" />
          <path d={svgPaths.p19441b00} fill="var(--fill-0, #282828)" id="Vector_27" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute inset-[27.22%_14.1%_39.06%_16.26%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 27">
        <g id="Group">
          <path d={svgPaths.p3f5f6140} fill="var(--fill-0, #282828)" id="Vector" />
          <path d={svgPaths.pa585600} fill="var(--fill-0, #282828)" id="Vector_2" />
          <path d={svgPaths.p332f5680} fill="var(--fill-0, #282828)" id="Vector_3" />
          <path d={svgPaths.p18424f0} fill="var(--fill-0, #282828)" id="Vector_4" />
          <path d={svgPaths.p34af700} fill="var(--fill-0, #282828)" id="Vector_5" />
          <path d={svgPaths.p15047f00} fill="var(--fill-0, #282828)" id="Vector_6" />
          <path d={svgPaths.p3e990100} fill="var(--fill-0, #282828)" id="Vector_7" />
          <path d={svgPaths.p51f05f1} fill="var(--fill-0, #282828)" id="Vector_8" />
          <path d={svgPaths.p330d400} fill="var(--fill-0, #282828)" id="Vector_9" />
          <path d={svgPaths.p10b5f00} fill="var(--fill-0, #282828)" id="Vector_10" />
          <path d={svgPaths.p317fc880} fill="var(--fill-0, #282828)" id="Vector_11" />
          <path d={svgPaths.p27dfa400} fill="var(--fill-0, #282828)" id="Vector_12" />
          <path d={svgPaths.pce1b200} fill="var(--fill-0, #282828)" id="Vector_13" />
          <path d={svgPaths.p2bdf9e80} fill="var(--fill-0, #282828)" id="Vector_14" />
          <path d={svgPaths.pc4cad00} fill="var(--fill-0, #282828)" id="Vector_15" />
          <path d={svgPaths.p1c66500} fill="var(--fill-0, #282828)" id="Vector_16" />
          <path d={svgPaths.p18d49280} fill="var(--fill-0, #282828)" id="Vector_17" />
          <path d={svgPaths.pbe1e300} fill="var(--fill-0, #282828)" id="Vector_18" />
          <path d={svgPaths.p39c56980} fill="var(--fill-0, #282828)" id="Vector_19" />
          <path d={svgPaths.p3c78dd80} fill="var(--fill-0, #282828)" id="Vector_20" />
          <path d={svgPaths.p27918700} fill="var(--fill-0, #282828)" id="Vector_21" />
          <path d={svgPaths.p128eee00} fill="var(--fill-0, #282828)" id="Vector_22" />
          <path d={svgPaths.pd60500} fill="var(--fill-0, #282828)" id="Vector_23" />
          <path d={svgPaths.p278b2210} fill="var(--fill-0, #282828)" id="Vector_24" />
          <path d={svgPaths.p16be6200} fill="var(--fill-0, #282828)" id="Vector_25" />
          <path d={svgPaths.p278a2800} fill="var(--fill-0, #282828)" id="Vector_26" />
          <path d={svgPaths.p3652ec72} fill="var(--fill-0, #282828)" id="Vector_27" />
          <path d={svgPaths.p7a30680} fill="var(--fill-0, #282828)" id="Vector_28" />
          <path d={svgPaths.p1629c480} fill="var(--fill-0, #282828)" id="Vector_29" />
          <path d={svgPaths.p320f3300} fill="var(--fill-0, #282828)" id="Vector_30" />
          <path d={svgPaths.p3bee6d00} fill="var(--fill-0, #282828)" id="Vector_31" />
          <path d={svgPaths.p2e314e00} fill="var(--fill-0, #282828)" id="Vector_32" />
          <path d={svgPaths.p1042e480} fill="var(--fill-0, #282828)" id="Vector_33" />
          <path d={svgPaths.p97d9800} fill="var(--fill-0, #282828)" id="Vector_34" />
          <path d={svgPaths.pced4e00} fill="var(--fill-0, #282828)" id="Vector_35" />
          <path d={svgPaths.p3c1eca00} fill="var(--fill-0, #282828)" id="Vector_36" />
          <path d={svgPaths.p12ffd880} fill="var(--fill-0, #282828)" id="Vector_37" />
          <path d={svgPaths.p3c75c170} fill="var(--fill-0, #282828)" id="Vector_38" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[27.22%_14.1%_10.24%_16.26%]" data-name="Group">
      <Group27 />
      <Group28 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[9.23%_17.48%_77.81%_46.98%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 11">
        <g id="Group">
          <path d={svgPaths.pe6d6600} fill="var(--fill-0, #282828)" id="Vector" />
          <path d={svgPaths.p20d42a00} fill="var(--fill-0, #282828)" id="Vector_2" />
          <path d={svgPaths.p269ea900} fill="var(--fill-0, #282828)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[9.75%_28%_68.15%_64.78%] overflow-clip shadow-[-35px_23px_44px_0px_rgba(0,0,0,0.5)]" data-name="Frame">
      <div className="absolute bottom-[-26.62%] left-[-18.07%] right-[-18.07%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 100">
          <g filter="url(#filter0_d_136_1341)" id="Vector">
            <path d={svgPaths.p3b7de200} fill="var(--fill-0, white)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="99.8774" id="filter0_d_136_1341" width="75.3319" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="11" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_136_1341" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_136_1341" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <Group29 />
      <Group30 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute bottom-[0.01%] contents left-[0.92%] right-0 top-[0.02%]">
      <Group36 />
      <div className="absolute flex inset-[18.03%_47.67%_24.98%_9.23%] items-center justify-center">
        <div className="flex-none h-[203.455px] scale-y-[-100%] w-[330.189px]">
          <div className="bg-[rgba(0,0,0,0.75)] blur-[27px] filter size-full" />
        </div>
      </div>
      <div className="absolute flex inset-[73.23%_45.21%_14.4%_4.15%] items-center justify-center">
        <div className="flex-none h-[44.148px] scale-y-[-100%] w-[387.912px]">
          <div className="bg-[rgba(0,0,0,0.75)] blur-[27px] filter size-full" />
        </div>
      </div>
      <Group2 />
      <Group5 />
      <Group32 />
      <Group33 />
      <Group7 />
      <Group8 />
      <Group34 />
      <Group35 />
      <Group26 />
      <div className="absolute bottom-[49.03%] left-[30.86%] right-0 top-[38.98%]" data-name="Union">
        <div className="absolute bottom-[-170.52%] left-[-11.9%] right-[-0.57%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 596 116">
            <g filter="url(#filter0_d_136_1288)" id="Union">
              <path clipRule="evenodd" d={svgPaths.pac8280} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p1ab21800} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1c3e9900} fill="var(--fill-0, white)" />
              <path d={svgPaths.p26fedf00} fill="var(--fill-0, white)" />
              <path d={svgPaths.pc49c00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b705d00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2390300} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1a210300} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3a2f1900} fill="var(--fill-0, white)" />
              <path d={svgPaths.p34cd14a0} fill="var(--fill-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="115.81" id="filter0_d_136_1288" width="595.617" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-30" dy="40" />
                <feGaussianBlur stdDeviation="16.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_136_1288" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_136_1288" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[63.34%_3.04%_32.01%_95.13%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
        <g id="Group">
          <path d={svgPaths.pd2a7dd0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p13076800} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute bottom-[0.01%] contents left-[0.92%] right-0 top-[0.02%]">
      <Group37 />
      <Group31 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents left-[calc(50%-0.01px)] top-[calc(50%-0.06px)] translate-x-[-50%] translate-y-[-50%]">
      <Group38 />
      <div className="absolute bg-[rgba(217,217,217,0)] h-[394.387px] left-[-0.02px] opacity-50 top-[-18.75px] w-[750.513px]" />
    </div>
  );
}

function Developmenttt() {
  return (
    <div className="absolute h-[357px] left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[766px]" data-name="Developmenttt">
      <Group39 />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute bg-[#1e1e1f] h-[675px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[1440px]" data-name="Hero">
      <Frame2 />
      <Rrss />
      <Indicadores />
      <Developmenttt />
    </div>
  );
}

function LogoDe() {
  return (
    <div className="absolute h-[50px] left-[80px] top-[8px] w-[90px]" data-name="Logo De3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 50">
        <g id="Logo De3">
          <g id="Vector">
            <path d={svgPaths.p17fa7400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p236c170} fill="#00DA6B" />
            <path d={svgPaths.p2fde4380} fill="var(--fill-0, white)" />
            <path d={svgPaths.pf145480} fill="var(--fill-0, white)" />
            <path d={svgPaths.p376cf72} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[26px]">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[40px] leading-[46px] left-[13px] not-italic text-[14px] text-center text-white top-0 translate-x-[-50%] w-[26px]">Esp</p>
    </div>
  );
}

function Contacto() {
  return (
    <div className="absolute border border-solid border-white h-[40px] left-0 rounded-[125px] top-0 w-[128px]" data-name="Contacto">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[63px] not-italic text-[14px] text-center text-nowrap text-white top-[10.5px] translate-x-[-50%] whitespace-pre">Portafolio</p>
    </div>
  );
}

function Contacto1() {
  return (
    <div className="absolute border border-solid border-white h-[40px] left-[152px] rounded-[125px] top-0 w-[216px]" data-name="Contacto">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[107px] not-italic text-[14px] text-center text-nowrap text-white top-[10.5px] translate-x-[-50%] whitespace-pre">Wanna work together?</p>
    </div>
  );
}

function CtaS() {
  return (
    <div className="absolute h-[40px] left-[50px] top-0 w-[368px]" data-name="CTA´S">
      <Contacto />
      <Contacto1 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[442px] size-[40px] top-0" data-name="Menú">
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
    <div className="absolute h-[40px] left-[878px] top-[13px] w-[482px]" data-name="Conenido">
      <Frame1 />
      <CtaS />
      <Menu />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[66px] left-1/2 top-0 translate-x-[-50%] w-[1440px]" data-name="Header">
      <LogoDe />
      <Conenido />
    </div>
  );
}

export default function HeroSlide() {
  return (
    <div className="bg-white relative size-full" data-name="Hero-slide 3">
      <Hero />
      <Header />
    </div>
  );
}