'use client';

import { useEffect } from 'react';

interface LightboxProps {
  src: string;
  onClose: () => void;
}

export default function Lightbox({ src, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
    >
      <img
        src={src}
        alt=""
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
        draggable={false}
      />
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ✕
      </button>
    </div>
  );
}
