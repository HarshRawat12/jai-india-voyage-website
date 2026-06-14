import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';

const EXPERIENCES = [
  {
    tag: 'Heritage',
    title: 'Royal Palace Stays',
    desc: 'Sleep like royalty in converted heritage havelis and maharaja palaces. Private dinners, cultural performances, and behind-the-scenes access to centuries-old estates.',
    image: '/images/Dinner-at-ALSISAR-MAHAL.jpg',
  },
  {
    tag: 'Cultural',
    title: 'Village & Tribal Immersion',
    desc: 'Step into the living traditions of rural India. Share meals with Bishnoi families, witness ancient pottery-making, and dance with tribal communities in Orissa.',
    image: '/images/orrisa.jpg',
  },
  {
    tag: 'Adventure',
    title: 'Desert Camping',
    desc: 'Experience the magic of the Thar Desert — camel safaris at sunset, star-gazing from luxury tented camps, and folk music under a blanket of stars in Jaisalmer.',
    image: '/images/Sam-sand-dunes-jaisalmer.jpg',
  },
  {
    tag: 'Spiritual',
    title: 'Sacred Journeys',
    desc: 'From the Ganga Aarti in Haridwar to the Buddhist monasteries of Ladakh and the ancient temples of South India — embark on a journey of the soul.',
    image: '/images/Holy-tour-to-Haridwar.jpg',
  },
  {
    tag: 'Homestay',
    title: 'Authentic Homestays',
    desc: 'Live with an Indian family in their traditional home. Cook together, learn local crafts, hear family stories, and experience hospitality that hotels can never match.',
    image: '/images/Our-homestay.jpg',
  },
  {
    tag: 'Heritage',
    title: 'Fort & Temple Explorations',
    desc: 'Discover the architectural marvels of India — from the carved temples of Khajuraho and Kailasha to the mighty forts of Gwalior, Jodhpur, and Jaipur.',
    image: '/images/Khajuraho.jpg',
  },
  {
    tag: 'Cultural',
    title: 'Cuisine & Cooking Classes',
    desc: 'Savor India\'s incredible culinary diversity. Join private cooking sessions with local chefs, explore spice markets, and dine at hidden local gems.',
    image: '/images/img6.jpg',
  },
  {
    tag: 'Adventure',
    title: 'Wildlife Encounters',
    desc: 'Track the elusive Bengal tiger, spot rare one-horned rhinos in Kaziranga, and witness the colorful birdlife of Bharatpur — guided by expert naturalists.',
    image: '/images/Jungle-safari-tour.jpg',
  },
  {
    tag: 'Cultural',
    title: 'Festival & Fair Tours',
    desc: 'Time your visit to coincide with India\'s spectacular festivals — Holi, Diwali, Pushkar Camel Fair, Hornbill Festival, and more. A riot of color and joy.',
    image: '/images/img3.jpg',
  },
];

export default function ExperiencesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <HeroSection
        image="/images/header_experiences.png"
        label="Beyond Tourism"
        title="Extraordinary <em>Experiences</em>"
        subtitle="Not just destinations — we create moments that stay with you forever."
        short
      />

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">What Awaits You</p>
              <h2>Curated Experiences</h2>
              <p className="section-subtitle">
                Every experience is designed to take you deeper into India's soul
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
                Design My Experience →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
