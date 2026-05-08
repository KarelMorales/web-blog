export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted block mb-1">
              K.Morales
            </span>
            <p className="text-sm text-muted">
              2026 Educational Tour — Karel Morales · BSIT · WMSU
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] tracking-[0.15em] uppercase text-muted">
              Western Mindanao State University
            </p>
            <p className="text-[11px] tracking-[0.15em] uppercase text-muted mt-0.5">
              Zamboanga City, Philippines
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-muted">
            © 2026 Karel Morales. All rights reserved.
          </p>
          <p className="text-xs text-muted">DJM Educational Tour Chronicle</p>
        </div>
      </div>
    </footer>
  );
}
