// components/ProjectDisplay.tsx
import React from 'react';

interface ProjectProps {
  title: string;
  authors: string[];
  description: string;
  imageUrl: string;
}

const ProjectDisplay: React.FC<ProjectProps> = ({ title, authors, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <strong>By:</strong> {authors.join(', ')}
      </div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image for ${title}`}
          className="w-full h-64 object-cover object-center mb-4"
        />
      )}
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProjectDisplay;