import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';

const GALLERY_IMAGES = [
  { src: '/images/Amber-fort.jpg', caption: 'Amber Fort, Jaipur', category: 'Rajasthan' },
  { src: '/images/Sam-sand-dunes-jaisalmer.jpg', caption: 'Sam Sand Dunes, Jaisalmer', category: 'Rajasthan' },
  { src: '/images/Old-city-of-jodhpur.jpg', caption: 'Blue City of Jodhpur', category: 'Rajasthan' },
  { src: '/images/Patwon-ki-Havelli-jaisalmer.jpg', caption: 'Patwon ki Haveli, Jaisalmer', category: 'Rajasthan' },
  { src: '/images/MAHABALIPURAM.jpg', caption: 'Shore Temple, Mahabalipuram', category: 'South India' },
  { src: '/images/MADURAI.jpg', caption: 'Meenakshi Temple, Madurai', category: 'South India' },
  { src: '/images/PONDICHERY.jpg', caption: 'French Quarter, Pondicherry', category: 'South India' },
  { src: '/images/AMMA-MANDAPAM.jpg', caption: 'Amma Mandapam', category: 'South India' },
  { src: '/images/Khajuraho.jpg', caption: 'Khajuraho Temples', category: 'Central India' },
  { src: '/images/Gwalior-fort.jpg', caption: 'Gwalior Fort', category: 'Central India' },
  { src: '/images/Kailasha-temple-Aurangabad.jpg', caption: 'Kailasha Temple, Aurangabad', category: 'Central India' },
  { src: '/images/Mandor--garden--jodhpur.jpg', caption: 'Mandore Gardens, Jodhpur', category: 'Rajasthan' },
  { src: '/images/Dinner-at-ALSISAR-MAHAL.jpg', caption: 'Royal Dinner at Alsisar Mahal', category: 'Experiences' },
  { src: '/images/Magic-moments-at-gajner-pal.jpg', caption: 'Gajner Palace', category: 'Experiences' },
  { src: '/images/Our-homestay.jpg', caption: 'Our Heritage Homestay', category: 'Experiences' },
  { src: '/images/Our-homestay1.jpg', caption: 'Homestay Courtyard', category: 'Experiences' },
  { src: '/images/Interaction-with-Maharaja-o.jpg', caption: 'Meeting with Maharaja', category: 'Experiences' },
  { src: '/images/Canadian-school-tour-to-uda.jpg', caption: 'School Group Tour, Udaipur', category: 'Experiences' },
  { src: '/images/Admiring-old-city-of-jodhpu.jpg', caption: 'Jodhpur Old City Views', category: 'Rajasthan' },
  { src: '/images/Holy-tour-to-Haridwar.jpg', caption: 'Ganga Aarti, Haridwar', category: 'Spiritual' },
  { src: '/images/Lucknow.jpg', caption: 'Bara Imambara, Lucknow', category: 'Central India' },
  { src: '/images/Bombay.jpg', caption: 'Gateway of India, Mumbai', category: 'Central India' },
  { src: '/images/orrisa.jpg', caption: 'Tribal Village, Orissa', category: 'Experiences' },
  { src: '/images/Dev-Vatika.jpg', caption: 'Dev Vatika Heritage', category: 'Rajasthan' },
  { src: '/images/Waiting-for-sunset-at-Sam-s.jpg', caption: 'Desert Sunset, Jaisalmer', category: 'Rajasthan' },
  { src: '/images/Tour--of-auroville-pondiche.jpg', caption: 'Auroville, Pondicherry', category: 'South India' },
  { src: '/images/chenni.jpg', caption: 'Chennai Temples', category: 'South India' },
  { src: '/images/A-moment-of-joy-after-the-c.jpg', caption: 'Joy of Travel', category: 'Experiences' },
];

const CATEGORIES = ['All', 'Rajasthan', 'South India', 'Central India', 'Experiences', 'Spiritual'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [filtered, setFiltered] = useState(GALLERY_IMAGES);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFiltered(GALLERY_IMAGES);
    } else {
      setFiltered(GALLERY_IMAGES.filter((img) => img.category === activeCategory));
    }
  }, [activeCategory]);

  // Close lightbox on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <HeroSection
        image="/images/header_gallery.png"
        label="Visual Stories"
        title="Our <em>Gallery</em>"
        subtitle="A glimpse into the extraordinary moments we've shared with travelers from around the world."
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

          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div
                className="gallery-item"
                key={img.src + i}
                onClick={() => setLightboxImg(img)}
              >
                <img src={img.src} alt={img.caption} loading="lazy" />
                <div className="gallery-item__caption">{img.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <button className="lightbox__close" onClick={() => setLightboxImg(null)}>✕</button>
          <div onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg.src} alt={lightboxImg.caption} />
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', marginTop: '1rem', fontSize: '0.9rem' }}>
              {lightboxImg.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
