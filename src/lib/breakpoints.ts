/**
 * Breakpoints para responsive design
 * Optimizado para mobile, tablet, laptop (MacBook), y desktop (1920x1080)
 */

export const breakpoints = {
  // Mobile devices (hasta 767px)
  mobile: '(max-width: 767px)',
  
  // Tablets (768px - 1023px)
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  
  // Laptops pequeños (1024px - 1279px)
  laptopSm: '(min-width: 1024px) and (max-width: 1279px)',
  
  // MacBook y laptops medianos (1280px - 1439px)
  macbook: '(min-width: 1280px) and (max-width: 1439px)',
  
  // Laptops grandes (1440px - 1919px)
  laptopLg: '(min-width: 1440px) and (max-width: 1919px)',
  
  // Desktop 1920x1080 y mayores
  desktop: '(min-width: 1920px)',
  
  // Agrupaciones útiles
  tabletAndAbove: '(min-width: 768px)',
  laptopAndAbove: '(min-width: 1024px)',
  desktopAndAbove: '(min-width: 1440px)',
} as const;

export type Breakpoint = keyof typeof breakpoints;
