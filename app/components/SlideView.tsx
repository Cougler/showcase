'use client';

import { ShowcaseSlide } from '../data/slides';

interface SlideViewProps {
  slide: ShowcaseSlide;
  state: 'active' | 'above' | 'below';
}

function ImageGrid({ images }: { images: string[] }) {
  const count = images.length;

  if (count === 0) {
    return (
      <div className="image-placeholder">
        <span>Drop images in /public and reference them in slides.ts</span>
      </div>
    );
  }

  if (count === 1) {
    return (
      <div className="image-grid single">
        <img src={images[0]} alt="" draggable={false} />
      </div>
    );
  }

  if (count === 2) {
    return (
      <div className="image-grid two">
        {images.map((src, i) => (
          <img key={i} src={src} alt="" draggable={false} />
        ))}
      </div>
    );
  }

  if (count === 3) {
    return (
      <div className="image-grid three">
        {images.map((src, i) => (
          <img key={i} src={src} alt="" draggable={false} />
        ))}
      </div>
    );
  }

  // 4+: 2-col grid
  return (
    <div className="image-grid many">
      {images.map((src, i) => (
        <img key={i} src={src} alt="" draggable={false} />
      ))}
    </div>
  );
}

export default function SlideView({ slide, state }: SlideViewProps) {
  return (
    <div className={`slide ${state}`}>
      <div className="slide-inner">
        {/* Header */}
        <div className="slide-header">
          <h1 className="app-name">{slide.appName}</h1>
          <span className={`app-badge ${slide.type}`}>
            {slide.type === 'shipped' ? 'Shipped' : 'Concept'}
          </span>
        </div>

        {/* Images */}
        <ImageGrid images={slide.images} />
      </div>
    </div>
  );
}
