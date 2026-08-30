import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';

const EXPERIENCES = [
  {
    tag: 'Heritage',
    title: 'Royal Palace Stays',
    desc: 'Stay amid royal heritage in converted havelis and maharaja palaces. Private dinners, cultural performances, and a closer look at centuries-old estates.',
    image: '/images/royal_palace_stays.webp',
  },
  {
    tag: 'Cultural',
    title: 'Village & Tribal Immersion',
    desc: 'Step into the living traditions of rural India. Share meals with Bishnoi families, witness ancient pottery-making, and dance with tribal communities in Orissa.',
    image: '/images/orrisa.webp',
  },
  {
    tag: 'Adventure',
    title: 'Desert Camping',
    desc: 'Experience the magic of the Thar Desert — camel safaris at sunset, star-gazing from luxury tented camps, and folk music under a blanket of stars in Jaisalmer.',
    image: '/images/desert_camping.webp',
  },
  {
    tag: 'Spiritual',
    title: 'Sacred Journeys',
    desc: 'From the Ganga Aarti in Haridwar to the Buddhist monasteries of Ladakh and the ancient temples of South India — embark on a journey of the soul.',
    image: '/images/Holy-tour-to-Haridwar.webp',
  },
  {
    tag: 'Homestay',
    title: 'Authentic Homestays',
    desc: 'Live with an Indian family in their traditional home. Cook together, learn local crafts, hear family stories, and experience the warmth of home hospitality.',
    image: '/images/Our-homestay.webp',
  },
  {
    tag: 'Heritage',
    title: 'Fort & Temple Explorations',
    desc: 'Discover the architectural marvels of India — from the carved temples of Khajuraho and Kailasha to the mighty forts of Gwalior, Jodhpur, and Jaipur.',
    image: '/images/Khajuraho.webp',
  },
  {
    tag: 'Cultural',
    title: 'Cuisine & Cooking Classes',
    desc: 'Savor India\'s rich culinary diversity. Join private cooking sessions with local chefs, explore spice markets, and dine at cherished local places.',
    image: '/images/cuisine_cooking_classes.webp',
  },
  {
    tag: 'Adventure',
    title: 'Wildlife Encounters',
    desc: 'Track the elusive Bengal tiger, spot rare one-horned rhinos in Kaziranga, and witness the colorful birdlife of Bharatpur — guided by expert naturalists.',
    image: '/images/Jungle-safari-tour.webp',
  },
  {
    tag: 'Cultural',
    title: 'Festival & Fair Tours',
    desc: 'Time your visit to coincide with India\'s vibrant festivals — Holi, Diwali, Pushkar Camel Fair, Hornbill Festival, and more. Full of colour and joy.',
    image: '/images/img3.webp',
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
            {EXPERIENCES.map((exp, i) => (
              <ScrollReveal key={i}>
                <div className="exp-card">
                  <div className="exp-card__img-wrap">
                    <img src={exp.image} alt={exp.title} loading="lazy" />
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
