import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getTourDay, tourDays } from '../data/tourData.js';
import ActivityCard from '../components/ActivityCard.jsx';
import PhotoGallery from '../components/PhotoGallery.jsx';

const themeLabels = {
  heritage: 'Heritage',
  corporate: 'Corporate',
  government: 'Government',
  creative: 'Creative',
  nature: 'Nature',
  mountain: 'Highland',
  closing: 'Synthesis',
};

export default function DayPage() {
  const { slug } = useParams();
  const day = getTourDay(slug);

  if (!day) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted mb-3">
            Not Found
          </p>
          <h1 className="text-3xl font-black text-ink mb-6">Day not found</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-brand"
          >
            <ArrowLeft size={12} />
            <span>Back to Tour</span>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = tourDays.findIndex((d) => d.slug === slug);
  const prevDay = currentIndex > 0 ? tourDays[currentIndex - 1] : null;
  const nextDay = currentIndex < tourDays.length - 1 ? tourDays[currentIndex + 1] : null;

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="border-b border-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-12 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={11} />
            <span>Tour Log</span>
          </Link>
          <div className="flex items-center gap-2 text-[11px] text-muted">
            <span className="tracking-[0.1em] uppercase">{day.label}</span>
            <span>·</span>
            <span className="tracking-[0.1em] uppercase">{themeLabels[day.theme]}</span>
          </div>
        </div>
      </div>

      {/* Day Header */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-12 md:pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-8">
            <div className="flex items-start gap-5 mb-6">
              <span
                className="text-[72px] md:text-[96px] font-black leading-none tabular-nums flex-shrink-0"
                style={{ color: '#D32D32' }}
              >
                {day.dayNum}
              </span>
              <div className="pt-3">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted mb-2">
                  {day.label} · {themeLabels[day.theme]}{day.date ? ` · ${day.date}` : ''}
                </p>
                <h1 className="text-3xl md:text-4xl font-black text-ink leading-tight">
                  {day.title}
                </h1>
                <p className="text-[13px] text-muted mt-2 tracking-wide">
                  {day.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex items-end">
            <div className="w-full border-l-2 border-brand pl-5 pb-2">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand mb-2">
                Vibe
              </p>
              <p className="text-[13px] text-body leading-snug italic">
                {day.vibe}
              </p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="mt-10 border-t border-line pt-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-4">
              Overview
            </p>
            <p className="text-[16px] text-body leading-relaxed">
              {day.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      {day.activities.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 md:px-10 pb-8">
          <div className="flex items-center gap-4 mb-2">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-muted whitespace-nowrap">
              Activities
            </p>
            <div className="flex-1 h-px bg-line" />
            <span className="text-[11px] text-muted whitespace-nowrap">
              {day.activities.length} {day.activities.length === 1 ? 'stop' : 'stops'}
            </span>
          </div>

          <div>
            {day.activities.map((activity, i) => (
              <ActivityCard key={activity.id} activity={activity} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Photo Gallery */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-16">
        <PhotoGallery photos={day.photos} videos={day.videos} />
      </div>

      {/* Day navigation */}
      <nav className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 divide-x divide-line">
            <div className="py-6 pr-6">
              {prevDay ? (
                <Link
                  to={`/days/${prevDay.slug}`}
                  className="group flex flex-col gap-1 hover:text-brand transition-colors"
                >
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-muted group-hover:text-brand transition-colors">
                    <ArrowLeft size={10} />
                    Previous
                  </span>
                  <span className="text-[15px] font-bold text-ink group-hover:text-brand transition-colors leading-tight">
                    {prevDay.label} — {prevDay.title}
                  </span>
                </Link>
              ) : (
                <Link
                  to="/"
                  className="group flex flex-col gap-1"
                >
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-muted group-hover:text-brand transition-colors">
                    <ArrowLeft size={10} />
                    Back
                  </span>
                  <span className="text-[15px] font-bold text-ink group-hover:text-brand transition-colors">
                    Tour Overview
                  </span>
                </Link>
              )}
            </div>

            <div className="py-6 pl-6 text-right">
              {nextDay && (
                <Link
                  to={`/days/${nextDay.slug}`}
                  className="group flex flex-col gap-1 items-end"
                >
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-muted group-hover:text-brand transition-colors">
                    Next
                    <ArrowRight size={10} />
                  </span>
                  <span className="text-[15px] font-bold text-ink group-hover:text-brand transition-colors leading-tight">
                    {nextDay.label} — {nextDay.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
