import React from 'react';

export default function HeroSection({
  image,
  video,
  label,
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  short = false,
  children,
}) {
  return (
    <section className={`hero ${short ? 'hero--short' : ''}`}>
      <div className="hero__bg">
        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            poster={image}
          />
        ) : (
          <img src={image} alt="" loading="eager" />
        )}
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        {label && <span className="hero__label">{label}</span>}
        {title && <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />}
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {(primaryBtn || secondaryBtn) && (
          <div className="hero__actions">
            {primaryBtn}
            {secondaryBtn}
          </div>
        )}
        {children}
      </div>
      {!short && (
        <div className="hero__scroll-indicator">
          <span></span>
          Scroll
        </div>
      )}
    </section>
  );
}
