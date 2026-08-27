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
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" required placeholder="Your name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-row">
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
                <div className="contact-panel">
                  <h3 className="contact-panel__heading">Contact Information</h3>

                  <div className="contact-panel__item">
                    <p className="contact-panel__label">Address</p>
                    <p className="contact-panel__value">
                      Jai India Voyage Pvt. Ltd.<br />
                      Sector 53, Gurugram<br />
                      Haryana 122002, India
                    </p>
                  </div>

                  <div className="contact-panel__item">
                    <p className="contact-panel__label">Phone</p>
                    <a href="tel:+919810082757" className="contact-panel__value">+91-98100 82757</a>
                  </div>

                  <div className="contact-panel__item">
                    <p className="contact-panel__label">Email</p>
                    <a href="mailto:ashish@jaiindiavoyage.com" className="contact-panel__value">ashish@jaiindiavoyage.com</a>
                  </div>

                  <div className="contact-panel__item">
                    <p className="contact-panel__label">WhatsApp</p>
                    <a
                      href="https://api.whatsapp.com/send?phone=919810082757"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-panel__value contact-panel__value--whatsapp"
                    >
                      Chat with us on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="contact-stats">
                  <h4 className="contact-stats__heading">Why Contact Us?</h4>
                  <div className="contact-stats__grid">
                    {[
                      { number: '24hr', label: 'Response Time' },
                      { number: '100%', label: 'Custom Tours' },
                      { number: '25+', label: 'Years Experience' },
                      { number: '5000+', label: 'Happy Travelers' },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="contact-stats__number">{stat.number}</p>
                        <p className="contact-stats__label">{stat.label}</p>
                      </div>
                    ))}
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
