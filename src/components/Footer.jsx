import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* About Column */}
          <div className="footer__about">
            <img src="/images/logo5.png" alt="Jai India Voyage" style={{ height: '50px', marginBottom: '0.5rem' }} />
            <p>
              Jai India Voyage Pvt. Ltd. is a specialist Destination Management Company crafting bespoke heritage, cultural, wildlife, and spiritual journeys across India and the sub-continent since 1999.
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
              <a href="https://api.whatsapp.com/send?phone=919810082757" target="_blank" rel="noopener noreferrer" className="footer__social-link" title="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
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
              <span className="footer__contact-icon">📍</span>
              <span>Jai India Voyage Pvt. Ltd.<br />Sector 53, Gurugram,<br />Haryana 122002, India</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <a href="tel:+919810082757">+91-98100 82757</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">✉️</span>
              <a href="mailto:ashish@jaiindiavoyage.com">ashish@jaiindiavoyage.com</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Jai India Voyage Pvt. Ltd. All rights reserved.</p>
          <div className="footer__accreditations">
            <img src="/images/IATO_Logo.jpeg" alt="IATO Member" title="Indian Association of Tour Operators" />
            <img src="/images/dot_logo.jpeg" alt="Department of Tourism" title="Approved by Dept. of Tourism, Govt. of India" />
          </div>
        </div>
      </div>
    </footer>
  );
}
