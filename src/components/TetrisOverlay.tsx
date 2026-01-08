"use client";

import React from 'react';
import dynamic from 'next/dynamic';
// Ensure Lottie only runs on the client to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

type Props = {
  className?: string;
  opacity?: number;
  src?: string; // JSON path or absolute URL
};

export default function TetrisOverlay({ className = '', opacity = 0.45, src = '/animations/tetris.json' }: Props) {
  const [data, setData] = React.useState<any | null>(null);

  React.useEffect(() => {
    let mounted = true;
    const url = (() => {
      if (!src) return '/animations/tetris.json';
      // If absolute http(s) keep as-is, else resolve relative to origin
      if (/^https?:\/\//i.test(src)) return src;
      if (typeof window !== 'undefined') return new URL(src, window.location.origin).toString();
      return src;
    })();

    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        if (mounted) setData(json);
      })
      .catch((err) => {
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.warn('[TetrisOverlay] Failed to load Lottie JSON from', url, err);
        }
      });
    return () => {
      mounted = false;
    };
  }, [src]);

  if (!data) return null;

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }} aria-hidden>
      <Lottie
        animationData={data}
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
    </div>
  );
}
