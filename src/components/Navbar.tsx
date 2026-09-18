import React, { useState, useEffect } from 'react';
import { Code2, Server, Download, Menu, X, Rocket, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenRenderGuide: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRenderGuide, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Demo Pipeline', href: '#demo' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel py-3 shadow-2xl shadow-teal-950/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-600 flex items-center justify-center text-slate-950 font-bold text-lg shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              HS
            </div>
            <div>
              <div className="font-bold text-slate-100 group-hover:text-teal-400 transition-colors tracking-tight flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
              </div>
              <div className="text-xs text-slate-400 font-mono">Software & Data Eng</div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenRenderGuide}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-slate-800 text-teal-300 hover:bg-slate-700 border border-teal-500/30 transition-all group"
            >
              <Rocket className="w-3.5 h-3.5 text-teal-400 group-hover:rotate-12 transition-transform" />
              <span>Deploy on Render</span>
              <span className="bg-teal-500/20 text-teal-300 text-[10px] px-1.5 py-0.5 rounded-full font-mono">Ready</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 hover:from-teal-400 hover:to-emerald-400 transition-all shadow-md shadow-teal-500/20 hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenRenderGuide}
              className="p-2 text-teal-400 bg-slate-900 border border-teal-500/30 rounded-lg"
              title="Render Deployment Info"
            >
              <Rocket className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-teal-400 hover:bg-slate-800/60 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRenderGuide();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-slate-800 text-teal-300 border border-teal-500/30"
            >
              <Rocket className="w-4 h-4" />
              Render Online Setup
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
