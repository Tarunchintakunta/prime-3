import { useState } from 'react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

type Course = {
  id: string
  title: string
  category: string
  weeks: number
  level: 'Foundations' | 'Practitioner' | 'Mastery'
  mentor: string
  blurb: string
  tone: 'ink' | 'sienna' | 'ivory' | 'paper'
}

const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'The Patient Editor',
    category: 'Writing',
    weeks: 12,
    level: 'Practitioner',
    mentor: 'Mira Kovač',
    blurb:
      'A long-form study in line editing and structural revision. Read closely, cut bravely, ship the manuscript.',
    tone: 'paper',
  },
  {
    id: 'c2',
    title: 'Quiet Systems',
    category: 'Software',
    weeks: 16,
    level: 'Mastery',
    mentor: 'Theo Bayard',
    blurb:
      'Architectures that age well. We read the boring parts of distributed systems and write small, durable services.',
    tone: 'ink',
  },
  {
    id: 'c3',
    title: 'The Long Lens',
    category: 'Photography',
    weeks: 10,
    level: 'Foundations',
    mentor: 'Anouk Devereux',
    blurb:
      'Documentary practice for the slow photographer. One subject, one season, one printed dummy by the end.',
    tone: 'sienna',
  },
  {
    id: 'c4',
    title: 'Letterforms in Time',
    category: 'Type Design',
    weeks: 14,
    level: 'Practitioner',
    mentor: 'Hideo Tachibana',
    blurb:
      'Design a single typeface from sketch to release. Three weights, two scripts, one defensible idea.',
    tone: 'paper',
  },
  {
    id: 'c5',
    title: 'Soundwriting',
    category: 'Audio',
    weeks: 8,
    level: 'Foundations',
    mentor: 'Eli Marchetti',
    blurb:
      'Composition for narrative work — podcasts, scores, and the small noises that hold a film together.',
    tone: 'ivory',
  },
  {
    id: 'c6',
    title: 'Architecture of Care',
    category: 'Product Design',
    weeks: 12,
    level: 'Practitioner',
    mentor: 'Yusra Hadid',
    blurb:
      'Designing services that respect attention. Fieldwork, prototyping, and the ethics of every default.',
    tone: 'paper',
  },
]

const FILTERS = ['All', 'Writing', 'Software', 'Photography', 'Type Design', 'Audio', 'Product Design']

function CardArt({ tone, letter }: { tone: Course['tone']; letter: string }) {
  const palette = {
    ink: { bg: '#1A1815', fg: 'rgba(245,241,234,0.12)' },
    sienna: { bg: '#C8531A', fg: 'rgba(245,241,234,0.18)' },
    ivory: { bg: '#EFE8DA', fg: 'rgba(26,24,21,0.10)' },
    paper: { bg: '#E9E1D0', fg: 'rgba(26,24,21,0.10)' },
  }[tone]
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{ aspectRatio: '4 / 3', background: palette.bg }}
    >
      <span
        className="absolute font-display select-none"
        style={{
          right: '-2rem',
          bottom: '-3rem',
          fontSize: '18rem',
          lineHeight: 1,
          color: palette.fg,
          fontStyle: 'italic',
          fontVariationSettings: "'opsz' 144",
        }}
        aria-hidden
      >
        {letter}
      </span>
      <div
        className="absolute"
        style={{
          top: '20px',
          left: '20px',
          right: '20px',
          bottom: '20px',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '14px',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

function CourseCard({ course, delay }: { course: Course; delay: number }) {
  const dark = course.tone === 'ink' || course.tone === 'sienna'
  return (
    <Reveal delay={delay}>
      <article className="group flex flex-col gap-5">
        <div className="cta-button">
          <CardArt tone={course.tone} letter={course.title[0]} />
        </div>
        <div className="flex items-center justify-between">
          <span
            className="font-mono uppercase"
            style={{
              fontSize: '11px',
              letterSpacing: '0.18em',
              color: '#6B6660',
            }}
          >
            {course.category}
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: '11px',
              letterSpacing: '0.14em',
              color: '#6B6660',
            }}
          >
            {course.weeks} WEEKS · {course.level.toUpperCase()}
          </span>
        </div>
        <h3
          className="font-display text-2xl"
          style={{
            color: '#1A1815',
            lineHeight: 1.1,
            letterSpacing: '-0.4px',
          }}
        >
          {course.title}
        </h3>
        <p style={{ color: '#4A4640', lineHeight: 1.65, fontSize: '15px' }}>
          {course.blurb}
        </p>
        <div className="mt-1 flex items-center justify-between border-t border-ink/10 pt-4">
          <span style={{ color: '#1A1815', fontSize: '14px' }}>
            with{' '}
            <em
              className="font-display"
              style={{ fontStyle: 'italic', color: '#1A1815' }}
            >
              {course.mentor}
            </em>
          </span>
          <a
            href="#"
            className="watch-link inline-flex items-center gap-1 text-sm"
            style={{ color: '#1A1815' }}
            aria-hidden={dark ? undefined : undefined}
          >
            <span className="underline-track">Read brief</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </article>
    </Reveal>
  )
}

export default function Catalog() {
  const [active, setActive] = useState('All')
  const visible =
    active === 'All' ? COURSES : COURSES.filter((c) => c.category === active)

  return (
    <section
      id="library"
      className="border-t border-ink/8 bg-ivory"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="THE LIBRARY // 02"
            title={
              <>
                Studies in season.{' '}
                <em
                  className="font-display"
                  style={{ fontStyle: 'italic', color: '#C8531A' }}
                >
                  Nothing on demand.
                </em>
              </>
            }
            description="A slim, considered catalog. Each study runs once or twice a year, with a small cohort and a single mentor."
          />
          <Reveal delay={120}>
            <a
              href="#"
              className="watch-link inline-flex items-center gap-2"
              style={{ color: '#1A1815' }}
            >
              <span className="underline-track text-base">
                Browse the full Library
              </span>
              <span className="cta-arrow">→</span>
            </a>
          </Reveal>
        </div>

        {/* Filter pills */}
        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = active === f
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className="rounded-full px-4 py-2 text-sm transition"
                  style={{
                    border: '1px solid rgba(26,24,21,0.18)',
                    background: isActive ? '#1A1815' : 'transparent',
                    color: isActive ? '#F5F1EA' : '#1A1815',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((c, i) => (
            <CourseCard key={c.id} course={c} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
