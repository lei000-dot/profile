import {
  project1Cover,
  project1Detail,
  project2Cover,
  project2Detail1,
  project2Detail2,
  project3Cover1,
  project3Cover2,
  project41,
  project42,
  project43,
  project44,
  project45,
} from '../src/images';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { ChevronDown } from 'lucide-react';

// 项目数据
const projects = [
  {
    id: 1,
    title: '马年限定挂耳咖啡礼盒设计',
    type: '包装设计',
    year: '2026',
    description: '为咖啡品牌设计的马年限定包装。以剪影手法呈现马的动态，结合传统与现代的视觉语言，创造独特的节日氛围。包装采用极简的色彩搭配,突出马的剪影造型，传达品牌的精致与品质。',
    tags: ['Packaging', 'Branding', 'Print'],
    images: [project1Cover, project1Detail],
  },
  {
    id: 2,
    title: '瞰天科技品牌视觉规范',
    type: '品牌视觉系统',
    year: '2025',
    description: '完整的品牌视觉系统设计，从标志到应用规范，建立统一的视觉识别体系。项目涵盖品牌标识设计、色彩系统、字体规范、应用场景等多个维度，确保品牌在各个触点的一致性表达。',
    tags: ['Branding', 'Visual Identity', 'Guidelines'],
    images: [project2Cover, project2Detail1, project2Detail2],
  },
  {
    id: 3,
    title: '瞰天科技官网设计',
    type: '网站设计',
    year: '2024',
    description: '响应式网站设计，注重信息架构与视觉层次，创造流畅的用户体验。设计遵循品牌视觉规范，通过清晰的导航结构和优雅的视觉呈现，帮助用户快速获取信息，提升品牌专业形象。',
    tags: ['Web Design', 'UI/UX', 'Responsive'],
    images: [project3Cover1, project3Cover2],
  },
  {
    id: 4,
    title: '《常见的事物？》绘画系列',
    type: '纸本绘画',
    year: '2023',
    description: '纸本绘画系列作品，探索日常物品在不同视角下的陌生感。通过细致的观察和独特的表现手法，将熟悉的事物呈现出新的面貌，引发观者对日常生活的重新思考。',
    tags: ['Illustration', 'Art', 'Drawing'],
    images: [project41, project42, project43, project44, project45],
  },
];

// 自定义光标组件
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed w-8 h-8 border border-[#d4c4b0] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />
      <motion.div
        className="fixed w-1.5 h-1.5 bg-[#d4c4b0] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: cursorX,
          top: cursorY,
          x: 13,
          y: 13,
        }}
      />
    </>
  );
}

