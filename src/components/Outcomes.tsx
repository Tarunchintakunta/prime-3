import Reveal from './Reveal'

const STATS = [
  {
    value: '94%',
    label: 'COMPLETION RATE',
    note: 'against an industry median near 12%',
  },
  {
    value: '4.9 / 5',
    label: 'MENTOR REVIEW',
    note: 'from 12,400 graduate ratings',
  },
  {
    value: '$118k',
    label: 'MEDIAN OFFER',
    note: 'first engineering role for career-switchers in 2025',
  },
  {
    value: '142',
    label: 'PROJECTS SHIPPED',
    note: 'graduate apps and services deployed last year',
  },
]

export default function Outcomes() {
  return (
    <section className="border-t border-ink/8 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="block h-px bg-ink/20" style={{ width: '48px' }} aria-hidden />
            <span
              className="font-mono uppercase"
              style={{ fontSize: '12px', letterSpacing: '0.18em', color: '#6B6660' }}
            >
              OUTCOMES // 07
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-y-14 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="flex flex-col gap-3">
                <span
                  className="font-display"
                  style={{
                    color: '#1A1815',
                    fontSize: '4rem',
                    letterSpacing: '-2px',
                    lineHeight: 1,
                    fontVariationSettings: "'opsz' 144",
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="font-mono uppercase"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    color: '#6B6660',
                  }}
                >
                  {s.label}
                </span>
                <span style={{ color: '#4A4640', fontSize: '14px', lineHeight: 1.55 }}>
                  {s.note}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
