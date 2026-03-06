'use client';

import { slides } from '../data/slides';

interface DotNavProps {
  current: number;
  onNavigate: (index: number) => void;
}

export default function DotNav({ current, onNavigate }: DotNavProps) {
  return (
    <nav className="dot-nav">
      {slides.map((slide, i) => (
        <button
          key={slide.id}
          className={`dot ${current === i ? 'active' : ''}`}
          onClick={() => onNavigate(i)}
          aria-label={`Go to slide ${i + 1}: ${slide.appName}`}
        />
      ))}
    </nav>
  );
}
