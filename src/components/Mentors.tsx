import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

type Mentor = {
  name: string
  discipline: string
  bio: string
  image: string
}

const MENTORS: Mentor[] = [
  {
    name: 'Maya Okafor',
    discipline: 'Python · Data',
    bio: 'Staff data engineer at a fintech. Author of two PyPI libraries and a stubborn defender of small functions.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80&crop=faces',
  },
  {
    name: 'Theo Bayard',
    discipline: 'Distributed Systems',
    bio: 'Builds payments infrastructure at a small bank. Quiet, allergic to dashboards, fluent in Go and boring SLOs.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80&crop=faces',
  },
  {
    name: 'Anika Raman',
    discipline: 'Machine Learning',
    bio: 'ML researcher turned practitioner. Trains and ships models for medical imaging at a teaching hospital.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80&crop=faces',
  },
  {
    name: 'Hideo Tachibana',
    discipline: 'Frontend Architecture',
    bio: 'Twelve years of React. Now leads the design system team at a public health org. Writes the kind of CSS that ages well.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80&crop=faces',
  },
  {
    name: 'Eli Marchetti',
    discipline: 'AI Engineering',
    bio: 'Builds LLM products at a small studio. Believes evaluation is the most undervalued skill in modern AI work.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=80&crop=faces',
  },
  {
    name: 'Yusra Hadid',
    discipline: 'Product Engineering',
    bio: 'Full-stack engineer with a service-design background. Believes the default is a moral choice, in code and in product.',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=80&crop=faces',
  },
  {
    name: 'Faraz Mehri',
    discipline: 'Cloud · DevOps',
    bio: 'Site reliability for a global news org. Spends weekdays on Kubernetes, weekends on the bicycle.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80&crop=faces',
  },
  {
    name: 'Lila Okonkwo',
    discipline: 'CS Pedagogy',
    bio: 'Teaches teachers. Writes about apprenticeship and code review as the under-rated craft of modern engineering.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=80&crop=faces',
  },
]

function Portrait({
  name,
  image,
  initials,
}: {
  name: string
  image: string
  initials: string
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-[#E9E1D0]"
      style={{ aspectRatio: '1 / 1' }}
    >
      {/* Monogram fallback (revealed if image fails) */}
      <span
        className="absolute inset-0 flex items-center justify-center font-display"
        style={{
          color: '#1A1815',
          fontStyle: 'italic',
          fontSize: '5.5rem',
          letterSpacing: '-3px',
          fontVariationSettings: "'opsz' 144",
          opacity: 0.18,
        }}
        aria-hidden
      >
        {initials}
      </span>
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          filter: 'saturate(0.92) contrast(0.98)',
          transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = 'none'
        }}
      />
      <div
        className="absolute pointer-events-none rounded-[14px]"
        style={{
          inset: '14px',
          boxShadow: 'inset 0 0 0 1px rgba(245,241,234,0.30)',
        }}
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
                Engineers who{' '}
                <em
                  className="font-display"
                  style={{ fontStyle: 'italic', color: '#C8531A' }}
                >
                  still ship.
                </em>
              </>
            }
            description="Every mentor is a working professional — staff engineers, ML researchers, and SREs. They teach two studies a year, and only when they have something new to say."
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
                  <Portrait name={m.name} image={m.image} initials={initials} />
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
