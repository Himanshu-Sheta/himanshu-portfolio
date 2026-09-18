'use client';

import { useState } from 'react';
import { Navbar } from '../src/components/Navbar';
import { HeroSection } from '../src/components/HeroSection';
import { SkillsSection } from '../src/components/SkillsSection';
import { ProjectsSection } from '../src/components/ProjectsSection';
import { ExperienceSection } from '../src/components/ExperienceSection';
import { EducationSection } from '../src/components/EducationSection';
import { DataPipelineDemo } from '../src/components/DataPipelineDemo';
import { Footer } from '../src/components/Footer';
import { RenderGuideModal } from '../src/components/RenderGuideModal';
import { CvModal } from '../src/components/CvModal';

export default function HomePage() {
  const [renderGuideOpen, setRenderGuideOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      <Navbar
        onOpenRenderGuide={() => setRenderGuideOpen(true)}
        activeSection="hero"
      />
      <main>
        <HeroSection
          onOpenRenderGuide={() => setRenderGuideOpen(true)}
          onOpenCvModal={() => setCvModalOpen(true)}
        />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <DataPipelineDemo />
        <EducationSection />
      </main>
      <Footer onOpenRenderGuide={() => setRenderGuideOpen(true)} />
      <RenderGuideModal
        isOpen={renderGuideOpen}
        onClose={() => setRenderGuideOpen(false)}
      />
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}