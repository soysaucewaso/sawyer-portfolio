
import React from 'react';
import type { Project } from '../types';
import { Card } from './Card';
import { LinkIcon } from './icons/LinkIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <header>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-white">{project.name}</h3>
          {project.projectUrl !== '#' && (
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300 whitespace-nowrap">
                Devpost
                <LinkIcon className="w-4 h-4 ml-1.5" />
            </a>
          )}
        </div>
        <div className="flex items-center text-sm text-gray-400 mt-2 font-mono">
            <CalendarIcon className="w-3.5 h-3.5 mr-1.5" />
            {project.period}
        </div>
      </header>
      <ul className="mt-4 space-y-2 text-gray-300">
        {project.description.map((item, index) => (
          <li key={index} className="flex items-start">
            <ChevronRightIcon className="w-4 h-4 text-cyan-400/80 mt-1 mr-2 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
