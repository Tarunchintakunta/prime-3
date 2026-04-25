import { useState } from 'react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { useSavedCourses } from '../store/AppContext'

type Course = {
  id: string
  title: string
  category: string
  weeks: number
  level: 'Foundations' | 'Practitioner' | 'Mastery'
  mentor: string
  blurb: string
  image: string
}

const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Python Foundations',
    category: 'Python',
    weeks: 8,
    level: 'Foundations',
    mentor: 'Maya Okafor',
    blurb:
      'From first script to production-ready code. Variables, control flow, functions, modules, and the Pythonic habits that compound over a career.',
    image:
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&auto=format&fit=crop&q=70',
  },
  {
    id: 'c2',
    title: 'Machine Learning with PyTorch',
    category: 'Machine Learning',
    weeks: 14,
    level: 'Practitioner',
    mentor: 'Anika Raman',
    blurb:
      'Tensors, gradients, training loops. Build CNNs, transformers, and a small classifier you actually understand line-by-line.',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop&q=70',
  },
  {
    id: 'c3',
    title: 'Building LLM Applications',
    category: 'AI Engineering',
    weeks: 16,
    level: 'Mastery',
    mentor: 'Eli Marchetti',
    blurb:
      'Prompts, RAG, agents, evals. Ship a working LLM product end-to-end — from API call to caching to a real evaluation harness.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=70',
  },
  {
    id: 'c4',
    title: 'Production React & TypeScript',
    category: 'Web',
    weeks: 12,
    level: 'Practitioner',
    mentor: 'Hideo Tachibana',
    blurb:
      'Modern React patterns, strict TypeScript, server components, and the boring discipline of shipping a frontend that does not break in week three.',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop&q=70',
  },
  {
    id: 'c5',
    title: 'Data Engineering with SQL & Python',
    category: 'Data',
    weeks: 12,
    level: 'Practitioner',
    mentor: 'Maya Okafor',
    blurb:
      'Pipelines, warehouses, dbt, and the kind of SQL the analytics team will thank you for. With one real ETL shipped to production by week ten.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=70',
  },
  {
    id: 'c6',
    title: 'Cloud-Native Systems on AWS',
    category: 'Cloud',
    weeks: 14,
    level: 'Mastery',
    mentor: 'Faraz Mehri',
    blurb:
      'Containers, Kubernetes, IaC with Terraform, and the operational craft to run a service that pages no one at 3 a.m.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=70',
  },
]

const FILTERS = ['All', 'Python', 'Machine Learning', 'AI Engineering', 'Web', 'Data', 'Cloud']

function CardArt({
  image,
  title,
  saved,
  onToggleSave,
}: {
  image: string
  title: string
  saved: boolean
  onToggleSave: () => void
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-ink/10"
      style={{ aspectRatio: '4 / 3' }}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover"
        style={{
          transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute pointer-events-none rounded-[14px]"
        style={{
          inset: '14px',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.20)',
        }}
      />

      {/* Save toggle */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onToggleSave()
        }}
        aria-label={saved ? `Unsave ${title}` : `Save ${title}`}
        aria-pressed={saved}
        className="absolute inline-flex items-center justify-center rounded-full"
        style={{
          top: '20px',
          right: '20px',
          width: 36,
          height: 36,
          background: saved ? '#C8531A' : 'rgba(245, 241, 234, 0.92)',
          color: saved ? '#F5F1EA' : '#1A1815',
          border: '1px solid rgba(26, 24, 21, 0.10)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          transition:
            'background 250ms cubic-bezier(0.16, 1, 0.3, 1), color 250ms cubic-bezier(0.16, 1, 0.3, 1), transform 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.06)')
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)')
        }
      >
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill={saved ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.4"
          aria-hidden
        >
          <path d="M2 1.5h10v13l-5-3-5 3v-13z" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

function CourseCard({ course, delay }: { course: Course; delay: number }) {
  const { isSaved, toggle } = useSavedCourses()
  const saved = isSaved(course.id)
  return (
    <Reveal delay={delay}>
      <article className="group flex flex-col gap-5">
        <div className="cta-button">
          <CardArt
            image={course.image}
            title={course.title}
            saved={saved}
            onToggleSave={() => toggle(course.id)}
          />
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
                Studies in software,{' '}
                <em
                  className="font-display"
                  style={{ fontStyle: 'italic', color: '#C8531A' }}
                >
                  taught in seasons.
                </em>
              </>
            }
            description="A slim, considered catalog. Each study runs once or twice a year, with a small cohort and a working engineer as your mentor."
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
