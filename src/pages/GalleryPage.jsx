import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';

const GALLERY_IMAGES = [
  {
    src: '/images/gallery/taj-mahal-group-portrait.webp',
    caption: 'Together at the Taj Mahal',
    alt: 'A Jai India Voyage group posing together in front of the Taj Mahal',
    category: 'Experiences',
    size: 'tall',
  },
  {
    src: '/images/gallery/taj-mahal-travel-group.webp',
    caption: 'A morning at the Taj Mahal',
    alt: 'Travelers standing on the gardens in front of the Taj Mahal',
    category: 'Experiences',
    size: 'landscape',
  },
  {
    src: '/images/gallery/heritage-arch-group.webp',
    caption: 'Framed by Rajasthan',
    alt: 'Travelers gathered beneath an ornate yellow heritage arch in Rajasthan',
    category: 'Rajasthan',
    size: 'portrait',
  },
  {
    src: '/images/gallery/heritage-courtyard-gathering.webp',
    caption: 'An evening in a heritage courtyard',
    alt: 'A travel group relaxing in the courtyard of a carved sandstone haveli',
    category: 'Rajasthan',
    size: 'landscape',
  },
  {
    src: '/images/gallery/heritage-balcony-travelers.webp',
    caption: 'Warm welcomes, timeless details',
    alt: 'Two smiling travelers leaning over an intricately carved stone balcony',
    category: 'Experiences',
    size: 'portrait',
  },
  {
    src: '/images/gallery/palace-courtyard-group.webp',
    caption: 'Palace stories in the afternoon sun',
    alt: 'Travelers posing in the courtyard of a historic Rajasthani palace',
    category: 'Rajasthan',
    size: 'portrait',
  },
  {
    src: '/images/gallery/tiger-safari-walking.webp',
    caption: 'The forest reveals its stripes',
    alt: 'A Bengal tiger walking through dry forest during a wildlife safari',
    category: 'Wildlife',
    size: 'tall',
  },
  {
    src: '/images/gallery/tiger-by-lake.webp',
    caption: 'On the water’s edge',
    alt: 'A Bengal tiger walking beside a lake as birds fly over the water',
    category: 'Wildlife',
    size: 'wide',
  },
  {
    src: '/images/gallery/tiger-resting-in-forest.webp',
    caption: 'A quiet encounter in the wild',
    alt: 'A Bengal tiger resting on the forest floor and looking toward the camera',
    category: 'Wildlife',
    size: 'landscape',
  },
  { src: '/images/Amber-fort.webp', caption: 'Amber Fort, Jaipur', category: 'Rajasthan', size: 'landscape' },
  { src: '/images/Sam-sand-dunes-jaisalmer.webp', caption: 'Sam Sand Dunes, Jaisalmer', category: 'Rajasthan', size: 'landscape' },
  { src: '/images/Old-city-of-jodhpur.webp', caption: 'Blue City of Jodhpur', category: 'Rajasthan', size: 'standard' },
  { src: '/images/Patwon-ki-Havelli-jaisalmer.webp', caption: 'Patwon ki Haveli, Jaisalmer', category: 'Rajasthan', size: 'standard' },
  { src: '/images/MAHABALIPURAM.webp', caption: 'Shore Temple, Mahabalipuram', category: 'South India', size: 'landscape' },
  { src: '/images/MADURAI.webp', caption: 'Meenakshi Temple, Madurai', category: 'South India', size: 'standard' },
  { src: '/images/PONDICHERY.webp', caption: 'French Quarter, Pondicherry', category: 'South India', size: 'standard' },
  { src: '/images/AMMA-MANDAPAM.webp', caption: 'Amma Mandapam', category: 'South India', size: 'landscape' },
  { src: '/images/Khajuraho.webp', caption: 'Khajuraho Temples', category: 'Central India', size: 'standard' },
  { src: '/images/Gwalior-fort.webp', caption: 'Gwalior Fort', category: 'Central India', size: 'landscape' },
  { src: '/images/Kailasha-temple-Aurangabad.webp', caption: 'Kailasha Temple, Aurangabad', category: 'Central India', size: 'standard' },
  { src: '/images/Mandor--garden--jodhpur.webp', caption: 'Mandore Gardens, Jodhpur', category: 'Rajasthan', size: 'landscape' },
  { src: '/images/Dinner-at-ALSISAR-MAHAL.webp', caption: 'Royal Dinner at Alsisar Mahal', category: 'Experiences', size: 'standard' },
  { src: '/images/Magic-moments-at-gajner-pal.webp', caption: 'Gajner Palace', category: 'Experiences', size: 'landscape' },
  { src: '/images/Our-homestay.webp', caption: 'Our Heritage Homestay', category: 'Experiences', size: 'standard' },
  { src: '/images/Our-homestay1.webp', caption: 'Homestay Courtyard', category: 'Experiences', size: 'standard' },
  { src: '/images/Interaction-with-Maharaja-o.webp', caption: 'Meeting with Maharaja', category: 'Experiences', size: 'landscape' },
  { src: '/images/Canadian-school-tour-to-uda.webp', caption: 'School Group Tour, Udaipur', category: 'Experiences', size: 'standard' },
  { src: '/images/Admiring-old-city-of-jodhpu.webp', caption: 'Jodhpur Old City Views', category: 'Rajasthan', size: 'standard' },
  { src: '/images/Holy-tour-to-Haridwar.webp', caption: 'Ganga Aarti, Haridwar', category: 'Spiritual', size: 'landscape' },
  { src: '/images/Lucknow.webp', caption: 'Bara Imambara, Lucknow', category: 'Central India', size: 'standard' },
  { src: '/images/Bombay.webp', caption: 'Gateway of India, Mumbai', category: 'Central India', size: 'landscape' },
  { src: '/images/orrisa.webp', caption: 'Tribal Village, Orissa', category: 'Experiences', size: 'standard' },
  { src: '/images/Dev-Vatika.webp', caption: 'Dev Vatika Heritage', category: 'Rajasthan', size: 'standard' },
  { src: '/images/Waiting-for-sunset-at-Sam-s.webp', caption: 'Desert Sunset, Jaisalmer', category: 'Rajasthan', size: 'landscape' },
  { src: '/images/Tour--of-auroville-pondiche.webp', caption: 'Auroville, Pondicherry', category: 'South India', size: 'standard' },
  { src: '/images/chenni.webp', caption: 'Chennai Temples', category: 'South India', size: 'standard' },
  { src: '/images/A-moment-of-joy-after-the-c.webp', caption: 'Joy of Travel', category: 'Experiences', size: 'landscape' },
];

