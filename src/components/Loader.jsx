import { useState, useEffect } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setProgress(55), 120);
    const t2 = setTimeout(() => setProgress(100), 950);
    const t3 = setTimeout(() => setFading(true), 1250);
    const t4 = setTimeout(() => setGone(true), 1750);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
      style={{ opacity: fading ? 0 : 1, transition: 'opacity 500ms ease-out' }}
    >
      {/* Top progress bar */}
      <div className="absolute top-0 left-0 h-[3px] bg-brand" style={{
        width: `${progress}%`,
        transition: progress === 55 ? 'width 700ms ease-out' : 'width 320ms ease-in-out',
      }} />

      {/* Floating geometric accents */}
      <div className="absolute top-12 left-12 w-3 h-3 border border-brand opacity-40" />
      <div className="absolute top-20 left-16 w-1.5 h-1.5 bg-brand opacity-30" />
      <div className="absolute bottom-16 right-14 w-4 h-4 border border-brand opacity-30" style={{ transform: 'rotate(45deg)' }} />
      <div className="absolute bottom-24 right-10 w-2 h-2 bg-brand opacity-20" />
      <div className="absolute top-1/3 left-8 w-px h-16 bg-line" />
      <div className="absolute top-1/3 right-8 w-px h-16 bg-line" />

      {/* Center content */}
      <div className="text-center select-none">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-[3px] h-9 bg-brand" />
          <span className="text-[16px] font-black tracking-[0.45em] uppercase text-ink">
            K.Morales
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-52 h-[2px] bg-line mx-auto overflow-hidden mb-5">
          <div
            className="h-full bg-brand"
            style={{
              width: `${progress}%`,
              transition: progress === 55 ? 'width 700ms ease-out' : 'width 320ms ease-in-out',
            }}
          />
        </div>

        <p className="text-[10px] tracking-[0.3em] uppercase text-muted">
          Karel Morales · WMSU 2026
        </p>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 px-8">
        <div className="flex-1 h-px bg-line max-w-[120px]" />
        <span className="text-[9px] tracking-[0.25em] uppercase text-muted">DJM Educational Tour</span>
        <div className="flex-1 h-px bg-line max-w-[120px]" />
      </div>
    </div>
  );
}
