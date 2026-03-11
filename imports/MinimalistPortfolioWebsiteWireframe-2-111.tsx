import { project1Cover } from '../src/images';

const imgDiv = project1Cover;

function Container() {
  return <div className="absolute h-[401.945px] left-0 top-0 w-[121.328px]" data-name="Container" />;
}

function H() {
  return (
    <div className="h-[139.18px] relative shrink-0 w-full" data-name="h1">
      <p className="absolute font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[139.185px] left-0 text-[#f5f1ed] text-[154.65px] top-[-18.5px] tracking-[1px] whitespace-nowrap">郑丹蕾</p>
    </div>
  );
}

function P() {
  return (
    <div className="h-[58.766px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['IBM_Plex_Mono:Light',sans-serif] leading-[58.767px] left-0 not-italic text-[#f5f1ed] text-[61.86px] top-[-8px] tracking-[-1.2372px] whitespace-nowrap">ZhengDanLei</p>
    </div>
  );
}

function MotionDiv() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[213.945px] items-start left-0 top-0 w-[581.336px]" data-name="motion.div">
      <H />
      <P />
    </div>
  );
}

function P1() {
  return (
    <div className="font-['Noto_Sans_SC:Light',sans-serif] font-light h-[80px] leading-[40px] relative shrink-0 text-[#f5f1ed] text-[36px] tracking-[0.9px] w-full whitespace-nowrap" data-name="p">
      <p className="absolute left-0 top-[-4.5px]">用视觉</p>
      <p className="absolute left-0 top-[35.5px]">解决问题。</p>
    </div>
  );
}

function P2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['IBM_Plex_Mono:Light',sans-serif] leading-[28px] left-0 not-italic text-[#b8a890] text-[18px] top-[-2px] tracking-[1.8px] uppercase whitespace-nowrap">UI · UX · Graphic · Illustration</p>
    </div>
  );
}

function MotionDiv1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[140px] items-start left-[-0.33px] top-[261.95px] w-[453.336px]" data-name="motion.div">
      <P1 />
      <P2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[401.945px] left-[153.33px] top-0 w-[581.336px]" data-name="Container">
      <MotionDiv />
      <MotionDiv1 />
    </div>
  );
}

function Container2() {
  return <div className="absolute h-[401.945px] left-[766.66px] top-0 w-[121.336px]" data-name="Container" />;
}

function Div() {
  return (
    <div className="absolute h-[401.945px] left-[64px] top-[142.02px] w-[888px]" data-name="div">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Span() {
  return (
    <div className="h-[16px] relative shrink-0 w-[47.977px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#b8a890] text-[12px] top-[-2px] tracking-[0.6px] uppercase whitespace-nowrap">Scroll</p>
      </div>
    </div>
  );
}

function Container3() {
  return <div className="bg-[#f5f1ed] h-[33px] opacity-30 shrink-0 w-px" data-name="Container" />;
}

function MotionDiv2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[79.742px] items-center left-[484.01px] top-[602.26px] w-[47.977px]" data-name="motion.div">
      <Span />
      <Container3 />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute h-[686px] left-0 opacity-2 top-0 w-[1016px]" data-name="div">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[43.73%] left-0 max-w-none top-0 w-[29.53%]" src={imgDiv} />
      </div>
    </div>
  );
}

function Div2() {
  return <div className="absolute bg-[rgba(184,168,144,0.2)] h-px left-0 top-[685px] w-[1016px]" data-name="div" />;
}

function Section() {
  return (
    <div className="bg-[#2a2118] h-[686px] overflow-clip relative shrink-0 w-full" data-name="section">
      <Div />
      <MotionDiv2 />
      <Div1 />
      <Div2 />
    </div>
  );
}

function H1() {
  return (
    <div className="h-[74.227px] relative shrink-0 w-full" data-name="h2">
      <p className="absolute font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[74.232px] left-0 text-[#3d3426] text-[82.48px] top-[-11px] tracking-[-1.6496px] whitespace-nowrap">关于</p>
    </div>
  );
}

function P3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="p">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6b5a47] text-[14px] tracking-[0.7px]">ZhengDanLei</p>
    </div>
  );
}

