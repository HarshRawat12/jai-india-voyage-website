import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* About Column */}
          <div className="footer__about">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <div style={{ background: '#ffffff', padding: '6px 12px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                <img src="/images/ministry_of_tourism.png" alt="Ministry of Tourism, Govt of India" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              </div>
              <div style={{ background: '#ffffff', padding: '6px 10px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                <img src="/images/iato_member.png" alt="IATO Allied Member" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
              </div>
            </div>
            <p>
              Jai India Voyage Pvt. Ltd. is a specialist Destination Management Company crafting bespoke heritage, cultural, wildlife, and spiritual journeys across India and the sub-continent, established in 2022 and led by travel professionals with decades of experience.
            </p>
            <div className="footer__social">
              <a href="https://www.facebook.com/JaiIndiaVoyage" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/jai_india_voyage/" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCRNGStP6WvnDNIhpOIWvzSQ" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer__heading">Explore</h4>
            <ul className="footer__links">
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/experiences">Experiences</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="footer__heading">Popular Tours</h4>
            <ul className="footer__links">
              <li><Link to="/destinations">Golden Triangle</Link></li>
              <li><Link to="/destinations">Royal Rajasthan</Link></li>
              <li><Link to="/destinations">South India Temple</Link></li>
              <li><Link to="/destinations">Kashmir & Ladakh</Link></li>
              <li><Link to="/destinations">Wildlife Safari</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer__heading">Get In Touch</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <a href="tel:+919810082757" style={{ color: 'inherit', textDecoration: 'none' }}>+91-98100 82757</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">✉️</span>
              <a href="mailto:ashish@jaiindiavoyage.com" style={{ color: 'inherit', textDecoration: 'none' }}>ashish@jaiindiavoyage.com</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <a 
                href="https://maps.google.com/?q=Jai+India+Voyage+Pvt+Ltd+Sector+53+Gurugram+Haryana+122002" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none', lineHeight: '1.6' }}
              >
                Jai India Voyage Pvt. Ltd.<br />Sector 53, Gurugram,<br />Haryana 122002, India
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Jai India Voyage Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
