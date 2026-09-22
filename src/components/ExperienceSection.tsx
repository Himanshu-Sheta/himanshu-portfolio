import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, GraduationCap } from 'lucide-react';
import { Reveal } from './Reveal';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="experience-section py-20 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="heading-muted">Work Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Software engineering and data engineering experience in Germany and India across academic research, tech firms, and web agencies.
          </p>
        </Reveal>

        {/* Timeline Container */}
        <div className="experience-timeline max-w-4xl mx-auto space-y-8 relative">
          
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={exp.id} delay={0.08 * idx}>
            <div
              key={exp.id}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group gap-8`}
            >
              {/* Timeline Center Badge Node */}
              <div className="experience-node flex items-center justify-center w-9 h-9 rounded-full bg-slate-950 border-2 border-teal-400 text-teal-400 shadow-lg shadow-teal-500/30 shrink-0 z-10 absolute left-0 sm:left-1/2 -translate-x-1/2">
                {exp.type === 'Master Thesis' ? <GraduationCap className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
              </div>

              {/* Card Container */}
              <div className="experience-card w-[calc(100%-3rem)] sm:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl border border-slate-800 hover:border-teal-500/40 transition-all duration-300 space-y-4 ml-12 sm:ml-0">
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      {exp.type}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-teal-400" />
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors pt-1">
                    {exp.role}
                  </h3>
                  <div className="text-xs text-slate-300 font-medium flex items-center gap-2">
                    <span className="text-teal-300">{exp.company}</span>
                    <span>•</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
};
