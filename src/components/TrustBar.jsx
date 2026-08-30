import React from 'react';

const STATS = [
  { number: '25+', label: 'Years of Experience' },
  { number: '5000+', label: 'Travellers Welcomed' },
  { number: '200+', label: 'Itineraries Shaped' },
  { number: '30+', label: 'Countries Served' },
];

const ACCREDITATIONS = [
  { src: '/images/IATO_Logo.webp', alt: 'IATO Member' },
  { src: '/images/dot_logo.webp', alt: 'Govt. of India Approved' },
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
