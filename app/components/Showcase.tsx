'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import DotNav from './DotNav';
import SlideView from './SlideView';
import { slides } from '../data/slides';

export default function Showcase() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const touchStartY = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => {
      setCurrent(Math.max(0, Math.min(total - 1, next)));
    },
    [total]
  );

  // Keyboard
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

  // Scroll wheel
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

  // Touch swipe (vertical)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 40) return; // ignore small swipes
      if (delta > 0) go(current + 1);
      else go(current - 1);
      touchStartY.current = null;
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [current, go]);

  return (
    <div className="slide-container">
      <aside className="sidebar">
        <a href="https://aaroncougle.com" aria-label="Aaron Cougle portfolio" className="sidebar-logo">
          <img src="/favicon.svg" width={28} height={28} alt="AC" />
        </a>
        <DotNav current={current} onNavigate={go} />
      </aside>

      {slides.map((slide, i) => {
        const state = i === current ? 'active' : i < current ? 'above' : 'below';
        return <SlideView key={slide.id} slide={slide} state={state} />;
      })}

      <div className="slide-counter">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {current === 0 && (
        <p className="key-hint">scroll or arrow keys to navigate</p>
      )}
    </div>
  );
}
