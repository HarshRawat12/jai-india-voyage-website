import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/destinations', label: 'Destinations' },
  { path: '/experiences', label: 'Experiences' },
  { path: '/about', label: 'About Us' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--solid' : 'navbar--transparent'}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img src="/images/logo5.png" alt="Jai India Voyage" />
          <div className="navbar__logo-text">
            <span className="navbar__brand">Jai India Voyage</span>
            <span className="navbar__tagline">Destination Management Company</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`navbar__link ${location.pathname === path ? 'navbar__link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn--gold navbar__cta" style={{ display: isMobileOpen ? 'inline-flex' : undefined }}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle ${isMobileOpen ? 'active' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
