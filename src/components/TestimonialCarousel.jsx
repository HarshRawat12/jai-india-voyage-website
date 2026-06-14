import React, { useState, useEffect, useCallback } from 'react';

const TESTIMONIALS = [
  {
    quote: "Jai India Voyage truly understood our desire to explore India beyond the tourist trail. From the hidden temples of Rajasthan to the warmth of a rural homestay, every detail was perfectly crafted. An unforgettable journey!",
    author: "Pierre & Marie Durand",
    origin: "Lyon, France",
  },
  {
    quote: "Ashish and his team delivered an extraordinary experience. The private access to heritage havelis, the knowledgeable local guides, and the seamless logistics made our 3-week tour absolutely magical.",
    author: "Elisabeth Ceccaldi-Raynaud",
    origin: "Paris, France",
  },
  {
    quote: "We've traveled with many tour operators, but Jai India Voyage stands apart. Their deep knowledge of Indian culture, combined with their commitment to responsible tourism, made this trip truly special.",
    author: "James & Sarah Mitchell",
    origin: "London, United Kingdom",
  },
  {
    quote: "Our school group of 30 students had the most incredible educational tour. The cultural immersion, safety arrangements, and the warmth of Indian hospitality — everything was world-class.",
    author: "Dr. Robert Thompson",
    origin: "Toronto, Canada",
  },
  {
    quote: "From the stunning sand dunes of Jaisalmer to the serene backwaters of Kerala, every destination was a new chapter of wonder. Jai India Voyage made India feel like home.",
    author: "Hans & Greta Weber",
    origin: "Munich, Germany",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="testimonials">
      <div
        className="testimonials__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <p className="testimonial-card__quote">{t.quote}</p>
            <p className="testimonial-card__author">{t.author}</p>
            <p className="testimonial-card__origin">{t.origin}</p>
          </div>
        ))}
      </div>
      <div className="testimonials__dots">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
