import Title from './Title';

import img1 from '../assets/1.png';
import img2 from '../assets/3.png';
import img3 from '../assets/2.png';
import { Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Orange Digital Center',
    description: 'Application de gestion interne pour ODC avec tableau de bord, statistiques et gestion des utilisateurs.',
    technologies: ['JavaScript' , 'CSS', 'HTML'],
    demoLink: '#',
    reposLink: 'https://github.com/Seraphin15/ODC-madagascar',
    image: img1,
  },
  {
    id: 2,
    title: 'Gestion des Employés',
    description: 'Système de gestion RH avec Java pour gérer employés, salaires et congés.',
    technologies: ['Java'],
    demoLink: '#',
    reposLink: 'https://github.com/Seraphin15/Centre-Fiscal',
    image: img2,
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'Mon portfolio personnel en React & Vite, mettant en valeur mes projets et compétences.',
    technologies: ['React', 'Vite'],
    demoLink: '#',
    reposLink: 'https://github.com/Seraphin15/Portfolio-Seraphin',
    image: img3,
  }
];

const Projects = () => {
  return (

    <section id ="projects" className="mt-16 px-4 md:px-10">
      <Title title="Mes Projets" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-base-200 rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl overflow-hidden"
          >
            {/* Image avec effet hover */}
            <div className="relative group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
              {/* Effet glow ring amin'ny hover */}
              <div className="absolute inset-0 group-hover:ring-4 group-hover:ring-accent/30 rounded-xl transition-all duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2 text-primary">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="badge badge-outline badge-accent text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="mt-5 flex justify-end">
                <a
                  href={project.reposLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline btn-accent flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
