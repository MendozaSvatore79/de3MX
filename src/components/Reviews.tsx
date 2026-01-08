'use client';

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  documentId: string;
  name: string;
  company: string;
  text: string;
  rating: number;
  order: number;
  avatar?: {
    id?: number;
    url?: string;
    name?: string;
  }
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://prueba-sitede3mx.synovasystems.com';
  const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      // Agregar token si existe
      if (STRAPI_TOKEN) {
        headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
      }

      const response = await fetch(`${STRAPI_URL}/api/reviews?populate=*&sort=order:asc`, {
        headers
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      console.log('✅ Datos recibidos de Strapi:', data);
      console.log('📊 Reviews encontrados:', data.data?.length || 0);
      
      if (data.data && data.data.length > 0) {
        console.log('🎯 Primer review:', data.data[0]);
        setReviews(data.data);
        setError(false);
      } else {
        // Si no hay datos en la API, usar mock
        throw new Error('No reviews found');
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      console.log('Usando datos de ejemplo...');
      
      // Fallback: datos de ejemplo mientras configuras Strapi
      const mockReviews: Review[] = [
        {
          id: 1,
          documentId: 'mock-1',
          name: 'Alfredo Lomantza',
          company: 'Gruppo Lomantza Company',
          text: 'Working with this team was an amazing experience. They delivered exactly what we needed and more.',
          rating: 5,
          order: 1
        },
        {
          id: 2,
          documentId: 'mock-2',
          name: 'María González',
          company: 'Tech Solutions Inc',
          text: 'Exceptional service and attention to detail. They transformed our digital presence completely.',
          rating: 5,
          order: 2
        },
        {
          id: 3,
          documentId: 'mock-3',
          name: 'Carlos Ruiz',
          company: 'Innovation Labs',
          text: 'Professional, creative, and always on time. Highly recommended for any digital project.',
          rating: 5,
          order: 3
        }
      ];
      
      setReviews(mockReviews);
      setError(true);
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <section className="relative bg-[#F8F8F8]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-[24px] md:py-[36px] lg:py-[48px]">
          <div className="flex items-center justify-center h-[400px]">
            <p className="text-gray-500">Cargando reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0 || !reviews[currentIndex]) {
    return (
      <section className="relative bg-[#F8F8F8]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-[24px] md:py-[36px] lg:py-[48px]">
          <div className="flex flex-col items-center justify-center h-[400px] gap-4">
            <p className="text-gray-500 text-lg">
              {error ? 'Usando datos de ejemplo (Strapi no conectado)' : 'No hay reviews disponibles'}
            </p>
            {error && (
              <p className="text-gray-400 text-sm">
                Revisa la consola del navegador para más detalles
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  const currentReview = reviews[currentIndex];
  
  // Validación adicional
  if (!currentReview.name) {
    console.error('Review sin name:', currentReview);
    return (
      <section className="relative bg-[#F8F8F8]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-[24px] md:py-[36px] lg:py-[48px]">
          <div className="flex items-center justify-center h-[400px]">
            <p className="text-gray-500">Error en estructura de datos</p>
          </div>
        </div>
      </section>
    );
  }

  const avatarUrl = currentReview.avatar?.url 
    ? `${STRAPI_URL}${currentReview.avatar.url}`
    : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop';

  return (
    <section className="relative bg-[#F8F8F8]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-[24px] md:py-[36px] lg:py-[48px]">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[167px] items-center justify-center">
          {/* Left Side - Title with speech bubble */}
          <div className="flex gap-4 md:gap-6 items-center shrink-0">
            <h2 className="text-black" style={{ fontSize: 'clamp(40px, 6vw, 65px)', fontWeight: 'bold', lineHeight: 'normal', maxWidth: '340px' }}>
              Reviews matter
            </h2>
            
            {/* Speech bubble with stars */}
            <div className="relative w-[100px] md:w-[123px] h-[52px] md:h-[63px] shrink-0">
              <svg width="123" height="64" viewBox="0 0 123 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Speech bubble outline */}
                <path d="M112.5 2.25H10.5C5.52944 2.25 1.5 6.27944 1.5 11.25V42.75C1.5 47.7206 5.52944 51.75 10.5 51.75H28.5L40.5 61.5V51.75H112.5C117.471 51.75 121.5 47.7206 121.5 42.75V11.25C121.5 6.27944 117.471 2.25 112.5 2.25Z" stroke="#282828" strokeWidth="2.25" strokeMiterlimit="10"/>
                
                {/* Circles replacing stars - 7px diameter (3.5px radius) */}
                <g>
                  <circle cx="20.5" cy="27" r="3.5" fill="#00DA6B" stroke="#282828" strokeWidth="1.5"/>
                  <circle cx="40.5" cy="27" r="3.5" fill="#00DA6B" stroke="#282828" strokeWidth="1.5"/>
                  <circle cx="61.5" cy="27" r="3.5" fill="#00DA6B" stroke="#282828" strokeWidth="1.5"/>
                  <circle cx="82.5" cy="27" r="3.5" fill="#00DA6B" stroke="#282828" strokeWidth="1.5"/>
                  <circle cx="102.5" cy="27" r="3.5" fill="#00DA6B" stroke="#282828" strokeWidth="1.5"/>
                </g>
              </svg>
            </div>
          </div>

          {/* Right Side - Testimonial Card with Navigation */}
          <div className="relative flex flex-col gap-[30px] md:gap-[46px] items-center justify-center shrink-0 w-full lg:w-auto">
            {/* Card */}
            <div className="bg-white rounded-lg shadow-[0px_20px_30px_0px_rgba(43,43,44,0.16)] px-[30px] md:px-[60px] py-[30px] md:py-[52px] w-full max-w-[626px] min-h-[280px] md:h-[340px] flex flex-col gap-[10px] items-center justify-center">
              {/* Header with photo and name */}
              <div className="w-full flex items-center justify-between mb-[35px]">
                <div className="flex gap-[15px] items-center">
                  {/* Photo */}
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-300 shrink-0">
                    <img 
                      src={avatarUrl} 
                      alt={currentReview.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Name and company */}
                  <div className="flex flex-col items-start w-[270px]">
                    <p className="font-normal text-[#1E1E1F] text-[16px] leading-[23px]">
                      {currentReview.name}
                    </p>
                    <p className="font-bold text-[#1E1E1F] text-[16px] leading-[23px] whitespace-nowrap">
                      | {currentReview.company}
                    </p>
                  </div>
                </div>
                
                {/* Quote icon */}
                <div className="w-[60px] h-[30px]">
                  <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0C6.05 0 0 6.05 0 13.5V30H16.5V13.5H7.5C7.5 10.2 10.2 7.5 13.5 7.5V0ZM43.5 0C36.05 0 30 6.05 30 13.5V30H46.5V13.5H37.5C37.5 10.2 40.2 7.5 43.5 7.5V0Z" fill="#E4E4E4"/>
                  </svg>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-full h-[1px] bg-[#D9D9D9] mb-[35px]"></div>
              
              {/* Review text */}
              <div className="w-full">
                <p className="font-normal text-[#1E1E1F] text-[16px] leading-[23px] max-w-[500px]">
                  {currentReview.text}
                </p>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex gap-[30px] md:gap-[43px] items-center justify-center h-[15px]">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`w-[15px] h-[15px] rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#1E1E1F]' : 'bg-[#CBCBCB] hover:bg-[#A0A0A0]'
                  }`}
                  aria-label={`Ver review ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Navigation arrows */}
            {/* Left arrow */}
            <button 
              onClick={handlePrevious}
              className="hidden lg:block absolute left-0 top-[375px] w-[78.571px] h-[36.667px] hover:opacity-80 transition-opacity"
              aria-label="Review anterior"
            >
              <svg width="79" height="37" viewBox="0 0 79 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Arrow shaft */}
                <line x1="78.5714" y1="18.3333" x2="18.3333" y2="18.3333" stroke="#00DA6B" strokeWidth="3"/>
                {/* Arrow head top */}
                <line x1="18.3333" y1="0" x2="0" y2="18.3333" stroke="#00DA6B" strokeWidth="3"/>
                {/* Arrow head bottom */}
                <line x1="0" y1="18.3333" x2="18.3333" y2="36.6667" stroke="#00DA6B" strokeWidth="3"/>
                {/* Arrow tail top */}
                <line x1="18.3333" y1="0" x2="18.3333" y2="14.6667" stroke="#00DA6B" strokeWidth="3"/>
                {/* Arrow tail bottom */}
                <line x1="18.3333" y1="22" x2="18.3333" y2="36.6667" stroke="#00DA6B" strokeWidth="3"/>
              </svg>
            </button>
            
            {/* Right arrow */}
            <button 
              onClick={handleNext}
              className="hidden lg:block absolute right-0 top-[375px] w-[78.571px] h-[36.667px] hover:opacity-80 transition-opacity"
              aria-label="Review siguiente"
            >
              <svg width="79" height="37" viewBox="0 0 79 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Arrow shaft */}
                <line x1="0" y1="18.3333" x2="60.2381" y2="18.3333" stroke="#00DA6B" strokeWidth="3"/>
                {/* Arrow head top */}
                <line x1="60.2381" y1="0" x2="78.5714" y2="18.3333" stroke="#00DA6B" strokeWidth="3"/>
                {/* Arrow head bottom */}
                <line x1="78.5714" y1="18.3333" x2="60.2381" y2="36.6667" stroke="#00DA6B" strokeWidth="3"/>
                {/* Arrow tail top */}
                <line x1="60.2381" y1="0" x2="60.2381" y2="14.6667" stroke="#00DA6B" strokeWidth="3"/>
                {/* Arrow tail bottom */}
                <line x1="60.2381" y1="22" x2="60.2381" y2="36.6667" stroke="#00DA6B" strokeWidth="3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}