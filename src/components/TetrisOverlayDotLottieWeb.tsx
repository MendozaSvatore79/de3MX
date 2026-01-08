"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

type Props = {
  className?: string;
  opacity?: number;
  src: string;
};

export default function TetrisOverlayDotLottieWeb({ className = '', opacity = 0.8, src }: Props) {
  const [animationData, setAnimationData] = React.useState<any>(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    // Use local tetris animation
    fetch('/animations/tetris.json')
      .then(res => res.json())
      .then(data => {
        console.log('[TetrisOverlay] Animation loaded successfully');
        setAnimationData(data);
      })
      .catch(err => {
        console.error('[TetrisOverlay] Failed to load animation:', err);
        setError(true);
      });
  }, [src]);

  // Show visible test overlay
  return (
    <div 
      className={`absolute inset-0 ${className}`} 
      style={{ 
        opacity,
        pointerEvents: 'none'
      }} 
      aria-hidden
    >
      {animationData && (
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ 
            width: '500%', 
            height: '500%',
            transform: 'scale(1) translate(-50%, -50%)',
            transformOrigin: 'center center'
          }}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
        />
      )}
      {error && (
        <div className="flex items-center justify-center h-full text-white text-sm">
          Animation failed to load
        </div>
      )}
    </div>
  );
}