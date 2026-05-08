import { Link } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { ArrowDown } from "lucide-react";
import DayCard from "../components/DayCard.jsx";
import { tourDays } from "../data/tourData.js";

const HERO_TEXT = "7 Days\nAcross\nthe Philippines.";

function useTypewriter(text, typeMs = 70, eraseMs = 32, pauseMs = 2600) {
  const [pos, setPos] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    let t;
    if (!erasing) {
      if (pos < text.length) {
        t = setTimeout(() => setPos((p) => p + 1), typeMs);
      } else {
        t = setTimeout(() => setErasing(true), pauseMs);
      }
    } else {
      if (pos > 0) {
        t = setTimeout(() => setPos((p) => p - 1), eraseMs);
      } else {
        setErasing(false);
      }
    }
    return () => clearTimeout(t);
  }, [pos, erasing, text, typeMs, eraseMs, pauseMs]);

  return text.slice(0, pos);
}

const stats = [
  { value: "07", label: "Days" },
  { value: "03", label: "Cities" },
  { value: "12", label: "Sites" },
  { value: "01", label: "Graduate" },
];

const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IgIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const GhIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);

const socials = [
  {
    Icon: FbIcon,
    label: "Facebook",
    handle: "Karel Morales",
    href: "https://www.facebook.com/karel.morales.549",
    color: "#1877F2",
  },
  {
    Icon: IgIcon,
    label: "Instagram",
    handle: "@xo.karelll",
    href: "https://www.instagram.com/xo.karelll",
    color: "#E1306C",
  },
  {
    Icon: GhIcon,
    label: "GitHub",
    handle: "KarelMorales",
    href: "https://github.com/KarelMorales",
    color: "#0A0A0A",
  },
  {
    Icon: LiIcon,
    label: "LinkedIn",
    handle: "Karel Morales",
    href: "https://www.linkedin.com/in/karel-morales-45686a3b0/",
    color: "#0A66C2",
  },
];

