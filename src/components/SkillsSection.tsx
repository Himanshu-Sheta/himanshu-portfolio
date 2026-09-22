import React from 'react';
import { Code2, BrainCircuit, Database, Workflow, Users, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-teal-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-amber-400" />;
      case 'Users': return <Users className="w-5 h-5 text-slate-300" />;
      default: return <Sparkles className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="skills-section py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="skills-header max-w-4xl mx-auto mb-12 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-teal-500/30 text-xs font-mono text-teal-300">
            <Code2 className="w-3.5 h-3.5" />
            <span>My Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills for the full product lifecycle
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A practical toolkit spanning software engineering, modern web applications, data, machine learning, and collaborative delivery.
          </p>
        </Reveal>

        {/* Skills Cards Grid */}
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((cat) => (
            <Reveal key={cat.title} delay={0.08 * SKILL_CATEGORIES.indexOf(cat)}>
            <div
              key={cat.title}
              className="skills-card glass-panel p-5 rounded-2xl border border-slate-800 space-y-5 hover:border-teal-500/30 transition-all"
            >
              {/* Category Title Header */}
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">{cat.title}</h3>
                  </div>
                </div>
              </div>

              {/* Inline toolkit chips */}
              <div className="skill-chip-list flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill.name} className="skill-chip">{skill.name}</span>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
