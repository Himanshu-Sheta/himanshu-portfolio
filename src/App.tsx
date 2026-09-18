import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { DataPipelineDemo } from './components/DataPipelineDemo';
import { Footer } from './components/Footer';
import { RenderGuideModal } from './components/RenderGuideModal';

export function App() {
  const [renderGuideOpen, setRenderGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* Top Glass Navbar */}
      <Navbar
        onOpenRenderGuide={() => setRenderGuideOpen(true)}
        activeSection="hero"
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenRenderGuide={() => setRenderGuideOpen(true)} />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <DataPipelineDemo />
        <EducationSection />
      </main>

      {/* Footer */}
      <Footer onOpenRenderGuide={() => setRenderGuideOpen(true)} />

      {/* Render Guide Modal */}
      <RenderGuideModal
        isOpen={renderGuideOpen}
        onClose={() => setRenderGuideOpen(false)}
      />
    </div>
  );
}

export default App;
