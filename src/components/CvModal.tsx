import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Briefcase, Award, Sparkles, MapPin, Mail, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, EDUCATION, SKILL_CATEGORIES } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="glass-panel w-full max-w-4xl rounded-3xl p-6 sm:p-10 border border-teal-500/40 shadow-2xl relative max-h-[92vh] overflow-y-auto space-y-8 bg-slate-950">
        
        {/* Close & Actions Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white">{PERSONAL_INFO.name} — Curriculum Vitae</h2>
              <p className="text-xs text-slate-400 font-mono">Advanced Software Engineer & Data Engineer • Deggendorf, Germany</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400 transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="space-y-8 text-slate-200 text-sm">
          
          {/* Contact Header Block */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-teal-400 font-medium">{PERSONAL_INFO.title}</p>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> {PERSONAL_INFO.location}
              </p>
            </div>
            <div className="space-y-1 text-xs font-mono text-slate-300 md:text-right">
              <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-teal-400 hover:underline">{PERSONAL_INFO.email}</a></div>
              <div>Phone: <span className="text-slate-300">{PERSONAL_INFO.phone}</span></div>
              <div>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">linkedin.com/in/himanshu-sheta</a></div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-teal-300 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
              <Briefcase className="w-4 h-4" /> Professional Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-bold text-white text-base">{exp.role}</span>
                    <span className="text-xs font-mono text-teal-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {exp.company}, {exp.location}
                  </div>
                  <ul className="space-y-1.5 pt-1 pl-4 list-disc text-xs text-slate-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{edu.degree}</span>
                    <span className="text-xs font-mono text-indigo-400">{edu.period}</span>
                  </div>
                  <div className="text-xs text-slate-400">{edu.institution}, {edu.location}</div>
                  <div className="text-xs text-slate-400">Focus Areas: {edu.focus.join(' • ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
              <Sparkles className="w-4 h-4" /> Selected Projects
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-xs font-mono text-emerald-400">{proj.period}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">Tech: {proj.techStack.join(', ')}</div>
                  <ul className="space-y-1 pl-4 list-disc text-xs text-slate-300 pt-1">
                    {proj.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
