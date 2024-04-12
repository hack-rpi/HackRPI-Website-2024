import React from 'react';
import '../app/globals.css';
import Link from 'next/link';
import Footer from "../components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import Image from 'next/image';

interface ProjectDisplayProps {
  title: string;
  authors: string[];
  description: string;
  imageUrl?: string;
  imageOnLeft?: boolean;
  textRightAlign?: boolean;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ title, authors, description, imageUrl, imageOnLeft, textRightAlign }) => {
    return (
      <div className="text-white p-6 rounded-lg mb-8 flex flex-col md:flex-row">
        {imageOnLeft && imageUrl && (
          <div className="flex-initial mr-4">
            <Image
              src={imageUrl}
              alt={`Image for ${title}`}
              width={400}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div className={`flex-1 ${textRightAlign ? 'text-right' : ''}`}>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="mb-4">
            <strong>By:</strong> {authors.join(', ')}
          </div>
          <p className="text-gray-300">{description}</p>
        </div>
        {!imageOnLeft && imageUrl && (
          <div className="flex-initial ml-4">
            <Image
              src={imageUrl}
              alt={`Image for ${title}`}
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    );
  };

const PastYearProjects: React.FC = () => {
  const projects: ProjectDisplayProps[] = [
    {
      title: 'Project Title 1',
      authors: ['Name 1', 'Name 2', 'Name 3', 'Name 4'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      imageUrl: '/projectImages/firstPlaceHack.png',
    },
    {
      title: 'Project Title 2',
      authors: ['Name 1', 'Name 2', 'Name 3', 'Name 4'],
      description: 'In tempus sit amet lorem sed suscipit...',
      imageUrl: '/images/project2.jpg',
      imageOnLeft: true,
      textRightAlign: true,
    },
    {
      title: 'Project Title 3',
      authors: ['Name 1', 'Name 2', 'Name 3', 'Name 4'],
      description: 'Pellentesque habitant morbi tristique senectus et netus...',
      imageUrl: '/images/project3.jpg',
    },
  ];


    return (
    <div className="container mx-auto px-4 py-8">
        <NavBar showOnScroll={false} />
        <h2 className="text-3xl font-bold text-center mb-8 pt-20">Previous Projects From HackRPI X</h2>
        <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
            <ProjectDisplay key={index} {...project} />
        ))}
        </div>
        <Footer />
    </div>
    );
};

export default PastYearProjects;