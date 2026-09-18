import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Github, ExternalLink, Code2, Database, Brain, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenRenderGuide: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRenderGuide }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Online Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-teal-500/30 text-xs font-mono text-teal-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available for Software & Data Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-400">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                Advanced Software Engineer & Data Engineer
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Currently pursuing Master's Thesis at <strong className="text-slate-200">TH Deggendorf, Germany</strong>. I bridge full-stack software development (<strong className="text-teal-300">TypeScript, React, Next.js, Python</strong>) with advanced data engineering (<strong className="text-indigo-300">ETL Pipelines, LLM Workflows & Computer Vision</strong>).
            </p>

            {/* Quick Badges Grid */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-teal-400" /> Full-Stack Apps
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-emerald-400" /> Data Processing & ETL
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-indigo-400" /> AI / LLM / Computer Vision
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> Deggendorf, Germany
              </span>
            </div>

            {/* Action Buttons & Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-semibold text-sm hover:from-teal-400 hover:to-emerald-400 transition-all shadow-lg shadow-teal-500/25 hover:scale-105"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenRenderGuide}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card text-teal-300 hover:bg-slate-800 border border-teal-500/30 text-sm font-medium transition-all"
              >
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>Render Deployment Specs</span>
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-3 pl-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-teal-500/50 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-teal-500/50 transition-all"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Card / Interactive Profile Box */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800">
                {/* Header inside Card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-teal-400 font-bold text-xl">
                      HS
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{PERSONAL_INFO.name}</h3>
                      <p className="text-xs text-slate-400 font-mono">Deggendorf, Germany</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                    M.Sc Candidate
                  </span>
                </div>

                {/* Key Strengths Grid */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/30 transition-colors">
                    <div className="text-xs font-mono text-teal-400 mb-1">Master's Thesis</div>
                    <div className="text-sm font-semibold text-slate-200">TH Deggendorf (04/2026 – Present)</div>
                    <p className="text-xs text-slate-400 mt-1">Python software modules, ETL pipeline harmonization & database integration.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/30 transition-colors">
                    <div className="text-xs font-mono text-indigo-400 mb-1">Working Student Role</div>
                    <div className="text-sm font-semibold text-slate-200">TI4F GmbH, Regensburg (2024–2025)</div>
                    <p className="text-xs text-slate-400 mt-1">Full-stack React, Next.js, TypeScript & Python REST APIs.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/30 transition-colors">
                    <div className="text-xs font-mono text-emerald-400 mb-1">Render Cloud Ready</div>
                    <div className="text-sm font-semibold text-slate-200">professorrrr31@gmail.com</div>
                    <p className="text-xs text-slate-400 mt-1">Pre-configured `render.yaml` for instant online hosting.</p>
                  </div>
                </div>

                {/* Direct Contact Links */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono border-t border-slate-800/80">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal-400" /> English (C1) • German (B1/B2)
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
