import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  const roles = ['Software developer', 'Data engineer', 'Product-minded builder'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="editorial-hero">
      <div className="hero-grid">
        <motion.div className="portrait-wrap" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="portrait-card">
            {!photoFailed ? (
              <img
                src="/profile-photo.jpg"
                alt={`${PERSONAL_INFO.name} portrait`}
                className="portrait-image"
                onError={() => setPhotoFailed(true)}
              />
            ) : <div className="portrait-initials">HS</div>}
            <div className="portrait-overlay" />
            <span className="portrait-caption">Software + data</span>
          </div>
          <div className="portrait-note"><MapPin size={13} /> Deggendorf, Germany</div>
        </motion.div>
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}>
          <p className="eyebrow">{roles[roleIndex]} <span className="eyebrow-dot" /></p>
          <h1>I build products<br />people can rely on.</h1>
          <p className="hero-summary">I&apos;m {PERSONAL_INFO.name}, a software developer who turns complex requirements and data into accessible, scalable web experiences with React, Next.js, Python, and modern APIs.</p>
          <div className="hero-actions">
            <button className="button-dark" onClick={onOpenCvModal}><Download size={15} /> Download CV</button>
            <a className="button-light" href={`mailto:${PERSONAL_INFO.email}`}><Mail size={15} /> Let&apos;s connect</a>
          </div>
          <div className="hero-links">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
            <a href="#experience">See my experience <ArrowDownRight size={13} /></a>
          </div>
        </motion.div>
      </div>
      <div className="hero-scroll-line" aria-hidden="true" />
    </section>
  );
};
