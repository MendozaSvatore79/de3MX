import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AppServicePage() {
  return (
    <div className="min-h-screen bg-[#1E1E1F]">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-[#00DA6B] text-lg font-medium tracking-wider uppercase">Nuestros Servicios</span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Desarrollo de <span className="text-[#00DA6B]">Apps</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Desarrollamos aplicaciones móviles nativas y multiplataforma que tus usuarios amarán.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'iOS & Android',
                description: 'Aplicaciones nativas para ambas plataformas con el mejor rendimiento y experiencia de usuario.'
              },
              {
                title: 'React Native',
                description: 'Apps multiplataforma que reducen costos sin sacrificar calidad ni funcionalidad.'
              },
              {
                title: 'UI/UX Móvil',
                description: 'Diseños intuitivos que siguen las guías de diseño de Apple y Google.'
              },
              {
                title: 'Backend & APIs',
                description: 'Infraestructura robusta y escalable para soportar tu aplicación.'
              },
              {
                title: 'Push Notifications',
                description: 'Mantén a tus usuarios enganchados con notificaciones personalizadas.'
              },
              {
                title: 'App Store & Play Store',
                description: 'Te ayudamos con todo el proceso de publicación y optimización en las tiendas.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-[#2B2B2C] rounded-2xl p-8 border border-gray-700/50 hover:border-[#00DA6B]/50 transition-all duration-300"
              >
                <h3 className="text-white text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#00DA6B]/10 to-[#00DA6B]/5 rounded-3xl p-12 border border-[#00DA6B]/20">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              ¿Tienes una idea para una app?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Cuéntanos tu idea y la convertiremos en una aplicación exitosa.
            </p>
            <Link 
              href="/#contact"
              className="inline-block bg-[#00DA6B] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#00DA6B]/90 transition-colors"
            >
              Solicitar Cotización
            </Link>
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
