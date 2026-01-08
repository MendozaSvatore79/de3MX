"use client";

import React from 'react';

type Props = {
  className?: string;
  opacity?: number;
  src?: string;
};

// Deprecated placeholder: package not installed. Kept to avoid import errors.
export default function TetrisOverlayDotLottie({ className = '', opacity = 0.45 }: Props) {
  return <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }} />;
}
