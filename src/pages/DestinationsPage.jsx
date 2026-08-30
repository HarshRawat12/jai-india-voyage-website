import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

const CATEGORIES = ['All', 'North India', 'South India', 'Central India', 'East & Northeast', 'Himalayan', 'Special Interest'];

const ALL_DESTINATIONS = [
  { name: 'Royal Rajasthan', region: 'North India', duration: '10–14 Days', image: '/images/royal_rajasthan.webp', desc: 'Majestic forts, opulent palaces, vibrant bazaars, and the golden sands of the Thar Desert. Explore Jaipur, Jodhpur, Udaipur, and Jaisalmer.' },
  { name: 'Golden Triangle', region: 'North India', duration: '5–7 Days', image: '/images/golden_triangle.webp', desc: 'Delhi, Agra & Jaipur — the iconic introduction to India\'s timeless heritage and the magnificent Taj Mahal.' },
  { name: 'South India Temples', region: 'South India', duration: '10–12 Days', image: '/images/south_india_temples.webp', desc: 'Ancient Dravidian temples of Madurai, Mahabalipuram, Pondicherry, and the lush backwaters of Kerala.' },
  { name: 'Kashmir & Ladakh', region: 'Himalayan', duration: '8–12 Days', image: '/images/kashmir_ladakh.webp', desc: 'Paradise on Earth — snow-capped peaks, pristine Dal Lake, and ancient Buddhist monasteries of Ladakh.' },
  { name: 'Wildlife Safari', region: 'Central India', duration: '7–10 Days', image: '/images/wildlife_safari.webp', desc: 'Track Bengal tigers, leopards, sloth bears, and exotic birds in Ranthambore, Kanha, and Bandhavgarh.' },
  { name: 'Northeast Explorer', region: 'East & Northeast', duration: '10–14 Days', image: '/images/northeast_explorer.webp', desc: 'Uncharted tribal territories of Assam and Arunachal Pradesh, living root bridges, and pristine landscapes.' },
  { name: 'Buddhist Trail', region: 'Special Interest', duration: '8–10 Days', image: '/images/buddhist_trail.webp', desc: 'Follow the path of Buddha — Bodh Gaya, Sarnath, Kushinagar, and Lumbini. A pilgrimage of peace and enlightenment.' },
  { name: 'Central India Heritage', region: 'Central India', duration: '8–10 Days', image: '/images/central_india_heritage.webp', desc: 'The erotic temples of Khajuraho, the majestic Gwalior Fort, Orchha\'s medieval grandeur, and Mandu\'s romantic ruins.' },
  { name: 'Gujarat Discovery', region: 'North India', duration: '10–12 Days', image: '/images/gujarat_discovery.webp', desc: 'The colorful Rann of Kutch, Gir National Park (last home of Asiatic Lions), and the spiritual city of Dwarka.' },
  { name: 'Ladakh Adventure', region: 'Himalayan', duration: '10–14 Days', image: '/images/ladakh_adventure.webp', desc: 'High-altitude passes, turquoise lakes, ancient monasteries, and the world\'s highest motorable roads.' },
  { name: 'Orissa Tribal Tour', region: 'East & Northeast', duration: '10–12 Days', image: '/images/orissa_tribal_tour.webp', desc: 'Meet the indigenous Dongria Kondh and Bonda tribes. Experience authentic tribal markets, dances, and ancient traditions.' },
  { name: 'Holy Haridwar & Rishikesh', region: 'Special Interest', duration: '4–6 Days', image: '/images/haridwar_rishikesh.webp', desc: 'The spiritual heart of India — Ganga Aarti, yoga ashrams, ancient temples, and the sacred Ganges river.' },
];

export default function DestinationsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filtered, setFiltered] = useState(ALL_DESTINATIONS);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFiltered(ALL_DESTINATIONS);
    } else {
      setFiltered(ALL_DESTINATIONS.filter((d) => d.region === activeCategory));
    }
  }, [activeCategory]);

  return (
    <>
      <HeroSection
        image="/images/header_destinations.webp"
        label="Explore India"
        title="Our <em>Destinations</em>"
        subtitle="From Rajasthan's royal palaces to South India's serene temples — discover the Indian journey that feels right for you."
        short
      />

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="category-tabs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`category-tab ${activeCategory === cat ? 'category-tab--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="destinations-grid">
            {filtered.map((dest) => (
              <ScrollReveal key={dest.name}>
                <div className="dest-card">
                  <img className="dest-card__img" src={dest.image} alt={dest.name} loading="lazy" />
                  <div className="dest-card__overlay">
                    <span className="dest-card__region">{dest.region}</span>
                    <h3 className="dest-card__name">{dest.name}</h3>
                    <p className="dest-card__desc">{dest.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Custom Trip CTA */}
          <ScrollReveal>
            <div className="section-cta">
              <h3 className="section-cta__heading">
                Don't See the Place You're Seeking?
              </h3>
              <p className="section-cta__text">
                We shape thoughtful itineraries. Tell us what you hope for, and we'll bring it to life.
              </p>
              <Link to="/contact" className="btn btn--gold">
                Share Your Ideas →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
