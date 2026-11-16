import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, setCurrentIndex, isOpen, onClose }) {
  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length, setCurrentIndex]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length, setCurrentIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextImage, prevImage, onClose]);

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 backdrop-blur-md">
      {/* Top Header */}
      <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
        <div className="text-xs uppercase tracking-widest text-neutral-400">
          Architectural Gallery • Image {currentIndex + 1} of {images.length}
        </div>
        <button
          onClick={onClose}
          className="p-2 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center py-4 max-h-[78vh]">
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 z-10 p-3 bg-black/50 text-white hover:bg-black/80 transition-colors border border-white/20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={images[currentIndex]}
          alt={`Gallery view ${currentIndex + 1}`}
          className="max-h-full max-w-full object-contain shadow-2xl"
        />

        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 z-10 p-3 bg-black/50 text-white hover:bg-black/80 transition-colors border border-white/20"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="flex items-center justify-center gap-3 overflow-x-auto py-2 no-scrollbar">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-16 h-12 flex-shrink-0 overflow-hidden border-2 transition-all ${
              idx === currentIndex
                ? 'border-brand-accent scale-105'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt="thumb" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