function MotionDiv3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[286.5px] items-start left-[96px] top-0 w-[288px]" data-name="motion.div">
      <H1 />
      <P3 />
    </div>
  );
}

function MotionP() {
  return (
    <div className="h-[162.5px] relative shrink-0 w-full" data-name="motion.p">
      <div className="absolute font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[32.5px] left-0 text-[#4a3f30] text-[20px] top-[-2.75px] w-[366px]">
        <p className="mb-0">郑丹蕾，设计师，现居北京。</p>
        <p className="mb-0">关注结构、节奏与克制——相信好的设计不在于加法，而在于找到恰当的减法。</p>
        <p>工作时倾向从整体出发，在品牌、界面与插画之间寻找统一的视觉语言。偏好安静地做事，用作品说话。</p>
      </div>
    </div>
  );
}

function P4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="p">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6b5a47] text-[14px]">zhengdanlei@outlook.com</p>
    </div>
  );
}

function P5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="p">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6b5a47] text-[14px]">13701318484</p>
    </div>
  );
}

function MotionDiv4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[92px] items-start pt-[48px] relative shrink-0 w-full" data-name="motion.div">
      <P4 />
      <P5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[286.5px] items-start left-[542px] top-0 w-[384px]" data-name="Container">
      <MotionP />
      <MotionDiv4 />
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute h-[286.5px] left-[64px] top-[199.75px] w-[888px]" data-name="div">
      <MotionDiv3 />
      <Container4 />
    </div>
  );
}

function Div4() {
  return <div className="absolute bg-[rgba(107,90,71,0.2)] h-px left-0 top-0 w-[1016px]" data-name="div" />;
}

function Div5() {
  return <div className="absolute bg-[rgba(107,90,71,0.2)] h-px left-0 top-[685px] w-[1016px]" data-name="div" />;
}

function Section1() {
  return (
    <div className="bg-[#e8dfc8] h-[686px] relative shrink-0 w-full" data-name="section">
      <Div3 />
      <Div4 />
      <Div5 />
    </div>
  );
}

function H2() {
  return (
    <div className="h-[74.227px] relative shrink-0 w-full" data-name="h2">
      <p className="absolute font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[74.232px] left-0 text-[#f5f1ed] text-[82.48px] top-[-11px] tracking-[-1.6496px] whitespace-nowrap">作品</p>
    </div>
  );
}

function P6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="p">
      <p className="flex-[1_0_0] font-['Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#d4c4b0] text-[14px] tracking-[0.7px]">近期作品</p>
    </div>
  );
}

function MotionDiv5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[110.227px] items-start relative shrink-0 w-full" data-name="motion.div">
      <H2 />
      <P6 />
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute content-stretch flex h-[48.969px] items-start left-0 top-0 w-[44.664px]" data-name="div">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#d4c4b0] text-[14px]">01</p>
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute h-[48.969px] left-[76.66px] top-0 w-[404.156px]" data-name="span">
      <p className="absolute font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[48.972px] left-0 text-[#f5f1ed] text-[51.55px] top-[-6.5px] tracking-[-1.031px] whitespace-nowrap">马年限定挂耳套装</p>
    </div>
  );
}

function Span2() {
  return (
    <div className="h-[48.969px] relative shrink-0 w-[58.805px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#d4c4b0] text-[14px] tracking-[0.7px] whitespace-nowrap">包装设计</p>
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="h-[48.969px] relative shrink-0 w-[29.969px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d4c4b0] text-[14px] whitespace-nowrap">2026</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="absolute content-stretch flex gap-[64px] h-[48.969px] items-start justify-end left-[613.33px] top-0 w-[274.672px]" data-name="div">
      <Span2 />
      <Span3 />
    </div>
  );
}

function MotionDiv6() {
  return (
    <div className="h-[81.969px] relative shrink-0 w-full" data-name="motion.div">
      <div aria-hidden="true" className="absolute border-[rgba(212,196,176,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Div7 />
      <Span1 />
      <Div8 />
    </div>
  );
}

