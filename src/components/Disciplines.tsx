import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const DISCIPLINES = [
  { name: 'Writing & Editing', count: 38 },
  { name: 'Software & Systems', count: 47 },
  { name: 'Photography & Film', count: 24 },
  { name: 'Type & Letterforms', count: 19 },
  { name: 'Sound & Music', count: 16 },
  { name: 'Product & Service Design', count: 31 },
  { name: 'Research & Inquiry', count: 22 },
  { name: 'Practice & Pedagogy', count: 14 },
]

export default function Disciplines() {
  return (
    <section className="border-t border-ink/8 bg-[#EFE8DA]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeader
          eyebrow="DISCIPLINES // 03"
          title={
            <>
              Eight ways into{' '}
              <em
                className="font-display"
                style={{ fontStyle: 'italic', color: '#C8531A' }}
              >
                a quieter practice.
              </em>
            </>
          }
        />

        <ul className="mt-16 grid grid-cols-1 md:grid-cols-2">
          {DISCIPLINES.map((d, i) => (
            <Reveal key={d.name} delay={i * 60}>
              <li>
                <a
                  href="#"
                  className="group flex items-baseline justify-between border-t border-ink/10 py-7 transition-colors"
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <span
                    className="font-display text-3xl lg:text-4xl"
                    style={{
                      color: '#1A1815',
                      letterSpacing: '-0.4px',
                      transition: 'color 200ms',
                    }}
                  >
                    {d.name}
                  </span>
                  <span className="flex items-center gap-3">
                    <span
                      className="font-mono text-sm"
                      style={{ color: '#6B6660' }}
                    >
                      {d.count.toString().padStart(3, '0')}
                    </span>
                    <span
                      className="font-display text-2xl cta-arrow"
                      style={{ color: '#1A1815' }}
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
