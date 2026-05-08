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
  return (
    <Link
      to={`/days/${day.slug}`}
      className={`group block border border-line hover:border-ink transition-all duration-200 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`p-6 md:p-8 flex flex-col h-full min-h-[220px] ${featured ? 'md:min-h-[280px]' : ''}`}>
        <div className="flex items-start justify-between mb-auto">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[42px] md:text-[52px] font-black leading-none tabular-nums"
                style={{ color: '#D32D32', fontVariantNumeric: 'tabular-nums' }}
              >
                {day.dayNum}
              </span>
              <div className="w-px h-10 bg-line" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted">
                {themeLabels[day.theme] || day.theme}
              </span>
            </div>

            <h3
              className={`font-bold text-ink leading-tight mb-2 ${
                featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
              }`}
            >
              {day.title}
            </h3>

            <p className="text-[12px] tracking-[0.08em] text-muted uppercase mb-3">
              {day.subtitle}
            </p>

            {featured && (
              <p className="text-[14px] text-body leading-relaxed mt-3 max-w-lg">
                {day.intro.slice(0, 160)}…
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-6 text-[11px] font-bold tracking-[0.15em] uppercase text-muted group-hover:text-brand transition-colors">
          <span>Read</span>
          <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