// Hero Section - 主视觉区域
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={ref} className="relative w-full h-[70vh] min-h-[600px] bg-[#2a2118] overflow-hidden">
      {/* 顶部导航 */}
      <nav className="absolute top-0 left-0 right-0 z-10 px-6 md:px-12 py-6 md:py-8 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ x: 5, transition: { duration: 0.3 } }}
          className="text-[#b8a890] font-['IBM_Plex_Mono',sans-serif] font-light text-[12px] md:text-[14px] tracking-widest uppercase cursor-pointer"
        >
          Beijing, China
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ x: -5, transition: { duration: 0.3 } }}
          className="text-[#b8a890] font-['IBM_Plex_Mono',sans-serif] font-light text-[12px] md:text-[14px] tracking-widest uppercase cursor-pointer"
        >
          Portfolio 2026
        </motion.div>
      </nav>

      {/* 主内容区域 - 左对齐 */}
      <motion.div style={{ opacity, y }} className="relative h-full flex items-center px-6 md:px-12">
        <div className="w-full max-w-[900px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.h1 
              className="font-['Noto_Sans_SC',sans-serif] font-light text-[#f5f1ed] text-[56px] md:text-[80px] lg:text-[120px] leading-[0.85] tracking-[-2px] md:tracking-[-3px] mb-4 md:mb-6"
              whileHover={{ letterSpacing: '-2px', transition: { duration: 0.3 } }}
            >
              郑丹蕾
            </motion.h1>
            <motion.p 
              className="font-['IBM_Plex_Mono',sans-serif] font-light text-[#d4c4b0] text-[16px] md:text-[20px] lg:text-[26px] tracking-[3px] md:tracking-[6px] mb-16 md:mb-24"
              whileHover={{ letterSpacing: '8px', transition: { duration: 0.3 } }}
            >
              ZHENG DANLEI
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="space-y-1.5 md:space-y-2"
          >
            {['Visual Designer', 'Digital Experience', 'Interactive Works'].map((text, index) => (
              <motion.p
                key={text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ x: 10, color: '#f5f1ed', transition: { duration: 0.2 } }}
                className="font-['IBM_Plex_Mono',sans-serif] font-light text-[#b8a890] text-[13px] md:text-[16px] tracking-[2px] md:tracking-[4px] uppercase cursor-pointer"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* 背景装饰性几何元素 */}
        <motion.div
          className="hidden md:block absolute top-1/4 right-[20%] w-80 h-80 border border-[rgba(245,241,237,0.05)] rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="hidden md:block absolute bottom-1/3 right-[10%] w-56 h-56 border border-[rgba(245,241,237,0.05)]"
          animate={{
            rotate: [0, 90, 0],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* 底部滚动指示器 - 点击平滑滚动到作品区 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 md:bottom-12 left-6 md:left-12 flex items-center gap-3 md:gap-4 cursor-pointer select-none"
        whileHover={{ gap: 24, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-['IBM_Plex_Mono',sans-serif] text-[#b8a890] text-[11px] md:text-[12px] tracking-[2px] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{
            x: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-[#d4c4b0]"
        >
          <ChevronDown size={18} className="rotate-[-90deg]" />
        </motion.div>
      </motion.div>

      {/* 底部分隔线 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(245,241,237,0.1)]" />
    </section>
  );
}

// About Section
function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.section 
      ref={ref}
      style={{ scale }}
      className="w-full bg-[#2a2118] py-16 md:py-32 relative"
    >
      <div className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* 左侧：标题 */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="font-['Noto_Sans_SC',sans-serif] font-light text-[#f5f1ed] text-[36px] md:text-[48px] tracking-wide mb-3 md:mb-4"
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                关于
              </motion.h2>
              <motion.p 
                className="font-['IBM_Plex_Mono',sans-serif] font-light text-[#b8a890] text-[13px] md:text-[14px] tracking-[3px] uppercase"
                whileHover={{ letterSpacing: '5px', transition: { duration: 0.3 } }}
              >
                About
              </motion.p>
            </motion.div>
          </div>

          {/* 右侧：内容 */}
          <div className="md:col-span-8">
            <div className="space-y-6 md:space-y-8">
              {[
                { text: '郑丹蕾，设计师，现居北京。', size: 'text-[18px] md:text-[20px]', delay: 0.2 },
                { text: '关注结构、节奏与克制——相信好的设计不在于加法，而在于找到恰当的减法。专注于品牌视觉、用户体验与数字产品设计，致力于在功能与美学之间寻找平衡点。', size: 'text-[16px] md:text-[18px]', delay: 0.3 },
                { text: '作品涵盖品牌视觉系统、包装设计、网站设计与插画创作，每个项目都追求精准的视觉传达与细腻的情感表达。', size: 'text-[16px] md:text-[18px]', delay: 0.4 }
              ].map((item, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: item.delay }}
                  whileHover={{ x: 5, color: '#f5f1ed', transition: { duration: 0.3 } }}
                  className={`font-['Noto_Sans_SC',sans-serif] font-light text-[#d4c4b0] ${item.size} leading-relaxed cursor-default`}
                >
                  {item.text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// 轮播组件
function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [baseAspect, setBaseAspect] = useState<number | null>(null);
  const [activeSrc, setActiveSrc] = useState(images[0]);
  const [prevSrc, setPrevSrc] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showDots, setShowDots] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goTo = (index: number) => {
    if (images.length === 0) return;
    const nextIndex = (index + images.length) % images.length;
    setCurrentIndex(nextIndex);
  };

  const goNext = () => goTo(currentIndex + 1);
  const goPrev = () => goTo(currentIndex - 1);

  // 预加载下一张/上一张，减少切换时空白与等待
  useEffect(() => {
    if (typeof window === 'undefined' || images.length <= 1) return;
    const preload = (src: string) => {
      const img = new Image();
      img.decoding = 'async';
      img.loading = 'eager';
      img.src = src;
    };
    // 轮播图数量很少，直接预加载全部，移动端切换更顺滑
    for (const src of images) preload(src);
  }, [currentIndex, images]);

  // 用第一张图的真实比例固定容器，避免同项目图片尺寸不一致导致跳动
  useEffect(() => {
    if (typeof window === 'undefined' || images.length === 0) return;
    setBaseAspect(null);
    setActiveSrc(images[0]);
    setPrevSrc(null);
    setIsTransitioning(false);

    const img = new Image();
    img.decoding = 'async';
    img.src = images[0];
    img.onload = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setBaseAspect(img.naturalWidth / img.naturalHeight);
      }
    };
  }, [images]);

  // 计算圆点指示器是否显示：仅桌面端 + 非触摸设备
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const compute = () => {
      const isTouch =
        'ontouchstart' in window ||
        (navigator.maxTouchPoints ?? 0) > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      const isDesktop = window.matchMedia('(min-width: 768px)').matches;
      setShowDots(isDesktop && !isTouch);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  // 切换时先预加载目标图，加载完成后交叉淡入，避免闪烁/空白
  useEffect(() => {
    if (typeof window === 'undefined' || images.length === 0) return;
    const target = images[currentIndex];
    if (!target || target === activeSrc) return;

    const img = new Image();
    img.decoding = 'async';
    img.src = target;
    img.onload = () => {
      setPrevSrc(activeSrc);
      setActiveSrc(target);
      setIsTransitioning(true);
      window.setTimeout(() => {
        setPrevSrc(null);
        setIsTransitioning(false);
      }, 300);
    };
  }, [currentIndex, images, activeSrc]);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;

    // 自动轮播间隔：从 4s 调整为 5s
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  return (
    <motion.div 
      className="relative w-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div 
        className="w-full flex items-center justify-center bg-[rgba(245,241,237,0.03)] relative overflow-hidden"
        style={baseAspect ? { aspectRatio: String(baseAspect) } : undefined}
        whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
        onClick={goNext}
        onTouchStart={(e) => {
          const t = e.touches[0];
          if (!t) return;
          touchStart.current = { x: t.clientX, y: t.clientY };
        }}
        onTouchEnd={(e) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start) return;
          const t = e.changedTouches[0];
          if (!t) return;
          const dx = t.clientX - start.x;
          const dy = t.clientY - start.y;
          if (Math.abs(dx) < 40) return;
          if (Math.abs(dx) < Math.abs(dy) * 1.2) return; // mostly vertical -> ignore
          if (dx < 0) goNext();
          else goPrev();
        }}
      >
        {prevSrc && (
          <img
            src={prevSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
            style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 550ms ease-out' }}
            draggable={false}
          />
        )}
        <img
          src={activeSrc}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain"
          loading={currentIndex === 0 ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={currentIndex === 0 ? 'high' : 'auto'}
          style={{ opacity: 1, transition: 'opacity 300ms ease-out' }}
          draggable={false}
        />
      </motion.div>

      {images.length > 1 && (
        <motion.div 
          className="absolute bottom-6 right-6 bg-[rgba(245,241,237,0.9)] px-3 py-1.5 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(245,241,237,1)', transition: { duration: 0.2 } }}
        >
          <span className="font-['IBM_Plex_Mono',sans-serif] text-[#2a2118] text-[14px] tracking-wider">
            {currentIndex + 1} / {images.length}
          </span>
        </motion.div>
      )}

      {/* 图片指示器点（仅桌面端渲染；移动端/触摸设备任何情况下都不渲染） */}
      {images.length > 1 && showDots && (
        <div className="absolute bottom-6 left-6 flex gap-2 z-10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#f5f1ed] w-8' : 'bg-[rgba(245,241,237,0.4)] w-2'
              }`}
              whileHover={{ scale: 1.5, backgroundColor: 'rgba(245,241,237,0.8)' }}
              whileTap={{ scale: 0.9 }}
              aria-label={`切换到第 ${index + 1} 张`}
              type="button"
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

// 项目行组件
function ProjectRow({ project, isExpanded, onToggle }: {
  project: typeof projects[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = isExpanded || isHovered;

  return (
    <motion.div 
      className="border-b border-[rgba(232,224,191,0.4)] relative"
      style={{ zIndex: isExpanded ? 100 : 1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={onToggle}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="w-full py-6 md:py-10 px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between transition-all duration-300 group relative overflow-hidden gap-3 md:gap-0"
        style={{ backgroundColor: isActive ? '#e8dfc0' : '#674825' }}
        whileHover={{ x: 4, transition: { duration: 0.2 } }}
      >
        {/* 悬停动画背景 */}
        <motion.div
          className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(245,241,237,0.03)] to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        <motion.div 
          className="flex-1 text-left md:pr-8 relative z-10 w-full md:w-auto"
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2
            className="font-['Noto_Sans_SC',sans-serif] font-light text-[22px] md:text-[28px] leading-tight tracking-[-0.5px] transition-colors duration-300"
            style={{ color: isActive ? '#1D1815' : '#f5f1ed' }}
          >
            {project.title}
          </h2>
        </motion.div>

        <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-8 relative z-10">
          <motion.div 
            className="flex-shrink-0 text-left md:text-center md:min-w-[200px]"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className="font-['Noto_Sans_SC',sans-serif] font-light text-[14px] md:text-[16px] tracking-wide transition-colors duration-300"
              style={{ color: isActive ? '#1D1815' : '#b8a890' }}
            >
              {project.type}
            </span>
          </motion.div>

          <div className="flex-shrink-0 flex items-center justify-end gap-4 md:gap-8 md:min-w-[150px]">
            <motion.span 
              className="font-['IBM_Plex_Mono',sans-serif] font-light text-[16px] md:text-[18px] transition-colors duration-300"
              style={{ color: isActive ? '#1D1815' : '#b8a890' }}
              animate={{ letterSpacing: isHovered ? '2px' : '0px' }}
              transition={{ duration: 0.3 }}
            >
              {project.year}
            </motion.span>
            <motion.div 
              className="text-[#d4c4b0]"
              animate={{ 
                rotate: isExpanded ? 180 : 0,
                scale: isHovered ? 1.2 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} className="md:w-6 md:h-6" />
            </motion.div>
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <motion.div 
              className="px-6 md:px-12 pb-12 md:pb-16 pt-6 md:pt-8"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-7">
                  <ImageCarousel images={project.images} alt={project.title} />
                </div>

                <motion.div 
                  className="md:col-span-5 flex flex-col justify-start pt-0 md:pt-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.p 
                    className="font-['Noto_Sans_SC',sans-serif] font-light text-[#b8a890] text-[13px] md:text-[14px] tracking-wide mb-6 md:mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.type} · {project.year}
                  </motion.p>

                  <motion.div 
                    className="w-12 md:w-16 h-px bg-[rgba(245,241,237,0.2)] mb-6 md:mb-8"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  />

                  <motion.p 
                    className="font-['Noto_Sans_SC',sans-serif] font-light text-[#d4c4b0] text-[15px] md:text-[16px] leading-relaxed mb-8 md:mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ color: '#f5f1ed', transition: { duration: 0.3 } }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ 
                          scale: 1.05, 
                          borderColor: 'rgba(245,241,237,0.6)',
                          backgroundColor: 'rgba(245,241,237,0.05)',
                          transition: { duration: 0.2 }
                        }}
                        className="font-['IBM_Plex_Mono',sans-serif] font-light text-[#b8a890] text-[13px] md:text-[14px] tracking-wider uppercase px-3 md:px-4 py-1.5 md:py-2 border border-[rgba(245,241,237,0.2)] cursor-pointer"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// 项目列表
function ProjectList() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="w-full bg-[#6b4a30] pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="px-6 md:px-12 mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ x: 10, transition: { duration: 0.3 } }}
          className="font-['Noto_Sans_SC',sans-serif] font-light text-[#f5f1ed] text-[36px] md:text-[48px] tracking-wide mb-3 md:mb-4"
        >
          精选作品
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ letterSpacing: '5px', transition: { duration: 0.3 } }}
          className="font-['IBM_Plex_Mono',sans-serif] font-light text-[#b8a890] text-[13px] md:text-[14px] tracking-[3px] uppercase"
        >
          Selected Works
        </motion.p>
      </div>

      <div className="w-full border-t border-[rgba(232,224,191,0.4)]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectRow
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-[rgba(245,241,237,0.1)] bg-[#2a2118]">
      <div className="px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-['Noto_Sans_SC',sans-serif] font-light text-[#f5f1ed] text-[16px] md:text-[18px] mb-4 md:mb-6 tracking-wide">
            联系方式
          </h3>
          <div className="space-y-2 md:space-y-3">
            <motion.a
              href="mailto:zhengdanlei@outlook.com"
              className="block font-['IBM_Plex_Mono',sans-serif] font-light text-[#d4c4b0] text-[15px] md:text-[16px] transition-colors duration-300 break-all"
              whileHover={{ x: 10, color: '#f5f1ed', transition: { duration: 0.2 } }}
            >
              zhengdanlei@outlook.com
            </motion.a>
            <motion.a
              href="tel:13701318484"
              className="block font-['IBM_Plex_Mono',sans-serif] font-light text-[#d4c4b0] text-[15px] md:text-[16px] transition-colors duration-300"
              whileHover={{ x: 10, color: '#f5f1ed', transition: { duration: 0.2 } }}
            >
              13701318484
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="font-['Noto_Sans_SC',sans-serif] font-light text-[#f5f1ed] text-[16px] md:text-[18px] mb-4 md:mb-6 tracking-wide">
            关于
          </h3>
          <motion.p 
            className="font-['Noto_Sans_SC',sans-serif] font-light text-[#d4c4b0] text-[13px] md:text-[14px] leading-relaxed"
            whileHover={{ color: '#f5f1ed', transition: { duration: 0.3 } }}
          >
            郑丹蕾，设计师，现居北京。关注结构、节奏与克制——相信好的设计不在于加法，而在于找到恰当的减法。
          </motion.p>
        </motion.div>
      </div>

      <motion.div 
        className="px-6 md:px-12 py-5 md:py-6 border-t border-[rgba(245,241,237,0.1)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-['IBM_Plex_Mono',sans-serif] font-light text-[#b8a890] text-[12px] md:text-[14px] tracking-wider text-center">
          © 2026 ZhengDanLei. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

// 主组件
export default function MinimalistPortfolioWebsiteWireframe() {
  return (
    <div className="bg-[#2a2118] min-h-screen w-full relative" style={{ cursor: 'none' }}>
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <ProjectList />
      <Footer />
    </div>
  );
}