function Div9() {
  return (
    <div className="absolute content-stretch flex h-[97.938px] items-start left-0 top-0 w-[44.664px]" data-name="div">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#d4c4b0] text-[14px]">02</p>
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute h-[97.938px] left-[76.66px] top-0 w-[504.664px]" data-name="span">
      <p className="absolute font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[normal] left-[0.34px] text-[#f5f1ed] text-[51.55px] top-[-6.2px] tracking-[-1.031px] w-[344px]">瞰天科技品牌视觉规范</p>
    </div>
  );
}

function Span5() {
  return (
    <div className="h-[97.938px] relative shrink-0 w-[88.203px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#d4c4b0] text-[14px] tracking-[0.7px] whitespace-nowrap">品牌视觉系统</p>
      </div>
    </div>
  );
}

function Span6() {
  return (
    <div className="h-[97.938px] relative shrink-0 w-[29.969px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d4c4b0] text-[14px] whitespace-nowrap">2025</p>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="absolute content-stretch flex gap-[64px] h-[97.938px] items-start justify-end left-[613.33px] top-0 w-[274.672px]" data-name="div">
      <Span5 />
      <Span6 />
    </div>
  );
}

function MotionDiv7() {
  return (
    <div className="h-[130.938px] relative shrink-0 w-full" data-name="motion.div">
      <div aria-hidden="true" className="absolute border-[rgba(212,196,176,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Div9 />
      <Span4 />
      <Div10 />
    </div>
  );
}

function Div11() {
  return (
    <div className="absolute content-stretch flex h-[48.969px] items-start left-0 top-0 w-[44.664px]" data-name="div">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#d4c4b0] text-[14px]">03</p>
    </div>
  );
}

function Span7() {
  return (
    <div className="absolute h-[48.969px] left-[76.66px] top-0 w-[404.156px]" data-name="span">
      <p className="absolute font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[48.972px] left-0 text-[#f5f1ed] text-[51.55px] top-[-6.5px] tracking-[-1.031px] whitespace-nowrap">瞰天科技官网设计</p>
    </div>
  );
}

function Span8() {
  return (
    <div className="h-[48.969px] relative shrink-0 w-[58.805px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#d4c4b0] text-[14px] tracking-[0.7px] whitespace-nowrap">网站设计</p>
      </div>
    </div>
  );
}

function Span9() {
  return (
    <div className="h-[48.969px] relative shrink-0 w-[29.969px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d4c4b0] text-[14px] whitespace-nowrap">2024</p>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="absolute content-stretch flex gap-[64px] h-[48.969px] items-start justify-end left-[613.33px] top-0 w-[274.672px]" data-name="div">
      <Span8 />
      <Span9 />
    </div>
  );
}

function MotionDiv8() {
  return (
    <div className="h-[81.969px] relative shrink-0 w-full" data-name="motion.div">
      <div aria-hidden="true" className="absolute border-[rgba(212,196,176,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Div11 />
      <Span7 />
      <Div12 />
    </div>
  );
}

function Div13() {
  return (
    <div className="absolute content-stretch flex h-[48.969px] items-start left-0 top-0 w-[44.664px]" data-name="div">
      <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Light',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#d4c4b0] text-[14px]">04</p>
    </div>
  );
}

function Span10() {
  return (
    <div className="absolute h-[48.969px] left-[76.66px] top-0 w-[404.156px]" data-name="span">
      <p className="absolute font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[48.972px] left-0 text-[#f5f1ed] text-[51.55px] top-[-6.5px] tracking-[-1.031px] whitespace-nowrap">《常见的事物？》</p>
    </div>
  );
}

function Span11() {
  return (
    <div className="h-[48.969px] relative shrink-0 w-[58.805px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#d4c4b0] text-[14px] tracking-[0.7px] whitespace-nowrap">纸本绘画</p>
      </div>
    </div>
  );
}

function Span12() {
  return (
    <div className="h-[48.969px] relative shrink-0 w-[29.969px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['IBM_Plex_Mono:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d4c4b0] text-[14px] whitespace-nowrap">2023</p>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="absolute content-stretch flex gap-[64px] h-[48.969px] items-start justify-end left-[613.33px] top-0 w-[274.672px]" data-name="div">
      <Span11 />
      <Span12 />
    </div>
  );
}

