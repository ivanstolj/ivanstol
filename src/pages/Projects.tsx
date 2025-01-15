import React from 'react';

const Projects: React.FC = () => {
  return (
    <main className="p-4">
      <h2 className="text-2xl">Mis Proyectos</h2>
      <ul className="list-disc list-inside">
        <li>
          <strong>Proyecto 1:</strong> Descripción breve de tu proyecto.
        </li>
        <li>
          <strong>Proyecto 2:</strong> Descripción breve de tu proyecto.
        </li>
        <li>
          <strong>Proyecto 3:</strong> Descripción breve de tu proyecto.
        </li>
      </ul>
    </main>
  );
};

export default Projects;
