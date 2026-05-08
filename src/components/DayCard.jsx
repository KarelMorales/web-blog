import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const themeLabels = {
  heritage: 'Heritage',
  corporate: 'Corporate',
  government: 'Government',
  creative: 'Creative',
  nature: 'Nature',
  mountain: 'Highland',
  closing: 'Synthesis',
};

export default function DayCard({ day, featured = false }) {
  const hasCover = !!day.coverImg;

  return (
    <Link
      to={`/days/${day.slug}`}
      className={`group block relative overflow-hidden ${featured ? 'md:col-span-2' : ''}`}
      style={{ minHeight: featured ? 320 : 220 }}
    >
      {/* Cover photo */}
      {hasCover && (
        <img
          src={day.coverImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      )}

      {/* Gradient overlay — stronger at bottom where text lives */}
      <div
        className="absolute inset-0"
        style={{
          background: hasCover
            ? 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.18) 100%)'
            : 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
        }}
      />

      {/* Brand top-left accent line */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full" style={{ minHeight: featured ? 320 : 220 }}>
        {/* Day number + theme */}
        <div className="flex items-center gap-3 mb-auto">
          <span
            className="text-[42px] md:text-[52px] font-black leading-none tabular-nums"
            style={{ color: hasCover ? '#fff' : '#D32D32', fontVariantNumeric: 'tabular-nums',
                     textShadow: hasCover ? '0 1px 6px rgba(0,0,0,0.4)' : 'none' }}
          >
            {day.dayNum}
          </span>
          <div className={`w-px h-10 ${hasCover ? 'bg-white/30' : 'bg-line'}`} />
          <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${hasCover ? 'text-white/70' : 'text-muted'}`}>
            {themeLabels[day.theme] || day.theme}
          </span>
        </div>

        {/* Title + subtitle pushed to bottom */}
        <div className="mt-6">
          {day.date && (
            <p className={`text-[10px] font-medium tracking-[0.15em] uppercase mb-1.5 ${hasCover ? 'text-white/50' : 'text-muted'}`}>
              {day.date}
            </p>
          )}
          <h3
            className={`font-bold leading-tight mb-1 ${
              featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
            } ${hasCover ? 'text-white' : 'text-ink'}`}
            style={{ textShadow: hasCover ? '0 1px 8px rgba(0,0,0,0.5)' : 'none' }}
          >
            {day.title}
          </h3>

          <p className={`text-[11px] tracking-[0.06em] mb-4 line-clamp-1 ${hasCover ? 'text-white/60' : 'text-muted'}`}>
            {day.subtitle}
          </p>

          {featured && (
            <p className={`text-[13px] leading-relaxed mb-4 max-w-lg line-clamp-2 ${hasCover ? 'text-white/75' : 'text-body'}`}>
              {day.intro.slice(0, 160)}…
            </p>
          )}

          <div className={`flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${
            hasCover
              ? 'text-white/60 group-hover:text-white'
              : 'text-muted group-hover:text-brand'
          }`}>
            <span>Read</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
