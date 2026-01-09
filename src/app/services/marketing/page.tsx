import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WebServicePage() {
  return (
    <div className="min-h-screen bg-[#1E1E1F] overflow-hidden">
      <Header />
      
      <main className="pt-24 pb-20 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00DA6B]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00DA6B]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00DA6B]/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
          {/* Under Construction Section */}
          <div className="text-center mb-16 min-h-[60vh] flex flex-col items-center justify-center">
            
            {/* Animated Icon */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-[#00DA6B]/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative animate-bounce">
                <svg className="w-32 h-32 mx-auto text-[#00DA6B] drop-shadow-[0_0_15px_rgba(0,218,107,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
            </div>

            {/* Animated Title */}
            <div className="mb-6 overflow-hidden">
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in-up">
                Página Bajo <span className="text-[#00DA6B] inline-block animate-pulse">Construcción</span>
              </h1>
            </div>

            {/* Animated Description */}
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Estamos trabajando en algo increíble. Pronto podrás conocer todos los detalles de nuestros servicios de desarrollo web.
            </p>

            {/* Progress Bar */}
            <div className="w-full max-w-md mb-10 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Progreso</span>
                <span className="text-[#00DA6B]">75%</span>
              </div>
              <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#00DA6B] to-[#00DA6B]/60 rounded-full animate-progress-bar shadow-[0_0_10px_rgba(0,218,107,0.5)]"></div>
              </div>
            </div>

            {/* Animated Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-4xl">
              {[
                { icon: '🚀', text: 'Diseño Moderno', delay: '0.6s' },
                { icon: '⚡', text: 'Alto Rendimiento', delay: '0.8s' },
                { icon: '🎨', text: 'UI/UX Optimizado', delay: '1s' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-[#2B2B2C]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#00DA6B]/50 transition-all duration-300 animate-fade-in-up hover:scale-105 hover:shadow-[0_0_20px_rgba(0,218,107,0.2)]"
                  style={{animationDelay: feature.delay}}
                >
                  <div className="text-4xl mb-3 animate-bounce" style={{animationDelay: feature.delay}}>{feature.icon}</div>
                  <p className="text-white font-medium">{feature.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="inline-block animate-fade-in-up" style={{animationDelay: '1.2s'}}>
              <Link 
                href="/#contact"
                className="group inline-flex items-center gap-3 bg-[#00DA6B] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#00DA6B]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,218,107,0.4)]"
              >
                <span>Contáctanos</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
            <Link 
              href="/"
              className="group text-gray-400 hover:text-[#00DA6B] transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress-bar {
          from {
            width: 0%;
          }
          to {
            width: 75%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-progress-bar {
          animation: progress-bar 2s ease-out forwards;
          animation-delay: 0.5s;
          width: 0%;
        }
      `}</style>
    </div>
  );
}
