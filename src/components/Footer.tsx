import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Copy, CheckCircle2, Heart, Rocket } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenRenderGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRenderGuide }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer id="contact" className="py-16 relative border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-teal-500/30 text-center max-w-4xl mx-auto mb-16 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Work Together
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Available for Advanced Software Engineering, Full-Stack, and Data Analytics/ETL roles in Germany or remote across Europe.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold text-sm hover:from-teal-400 hover:to-emerald-400 transition-all shadow-lg shadow-teal-500/25 hover:scale-105"
            >
              {copiedEmail ? <CheckCircle2 className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
              <span>{copiedEmail ? 'Email Copied!' : PERSONAL_INFO.email}</span>
              <Copy className="w-3.5 h-3.5 opacity-70" />
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-card text-white hover:border-teal-500/50 font-semibold text-sm transition-all"
            >
              <Linkedin className="w-4 h-4 text-teal-400" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-900 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name} • Deggendorf, Germany
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenRenderGuide}
              className="text-teal-400 hover:underline flex items-center gap-1"
            >
              <Rocket className="w-3.5 h-3.5" />
              Render Email: {PERSONAL_INFO.renderAccountEmail}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
