import React from "react";

interface Project {
  id: number;
  name: string;
  imageUrl: string;
  year: string;
  description: string;
}

interface FeaturesGridProps {
  projects: Project[];
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-800 rounded-lg p-6">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-auto object-cover rounded-md"
          />
          <h3 className="text-white text-xl font-semibold mt-4">{project.name}</h3>
          <p className="text-gray-400 mt-2">{project.year}</p>
          <p className="text-gray-300 mt-2">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
