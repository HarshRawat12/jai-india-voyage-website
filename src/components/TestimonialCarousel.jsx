import React, { useState, useEffect } from 'react';

const TA_BASE =
  'https://www.tripadvisor.in/ShowUserReviews-g297615-d33985563-r';
const TA_SUFFIX =
  '-Jai_India_Voyage-Gurugram_Gurgaon_Gurgaon_District_Haryana.html';

/**
 * Ten verified Tripadvisor reviews. Quotes are excerpts of the published
 * (translated) text — the reviewer's name links out to the full original.
 * Photos are the reviewer's own.
 */
const REVIEWS = [
  {
    slug: 'mls',
    author: 'MLS',
    reviewId: '1040099792',
    title: 'Unforgettable trip to India',
    date: '23 November 2025',
    photosCount: 2,
    quote:
      'It’s hard to summarize such an incredible journey in a few words. For two weeks, we travelled Rajasthan accompanied by an incredible guide who taught us about North India in many ways: its history, its religions, its gastronomy, its craftsmen. It was a real chance to have such a beautiful trip with Jai India. Recommended!',
  },
  {
    slug: 'ennea',
    author: 'ENNEA',
    reviewId: '1040393714',
    title: 'A perfect organization for a successful South India trip!',
    date: '26 November 2025',
    photosCount: 7,
    quote:
      'A tailor-made trip prepared with care and perfectly realized. This very serious agency took into account our wishes for routes, the desired visits, the choice of hotels, the pace and the variety of visits. The French-speaking guide was very cultured and of extreme kindness — everything was perfect.',
  },
  {
    slug: 'bob-vtt-passion',
    author: 'Bob VTT Passion',
    reviewId: '1041016942',
    title: 'Great trip to Rajasthan with Jai India Travel',
    date: '1 December 2025',
    photosCount: 7,
    quote:
      'An unforgettable trip to North India: Rajasthan. An authentic and cultural experience, punctuated by memorable encounters. The success of this trip is due in large part to the exceptional support of Ashish Mittal, our passionate guide, whose expertise and kindness transformed every step into a privileged moment.',
  },
  {
    slug: 'lahaye',
    author: 'lahaye',
    reviewId: '1040819649',
    title: 'Exceptional!',
    date: '30 November 2025',
    photosCount: 6,
    quote:
      'With Jai India Travel, we lived 18 days of intense wonder and happiness. They don’t limit themselves to the iconic sites — they introduce you to more confidential places, in the heart of deep India, with its culture, traditions and religious rites. Without a doubt the best local agency we have known in many overseas travels.',
  },
  {
    slug: 'patrick-l',
    author: 'Patrick L',
    reviewId: '1057233803',
    title: 'Rajasthan with Jai India Travel',
    date: '20 April 2026',
    photosCount: 6,
    quote:
      'Beautiful trip with a great guide. The cultural combined with the anecdotes, the different attentions during the trip, the organization of hotels and visits made this trip unforgettable. Jai India Voyage has done a remarkable job and created a desire to return quickly to India.',
  },
  {
    slug: 'brigitte-l',
    author: 'Brigitte L',
    reviewId: '1042620033',
    title: 'Reminiscence of a glorious, sumptuous past',
    date: '15 December 2025',
    photosCount: 5,
    quote:
      'Journey to Rajasthan beautifully orchestrated, with comprehensive care down to the last detail — and delivered with great kindness, intelligence and humour by Jai India Travel. A reminiscence of a glorious past in architecture, painting, sculpture and culture.',
  },
  {
    slug: 'joseline-lahaye',
    author: 'Joseline lahaye',
    reviewId: '1037617405',
    title: 'Visit India with Jai India Travel',
    date: '3 November 2025',
    photosCount: 7,
    quote:
      'After discovering Rajasthan, Central and South India with this agency, I wanted to share this unique experience with friends. They returned enchanted by the beauty of the country and the quality of the organization! I continued my travels in Sri Lanka, Nepal and Bhutan, always with the same satisfaction.',
  },
  {
    slug: 'daytrip',
    author: 'DayTrip03156808715',
    reviewId: '1042432168',
    title: '20 beautiful days without organisational or health problems',
    date: '14 December 2025',
    photosCount: 6,
    quote:
      'Extraordinary journey. Support at all times. Great choice of hotels and restaurants. An extraordinary, erudite and comic guide who made every day a pleasure.',
  },
  {
    slug: 'bodart',
    author: 'Bodart',
    reviewId: '1037462401',
    title: 'Rajasthan 2025',
    date: '2 November 2025',
    photosCount: 5,
    quote:
      'Jai India Voyage made us share the wonders of Rajasthan in a beautifully organized journey! We’ve come back wanting to conquer this country with its cultural varieties, and we’ve already booked a new adventure in 2027! If you decide to visit India, do so with Jai India Travel.',
  },
  {
    slug: 'france-a',
    author: 'France A',
    reviewId: '1039739064',
    title: 'Like a maharaja',
    date: '20 November 2025',
    photosCount: 6,
    quote:
      'Jai India Voyage created a tailor-made trip with an exceptional driver and guide! Thank you for these wonderful memories.',
  },
];

