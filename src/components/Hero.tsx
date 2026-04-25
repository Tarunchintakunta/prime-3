import { useState } from 'react'
import Nav from './Nav'
import VideoPanel, { VideoPanelMobile } from './VideoPanel'
import MetaStrip from './MetaStrip'
import MobileMenu from './MobileMenu'
import CustomCursor from './CustomCursor'

const HEADLINE_PARTS: { text: string; em?: boolean }[] = [
  { text: 'Slow craft,', em: true },
  { text: ' in a world that forgot ' },
  { text: 'to pause.', em: true },
]

function SplitWords({
  parts,
  baseDelay = 0,
}: {
  parts: { text: string; em?: boolean }[]
  baseDelay?: number
}) {
  // Flatten into ordered word tokens, preserving italic spans.
  const tokens: { word: string; em: boolean; sep: string }[] = []
  parts.forEach((p) => {
    const words = p.text.match(/\S+\s*/g) || []
    words.forEach((w) => {
      const trimmed = w.trimEnd()
      const sep = w.slice(trimmed.length)
      tokens.push({ word: trimmed, em: !!p.em, sep })
    })
  })

  let i = -1
  return (
    <>
      {tokens.map((t, idx) => {
        i++
        const delay = baseDelay + i * 60
        const content = t.em ? <em>{t.word}</em> : t.word
        return (
          <span
            key={idx}
            className="word-rise"
            style={{ animationDelay: `${delay}ms` }}
          >
            {content}
            {t.sep}
          </span>
        )
      })}
    </>
  )
}

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(false)
  const [cursorExpanded, setCursorExpanded] = useState(true) // expanded inside video

  return (
    <div className="relative min-h-screen w-full bg-ivory" style={{ overflow: 'clip' }}>
      <div className="paper-grain" aria-hidden />

      <Nav onOpenMobileMenu={() => setMobileOpen(true)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Hairline divider (lg+) */}
      <div
        className="hidden lg:block absolute pointer-events-none"
        style={{
          left: '50%',
          top: '8rem',
          bottom: '8rem',
          width: '1px',
          backgroundColor: 'rgba(26, 24, 21, 0.08)',
          zIndex: 5,
        }}
        aria-hidden
      />

      {/* Hero section */}
      <section
        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-32"
        style={{ paddingTop: 'calc(8rem - 40px)' }}
      >
        <div className="lg:col-span-6 pl-6 pr-6 lg:pl-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 animate-fade-slide-right">
            <span
              className="block h-px bg-ink/20"
              style={{ width: '48px' }}
              aria-hidden
            />
            <span
              className="font-mono uppercase"
              style={{
                fontSize: '12px',
                letterSpacing: '0.18em',
                color: '#6B6660',
              }}
            >
              VOL. 04 — A QUIET REVOLUTION IN LEARNING
            </span>
          </div>

          {/* Headline */}
          <h1
            className="headline mt-8 max-w-2xl text-5xl sm:text-7xl lg:text-[7.5rem]"
            style={{ overflow: 'hidden' }}
          >
            <SplitWords parts={HEADLINE_PARTS} />
          </h1>

          {/* Description */}
          <p
            className="mt-10 max-w-md text-base sm:text-lg animate-fade-rise-delay-2"
            style={{ color: '#4A4640', lineHeight: 1.7 }}
          >
            A learning studio for the patient and the precise. We pair you with
            practitioners who teach in seasons, not sprints — and ship work that
            holds up under daylight.
          </p>

          {/* CTA cluster */}
          <div className="mt-14 flex items-center gap-6 animate-fade-rise-delay-3 flex-wrap">
            <a
              href="#"
              className="cta-button inline-flex items-center gap-2 rounded-full px-10 py-4 text-base"
              style={{ backgroundColor: '#1A1815', color: '#F5F1EA' }}
            >
              Begin a study <span className="cta-arrow">→</span>
            </a>

            <a
              href="#"
              className="watch-link inline-flex items-center gap-3"
              style={{ color: '#1A1815' }}
            >
              <span
                className="inline-flex items-center justify-center rounded-full"
                style={{
                  width: 28,
                  height: 28,
                  border: '1px solid rgba(26, 24, 21, 0.4)',
                }}
                aria-hidden
              >
                <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                  <path d="M0 0L9 5.5L0 11V0Z" fill="#1A1815" />
                </svg>
              </span>
              <span className="underline-track text-base">
                Watch the trailer
              </span>
            </a>
          </div>
        </div>

        {/* Right column placeholder for grid balance on lg+; video itself is absolutely positioned */}
        <div className="hidden lg:block lg:col-span-6" aria-hidden />

        {/* Mobile video — appears inside the flow under the hero text */}
        <div className="lg:hidden col-span-1">
          <VideoPanelMobile />
        </div>
      </section>

      {/* Absolute video panel (desktop) */}
      <VideoPanel
        onCursorEnter={() => {
          setCursorVisible(true)
          setCursorExpanded(true)
        }}
        onCursorLeave={() => {
          setCursorVisible(false)
        }}
      />

      {/* Meta strip */}
      <MetaStrip />

      {/* Custom cursor (desktop only) */}
      <div className="hidden lg:block">
        <CustomCursor visible={cursorVisible} expanded={cursorExpanded} />
      </div>
    </div>
  )
}
