import React, { useState } from 'react';
import { Rocket, CheckCircle2, Copy, ExternalLink, X, ShieldCheck, Mail, Sparkles, Globe, GitBranch } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RenderGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RenderGuideModal: React.FC<RenderGuideModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const renderSteps = [
    {
      step: "1",
      title: "Create a New GitHub Repository",
      desc: "Go to github.com/new and create a new public repository named 'himanshu-portfolio'."
    },
    {
      step: "2",
      title: "Push Code to GitHub",
      desc: "Run the terminal commands below to push your local code to your new GitHub repository."
    },
    {
      step: "3",
      title: "Create New Static Site on Render",
      desc: `Log in to dashboard.render.com with ${PERSONAL_INFO.renderAccountEmail}. Click 'New +' -> 'Static Site', and connect your new repository.`
    },
    {
      step: "4",
      title: "Enter Build & Publish Settings",
      desc: "Set Build Command to `npm run build` and Publish Directory to `./dist`. Click 'Create Static Site'!"
    }
  ];

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(`cd "/Users/mr./Library/Mrr../website/portfolio"\ngit remote add origin https://github.com/<your-username>/himanshu-portfolio.git\ngit branch -M main\ngit push -u origin main`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="glass-panel w-full max-w-2xl rounded-3xl p-6 sm:p-8 border border-teal-500/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-mono text-teal-300">
              <Globe className="w-3.5 h-3.5" />
              <span>Direct Render Hosting Setup</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Host Online on <span className="text-teal-400">Render</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Configured for account email: <strong className="text-teal-300">{PERSONAL_INFO.renderAccountEmail}</strong>
            </p>
          </div>

          {/* Steps List */}
          <div className="space-y-3">
            {renderSteps.map((s) => (
              <div key={s.step} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-7 h-7 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs flex items-center justify-center shrink-0">
                  {s.step}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{s.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Render Settings Summary Box */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-teal-500/30 space-y-2 text-xs">
            <div className="font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" /> Render Static Site Settings:
            </div>
            <div className="grid grid-cols-2 gap-2 text-slate-300 font-mono pt-1">
              <div>Build Command: <span className="text-teal-300">npm run build</span></div>
              <div>Publish Directory: <span className="text-emerald-300">./dist</span></div>
            </div>
          </div>

          {/* Quick Git Commands Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Push to New GitHub Repository</span>
              <button
                onClick={handleCopyCommand}
                className="text-teal-400 hover:underline flex items-center gap-1"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy Commands'}
              </button>
            </div>
            <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto">
<code>cd "/Users/mr./Library/Mrr../website/portfolio"
git remote add origin https://github.com/&lt;your-username&gt;/himanshu-portfolio.git
git branch -M main
git push -u origin main</code>
            </pre>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <a
              href="https://dashboard.render.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 font-bold text-xs hover:from-teal-400 hover:to-emerald-400 shadow-md shadow-teal-500/20"
            >
              <span>Open Render Dashboard</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
