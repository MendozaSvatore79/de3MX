// src/components/PortfolioWeb/CTASection.tsx
import React from 'react';
import Link from 'next/link';

const CTASection: React.FC = () => {
  return (
    <div className="text-center bg-gradient-to-r from-[#00DA6B]/10 to-[#00DA6B]/5 rounded-3xl p-12 border border-[#00DA6B]/20">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
        ¿Listo para empezar tu proyecto web?
      </h2>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Contáctanos y te ayudaremos a crear la presencia digital que tu negocio necesita.
      </p>
      <Link href="/#contact" className="inline-block bg-[#00DA6B] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#00DA6B]/90 transition-colors">
        Solicitar Cotización
      </Link>
    </div>
  );
};

export default CTASection;