const reviewUrl = (id) => `${TA_BASE}${id}${TA_SUFFIX}`;

function ReviewCard({ review, cloned, onPhotoClick }) {
  const url = reviewUrl(review.reviewId);
  const totalPhotos = review.photosCount || 2;

  return (
    <article className="review-card">
      <span className="review-card__source">
        <svg
          className="review-card__source-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="11" fill="#34E0A1" />
          <circle cx="8.2" cy="12" r="3.4" fill="#fff" />
          <circle cx="15.8" cy="12" r="3.4" fill="#fff" />
          <circle cx="8.2" cy="12" r="1.5" fill="#000" />
          <circle cx="15.8" cy="12" r="1.5" fill="#000" />
        </svg>
        Tripadvisor
      </span>

      <h3 className="review-card__title">{review.title}</h3>

      <blockquote className="review-card__quote">{review.quote}</blockquote>

      <div className="review-card__photos">
        {[1, 2].map((n) => {
          const extraPhotos = totalPhotos - 2;
          const showBadge = n === 2 && extraPhotos > 0;
          return (
            <button
              type="button"
              className="review-card__photo-btn"
              key={n}
              onClick={() => onPhotoClick(review, n)}
              tabIndex={cloned ? -1 : 0}
              aria-label={`Open photo ${n} of ${totalPhotos} from ${review.author}’s trip`}
            >
              <img
                className="review-card__photo"
                src={`/images/reviews/${review.slug}/photo-0${n}.jpg`}
                alt={`Photo ${n} from ${review.author}’s trip with Jai India Voyage`}
                loading="lazy"
                draggable="false"
              />
              <span className="review-card__photo-zoom" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </span>
              {showBadge && (
                <span className="review-card__photo-badge">
                  +{extraPhotos} more
                </span>
              )}
            </button>
          );
        })}
      </div>

      <footer className="review-card__footer">
        <a
          className="review-card__author"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={cloned ? -1 : 0}
          title={`Read ${review.author}’s full review on Tripadvisor`}
        >
          {review.author}
          <svg
            className="review-card__ext"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M14 4h6v6M20 4l-8.5 8.5M17 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <span className="review-card__date">{review.date}</span>
      </footer>
    </article>
  );
}

