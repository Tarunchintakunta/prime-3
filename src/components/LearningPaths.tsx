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
    title: 'From Beginner to Python Engineer',
    duration: '9 months',
    studies: 4,
    description:
      'A guided arc for first-time programmers. Syntax to systems, with one shipped project per study and a working backend by month nine.',
    tracks: [
      'Python Foundations',
      'Data Structures & SQL',
      'APIs with FastAPI',
      'A Service in Production',
    ],
    tone: 'paper',
  },
  {
    title: 'The Modern AI Engineer',
    duration: '12 months',
    studies: 5,
    description:
      'For engineers building with foundation models. Train, fine-tune, evaluate, deploy — and learn to tell when a prompt is the answer and when it is not.',
    tracks: [
      'Python for ML',
      'Machine Learning with PyTorch',
      'Building LLM Applications',
      'RAG, Agents & Evals',
      'Shipping AI in Production',
    ],
    tone: 'ink',
  },
  {
    title: 'Full-Stack Production Track',
    duration: '12 months',
    studies: 6,
    description:
      'A year for engineers who want to own a feature from database to deploy. Backend, frontend, infra, and the operational craft to keep it standing.',
    tracks: [
      'Python Foundations',
      'Production React & TypeScript',
      'Data Engineering with SQL & Python',
      'Cloud-Native Systems on AWS',
      'Observability & On-Call',
      'A Public Launch',
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
          description="Three multi-study programs for engineers who want to spend a year going deep. Each path includes mentor pairing, cohort code reviews, and a public final project."
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