function MotionDiv9() {
  return (
    <div className="h-[81.969px] relative shrink-0 w-full" data-name="motion.div">
      <div aria-hidden="true" className="absolute border-[rgba(212,196,176,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <Div13 />
      <Span10 />
      <Div14 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[96px] h-[664.844px] items-start relative shrink-0 w-full" data-name="Container">
      <MotionDiv6 />
      <MotionDiv7 />
      <MotionDiv8 />
      <MotionDiv9 />
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[192px] h-[967.07px] items-start left-[64px] top-[128px] w-[888px]" data-name="div">
      <MotionDiv5 />
      <Container5 />
    </div>
  );
}

function Div15() {
  return <div className="absolute bg-[rgba(212,196,176,0.2)] h-px left-0 top-0 w-[1016px]" data-name="div" />;
}

function Div16() {
  return <div className="absolute bg-[rgba(212,196,176,0.2)] h-px left-0 top-[1222.07px] w-[1016px]" data-name="div" />;
}

function Section2() {
  return (
    <div className="bg-[#6b5a47] h-[1223.07px] relative shrink-0 w-full" data-name="section">
      <Div6 />
      <Div15 />
      <Div16 />
    </div>
  );
}

function P7() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[78px] left-[384px] text-[#3d3426] text-[48px] text-center top-[-6px] whitespace-nowrap">用结构与减法做设计。</p>
    </div>
  );
}

function A() {
  return (
    <div className="h-[32px] relative shrink-0 w-[291.813px]" data-name="a">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Light',sans-serif] leading-[32px] left-[146.5px] not-italic text-[#3d3426] text-[24px] text-center top-[-3.5px] whitespace-nowrap">zhengdanlei@outlook.com</p>
    </div>
  );
}

function A1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[141.266px]" data-name="a">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Light',sans-serif] leading-[32px] left-[71.5px] not-italic text-[#3d3426] text-[24px] text-center top-[-3.5px] whitespace-nowrap">13701318484</p>
    </div>
  );
}

function MotionDiv10() {
  return (
    <div className="relative shrink-0 w-full" data-name="motion.div">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[167px] relative w-full">
          <A />
          <A1 />
        </div>
      </div>
    </div>
  );
}

function A2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.492px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Light',sans-serif] leading-[24px] left-[20.5px] not-italic text-[#6b5a47] text-[16px] text-center top-[-1.5px] tracking-[0.8px] whitespace-nowrap">Work</p>
      </div>
    </div>
  );
}

function A3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.625px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Light',sans-serif] leading-[24px] left-[24px] not-italic text-[#6b5a47] text-[16px] text-center top-[-1.5px] tracking-[0.8px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function MotionDiv11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="motion.div">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[48px] items-start justify-center pr-[0.008px] relative size-full">
          <A2 />
          <A3 />
        </div>
      </div>
    </div>
  );
}

function MotionDiv12() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="motion.div">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Light',sans-serif] leading-[0] left-[384px] not-italic text-[#6b5a47] text-[12px] text-center top-[77.93px] tracking-[0.6px] w-[194px]">
        <span className="leading-[16px]">{`©2026 `}</span>
        <span className="font-['Noto_Sans_SC:Light',sans-serif] font-light leading-[16px]">郑丹蕾</span>
      </p>
    </div>
  );
}

function Div17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] h-[494px] items-start left-[124px] top-[128px] w-[768px]" data-name="div">
      <P7 />
      <MotionDiv10 />
      <MotionDiv11 />
      <MotionDiv12 />
    </div>
  );
}

function Div18() {
  return <div className="absolute bg-[rgba(107,90,71,0.2)] h-px left-0 top-0 w-[1016px]" data-name="div" />;
}

function Section3() {
  return (
    <div className="bg-[#e8dfc8] h-[750px] relative shrink-0 w-full" data-name="section">
      <Div17 />
      <Div18 />
    </div>
  );
}

export default function MinimalistPortfolioWebsiteWireframe() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="Minimalist Portfolio Website Wireframe">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}