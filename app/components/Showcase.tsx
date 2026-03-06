'use client';

import { useEffect, useState, useCallback } from 'react';
import DotNav from './DotNav';
import SlideView from './SlideView';
import { slides } from '../data/slides';

export default function Showcase() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (next: number) => {
      setCurrent(Math.max(0, Math.min(total - 1, next)));
    },
    [total]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
        go(current + 1);
      } else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) {
        e.preventDefault();
        go(current - 1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [current, go]);

  // Scroll wheel navigation
  useEffect(() => {
    let lastScroll = 0;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScroll < 700) return;
      lastScroll = now;
      if (e.deltaY > 0) go(current + 1);
      else go(current - 1);
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [current, go]);

  return (
    <div className="slide-container">
      {/* Logo */}
      <a href="https://aaroncougle.com" aria-label="Aaron Cougle portfolio">
        <img
          src="/favicon-logo.svg"
          width={32}
          height={32}
          alt="AC"
          style={{ position: 'fixed', top: '2rem', left: '2rem', zIndex: 100 }}
        />
      </a>

      <DotNav current={current} onNavigate={go} />

      {slides.map((slide, i) => {
        const state = i === current ? 'active' : i < current ? 'above' : 'below';
        return <SlideView key={slide.id} slide={slide} state={state} />;
      })}

      {/* Slide counter */}
      <div className="slide-counter">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {current === 0 && (
        <p className="key-hint">scroll or arrow keys to navigate</p>
      )}
    </div>
  );
}
