"use client";

import React from 'react';

interface Project {
  title: string;
  year: number;
  tags: string[];
  image: string;
  link: string;
}

interface PortfolioGridProps {
  projects: Project[];
}


// Colores de fondo por proyecto (puedes ajustar estos colores según tu Figma)
const bgColors = [
  'bg-[#E53E3E]', // Prepa Ibero - rojo
  'bg-[#2563EB]', // Imemsa - azul
  'bg-[#22D3EE]', // Venn - cyan
  'bg-[#3B82F6]', // Biogal - azul claro
  'bg-[#D9F99D]', // Abastero - verde claro
  'bg-[#67E8F9]', // Optics Mx/Col - celeste
  'bg-[#F87171]', // Mexbusa - rojo claro
  'bg-[#A7F3D0]', // Uniq Luxury - verde agua
  'bg-[#FBCFE8]', // Decocuit - rosa claro
  'bg-[#1E293B]', // Commerce Society - azul oscuro
  'bg-[#FDE047]', // Kiki - amarillo
  'bg-[#A5B4FC]', // Voluntarios México - azul lavanda
];

import { useState } from 'react';

const PlaceholderMockup: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center">
    <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
      <rect x="4" y="4" rx="8" ry="8" width="212" height="112" fill="#fff" />
    </svg>
  </div>
);

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects }) => (
  <section className="mb-20">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
      {projects.map((project, idx) => (
        <ProjectCard project={project} idx={idx} key={idx} />
      ))}
    </div>
  </section>
);

const ProjectCard: React.FC<{ project: Project; idx: number }> = ({ project, idx }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={project.link}
      className={`group block rounded-[18px] overflow-hidden border border-[#232323] hover:border-[#00DA6B] transition-all duration-300 shadow-xl ${bgColors[idx % bgColors.length]} relative`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative w-full h-[240px] md:h-[260px] lg:h-[280px]">
        {!imgError ? (
          // image may be missing; hide on error
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="absolute top-4 left-6 w-[75%] md:w-[70%] lg:w-[65%] object-contain drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 12px 40px rgba(0,0,0,0.28))' }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <PlaceholderMockup />
          </div>
        )}
      </div>

      <div className="px-7 pb-7 pt-4 flex flex-col justify-end min-h-[140px]">
        <div className="flex items-end w-full">
          <div className="flex items-center gap-3">
            <svg className="w-4 h-4 text-[#00DA6B] mt-1" fill="none" stroke="#00DA6B" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-none tracking-tight">{project.title}</h3>
          </div>
          <div className="ml-auto text-white/80 text-base md:text-lg font-semibold">{project.year}</div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="bg-[#0f0f0f] text-[#00DA6B] px-3 py-1 rounded-full text-xs font-semibold border border-[#00DA6B]/30">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 rounded-[18px] pointer-events-none group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-300" />
    </a>
  );
};

export default PortfolioGrid;
