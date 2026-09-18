import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Linkedin, Github, ExternalLink, Code2, Database, Brain, Sparkles, ArrowRight, ShieldCheck, Terminal, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenRenderGuide: () => void;
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRenderGuide, onOpenCvModal }) => {
  const titles = [
    "Advanced Software Engineer",
    "Data Engineer & ETL Architect",
    "Full-Stack Developer (React & Python)",
    "AI & Computer Vision Engineer"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Main Info */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-teal-500/40 text-xs font-mono text-teal-300 shadow-lg shadow-teal-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Software & Data Engineering Roles</span>
            </div>

            {/* Headline with Typing Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400">{PERSONAL_INFO.name}</span>
              </h1>
              
              <div className="h-10 sm:h-12 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTitleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="text-xl sm:text-2xl font-bold font-mono text-teal-400 flex items-center gap-2"
                  >
                    <Terminal className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span>{titles[currentTitleIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Summary Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Master's candidate at <strong className="text-white font-semibold">TH Deggendorf, Germany</strong>. Specializing in high-performance web applications (<strong className="text-teal-300">TypeScript, React, Next.js</strong>), scalable data processing pipelines (<strong className="text-emerald-300">Python ETL, SQL</strong>), and machine learning applications (<strong className="text-indigo-300">LLMs, Computer Vision</strong>).
            </p>

            {/* Quick Badges Row */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-2 shadow-sm">
                <Code2 className="w-4 h-4 text-teal-400" /> Full-Stack Apps
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-2 shadow-sm">
                <Database className="w-4 h-4 text-emerald-400" /> Automated ETL Pipelines
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-2 shadow-sm">
                <Brain className="w-4 h-4 text-indigo-400" /> LLMs & Computer Vision
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-2 shadow-sm">
                <MapPin className="w-4 h-4 text-amber-400" /> Deggendorf, Germany
              </span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold text-sm hover:from-teal-400 hover:to-emerald-400 transition-all shadow-xl shadow-teal-500/20 hover:scale-105"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl glass-card text-white hover:bg-slate-800 border border-teal-500/30 text-sm font-semibold transition-all hover:scale-105"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>View Full CV</span>
              </button>

              <button
                onClick={onOpenRenderGuide}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl glass-card text-teal-300 hover:bg-slate-800 border border-indigo-500/30 text-sm font-semibold transition-all"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Render Specs</span>
              </button>
            </div>
          </div>

          {/* Right Interactive Code Box Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Vibrant Glow Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-emerald-400 to-indigo-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>

              <div className="relative glass-panel rounded-3xl p-6 border border-slate-800 space-y-4 shadow-2xl bg-slate-950/90">
                {/* Header bar of Code Box */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span className="text-xs font-mono text-slate-400 ml-2">himanshu_profile.py</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    STATUS: READY
                  </span>
                </div>

                {/* Code Snippet Display */}
                <pre className="text-xs font-mono leading-relaxed text-slate-300 overflow-x-auto p-3 rounded-xl bg-slate-900/80 border border-slate-800">
<code><span className="text-purple-400">class</span> <span className="text-teal-300 font-bold">HimanshuSheta</span>:
    <span className="text-purple-400">def</span> <span className="text-indigo-300">__init__</span>(self):
        self.location = <span className="text-emerald-300">"Deggendorf, Germany"</span>
        self.degree = <span className="text-emerald-300">"M.Sc Applied CS"</span>
        self.roles = [<span className="text-teal-300">"Software Dev"</span>, <span className="text-indigo-300">"Data Eng"</span>]
        self.languages = [<span className="text-emerald-300">"English C1"</span>, <span className="text-emerald-300">"German B1/B2"</span>]

    <span className="text-purple-400">def</span> <span className="text-indigo-300">get_core_stack</span>(self):
        <span className="text-purple-400">return</span> &#123;
            <span className="text-teal-300">"frontend"</span>: [<span className="text-emerald-300">"TypeScript"</span>, <span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Next.js"</span>],
            <span className="text-teal-300">"backend"</span>: [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"REST APIs"</span>, <span className="text-emerald-300">"PHP"</span>, <span className="text-emerald-300">"SQL"</span>],
            <span className="text-teal-300">"data_ai"</span>: [<span className="text-emerald-300">"ETL Pipelines"</span>, <span className="text-emerald-300">"LLMs"</span>, <span className="text-emerald-300">"OpenCV"</span>]
        &#125;</code>
                </pre>

                {/* Stat Counters Row */}
                <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-lg font-bold text-teal-400">3+</div>
                    <div className="text-[10px] text-slate-400 font-mono">Full-Stack Roles</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-lg font-bold text-emerald-400">Master</div>
                    <div className="text-[10px] text-slate-400 font-mono">Thesis TH Deggendorf</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-lg font-bold text-indigo-400">100%</div>
                    <div className="text-[10px] text-slate-400 font-mono">Render Online Ready</div>
                  </div>
                </div>

                {/* Social Quick Links */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-slate-400 hover:text-teal-400 flex items-center gap-1.5 transition-colors font-mono"
                  >
                    <Linkedin className="w-4 h-4 text-teal-400" /> linkedin/himanshu-sheta
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs text-slate-400 hover:text-teal-400 flex items-center gap-1.5 transition-colors font-mono"
                  >
                    <Mail className="w-4 h-4 text-indigo-400" /> Email Me
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
