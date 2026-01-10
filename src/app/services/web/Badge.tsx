// src/components/PortfolioWeb/Badge.tsx
"use client"
import React, { useState, useEffect } from 'react';
import strapi from '@/app/api/portafolio/strapi';

const Badge: React.FC = () => {
  const [badge, setBadge] = useState<string | null>(null);

  useEffect(() => {
    strapi.get('/badge', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      }
    })
    .then((res) => {
      setBadge(res.data.data.attributes.text || 'Sin Marketing');
    })
    .catch(() => {
      setBadge('Sin Marketing');
    });
  }, []);

  return badge ? (
    <div className="bg-red-500 text-white text-sm py-1 px-3 rounded-full">
      {badge}
    </div>
  ) : null;
};

export default Badge;
