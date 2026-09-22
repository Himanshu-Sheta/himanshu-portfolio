import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`site-nav ${scrolled ? 'site-nav-scrolled' : ''}`}>
      <div className="site-nav-inner">
        <a href="#hero" className="brand-mark" aria-label={`Go to ${PERSONAL_INFO.name}'s homepage`}>
          <span className="brand-avatar">HS</span>
          <span>{PERSONAL_INFO.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => <a key={link.name} href={link.href}>{link.name}</a>)}
        </nav>
        <div className="nav-actions">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="nav-outline">Open to opportunities</a>
          <button className="nav-solid" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>Let&apos;s talk</button>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle color theme">
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.name}</a>)}
        </nav>
      )}
    </header>
  );
};
