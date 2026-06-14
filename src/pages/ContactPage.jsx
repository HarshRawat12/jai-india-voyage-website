import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FAQAccordion from '../components/FAQAccordion';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    travelers: '',
    dates: '',
    message: '',
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Tour Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\nTravelers: ${formData.travelers}\nPreferred Dates: ${formData.dates}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:ashish@jaiindiavoyage.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <HeroSection
        image="/images/header_contact.png"
        label="Get In Touch"
        title="Let's <em>Connect</em>"
        subtitle="Start a conversation about your dream Indian journey. We respond within 24 hours."
        short
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div>
                <h2 style={{ marginBottom: '0.5rem' }}>Plan Your Journey</h2>
                <p style={{ marginBottom: '2rem' }}>
                  Fill out the form below and our travel specialists will craft a personalized itinerary for you.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" required placeholder="Your name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input type="tel" id="phone" name="phone" placeholder="+1 234 567 8900" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="travelers">Number of Travelers</label>
                      <input type="text" id="travelers" name="travelers" placeholder="e.g., 2 adults, 1 child" value={formData.travelers} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="interest">Travel Interest</label>
                    <select id="interest" name="interest" value={formData.interest} onChange={handleChange}>
                      <option value="">Select your interest...</option>
                      <option value="Heritage & Culture">Heritage & Culture</option>
                      <option value="Rajasthan Royal Tour">Rajasthan Royal Tour</option>
                      <option value="Golden Triangle">Golden Triangle</option>
                      <option value="South India Temples">South India Temples</option>
                      <option value="Wildlife Safari">Wildlife Safari</option>
                      <option value="Kashmir & Ladakh">Kashmir & Ladakh</option>
                      <option value="Spiritual Journey">Spiritual Journey</option>
                      <option value="Northeast Tribal Tour">Northeast Tribal Tour</option>
                      <option value="Homestay Experience">Homestay Experience</option>
                      <option value="Custom Itinerary">Custom / Tailor-Made Itinerary</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dates">Preferred Travel Dates</label>
                    <input type="text" id="dates" name="dates" placeholder="e.g., October 2025, flexible" value={formData.dates} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" placeholder="Tell us about your dream trip — interests, must-see places, special occasions..." value={formData.message} onChange={handleChange} />
                  </div>

                  <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
                    Send Inquiry →
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info Sidebar */}
            <ScrollReveal direction="right">
              <div>
                <div style={{
                  background: 'var(--color-primary-dark)',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: '2rem',
                  color: 'white',
                  marginBottom: '1.5rem',
                }}>
                  <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
                    Contact Information
                  </h3>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Address</p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      Jai India Voyage Pvt. Ltd.<br />
                      Sector 53, Gurugram<br />
                      Haryana 122002, India
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Phone</p>
                    <a href="tel:+919810082757" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem' }}>+91-98100 82757</a>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Email</p>
                    <a href="mailto:ashish@jaiindiavoyage.com" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>ashish@jaiindiavoyage.com</a>
                  </div>

                  <div>
                    <p style={{ color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>WhatsApp</p>
                    <a
                      href="https://api.whatsapp.com/send?phone=919810082757"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#25D366', fontSize: '0.95rem', fontWeight: '600' }}
                    >
                      Chat with us on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Quick Stats */}
                <div style={{
                  background: '#F2EDE4',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: '2rem',
                  textAlign: 'center',
                }}>
                  <h4 style={{ marginBottom: '1rem' }}>Why Contact Us?</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: '800', color: 'var(--color-secondary-dark)', lineHeight: '1' }}>24hr</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Response Time</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: '800', color: 'var(--color-secondary-dark)', lineHeight: '1' }}>100%</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Custom Tours</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: '800', color: 'var(--color-secondary-dark)', lineHeight: '1' }}>25+</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Years Experience</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: '800', color: 'var(--color-secondary-dark)', lineHeight: '1' }}>5000+</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Happy Travelers</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section section--cream">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Common Questions</p>
              <h2>Frequently Asked Questions</h2>
              <p className="section-subtitle">Everything you need to know about planning your Indian journey</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
