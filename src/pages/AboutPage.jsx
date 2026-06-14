import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';

const TIMELINE = [
  { year: '1970s', title: 'The Beginning', desc: 'Raj Mittal, a visionary travel pioneer, starts organizing tours in Rajasthan, laying the foundation for a family legacy in Indian tourism.' },
  { year: '1999', title: 'Jai India Voyage is Born', desc: 'Ashish Mittal, inspired by his father\'s passion, formally establishes Jai India Voyage Pvt. Ltd. in Gurugram, Haryana — combining modern professionalism with old-world hospitality.' },
  { year: '2005', title: 'International Recognition', desc: 'The company earns Government of India (Department of Tourism) approval and IATO membership, opening doors to the global travel industry.' },
  { year: '2010', title: 'Expanding Horizons', desc: 'Introduction of tribal tours, wildlife safaris, and Northeast India expeditions. Strong partnerships forged with European and North American travel agencies.' },
  { year: '2015', title: 'Responsible Tourism', desc: 'Launch of CSR initiatives — women empowerment programs, clean water projects, artisan support, and community-based tourism in rural Rajasthan.' },
  { year: '2020–Present', title: 'A New Era', desc: 'Embracing digital transformation while maintaining the personal touch. Over 5000 travelers served across 30+ nationalities. The legacy continues.' },
];

const CSR_INITIATIVES = [
  { title: 'Women Empowerment', desc: 'Training women in rural communities as local guides, artisans, and homestay hosts — creating sustainable livelihoods.', image: '/images/Empowering_Women.jpg' },
  { title: 'Clean Water Initiative', desc: 'Partnering with NGOs to provide clean drinking water access in remote villages of Rajasthan.', image: '/images/Clean_Water_Initiative.jpg' },
  { title: 'Artisan Support', desc: 'Connecting traditional craftspeople directly with tourists, ensuring fair trade and preserving centuries-old art forms.', image: '/images/Crafting_Livelihood.jpg' },
  { title: 'Hygiene & Education', desc: 'Distributing hygiene kits and supporting education programs in underserved communities we visit.', image: '/images/Hygiene_Empowerment.jpg' },
];

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <HeroSection
        image="/images/header_about.png"
        label="Our Story"
        title="A Legacy of <em>Passion</em>"
        subtitle="Three generations of love for India, its people, and its timeless heritage."
        short
      />

      {/* ─── OUR STORY ─── */}
      <section className="section">
        <div className="container container--narrow">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">About Us</p>
              <h2>The Jai India Voyage Story</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ fontSize: '1.05rem', lineHeight: '2', textAlign: 'center', marginBottom: '2rem' }}>
              Jai India Voyage was born from a deep-rooted love for India — a love that spans generations. 
              It all began in the 1970s when <strong>Raj Mittal</strong> started guiding travelers through the royal heartlands of Rajasthan, 
              sharing not just monuments but the living soul of Indian culture.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '2', textAlign: 'center' }}>
              His son, <strong>Ashish Mittal</strong>, transformed that passion into a modern Destination Management Company in 1999. 
              Today, we don't just plan tours — we craft deeply personal experiences. From private dinners in 400-year-old palaces 
              to intimate evenings with tribal communities, every journey we design is a window into the real India.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="section section--cream">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Our Journey</p>
              <h2>Milestones</h2>
            </div>
          </ScrollReveal>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <ScrollReveal key={i} direction="left">
                <div className="timeline__item">
                  <span className="timeline__year">{item.year}</span>
                  <div className="timeline__content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Our People</p>
              <h2>Meet the Team</h2>
              <p className="section-subtitle">
                The passionate individuals behind every unforgettable journey
              </p>
            </div>
          </ScrollReveal>

          <div className="team-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ScrollReveal direction="left">
              <div className="team-card">
                <img className="team-card__photo" src="/images/Jiv_5.jpg" alt="Ashish Mittal" />
                <h3 className="team-card__name">Ashish Mittal</h3>
                <p className="team-card__role">Founder & Managing Director</p>
                <p className="team-card__bio">
                  With over 25 years of experience in the Indian tourism industry, Ashish carries forward a family tradition 
                  of warmth, expertise, and genuine care for every traveler. A passionate storyteller and cultural ambassador, 
                  he personally oversees the design of every bespoke itinerary.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="team-card">
                <img className="team-card__photo" src="/images/client2.jpg" alt="Raj Mittal" />
                <h3 className="team-card__name">Raj Mittal</h3>
                <p className="team-card__role">Founder & Mentor</p>
                <p className="team-card__bio">
                  The original pioneer who started it all in the 1970s. Raj's deep connections with royal families, 
                  village communities, and heritage properties across Rajasthan form the backbone of Jai India Voyage's 
                  unmatched access and authenticity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── CSR / RESPONSIBLE TOURISM ─── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Giving Back</p>
              <h2>Responsible Tourism</h2>
              <p className="section-subtitle">
                We believe travel should uplift communities, preserve cultures, and protect our planet.
              </p>
            </div>
          </ScrollReveal>

          <div className="csr-grid">
            {CSR_INITIATIVES.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="feature-card" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto var(--space-lg)' }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ color: 'var(--color-secondary)' }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
