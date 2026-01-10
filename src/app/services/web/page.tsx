import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PortfolioGrid from './PortfolioGrid';
import { portfolioProjects } from './portfolioProjects';
import ContactSection from './ContactSection';

export default function WebServicePage() {
  return (
    <div className="min-h-screen bg-[#181818] flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 lg:px-12 pt-12">
        {/* Barra de filtros centrada — contenedor tipo pill con opción activa */}
        <div className="relative mb-8 mt-10 md:mt-12">
          <div className="flex justify-center">
            <div className="bg-[#1f1f1f] border border-[#2b2b2b] px-3 py-2 rounded-full shadow-inner flex items-center gap-2">
              <Link href="/services/web" className="px-5 py-1 rounded-full bg-[#00DA6B] text-black font-semibold shadow-sm">Web</Link>
              <Link href="/services/app" className="px-5 py-1 rounded-full text-white/90 hover:text-white">App</Link>
              <Link href="/services/design" className="px-5 py-1 rounded-full text-white/90 hover:text-white">Design</Link>
              <Link href="/services/marketing" className="px-5 py-1 rounded-full text-white/90 hover:text-white">Marketing</Link>
            </div>
          </div>
        </div>
        
        {/* Encabezado WEB alineado a la izquierda con flecha hacia abajo y separador */}
        <div className="flex items-baseline gap-4 mb-8">
          <h1 className="text-white text-7xl md:text-8xl font-extrabold tracking-tight leading-tight flex items-center gap-4 pl-6">
            WEB
            <span className="inline-block align-middle">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#00DA6B"/><path d="M18 12v12M18 24l-4-4m4 4l4-4" stroke="#181818" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </h1>
          <span className=" hidden md:flex md:pl-[600px] items-center text-[#ffff] text-sm md:text-base tracking-wide gap-2 ml-8" style={{textShadow: '0 1px 0 rgba(255,255,255,0.12)'}}><span className="hidden md:inline">&lt;/&gt;</span> Building better solutions for your users.</span>
        </div>
        <div className="flex gap-4 mb-8 items-center">
          <div className="flex-1 border-t border-[#fff] mt-4" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)'}} />
          <div className="flex-1 border-t border-[#fff] mt-4" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)'}} />
        </div>
        <PortfolioGrid projects={portfolioProjects} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}