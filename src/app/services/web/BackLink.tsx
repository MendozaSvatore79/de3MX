// src/components/PortfolioWeb/BackLink.tsx
import React from 'react';
import Link from 'next/link';

const BackLink: React.FC = () => {
  return (
    <div className="text-center mt-12">
      <Link href="/" className="text-gray-400 hover:text-[#00DA6B] transition-colors inline-flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Volver al inicio
      </Link>
    </div>
  );
};

export default BackLink;
