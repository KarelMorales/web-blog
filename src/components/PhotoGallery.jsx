import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const THUMB_COUNT = 6;

function Lightbox({ photos, initialIndex, onClose }) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + photos.length) % photos.length),
    [photos.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next, onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/96 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center border border-white/25 text-white/60 hover:text-white hover:border-white/60 transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={17} />
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-white/25 text-white/60 hover:text-white hover:border-white/60 transition-colors"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous photo"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Photo */}
      <div
        className="flex flex-col items-center w-full max-w-5xl px-20"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={current}
          src={photos[current]}
          alt=""
          className="max-w-full max-h-[80vh] object-contain"
        />
        <p className="mt-4 text-[11px] tracking-[0.25em] uppercase text-white/35 font-medium">
          {current + 1} / {photos.length}
        </p>
      </div>

      {/* Next */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-white/25 text-white/60 hover:text-white hover:border-white/60 transition-colors"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next photo"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

function VideoCarousel({ videos }) {
  const [activeV, setActiveV] = useState(0);

  const prevV = () => setActiveV((v) => (v - 1 + videos.length) % videos.length);
  const nextV = () => setActiveV((v) => (v + 1) % videos.length);

  return (
    <div className="mt-12">
      <div className="flex items-center gap-4 mb-5">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted">
          Video Record
        </p>
        <div className="flex-1 h-px bg-line" />
        <span className="text-[11px] text-muted">{videos.length} clips</span>
      </div>

      {/* Main video */}
      <div className="relative border border-line bg-surface">
        <video
          key={videos[activeV]}
          src={videos[activeV]}
          controls
          className="w-full aspect-video"
          preload="metadata"
        >
          <track kind="captions" />
          Video clip {activeV + 1}
        </video>
        {/* Counter */}
        <div className="absolute bottom-3 right-3 bg-black/60 px-2.5 py-1 text-[11px] tracking-[0.1em] font-medium text-white pointer-events-none">
          {activeV + 1} / {videos.length}
        </div>
      </div>

      {/* Prev / Next */}
      {videos.length > 1 && (
        <div className="flex items-stretch gap-2 mt-2">
          <button
            onClick={prevV}
            className="w-9 h-9 flex items-center justify-center border border-line text-muted hover:text-ink hover:border-ink transition-colors"
            aria-label="Previous video"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Clip strip */}
          <div className="flex gap-1.5 flex-1 overflow-hidden">
            {videos.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveV(i)}
                aria-label={`Go to clip ${i + 1}`}
                className={`flex-1 h-9 flex items-center justify-center text-[10px] font-bold tracking-[0.15em] uppercase transition-all border-2 ${
                  i === activeV
                    ? 'border-brand bg-brand text-white'
                    : 'border-line bg-surface text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
          </div>

          <button
            onClick={nextV}
            className="w-9 h-9 flex items-center justify-center border border-line text-muted hover:text-ink hover:border-ink transition-colors"
            aria-label="Next video"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function PhotoGallery({ photos = [], videos = [], className = 'mt-16' }) {
  const [active, setActive] = useState(0);
  const [winStart, setWinStart] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const goTo = useCallback(
    (idx) => {
      const i = ((idx % photos.length) + photos.length) % photos.length;
      setActive(i);
      setWinStart((ws) => {
        if (i < ws) return i;
        if (i >= ws + THUMB_COUNT) return i - THUMB_COUNT + 1;
        return ws;
      });
    },
    [photos.length]
  );

  if (photos.length === 0 && videos.length === 0) return null;

  const visibleThumbs = photos.slice(winStart, winStart + THUMB_COUNT);
  const emptySlots = THUMB_COUNT - visibleThumbs.length;

  return (
    <section className={className}>
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted">
          Photo Record
        </p>
        <div className="flex-1 h-px bg-line" />
        {photos.length > 0 && (
          <span className="text-[11px] text-muted">{photos.length} photos</span>
        )}
      </div>

      {photos.length > 0 && (
        <div className="select-none">
          {/* ── Main photo ── */}
          <div
            className="relative group cursor-zoom-in border border-line overflow-hidden bg-surface"
            style={{ aspectRatio: '16/10' }}
            onClick={() => setLightbox(true)}
          >
            <img
              src={photos[active]}
              alt=""
              className="w-full h-full object-cover transition-opacity duration-150"
            />

            {/* Hover overlay + zoom icon */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-black/55 p-3">
                <ZoomIn size={20} className="text-white" />
              </div>
            </div>

            {/* Counter badge */}
            <div className="absolute bottom-3 right-3 bg-black/60 px-2.5 py-1 text-[11px] tracking-[0.1em] font-medium text-white pointer-events-none">
              {active + 1} / {photos.length}
            </div>
          </div>

          {/* ── Thumbnails + nav ── */}
          <div className="flex items-stretch gap-2 mt-2">
            {/* Prev button */}
            <button
              onClick={() => goTo(active - 1)}
              className="w-9 flex-shrink-0 flex items-center justify-center border border-line text-muted hover:text-ink hover:border-ink transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Thumbnail strip */}
            <div className="flex gap-1.5 flex-1">
              {visibleThumbs.map((src, i) => {
                const idx = winStart + i;
                const isActive = idx === active;
                return (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    aria-label={`Go to photo ${idx + 1}`}
                    className={`flex-1 h-[70px] overflow-hidden transition-all duration-150 flex-shrink-0 ${
                      isActive
                        ? 'border-2 border-brand opacity-100'
                        : 'border-2 border-transparent opacity-50 hover:opacity-85 hover:border-line'
                    }`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                );
              })}

              {/* Empty placeholder slots */}
              {Array.from({ length: emptySlots }).map((_, i) => (
                <div
                  key={`pad-${i}`}
                  className="flex-1 h-[70px] bg-surface border-2 border-line opacity-25 flex-shrink-0"
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={() => goTo(active + 1)}
              className="w-9 flex-shrink-0 flex items-center justify-center border border-line text-muted hover:text-ink hover:border-ink transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ── Videos ── */}
      {videos.length > 0 && (
        <VideoCarousel videos={videos} />
      )}

      {lightbox && (
        <Lightbox
          photos={photos}
          initialIndex={active}
          onClose={() => setLightbox(false)}
        />
      )}
    </section>
  );
}
