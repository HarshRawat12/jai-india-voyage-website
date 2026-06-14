import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import TrustBar from '../components/TrustBar';
import ScrollReveal from '../components/ScrollReveal';

const FEATURED_DESTINATIONS = [
  {
    name: 'Royal Rajasthan',
    region: 'North India',
    duration: '10–14 Days',
    image: '/images/royal_rajasthan.png',
    desc: 'Majestic forts, opulent palaces, vibrant bazaars, and the golden sands of the Thar Desert.',
  },
  {
    name: 'Golden Triangle',
    region: 'Classic India',
    duration: '5–7 Days',
    image: '/images/golden_triangle.png',
    desc: 'Delhi, Agra & Jaipur — the iconic introduction to India\'s timeless heritage.',
  },
  {
    name: 'South India Temples',
    region: 'South India',
    duration: '10–12 Days',
    image: '/images/south_india_temples.png',
    desc: 'Ancient Dravidian temples, lush backwaters, spice plantations, and serene beaches.',
  },
  {
    name: 'Kashmir & Ladakh',
    region: 'Himalayan India',
    duration: '8–12 Days',
    image: '/images/kashmir_ladakh.png',
    desc: 'Paradise on Earth — snow-capped peaks, pristine lakes, and Buddhist monasteries.',
  },
  {
    name: 'Wildlife Safari',
    region: 'Central India',
    duration: '7–10 Days',
    image: '/images/wildlife_safari.png',
    desc: 'Track Bengal tigers, leopards, and exotic birds in India\'s legendary national parks.',
  },
  {
    name: 'Northeast Explorer',
    region: 'Northeast India',
    duration: '10–14 Days',
    image: '/images/northeast_explorer.png',
    desc: 'Uncharted tribal territories, living root bridges, and pristine Himalayan landscapes.',
  },
];

const FEATURES = [
  {
    icon: '🏛️',
    title: 'Heritage Expertise',
    desc: 'Over 25 years of deep knowledge in Indian heritage, culture, and hidden gems that most travelers never discover.',
  },
  {
    icon: '✨',
    title: '100% Bespoke Tours',
    desc: 'Every journey is custom-designed around your interests, pace, and preferences. No cookie-cutter packages.',
  },
  {
    icon: '🤝',
    title: 'On-Ground Support',
    desc: '24/7 personal assistance with our own fleet, vetted guides, and direct relationships with heritage properties.',
  },
  {
    icon: '🌿',
    title: 'Responsible Travel',
    desc: 'We give back through community tourism, artisan support, women empowerment, and eco-conscious practices.',
  },
  {
    icon: '🌍',
    title: 'Global Trust',
    desc: 'Approved by Govt. of India, IATO member, and trusted by travelers from 30+ countries worldwide.',
  },
  {
    icon: '🏡',
    title: 'Authentic Homestays',
    desc: 'Experience real Indian hospitality with our curated homestay program — dine, cook, and celebrate with local families.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <HeroSection
        image="/images/Slider2.jpg"
        video="/videos/hero_montage.webm"
        label="Since 1999 · Gurugram, India"
        title="Discover the <em>Soul of India</em>"
        subtitle="Bespoke heritage, cultural, and spiritual journeys crafted by specialists who call India home."
        primaryBtn={
          <Link to="/destinations" className="btn btn--primary">
            Explore Destinations
          </Link>
        }
        secondaryBtn={
          <Link to="/contact" className="btn btn--secondary">
            Plan Your Journey
          </Link>
        }
      />

      {/* ─── INTRO ─── */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <p className="section-label">Welcome to Jai India Voyage</p>
            <h2>Your Gateway to Extraordinary India</h2>
            <div className="gold-divider">
              <span className="gold-divider-icon">🪷</span>
            </div>
            <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.9' }}>
              We are a specialist Destination Management Company that goes beyond ordinary tourism. 
              Founded by <strong>Ashish Mittal</strong>, carrying forward a legacy started by his father <strong>Raj Mittal</strong> in the 1970s, 
              we craft deeply personal journeys through India's royal palaces, sacred temples, tribal heartlands, 
              and untouched wilderness — revealing the India that guidebooks can't capture.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FEATURED DESTINATIONS ─── */}
      <section className="section section--cream">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Curated Journeys</p>
              <h2>Featured Destinations</h2>
              <p className="section-subtitle">
                Handpicked experiences across the diverse landscapes of India
              </p>
            </div>
          </ScrollReveal>

          <div className="destinations-grid">
            {FEATURED_DESTINATIONS.map((dest, i) => (
              <ScrollReveal key={i}>
                <Link to="/destinations" style={{ textDecoration: 'none' }}>
                  <div className="dest-card">
                    <img className="dest-card__img" src={dest.image} alt={dest.name} loading="lazy" />
                    <div className="dest-card__overlay">
                      <span className="dest-card__region">{dest.region}</span>
                      <h3 className="dest-card__name">{dest.name}</h3>
                      <div className="dest-card__meta">
                        <span>🕐 {dest.duration}</span>
                      </div>
                      <p className="dest-card__desc">{dest.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/destinations" className="btn btn--outline">
              View All Destinations →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Why Jai India Voyage</p>
              <h2>What Sets Us Apart</h2>
              <p className="section-subtitle">
                More than a tour operator — we are your personal gateway to India's wonders
              </p>
            </div>
          </ScrollReveal>

          <div className="features-grid">
            {FEATURES.map((feat, i) => (
              <ScrollReveal key={i}>
                <div className="feature-card">
                  <div className="feature-card__icon">{feat.icon}</div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Client Diaries</p>
              <h2>Words from Our Travelers</h2>
            </div>
          </ScrollReveal>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <TrustBar />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="cta-banner">
        <div className="cta-banner__bg">
          <img src="/images/Slider4.jpg" alt="" loading="lazy" />
        </div>
        <div className="cta-banner__overlay" />
        <div className="cta-banner__content container">
          <ScrollReveal>
            <p className="section-label" style={{ color: 'var(--color-secondary)' }}>
              Ready to Begin?
            </p>
            <h2>Let's Craft Your Perfect Indian Journey</h2>
            <p>
              Tell us your dream, and our specialists will design a bespoke itinerary just for you.
            </p>
            <Link to="/contact" className="btn btn--gold">
              Start Planning →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
