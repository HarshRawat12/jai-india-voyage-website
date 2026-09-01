import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/destinations', label: 'Destinations' },
  { path: '/experiences', label: 'Experiences' },
  { path: '/about', label: 'About Us' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/blog', label: 'Blog' },
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

  // Keep the page behind the full-screen mobile drawer still, and always
  // restore scrolling if the component unmounts while the drawer is open.
  useEffect(() => {
    if (!isMobileOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMobileOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  return (
    <nav className={`navbar ${isScrolled || isMobileOpen ? 'navbar--solid' : 'navbar--transparent'} ${isMobileOpen ? 'navbar--menu-open' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setIsMobileOpen(false)}>
          <img src="/images/logo_white.webp" alt="Jai India Voyage" />
          <span className="navbar__brand">Jai India Voyage</span>
        </Link>

        {/* Desktop Links */}
        <div
          id="primary-navigation"
          className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}
        >
          {NAV_LINKS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`navbar__link ${location.pathname === path ? 'navbar__link--active' : ''}`}
              onClick={() => setIsMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="/brochures/Company-Profile-Jai-India-Voyage-2026.pdf"
            className="btn navbar__brochure"
            download
            onClick={() => setIsMobileOpen(false)}
          >
            <span aria-hidden="true">↓</span>
            Brochure
          </a>
          <Link
            to="/contact"
            className="btn btn--gold navbar__cta"
            onClick={() => setIsMobileOpen(false)}
          >
            Plan With Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle ${isMobileOpen ? 'active' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={isMobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