export default function TestimonialCarousel() {
  const [modalData, setModalData] = useState(null);

  const handleOpenLightbox = (review, photoIndex) => {
    setModalData({ review, photoIndex });
  };

  const handleCloseLightbox = () => {
    setModalData(null);
  };

  useEffect(() => {
    if (!modalData) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') {
        setModalData((prev) => {
          if (!prev) return null;
          const max = prev.review.photosCount || 2;
          const nextIndex = prev.photoIndex < max ? prev.photoIndex + 1 : 1;
          return { ...prev, photoIndex: nextIndex };
        });
      }
      if (e.key === 'ArrowLeft') {
        setModalData((prev) => {
          if (!prev) return null;
          const max = prev.review.photosCount || 2;
          const prevIndex = prev.photoIndex > 1 ? prev.photoIndex - 1 : max;
          return { ...prev, photoIndex: prevIndex };
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalData]);

  return (
    <>
      <section
        className="review-marquee"
        aria-label="Verified traveller reviews from Tripadvisor"
      >
        <div className="review-marquee__viewport">
          <div className="review-marquee__track">
            {REVIEWS.map((r) => (
              <ReviewCard
                key={r.slug}
                review={r}
                onPhotoClick={handleOpenLightbox}
              />
            ))}
            <div className="review-marquee__clone" aria-hidden="true">
              {REVIEWS.map((r) => (
                <ReviewCard
                  key={`clone-${r.slug}`}
                  review={r}
                  cloned
                  onPhotoClick={handleOpenLightbox}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── REVIEW PHOTO LIGHTBOX ─── */}
      {modalData && (
        <div
          className="review-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo from ${modalData.review.author}'s review`}
          onClick={handleCloseLightbox}
        >
          <div className="review-lightbox__backdrop" />

          <button
            className="review-lightbox__close"
            onClick={handleCloseLightbox}
            aria-label="Close photo preview"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div
            className="review-lightbox__container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Viewer Stage */}
            <div className="review-lightbox__stage">
              {(modalData.review.photosCount || 2) > 1 && (
                <button
                  className="review-lightbox__nav review-lightbox__nav--prev"
                  onClick={() =>
                    setModalData((prev) => ({
                      ...prev,
                      photoIndex:
                        prev.photoIndex > 1
                          ? prev.photoIndex - 1
                          : prev.review.photosCount || 2,
                    }))
                  }
                  aria-label="Previous photo"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}

              <div className="review-lightbox__img-wrapper">
                <img
                  className="review-lightbox__image"
                  src={`/images/reviews/${modalData.review.slug}/photo-${String(
                    modalData.photoIndex
                  ).padStart(2, '0')}.jpg`}
                  alt={`Photo ${modalData.photoIndex} from ${modalData.review.author}’s trip with Jai India Voyage`}
                />
                {(modalData.review.photosCount || 2) > 1 && (
                  <span className="review-lightbox__counter">
                    Photo {modalData.photoIndex} of {modalData.review.photosCount || 2}
                  </span>
                )}
              </div>

              {(modalData.review.photosCount || 2) > 1 && (
                <button
                  className="review-lightbox__nav review-lightbox__nav--next"
                  onClick={() =>
                    setModalData((prev) => ({
                      ...prev,
                      photoIndex:
                        prev.photoIndex < (prev.review.photosCount || 2)
                          ? prev.photoIndex + 1
                          : 1,
                    }))
                  }
                  aria-label="Next photo"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Traveler Details Bar */}
            <div className="review-lightbox__details">
              <div className="review-lightbox__info">
                <div className="review-lightbox__author-row">
                  <span className="review-card__source">
                    <svg
                      className="review-card__source-icon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="11" fill="#34E0A1" />
                      <circle cx="8.2" cy="12" r="3.4" fill="#fff" />
                      <circle cx="15.8" cy="12" r="3.4" fill="#fff" />
                      <circle cx="8.2" cy="12" r="1.5" fill="#000" />
                      <circle cx="15.8" cy="12" r="1.5" fill="#000" />
                    </svg>
                    Tripadvisor
                  </span>
                  <span className="review-lightbox__author-name">
                    {modalData.review.author}
                  </span>
                  <span className="review-lightbox__date">
                    {modalData.review.date}
                  </span>
                </div>
                <h4 className="review-lightbox__title">
                  {modalData.review.title}
                </h4>
                <p className="review-lightbox__quote">
                  "{modalData.review.quote}"
                </p>
              </div>

              <a
                href={reviewUrl(modalData.review.reviewId)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold review-lightbox__cta"
              >
                <span>Read Full Review</span>
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 4h6v6M20 4l-8.5 8.5M17 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
