import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl">Mi Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:underline">
              Proyectos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
