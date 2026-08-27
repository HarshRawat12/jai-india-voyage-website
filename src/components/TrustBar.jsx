import React from 'react';

const STATS = [
  { number: '25+', label: 'Years of Expertise' },
  { number: '5000+', label: 'Happy Travelers' },
  { number: '200+', label: 'Curated Itineraries' },
  { number: '30+', label: 'Countries Served' },
];

const ACCREDITATIONS = [
  { src: '/images/IATO_Logo.jpeg', alt: 'IATO Member' },
  { src: '/images/dot_logo.jpeg', alt: 'Govt. of India Approved' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar__stats">
        {STATS.map((stat) => (
          <div className="trust-bar__stat" key={stat.label}>
            <div className="trust-bar__number">{stat.number}</div>
            <div className="trust-bar__label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="trust-bar__logos">
        {ACCREDITATIONS.map((logo) => (
          <div className="trust-bar__item" key={logo.alt}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
