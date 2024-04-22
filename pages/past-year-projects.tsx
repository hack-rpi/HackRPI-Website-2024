import React, { useState } from 'react';
import '../app/globals.css';
import Footer from "../components/footer/footer";
import NavBar from "@/components/nav-bar/nav-bar";
import ProjectDisplay, { ProjectDisplayProps } from '@/components/prev-projects/projectdisplay';
import Arrow from '@/components/prev-projects/Arrow';



const PastYearProjects: React.FC = () => {
    const allProjects: ProjectDisplayProps[] = [
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
      {
        title: 'Project Title',
        authors: ['Name', 'Name', 'Name', 'and Name'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus sit amet lorem sed suscipit. Sed ultricies lacus mi, venenatis porta dui imperdiet vitae. Duis et est volutpat, hendrerit magna at, feugiat libero. Integer lacinia sed nisi venenatis feugiat. Nam pulvinar gravida felis, ut venenatis quam tincidunt ac. Maecenas et leo consectetur, mattis erat ut, varius nisi. Sed nec eros vel nunc volutpat venenatis. Duis quis ex urna. Sed pretium porta lorem, at tempor leo pellentesque ut. Donec volutpat urna at consectetur rutrum.',
      },
      {
    title: 'Project Title 4',
    authors: ['Name 1', 'Name 2', 'Name 3', 'Name 4'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: '/images/project4.jpg',
  },
  {
    title: 'Project Title 5',
    authors: ['Name 1', 'Name 2', 'Name 3', 'Name 4'],
    description: 'In tempus sit amet lorem sed suscipit...',  
    imageUrl: '/images/project5.jpg',
  
  },
  // Repeat similar objects for projects 6 to 18
  {
    title: 'Project Title 19',
    authors: ['Name 1', 'Name 2', 'Name 3', 'Name 4'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: '/images/project19.jpg',
  },
  {
    title: 'Project Title 20',
    authors: ['Name 1', 'Name 2', 'Name 3', 'Name 4'],
    description: 'In tempus sit amet lorem sed suscipit...',
    imageUrl: '/images/project20.jpg',
  
  },
    ];

  const topProjects = allProjects.slice(0, 3);
  const otherProjects = allProjects.slice(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % otherProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + otherProjects.length) % otherProjects.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <NavBar showOnScroll={false} />
      <h2 className="text-3xl font-bold text-center mb-8 pt-20">Previous Projects From HackRPI X</h2>
      <div className="grid grid-cols-1 gap-8">
        {topProjects.map((project, index) => (
          <ProjectDisplay key={index} {...project} />
        ))}
      </div>
      <div className="flex justify-center items-center my-8">
        <Arrow direction="left" onClick={prevProject} />
        <ProjectDisplay {...otherProjects[currentIndex]} />
        <Arrow direction="right" onClick={nextProject} />
      </div>
      <Footer />
    </div>
  );
};

export default PastYearProjects;