const CATEGORIES = ['All', 'Rajasthan', 'South India', 'Central India', 'Experiences', 'Spiritual', 'Wildlife'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const galleryRef = useRef(null);

  const filteredImages = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((image) => image.category === activeCategory);
  const lightboxImage = lightboxIndex === null ? null : filteredImages[lightboxIndex];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const grid = galleryRef.current;
    if (!grid) return undefined;

    let animationFrame;
    let previousWidth = 0;

    const layoutItems = () => {
      const styles = window.getComputedStyle(grid);
      const targetRowHeight = Number.parseFloat(
        styles.getPropertyValue('--gallery-row-height')
      ) || 240;

      grid.querySelectorAll('.gallery-item').forEach((item) => {
        const photo = item.querySelector('img');
        if (!photo?.naturalWidth || !photo.naturalHeight) return;

        const aspectRatio = photo.naturalWidth / photo.naturalHeight;
        item.style.flexGrow = String(aspectRatio);
        item.style.flexBasis = `${targetRowHeight * aspectRatio}px`;
      });
    };

    const scheduleLayout = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(layoutItems);
    };

    const photos = Array.from(grid.querySelectorAll('img'));
    photos.forEach((photo) => photo.addEventListener('load', scheduleLayout));

    const resizeObserver = new ResizeObserver(([entry]) => {
      const nextWidth = entry.contentRect.width;
      if (Math.abs(nextWidth - previousWidth) < 0.5) return;
      previousWidth = nextWidth;
      scheduleLayout();
    });

    resizeObserver.observe(grid);
    scheduleLayout();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      photos.forEach((photo) => photo.removeEventListener('load', scheduleLayout));
    };
  }, [activeCategory]);

  useEffect(() => {
    if (!lightboxImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setLightboxIndex(null);
      if (event.key === 'ArrowRight') {
        setLightboxIndex((current) => (current + 1) % filteredImages.length);
      }
      if (event.key === 'ArrowLeft') {
        setLightboxIndex((current) => (current - 1 + filteredImages.length) % filteredImages.length);
      }
    };

    document.body.classList.add('lightbox-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [filteredImages.length, lightboxImage]);

  const selectCategory = (category) => {
    setActiveCategory(category);
    setLightboxIndex(null);
  };

  const showPrevious = () => {
    setLightboxIndex((current) => (current - 1 + filteredImages.length) % filteredImages.length);
  };

  const showNext = () => {
    setLightboxIndex((current) => (current + 1) % filteredImages.length);
  };

  return (
    <>
      <HeroSection
        image="/images/header_gallery.webp"
        label="Visual Stories"
        title="Our <em>Gallery</em>"
        subtitle="A glimpse of meaningful moments shared with travellers from around the world."
        short
      />

      <section id="gallery" className="section gallery-section">
        <div className="container">
          <ScrollReveal>
            <div className="gallery-intro">
              <div>
                <span className="section-label">Travel, framed</span>
                <h2>Stories from the road</h2>
              </div>
              <p>
                From quiet wildlife encounters to laughter shared beneath palace arches,
                each frame holds a memory from journeys across India.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="category-tabs" aria-label="Filter gallery by region or experience">
              {CATEGORIES.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`category-tab ${activeCategory === category ? 'category-tab--active' : ''}`}
                  aria-pressed={activeCategory === category}
                  onClick={() => selectCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div ref={galleryRef} className="gallery-grid" aria-live="polite">
            {filteredImages.map((image, index) => (
              <button
                type="button"
                className="gallery-item"
                key={image.src}
                aria-label={`Open photo: ${image.caption}`}
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt || image.caption}
                  loading={index < 9 ? 'eager' : 'lazy'}
                  fetchPriority={index < 3 ? 'high' : 'auto'}
                  decoding="async"
                  draggable="false"
                />
                <span className="gallery-item__expand" aria-hidden="true">
                  <Expand size={17} strokeWidth={1.8} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo viewer: ${lightboxImage.caption}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLightboxIndex(null);
          }}
        >
          <button
            type="button"
            className="lightbox__close"
            aria-label="Close photo viewer"
            onClick={() => setLightboxIndex(null)}
            autoFocus
          >
            <X size={24} />
          </button>

          {filteredImages.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--previous"
                aria-label="Show previous photo"
                onClick={showPrevious}
              >
                <ChevronLeft size={26} />
              </button>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--next"
                aria-label="Show next photo"
                onClick={showNext}
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}

          <figure className="lightbox__figure">
            <img src={lightboxImage.src} alt={lightboxImage.alt || lightboxImage.caption} />
            <figcaption className="lightbox__caption">
              <span>
                <strong>{lightboxImage.caption}</strong>
                <small>{lightboxImage.category}</small>
              </span>
              <span className="lightbox__counter">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
