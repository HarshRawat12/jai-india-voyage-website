import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';

const EXPERIENCES = [
  {
    tag: 'Culinary',
    title: 'Private Dinner in the Thar Desert',
    desc: 'Dine beneath the open desert sky at a table prepared just for you, surrounded by sweeping dunes, lantern light, and the stillness of the Thar.',
    image: '/images/experiences/private-dinner-thar-desert.webp',
  },
  {
    tag: 'Heritage',
    title: 'Champagne Dinner at Deogarh Mahal',
    desc: 'Toast an unforgettable evening within a storied palace setting, where gracious hospitality, heritage ambience, and a private meal come together.',
    image: '/images/experiences/champagne-dinner-deogarh.webp',
  },
  {
    tag: 'Adventure',
    title: 'Jeep Safari at Dechu',
    desc: 'Leave the main road behind on a private jeep journey through the rugged landscapes, desert settlements, and quiet countryside around Dechu.',
    image: '/images/experiences/jeep-safari-dechu.webp',
  },
  {
    tag: 'Wildlife',
    title: 'Leopard Safari',
    desc: 'Set out with experienced trackers across Rajasthan’s granite wilderness in search of leopards and the remarkable wildlife that shares their habitat.',
    image: '/images/experiences/leopard-safari.webp',
  },
  {
    tag: 'Cultural',
    title: 'Rabari Community Encounter',
    desc: 'Meet members of Rajasthan’s Rabari community and gain a respectful insight into their pastoral traditions, distinctive dress, and enduring way of life.',
    image: '/images/experiences/rabari-interaction.webp',
  },
  {
    tag: 'Local Life',
    title: 'Village Life',
    desc: 'Slow down in the countryside, meet local families, and discover the watermills, farms, and everyday rhythms that sustain rural communities.',
    image: '/images/experiences/village-life.webp',
  },
  {
    tag: 'Artisan',
    title: 'Local Craft Workshops',
    desc: 'Sit beside local makers and try time-honoured skills for yourself, from shaping clay to understanding the techniques behind regional handicrafts.',
    image: '/images/experiences/local-craft.webp',
  },
  {
    tag: 'Slow Travel',
    title: 'The Road Less Travelled',
    desc: 'Trade familiar routes for village tracks and unhurried encounters that reveal a more personal side of India, far beyond the usual landmarks.',
    image: '/images/experiences/road-less-travelled.webp',
  },
  {
    tag: 'Heritage',
    title: 'Hidden Heritage',
    desc: 'Step through ancient gateways and into lesser-known monuments, where layered architecture and quiet courtyards tell stories away from the crowds.',
    image: '/images/experiences/hidden-heritage.webp',
  },
  {
    tag: 'Local Life',
    title: 'A Local Train Journey',
    desc: 'See the landscape and daily life unfold from a local train, sharing one of India’s most characterful ways to travel between smaller towns.',
    image: '/images/experiences/local-train-ride.webp',
  },
  {
    tag: 'City Life',
    title: 'Rickshaw Through Jaipur',
    desc: 'Glide through Jaipur’s lively streets by cycle rickshaw, taking in colourful markets, historic façades, and the city’s everyday energy at street level.',
    image: '/images/experiences/rickshaw-ride-01.webp',
  },
  {
    tag: 'City Life',
    title: 'Old City Rickshaw Ride',
    desc: 'Travel at an easy pace through the old city’s crowded lanes and hidden corners, with time to notice the details that pass too quickly by car.',
    image: '/images/experiences/rickshaw-ride-02.webp',
  },
  {
    tag: 'Private Touring',
    title: 'Private Moments in the Wild',
    desc: 'Pause between safari drives for an intimate moment in the landscape, thoughtfully arranged so the journey feels entirely your own.',
    image: '/images/experiences/private-moment.webp',
  },
];

export default function ExperiencesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <HeroSection
        image="/images/header_experiences.webp"
        label="Beyond Tourism"
        title="Meaningful <em>Experiences</em>"
        subtitle="More than destinations — moments that stay with you long after you return."
        short
      />

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">What Awaits You</p>
              <h2>Experiences to Share</h2>
              <p className="section-subtitle">
                Each experience offers a closer connection to India
              </p>
            </div>
          </ScrollReveal>

          <div className="exp-grid">
            {EXPERIENCES.map((exp) => (
              <ScrollReveal key={exp.title}>
                <div className="exp-card">
                  <div className="exp-card__img-wrap">
                    <img src={exp.image} alt={exp.title} loading="lazy" decoding="async" />
                  </div>
                  <div className="exp-card__body">
                    <span className="exp-card__tag">{exp.tag}</span>
                    <h3>{exp.title}</h3>
                    <p>{exp.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/contact" className="btn btn--primary">
                Share My Interests →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
