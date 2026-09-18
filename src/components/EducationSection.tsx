import React from 'react';
import { EDUCATION, LANGUAGES } from '../data/portfolioData';
import { GraduationCap, Languages, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Education Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-indigo-500/30 text-xs font-mono text-indigo-300">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Background</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">
                Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">Degrees</span>
              </h2>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 hover:border-teal-500/30 transition-all"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-sm font-semibold text-teal-400 mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="text-right text-xs font-mono text-slate-400 space-y-1">
                      <div className="flex items-center justify-end gap-1">
                        <Calendar className="w-3 h-3 text-teal-400" />
                        {edu.period}
                      </div>
                      <div className="flex items-center justify-end gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Focus Areas & Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.focus.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-teal-400" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Quick Summary Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-teal-500/30 text-xs font-mono text-teal-300">
                <Languages className="w-3.5 h-3.5" />
                <span>Languages</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">
                Language <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Proficiency</span>
              </h2>
            </div>

            <div className="space-y-4">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between hover:border-teal-500/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.icon}</span>
                    <div>
                      <h4 className="font-bold text-white text-base">{lang.name}</h4>
                      <p className="text-xs text-slate-400 font-mono">{lang.level}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-mono border border-teal-500/20">
                    Verified
                  </span>
                </div>
              ))}
            </div>

            {/* Resume Callout Box */}
            <div className="glass-panel p-6 rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-950/20 to-slate-900 space-y-3">
              <div className="flex items-center gap-2 text-teal-400 text-sm font-bold">
                <Award className="w-4 h-4" />
                <span>Ready for International Teams</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Based in Deggendorf, Germany. Fluent in English (C1) and proficient in German (B1/B2), with full work authorization for working student & full-time roles in Germany and Europe.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
