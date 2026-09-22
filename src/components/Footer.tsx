import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="site-footer py-4 relative border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Information */}
        <Reveal className="contact-intro text-center space-y-3">
          <h2 className="contact-heading text-3xl sm:text-4xl font-extrabold text-white">
            Let&apos;s build something useful.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Open to software development opportunities, working student roles, and thoughtful collaborations.
          </p>
        </Reveal>

        <Reveal className="contact-layout max-w-4xl mx-auto mt-4 mb-4" delay={0.12}>
          <div className="contact-info-card glass-panel p-4 sm:p-5 space-y-3">
            <div>
              <h3 className="text-base font-bold text-white">Contact Information</h3>
              <p className="text-sm text-slate-400 mt-1">Feel free to reach out to me.</p>
            </div>
            <div className="contact-details space-y-4">
              <div className="contact-detail"><MapPin size={18} /><div><strong>Location</strong><span>{PERSONAL_INFO.location}</span></div></div>
              <a className="contact-detail" href={`mailto:${PERSONAL_INFO.email}`}><Mail size={18} /><div><strong>Email</strong><span>{PERSONAL_INFO.email}</span></div></a>
              <a className="contact-detail" href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><div><strong>LinkedIn</strong><span>linkedin.com/in/himanshu-sheta</span></div></a>
            </div>
          </div>
        </Reveal>

        {/* Footer Bottom Bar */}
        <div className="footer-divider" aria-hidden="true" />
        <div className="site-footer-bottom flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 text-xs text-slate-400 font-mono">
          <div className="footer-socials flex items-center gap-4">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="footer-social-link"><Linkedin size={16} /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email" title="Email" className="footer-social-link"><Mail size={16} /></a>
          </div>

          <div className="hidden sm:block">
            © {new Date().getFullYear()} {PERSONAL_INFO.name} • Deggendorf, Germany
          </div>

        </div>

      </div>
    </footer>
  );
};
