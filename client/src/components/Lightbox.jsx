// src/components/Lightbox.jsx
import React, { useEffect } from 'react';

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  // Close on ESC key and navigate with arrows
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  if (!images || currentIndex < 0 || currentIndex >= images.length) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>✕</button>
        <button className="lightbox-prev" onClick={onPrev}>←</button>
        <img src={images[currentIndex]} alt="gallery" className="lightbox-image" />
        <button className="lightbox-next" onClick={onNext}>→</button>
      </div>
    </div>
  );
}
