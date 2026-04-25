const STATS = [
  { label: 'MENTORS', value: '142' },
  { label: 'STUDIES', value: '4,800' },
  { label: 'GRADUATES', value: '89,200' },
]

export default function MetaStrip() {
  return (
    <>
      {/* Desktop: vertical stack, absolute bottom-left */}
      <div
        className="hidden sm:flex absolute left-10 flex-col animate-fade-rise-delay-4"
        style={{ bottom: '3rem' }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="py-3"
            style={{
              borderTop:
                i === 0 ? 'none' : '1px solid rgba(26, 24, 21, 0.08)',
              minWidth: '160px',
            }}
          >
            <div
              className="font-mono uppercase"
              style={{
                fontSize: '10px',
                letterSpacing: '0.18em',
                color: '#6B6660',
              }}
            >
              {s.label} //
            </div>
            <div
              className="font-display text-2xl"
              style={{ color: '#1A1815' }}
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: horizontal divider row */}
      <div className="sm:hidden mt-12 flex items-stretch divide-x divide-ink/10 px-6 animate-fade-rise-delay-4">
        {STATS.map((s) => (
          <div key={s.label} className="flex-1 px-4 first:pl-0">
            <div
              className="font-mono uppercase"
              style={{
                fontSize: '10px',
                letterSpacing: '0.18em',
                color: '#6B6660',
              }}
            >
              {s.label}
            </div>
            <div
              className="font-display text-xl"
              style={{ color: '#1A1815' }}
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
