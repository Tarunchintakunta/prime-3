import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

type Path = {
  title: string
  duration: string
  studies: number
  description: string
  tracks: string[]
  tone: 'paper' | 'ink' | 'sienna'
}

const PATHS: Path[] = [
  {
    title: 'From Notebook to Manuscript',
    duration: '9 months',
    studies: 4,
    description:
      'A guided arc for writers with a draft in the drawer. Editing, structure, voice, and the long final pass.',
    tracks: ['The Patient Editor', 'Structure & Sentence', 'Voice in Revision', 'The Final Read'],
    tone: 'paper',
  },
  {
    title: 'The Quiet Engineer',
    duration: '12 months',
    studies: 5,
    description:
      'A year for the engineer who wants to build durable, legible systems. Distributed primitives, schema design, and operational craft.',
    tracks: [
      'Quiet Systems',
      'Schema as Story',
      'Operational Calm',
      'On-Call Without Burn',
      'A System You Can Hand Over',
    ],
    tone: 'ink',
  },
  {
    title: 'A Year of Making',
    duration: '12 months',
    studies: 6,
    description:
      'A multi-disciplinary path for designers, photographers, and writers who want a single body of work to show for the year.',
    tracks: [
      'Fieldwork',
      'The Long Lens',
      'Letterforms in Time',
      'Architecture of Care',
      'The Printed Object',
      'The Public Reading',
    ],
    tone: 'sienna',
  },
]

export default function LearningPaths() {
  return (
    <section className="border-t border-ink/8 bg-[#F0E9DA]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeader
          eyebrow="LEARNING PATHS // 05"
          title={
            <>
              For the patient,{' '}
              <em
                className="font-display"
                style={{ fontStyle: 'italic', color: '#C8531A' }}
              >
                a longer arc.
              </em>
            </>
          }
          description="Three multi-study programs for those who want to spend a year in one direction. Each path includes mentor pairing, cohort dinners, and a final public showing."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PATHS.map((p, i) => {
            const dark = p.tone === 'ink' || p.tone === 'sienna'
            const bg =
              p.tone === 'ink' ? '#1A1815' : p.tone === 'sienna' ? '#C8531A' : '#F5F1EA'
            const fg = dark ? '#F5F1EA' : '#1A1815'
            const muted = dark ? 'rgba(245,241,234,0.7)' : '#4A4640'
            const subtle = dark ? 'rgba(245,241,234,0.5)' : '#6B6660'
            const ruleColor = dark
              ? 'rgba(245,241,234,0.15)'
              : 'rgba(26,24,21,0.10)'
            return (
              <Reveal key={p.title} delay={i * 120}>
                <article
                  className="flex h-full flex-col gap-6 rounded-2xl p-8 lg:p-10"
                  style={{ background: bg, color: fg }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono uppercase"
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        color: subtle,
                      }}
                    >
                      Path 0{i + 1}
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.14em',
                        color: subtle,
                      }}
                    >
                      {p.duration.toUpperCase()} · {p.studies} STUDIES
                    </span>
                  </div>

                  <h3
                    className="font-display text-3xl lg:text-4xl"
                    style={{
                      color: fg,
                      lineHeight: 1.05,
                      letterSpacing: '-0.6px',
                    }}
                  >
                    {p.title}
                  </h3>

                  <p
                    className="text-base"
                    style={{ color: muted, lineHeight: 1.65 }}
                  >
                    {p.description}
                  </p>

                  <ul className="mt-2 flex flex-col">
                    {p.tracks.map((t, idx) => (
                      <li
                        key={t}
                        className="flex items-center justify-between py-3"
                        style={{
                          borderTop:
                            idx === 0 ? 'none' : `1px solid ${ruleColor}`,
                        }}
                      >
                        <span style={{ color: fg, fontSize: '14.5px' }}>
                          {t}
                        </span>
                        <span
                          className="font-mono"
                          style={{ fontSize: '11px', color: subtle }}
                        >
                          0{idx + 1}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="cta-button mt-auto inline-flex items-center justify-between gap-2 rounded-full px-6 py-3 text-sm"
                    style={{
                      background: dark ? '#F5F1EA' : '#1A1815',
                      color: dark ? '#1A1815' : '#F5F1EA',
                    }}
                  >
                    <span>Apply for this path</span>
                    <span className="cta-arrow">→</span>
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
