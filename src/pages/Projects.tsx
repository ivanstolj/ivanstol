import React from 'react';
import { projectsData } from '../data/projectData';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <main className="p-4">
      <h2 className="text-2xl font-bold mb-6">Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
            delay={index * 0.2}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
