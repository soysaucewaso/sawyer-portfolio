
import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MailIcon';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/soysaucewaso', // Placeholder
    icon: GithubIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sawyer-blankenship-a52862243', // Placeholder
    icon: LinkedinIcon
  },
  {
    name: 'Email',
    url: 'mailto:blankenshipsawyer1@gmail.com', // Placeholder
    icon: MailIcon
  }
];

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Sawyer Blankenship</h1>
        <p className="text-xl text-cyan-400 mt-1 font-mono">Backend Software Engineer</p>
      </div>
      <div className="flex items-center space-x-4">
        {socialLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <link.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </header>
  );
};
