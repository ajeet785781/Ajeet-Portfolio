// src/components/BeyondAcademics.jsx
import React, { useState } from 'react';
import { beyondAcademics } from '../data/portfolioData';
import Lightbox from './Lightbox';

export default function BeyondAcademics() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Build a flat list of all photos for the Lightbox (used when any thumbnail is clicked)
  const allPhotos = beyondAcademics.flatMap(item => item.media.photos || []);
  const images = allPhotos;

  // Pre-compute offsets for each item's photos to map local index to global index
  const photoOffsets = beyondAcademics.map((_, i) =>
    beyondAcademics.slice(0, i).reduce((sum, prev) => sum + (prev.media.photos?.length || 0), 0)
  );

  // Open Lightbox at the correct global photo index
  const openLightboxAt = (globalIdx) => {
    setCurrentIndex(globalIdx);
    setLightboxOpen(true);
  };

  const openLightbox = (idx) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <section id="beyond-academics" className="section beyond-academics-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>🌟</span> <span>Beyond Academics</span>
          </div>
          <h2 className="section-title">Beyond <span className="text-gradient">Academics</span></h2>
          <p className="section-subtitle">Professional showcase of extracurricular passions.</p>
        </div>
        <div className="beyond-cards-container">
          {beyondAcademics.map((item, sectionIdx) => (
            <div key={item.id} className="beyond-section-card card-glass card-glow-line">
              <div className="beyond-card-header">
                <div className="beyond-badge-row">
                  <span className="badge badge-cyan">{item.category}</span>
                </div>
                <h3 className="beyond-card-title">{item.title}</h3>
                <p className="beyond-card-desc">{item.description}</p>
              </div>

              {/* Photo Gallery */}
              {item.media.photos && item.media.photos.length > 0 && (
                <div className="beyond-gallery-block">
                  <h4 className="beyond-sub-heading">📸 Photographs</h4>
                  <div className="photos-grid">
                    {item.media.photos.map((src, photoIdx) => {
                      const globalIdx = photoOffsets[sectionIdx] + photoIdx;
                      return (
                        <div
                          key={photoIdx}
                          className="photo-card-wrap"
                          onClick={() => openLightboxAt(globalIdx)}
                          title="Click to view full photo"
                        >
                          <img
                            src={src}
                            alt={`${item.title} photo ${photoIdx + 1}`}
                            className="photo-thumb"
                          />
                          <div className="photo-overlay">
                            <span className="photo-zoom-tag">🔍 View Photo</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Video Gallery */}
              {item.media.videos && item.media.videos.length > 0 && (
                <div className="beyond-gallery-block" style={{ marginTop: item.media.photos?.length > 0 ? '1.5rem' : '0' }}>
                  <h4 className="beyond-sub-heading">🎬 Videos</h4>
                  <div className="videos-grid">
                    {item.media.videos.map((src, vidIdx) => (
                      <div key={vidIdx} className="video-card-wrap">
                        <video
                          src={src}
                          controls
                          className="video-player"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Placeholder only if neither photos nor videos exist */}
              {(!item.media.photos || item.media.photos.length === 0) &&
               (!item.media.videos || item.media.videos.length === 0) && (
                <div className="beyond-media-placeholder">
                  <p className="placeholder-text">📷 Media will be added soon</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {lightboxOpen && (
          <Lightbox
            images={images}
            currentIndex={currentIndex}
            onClose={() => setLightboxOpen(false)}
            onPrev={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
            onNext={() => setCurrentIndex((currentIndex + 1) % images.length)}
          />
        )}
      </div>
    </section>
  );
}
