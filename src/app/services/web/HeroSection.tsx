"use client"
import React, {useState, useEffect} from 'react';
import strapi from '@/app/api/portafolio/strapi';

interface HeroData {
  title: string;
  subtitle: string;
  sectionTitle: string;
}

const HeroSection: React.FC = () => {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    strapi.get('/hero', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      }
    })
    .then((res) => {
      setData(res.data.data.attributes);
      setLoading(false);
    })
    .catch(() => {
      setData({
        title: 'Desarrollo Web',
        subtitle: 'Creamos sitios web modernos, rápidos y optimizados que convierten visitantes en clientes.',
        sectionTitle: 'Nuestros Servicios'
      });
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="text-center mb-16">
      <div className="inline-block mb-6">
        <span className="text-[#00DA6B] text-lg font-medium tracking-wider uppercase">{data?.sectionTitle}</span>
      </div>
      <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
        {data?.title}
        <span className="text-[#00DA6B]"> Web</span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
        {data?.subtitle}
      </p>
    </div>
  );
};

export default HeroSection;