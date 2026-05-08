import { MapPin } from 'lucide-react';
import PhotoGallery from './PhotoGallery.jsx';

export default function ActivityCard({ activity, index }) {
  const hasTriva = activity.trivia && activity.trivia.length > 0;
  const hasPhotos = activity.photos && activity.photos.length > 0;
  const hasVideos = activity.videos && activity.videos.length > 0;

  return (
    <article className="border-t border-line pt-8 pb-10">
      <div className="flex gap-6 md:gap-10">
        <div className="flex-shrink-0 w-10 md:w-14">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand block mt-1">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-bold text-ink leading-tight mb-2">
            {activity.title}
          </h3>
          {activity.location && (
            <div className="flex items-center gap-1.5 text-muted mb-4">
              <MapPin size={13} strokeWidth={1.5} />
              <span className="text-[13px]">{activity.location}</span>
            </div>
          )}

          <p className="text-body text-[15px] leading-relaxed mb-5 text-justify">
            {activity.description}
          </p>

          {activity.story && (
            <div className="border-l-2 border-brand pl-5 mb-6">
              <p className="text-[14px] text-body leading-relaxed italic">
                {activity.story}
              </p>
            </div>
          )}

          {hasTriva && (
            <div className="bg-surface border border-line p-5">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand mb-3">
                Did You Know
              </p>
              <ul className="space-y-2">
                {activity.trivia.map((fact, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-body leading-snug">
                    <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(hasPhotos || hasVideos) && (
            <PhotoGallery
              photos={activity.photos ?? []}
              videos={activity.videos ?? []}
              className="mt-8"
            />
          )}
        </div>
      </div>
    </article>
  );
}
