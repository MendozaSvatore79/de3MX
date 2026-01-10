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
      
      <main className="pt-24 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          {/* Under Construction Section */}
          <div className="text-center mb-16 min-h-[60vh] flex flex-col items-center justify-center">
            <div className="mb-8">
              <svg className="w-32 h-32 mx-auto text-[#00DA6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Página Bajo <span className="text-[#00DA6B]">Construcción</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Estamos trabajando en algo increíble. Pronto podrás conocer todos los detalles de nuestros servicios de desarrollo web.
            </p>
            <div className="inline-block">
              <Link 
                href="/#contact"
                className="inline-block bg-[#00DA6B] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#00DA6B]/90 transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="text-gray-400 hover:text-[#00DA6B] transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
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