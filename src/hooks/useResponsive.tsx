'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '@/lib/breakpoints';

/**
 * Hook personalizado para detectar el tipo de dispositivo
 * Retorna booleans para cada breakpoint definido
 */
export const useResponsive = () => {
  const isMobile = useMediaQuery({ query: breakpoints.mobile });
  const isTablet = useMediaQuery({ query: breakpoints.tablet });
  const isLaptopSm = useMediaQuery({ query: breakpoints.laptopSm });
  const isMacbook = useMediaQuery({ query: breakpoints.macbook });
  const isLaptopLg = useMediaQuery({ query: breakpoints.laptopLg });
  const isDesktop = useMediaQuery({ query: breakpoints.desktop });
  
  // Agrupaciones útiles
  const isTabletAndAbove = useMediaQuery({ query: breakpoints.tabletAndAbove });
  const isLaptopAndAbove = useMediaQuery({ query: breakpoints.laptopAndAbove });
  const isDesktopAndAbove = useMediaQuery({ query: breakpoints.desktopAndAbove });

  return {
    isMobile,
    isTablet,
    isLaptopSm,
    isMacbook,
    isLaptopLg,
    isDesktop,
    isTabletAndAbove,
    isLaptopAndAbove,
    isDesktopAndAbove,
    // Propiedades útiles adicionales
    isLaptop: isLaptopSm || isMacbook || isLaptopLg,
    device: isMobile ? 'mobile' : isTablet ? 'tablet' : isLaptopSm ? 'laptop-sm' : isMacbook ? 'macbook' : isLaptopLg ? 'laptop-lg' : 'desktop',
  };
};

/**
 * Componente wrapper para renderizado condicional basado en tamaño de pantalla
 */
interface ResponsiveProps {
  children: React.ReactNode;
  mobile?: boolean;
  tablet?: boolean;
  laptop?: boolean;
  desktop?: boolean;
}

export const Responsive: React.FC<ResponsiveProps> = ({ 
  children, 
  mobile, 
  tablet, 
  laptop, 
  desktop 
}) => {
  const { isMobile, isTablet, isLaptop, isDesktop } = useResponsive();

  const shouldRender = 
    (mobile && isMobile) ||
    (tablet && isTablet) ||
    (laptop && isLaptop) ||
    (desktop && isDesktop);

  return shouldRender ? <>{children}</> : null;
};
