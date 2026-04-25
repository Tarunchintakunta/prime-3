import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

type Mentor = {
  name: string
  discipline: string
  bio: string
  tone: 'ink' | 'sienna' | 'paper' | 'ivory' | 'olive' | 'rose'
}

const MENTORS: Mentor[] = [
  {
    name: 'Mira Kovač',
    discipline: 'Writing',
    bio: 'Editor at Granta. Three published novels in translation.',
    tone: 'paper',
  },
  {
    name: 'Theo Bayard',
    discipline: 'Software',
    bio: 'Distributed systems at a small bank. Quiet, allergic to dashboards.',
    tone: 'ink',
  },
  {
    name: 'Anouk Devereux',
    discipline: 'Photography',
    bio: 'Long-form documentary. Two monographs with Aperture.',
    tone: 'sienna',
  },
  {
    name: 'Hideo Tachibana',
    discipline: 'Type Design',
    bio: 'Designs typefaces for newspapers, museums, and the occasional opera.',
    tone: 'olive',
  },
  {
    name: 'Eli Marchetti',
    discipline: 'Sound',
    bio: 'Composer, audio engineer, and a stubborn defender of analog reverb.',
    tone: 'rose',
  },
  {
    name: 'Yusra Hadid',
    discipline: 'Product Design',
    bio: 'Service design for public health. Believes the default is a moral choice.',
    tone: 'ivory',
  },
  {
    name: 'Faraz Mehri',
    discipline: 'Research',
    bio: 'Anthropologist of small infrastructures. Spends summers in archives.',
    tone: 'paper',
  },
  {
    name: 'Lila Okonkwo',
    discipline: 'Pedagogy',
    bio: 'Teaches teachers. Writes about apprenticeship in modern studios.',
    tone: 'ink',
  },
]

function Portrait({ initials, tone }: { initials: string; tone: Mentor['tone'] }) {
  const palette: Record<
    Mentor['tone'],
    { bg: string; fg: string; ring: string }
  > = {
    ink: { bg: '#1A1815', fg: '#F5F1EA', ring: 'rgba(245,241,234,0.10)' },
    sienna: { bg: '#C8531A', fg: '#F5F1EA', ring: 'rgba(245,241,234,0.18)' },
    paper: { bg: '#E9E1D0', fg: '#1A1815', ring: 'rgba(26,24,21,0.08)' },
    ivory: { bg: '#EFE8DA', fg: '#1A1815', ring: 'rgba(26,24,21,0.08)' },
    olive: { bg: '#5C5B3F', fg: '#F5F1EA', ring: 'rgba(245,241,234,0.10)' },
    rose: { bg: '#B96A60', fg: '#F5F1EA', ring: 'rgba(245,241,234,0.14)' },
  }
  const p = palette[tone]
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{ aspectRatio: '1 / 1', background: p.bg }}
    >
      <span
        className="absolute inset-0 flex items-center justify-center font-display"
        style={{
          color: p.fg,
          fontStyle: 'italic',
          fontSize: '5.5rem',
          letterSpacing: '-3px',
          fontVariationSettings: "'opsz' 144",
          opacity: 0.95,
        }}
      >
        {initials}
      </span>
      <div
        className="absolute pointer-events-none rounded-[14px]"
        style={{ inset: '14px', boxShadow: `inset 0 0 0 1px ${p.ring}` }}
      />
    </div>
  )
}

export default function Mentors() {
  return (
    <section id="mentors" className="border-t border-ink/8 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="THE MENTORS // 04"
            title={
              <>
                Practitioners who{' '}
                <em
                  className="font-display"
                  style={{ fontStyle: 'italic', color: '#C8531A' }}
                >
                  still ship.
                </em>
              </>
            }
            description="Every mentor is a working professional. They teach two studies a year, and only when they have something new to say."
          />
          <Reveal delay={120}>
            <a
              href="#"
              className="watch-link inline-flex items-center gap-2"
              style={{ color: '#1A1815' }}
            >
              <span className="underline-track text-base">
                Meet the full faculty
              </span>
              <span className="cta-arrow">→</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {MENTORS.map((m, i) => {
            const initials = m.name
              .split(' ')
              .map((s) => s[0])
              .join('')
              .slice(0, 2)
            return (
              <Reveal key={m.name} delay={i * 60}>
                <article className="flex flex-col gap-4">
                  <Portrait initials={initials} tone={m.tone} />
                  <div className="flex flex-col gap-1">
                    <span
                      className="font-mono uppercase"
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.18em',
                        color: '#6B6660',
                      }}
                    >
                      {m.discipline}
                    </span>
                    <h3
                      className="font-display text-xl"
                      style={{
                        color: '#1A1815',
                        letterSpacing: '-0.2px',
                      }}
                    >
                      {m.name}
                    </h3>
                    <p
                      className="text-sm mt-1"
                      style={{ color: '#4A4640', lineHeight: 1.55 }}
                    >
                      {m.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
