'use client';

import { useState } from 'react';
import { ShowcaseSlide } from '../data/slides';
import Lightbox from './Lightbox';

interface SlideViewProps {
  slide: ShowcaseSlide;
  state: 'active' | 'above' | 'below';
}

function StandardGrid({ images, fit = 'contain' }: { images: string[]; fit?: 'contain' | 'cover' }) {
  const count = images.length;
  if (count === 0) {
    return (
      <div className="image-placeholder">
        <span>Drop images in /public and reference them in slides.ts</span>
      </div>
    );
  }
  const cls = count === 1 ? 'single' : count === 2 ? 'two' : count === 3 ? 'three' : 'many';
  return (
    <div className={`image-grid ${cls}`}>
      {images.map((src, i) => (
        <img key={i} src={src} alt="" draggable={false} style={{ objectFit: fit }} />
      ))}
    </div>
  );
}

function BentoGrid({ slide }: { slide: ShowcaseSlide }) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const cells = slide.bentoCells ?? [];

  return (
    <>
      <div
        className="bento-grid"
        style={{
          gridTemplateAreas: slide.bentoAreas,
          gridTemplateColumns: slide.bentoCols ?? '1fr 1fr 1fr',
          gridTemplateRows: slide.bentoRows ?? '1fr 1fr',
        }}
      >
        {cells.map((cell) => (
          <button
            key={cell.area}
            className="bento-cell"
            style={{ gridArea: cell.area }}
            onClick={() => setLightbox(cell.src)}
            aria-label={`Expand ${cell.area}`}
          >
            <img
              src={cell.src}
              alt=""
              draggable={false}
              style={{ objectFit: cell.fit ?? 'cover' }}
            />
            <div className="bento-expand-hint">↗</div>
          </button>
        ))}
      </div>

      {lightbox && (
        <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}

export default function SlideView({ slide, state }: SlideViewProps) {
  return (
    <div className={`slide ${state}`}>
      <div className="slide-inner">
        <div className="slide-header">
          <div className="slide-header-top">
            <h1 className="app-name">{slide.appName}</h1>
            <span className={`app-badge ${slide.type}`}>
              {slide.type === 'shipped' ? 'Shipped' : slide.type === 'in-development' ? 'In Development' : 'Concept'}
            </span>
            {slide.url && (
              <a
                href={`https://${slide.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="app-url"
              >
                {slide.url} ↗
              </a>
            )}
          </div>
          {slide.description && (
            <p className="slide-description">{slide.description}</p>
          )}
        </div>

        {slide.layout === 'bento' ? (
          <BentoGrid slide={slide} />
        ) : (
          <StandardGrid images={slide.images ?? []} fit={slide.imageFit} />
        )}
      </div>
    </div>
  );
}