export default function Home() {
  const [featured, ...rest] = tourDays;
  const typed = useTypewriter(HERO_TEXT);

  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden flex items-center min-h-[65vh] md:min-h-[calc(100vh-64px)]">
        {/* ── Geometric right block ── */}
        <div
          className="absolute inset-y-0 right-0 w-[48%] bg-brand hidden md:block overflow-hidden"
          style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0% 100%)" }}
          aria-hidden="true"
        >
          {/* Dot-grid texture */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.1 }}
          >
            <defs>
              <pattern
                id="hero-dots"
                x="0"
                y="0"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-dots)" />
          </svg>

          {/* Diagonal slash lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.06 }}
          >
            <line
              x1="0%"
              y1="0"
              x2="100%"
              y2="100%"
              stroke="white"
              strokeWidth="1"
            />
            <line
              x1="20%"
              y1="0"
              x2="120%"
              y2="100%"
              stroke="white"
              strokeWidth="0.8"
            />
            <line
              x1="-20%"
              y1="0"
              x2="80%"
              y2="100%"
              stroke="white"
              strokeWidth="0.8"
            />
            <line
              x1="40%"
              y1="0"
              x2="140%"
              y2="100%"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="-40%"
              y1="0"
              x2="60%"
              y2="100%"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>

          {/* Large circle outlines — animated */}
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-white"
            style={{
              opacity: 0.08,
              animation: "float-a 9s ease-in-out infinite",
            }}
          />
          <div
            className="absolute -top-4 -right-4 w-44 h-44 rounded-full border border-white"
            style={{
              opacity: 0.07,
              animation: "float-b 7s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-[10%] left-[10%] w-40 h-40 rounded-full border border-white"
            style={{
              opacity: 0.07,
              animation: "float-c 11s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-[40%] right-[5%] w-20 h-20 rounded-full border border-white"
            style={{
              opacity: 0.1,
              animation: "float-d 6s ease-in-out infinite",
            }}
          />

          {/* Plus / cross marks */}
          <div
            className="absolute top-[22%] left-[28%] w-5 h-5"
            style={{ opacity: 0.18 }}
          >
            <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
          </div>
          <div
            className="absolute top-[68%] left-[48%] w-6 h-6"
            style={{ opacity: 0.13 }}
          >
            <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
          </div>
          <div
            className="absolute bottom-[28%] right-[12%] w-4 h-4"
            style={{ opacity: 0.15 }}
          >
            <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
          </div>

          {/* Scattered squares / rects */}
          <div
            className="absolute top-[10%] left-[32%] w-4 h-4 border border-white"
            style={{ opacity: 0.18, transform: "rotate(18deg)" }}
          />
          <div
            className="absolute top-[14%] left-[38%] w-2 h-2 bg-white"
            style={{ opacity: 0.2 }}
          />
          <div
            className="absolute top-[30%] left-[20%] w-6 h-6 border border-white"
            style={{ opacity: 0.12, transform: "rotate(35deg)" }}
          />
          <div
            className="absolute top-[55%] left-[15%] w-3 h-3 bg-white"
            style={{ opacity: 0.12 }}
          />
          <div
            className="absolute top-[78%] left-[35%] w-5 h-5 border border-white"
            style={{ opacity: 0.13, transform: "rotate(-22deg)" }}
          />
          <div
            className="absolute bottom-[15%] right-[22%] w-4 h-4 border border-white"
            style={{ opacity: 0.15, transform: "rotate(45deg)" }}
          />
          <div
            className="absolute bottom-[10%] right-[10%] w-2 h-2 bg-white"
            style={{ opacity: 0.2 }}
          />
          <div
            className="absolute top-[48%] right-[6%] w-7 h-7 border border-white"
            style={{ opacity: 0.1, transform: "rotate(12deg)" }}
          />
          <div
            className="absolute top-[8%] right-[18%] w-3 h-8 border border-white"
            style={{ opacity: 0.1 }}
          />

          {/* Thin horizontal rules */}
          <div
            className="absolute top-[28%] left-[18%] right-[4%] h-px bg-white"
            style={{ opacity: 0.07 }}
          />
          <div
            className="absolute bottom-[28%] left-[18%] right-[4%] h-px bg-white"
            style={{ opacity: 0.07 }}
          />

          {/* Diagonal left edge */}
          <div
            className="absolute inset-y-0 left-0 w-[3px] bg-white"
            style={{ opacity: 0.14 }}
          />

          {/* Stats cards — staggered editorial layout */}
          <div
            className="absolute inset-0 flex items-center"
            style={{ paddingLeft: "24%", paddingRight: "8%" }}
          >
            <div className="flex gap-3 w-full">
              {/* Left column — starts higher */}
              <div className="flex flex-col gap-3 flex-1">
                {[stats[0], stats[2]].map((s) => (
                  <div
                    key={s.label}
                    className="border border-white/20 p-5 flex flex-col gap-2"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <span className="text-[clamp(28px,3.5vw,44px)] font-black text-white leading-none">
                      {s.value}
                    </span>
                    <div className="w-5 h-px bg-white/30" />
                    <p className="text-[8px] font-bold tracking-[0.22em] uppercase text-white/50">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right column — offset down for stagger */}
              <div className="flex flex-col gap-3 flex-1 mt-8">
                {[stats[1], stats[3]].map((s) => (
                  <div
                    key={s.label}
                    className="border border-white/20 p-5 flex flex-col gap-2"
                    style={{ background: "rgba(0,0,0,0.08)" }}
                  >
                    <span className="text-[clamp(28px,3.5vw,44px)] font-black text-white leading-none">
                      {s.value}
                    </span>
                    <div className="w-5 h-px bg-white/30" />
                    <p className="text-[8px] font-bold tracking-[0.22em] uppercase text-white/50">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Geometric accents — white side ── */}
        <div aria-hidden="true">
          {/* Desktop accents */}
          <div className="absolute top-[20%] left-6 w-px h-20 bg-line hidden lg:block" />
          <div className="absolute top-[15%] left-[38%] w-2 h-2 bg-brand hidden md:block" />
          <div
            className="absolute top-[40%] left-[42%] w-4 h-4 border border-brand hidden md:block"
            style={{ transform: "rotate(45deg)" }}
          />
          <div className="absolute bottom-[18%] left-[30%] w-1.5 h-1.5 bg-brand hidden md:block" />
          <div className="absolute top-[12%] left-[36%] w-6 h-px bg-line hidden md:block" />
          <div className="absolute top-[12%] left-[36%] w-px h-6 bg-line hidden md:block" />

          {/* Mobile-only animated shapes on the white side */}
          <div className="md:hidden">
            {/* Large circle top-right */}
            <div
              className="absolute -top-10 -right-10 w-56 h-56 rounded-full border border-brand"
              style={{
                opacity: 0.12,
                animation: "float-a 9s ease-in-out infinite",
              }}
            />
            {/* Medium circle bottom-left */}
            <div
              className="absolute bottom-[4%] -left-8 w-40 h-40 rounded-full border border-brand"
              style={{
                opacity: 0.1,
                animation: "float-c 11s ease-in-out infinite",
              }}
            />
            {/* Small circle mid-right */}
            <div
              className="absolute top-[42%] right-5 w-16 h-16 rounded-full border border-brand"
              style={{
                opacity: 0.15,
                animation: "float-d 6s ease-in-out infinite",
              }}
            />
            {/* Rotated square top-right */}
            <div
              className="absolute top-[16%] right-10 w-5 h-5 border border-brand"
              style={{ opacity: 0.22, transform: "rotate(25deg)" }}
            />
            {/* Tiny filled square */}
            <div
              className="absolute top-[28%] right-16 w-2 h-2 bg-brand"
              style={{ opacity: 0.3 }}
            />
            {/* Cross mark bottom-right */}
            <div
              className="absolute bottom-[22%] right-7 w-6 h-6"
              style={{ opacity: 0.2 }}
            >
              <div className="absolute top-1/2 left-0 w-full h-px bg-brand" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-brand" />
            </div>
            {/* Thin vertical rule */}
            <div
              className="absolute top-[24%] right-6 w-px h-14 bg-brand"
              style={{ opacity: 0.15 }}
            />
            {/* Bottom dot */}
            <div
              className="absolute bottom-[14%] left-8 w-1.5 h-1.5 bg-brand"
              style={{ opacity: 0.3 }}
            />
          </div>
        </div>

        {/* ── Hero content ── */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 flex items-center min-h-[65vh] md:min-h-[calc(100vh-64px)]">
          <div className="py-20 md:py-0 md:w-[52%] md:pr-12">
            <h1
              className="font-black leading-[0.88] tracking-tight text-ink mb-8"
              style={{ fontSize: "clamp(52px, 7.5vw, 100px)" }}
            >
              {typed.split("\n").map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {i === 0 ? <span className="text-brand">{line}</span> : line}
                </Fragment>
              ))}
              <span
                className="inline-block w-[3px] bg-brand"
                style={{
                  height: "0.82em",
                  verticalAlign: "text-bottom",
                  marginLeft: "3px",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </h1>

            <div className="w-14 h-[3px] bg-brand mb-7" />

            <div className="flex items-center gap-4 mt-10">
              <a
                href="#days"
                className="inline-flex items-center gap-2 bg-brand text-white text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3 hover:bg-brand-dark transition-colors"
              >
                <span>Read the Tour</span>
                <ArrowDown size={11} />
              </a>
              <a
                href="#about"
                className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors"
              >
                About Karel
              </a>
            </div>
          </div>
        </div>

        {/* ── Mobile-only: thin red bottom bar instead of the big block ── */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-brand md:hidden" />
      </section>

      {/* Day cards */}
      <section id="days" className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="flex items-center gap-4 mb-10">
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-muted whitespace-nowrap">
            The Tour
          </p>
          <div className="flex-1 h-px bg-line" />
          <p className="text-[11px] text-muted whitespace-nowrap">8 entries</p>
        </div>

        {/* Mobile: flat 2-column grid, all days equal */}
        <div className="grid grid-cols-2 gap-px bg-line border border-line md:hidden">
          {tourDays.map((day) => (
            <DayCard key={day.slug} day={day} />
          ))}
        </div>

        {/* Desktop: editorial mosaic */}
        <div className="hidden md:grid md:grid-cols-3 gap-px bg-line border border-line">
          {/* Day 0 — spans 2 cols */}
          <DayCard day={featured} featured />

          {/* Days 1–2 stacked in col 3 */}
          <div className="flex flex-col gap-px">
            {rest.slice(0, 2).map((day) => (
              <DayCard key={day.slug} day={day} />
            ))}
          </div>

          {/* Days 3–5 across 3 cols */}
          {rest.slice(2, 5).map((day) => (
            <DayCard key={day.slug} day={day} />
          ))}

          {/* Day 6 Burnham — spans 2 cols, Day 7 Going Home — 1 col */}
          <div className="col-span-2">
            <DayCard day={rest[5]} featured />
          </div>
          <DayCard day={rest[6]} />
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-muted mb-6">
                About This Tour
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-ink leading-tight mb-6">
                Karel Morales
                <br />
                <span className="text-muted font-normal text-2xl">
                  4th Year | BSIT
                </span>
              </h2>
              <div className="w-12 h-0.5 bg-brand mb-6" />
              <p className="text-[15px] text-muted leading-relaxed font-normal mb-4 text-justify">
                This tour log documents the 2026 DJM Educational Tour, a
                seven-day programme organised for graduating BSIT students at
                Western Mindanao State University. The tour moved through
                Manila, Tagaytay, and Baguio, with visits to government
                agencies, private corporations, animation studios, military
                installations, and cultural sites.
              </p>
              <p className="text-[15px] text-muted leading-relaxed font-normal mb-4 text-justify">
                Karel Morales is a graduating student from Western Mindanao
                State university, a prestigious institution in Zamboanga City.
                This tour is documented from her perspective as a woman in IT:
                what technical environments look like from the inside, what
                career pathways exist, and what the country's infrastructure
                looks like when you're close enough to read the signs.
              </p>
              <p className="text-[15px] text-muted leading-relaxed font-normal text-justify">
                Each entry is part field notes, part reflection. The goal was
                never to be comprehensive, it was to be honest about what it
                felt like to move through these spaces as a final-year IT
                student seeing professional infrastructure at full scale for the
                first time.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="border border-line p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-4">
                  Tour Details
                </p>
                {[
                  ["Programme", "DJM Educational Tour"],
                  ["Year", "2026"],
                  ["Duration", "7 Days"],
                  ["Destinations", "Manila · Tagaytay · Baguio"],
                  ["University", "WMSU, Zamboanga City"],
                  ["Degree", "Bachelor of Science in IT"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between py-2.5 border-b border-line last:border-0"
                  >
                    <span className="text-[12px] text-muted">{label}</span>
                    <span className="text-[12px] font-medium text-ink text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-brand p-6">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 mb-3">
                  Woman in IT
                </p>
                <p className="text-[14px] text-white leading-relaxed">
                  This tour is officially documented as the 2026 Educational
                  Tour of Karel Morales, focusing on her perspective as a woman
                  navigating the Philippine technology and government sector
                  landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-16">
          <div className="flex items-center gap-4 mb-10">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-muted whitespace-nowrap">
              Connect
            </p>
            <div className="flex-1 h-px bg-line" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {socials.map(({ Icon, label, handle, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-line p-5 hover:border-ink transition-all duration-200 block"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} style={{ color }} />
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted">
                    {label}
                  </span>
                </div>
                <p className="text-[13px] font-medium text-ink group-hover:text-brand transition-colors">
                  {handle}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
