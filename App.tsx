
import React from 'react';
import { WORK_EXPERIENCE, PROJECTS, EDUCATION, CERTIFICATIONS, ABOUT_ME } from './constants';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';
import { EducationCard } from './components/EducationCard';
import { CertificationCard } from './components/CertificationCard';
import { BriefcaseIcon } from './components/icons/BriefcaseIcon';
import { CodeIcon } from './components/icons/CodeIcon';
import { GraduationCapIcon } from './components/icons/GraduationCapIcon';
import { CertificateIcon } from './components/icons/CertificateIcon';

const App: React.FC = () => {
  const gridBackground = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%231d3d66'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")";

  return (
    <div style={{ backgroundImage: gridBackground }} className="min-h-screen">
      <main className="container mx-auto max-w-4xl px-4 md:px-8 py-12 md:py-20">
        <Header />
        
        <div className="space-y-16 mt-16">
          <section id="about">
            <p className="text-lg text-gray-300 leading-relaxed border-l-4 border-cyan-400 pl-4">
              {ABOUT_ME}
            </p>
          </section>

          <Section title="Work Experience" icon={<BriefcaseIcon className="w-6 h-6" />}>
            <div className="space-y-8">
              {WORK_EXPERIENCE.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </Section>

          <Section title="Projects" icon={<CodeIcon className="w-6 h-6" />}>
            <div className="space-y-8">
              {PROJECTS.map((proj, index) => (
                <ProjectCard key={index} project={proj} />
              ))}
            </div>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Section title="Education" icon={<GraduationCapIcon className="w-6 h-6" />}>
                <EducationCard education={EDUCATION} />
            </Section>

            <Section title="Certifications" icon={<CertificateIcon className="w-6 h-6" />}>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, index) => (
                  <CertificationCard key={index} certification={cert} />
                ))}
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
