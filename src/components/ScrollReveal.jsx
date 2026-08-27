import React, { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', direction = 'up', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('reveal--visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const dirClass = direction === 'left' ? 'reveal--left' : direction === 'right' ? 'reveal--right' : '';

  // Cap the stagger so a long grid's last card doesn't sit invisible for seconds
  const staggerMs = Math.min(delay, 600);

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${className}`}
      style={staggerMs ? { transitionDelay: `${staggerMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
