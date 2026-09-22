'use client';

import { useState } from 'react';
import { Navbar } from '../src/components/Navbar';
import { HeroSection } from '../src/components/HeroSection';
import { SkillsSection } from '../src/components/SkillsSection';
import { ProjectsSection } from '../src/components/ProjectsSection';
import { ExperienceSection } from '../src/components/ExperienceSection';
import { EducationSection } from '../src/components/EducationSection';
import { Footer } from '../src/components/Footer';
import { CvModal } from '../src/components/CvModal';

export default function HomePage() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      <Navbar
        activeSection="hero"
      />
      <main>
        <HeroSection
          onOpenCvModal={() => setCvModalOpen(true)}
        />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}