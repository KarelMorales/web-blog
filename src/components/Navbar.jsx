import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { tourDays } from '../data/tourData.js';

function DaysDropdown({ currentPath }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isActive = currentPath.startsWith('/days/');

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen((p) => !p)}
        className={`flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${
          isActive ? 'text-brand' : 'text-muted hover:text-ink'
        }`}
      >
        Days
        <ChevronDown
          size={11}
          className="transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 bg-white border border-line shadow-sm w-64 z-50">
          {/* Thin brand top line */}
          <div className="h-[2px] bg-brand w-full" />
          {tourDays.map((day) => (
            <Link
              key={day.slug}
              to={`/days/${day.slug}`}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 border-b border-line last:border-0 transition-colors group ${
                currentPath === `/days/${day.slug}`
                  ? 'bg-surface'
                  : 'hover:bg-surface'
              }`}
            >
              <span
                className="text-[18px] font-black leading-none tabular-nums flex-shrink-0 w-8"
                style={{ color: '#D32D32' }}
              >
                {day.dayNum}
              </span>
              <div className="min-w-0">
                <p className={`text-[12px] font-bold leading-tight truncate ${
                  currentPath === `/days/${day.slug}` ? 'text-brand' : 'text-ink group-hover:text-brand transition-colors'
                }`}>
                  {day.title}
                </p>
                <p className="text-[10px] text-muted truncate mt-0.5">{day.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDaysOpen, setMobileDaysOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const scrollTo = (hash) => {
    setMobileOpen(false);
    if (isHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0" onClick={() => setMobileOpen(false)}>
          <div className="w-[3px] h-6 bg-brand" />
          <span className="text-[13px] font-black tracking-[0.25em] uppercase text-ink group-hover:text-brand transition-colors">
            K.Morales
          </span>
        </Link>

        {/* Desktop nav — right-aligned */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className={`px-3 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${
              isHome && !location.hash ? 'text-brand' : 'text-muted hover:text-ink'
            }`}
          >
            Overview
          </Link>

          <DaysDropdown currentPath={location.pathname} />

          <button
            onClick={() => scrollTo('about')}
            className="px-3 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors"
          >
            About
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="px-3 py-1.5 text-[11px] font-bold tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors"
          >
            Contact
          </button>
        </nav>


        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-line bg-white">
          <nav className="max-w-6xl mx-auto px-6 py-3 flex flex-col">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`py-3 border-b border-line text-[12px] font-bold tracking-[0.15em] uppercase ${
                isHome ? 'text-brand' : 'text-muted'
              }`}
            >
              Overview
            </Link>

            {/* Days expandable */}
            <div className="border-b border-line">
              <button
                onClick={() => setMobileDaysOpen((p) => !p)}
                className="w-full flex items-center justify-between py-3 text-[12px] font-bold tracking-[0.15em] uppercase text-muted"
              >
                <span>Days</span>
                <ChevronDown
                  size={12}
                  className="transition-transform duration-200"
                  style={{ transform: mobileDaysOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                />
              </button>
              {mobileDaysOpen && (
                <div className="pb-2 pl-3 flex flex-col gap-1">
                  {tourDays.map((day) => (
                    <Link
                      key={day.slug}
                      to={`/days/${day.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className={`py-2 flex items-center gap-3 text-[12px] ${
                        location.pathname === `/days/${day.slug}` ? 'text-brand' : 'text-muted'
                      }`}
                    >
                      <span className="font-black text-brand w-6">{day.dayNum}</span>
                      <span className="font-medium">{day.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo('about')}
              className="py-3 border-b border-line text-left text-[12px] font-bold tracking-[0.15em] uppercase text-muted"
            >
              About
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="py-3 text-left text-[12px] font-bold tracking-[0.15em] uppercase text-muted"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
