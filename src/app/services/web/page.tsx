import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WebServicePage() {
  return (
    <div className="min-h-screen bg-[#1E1E1F]">
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
      </main>

      <Footer />
    </div>
  );
}
