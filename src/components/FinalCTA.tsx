import { useState } from 'react'
import Reveal from './Reveal'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      className="relative overflow-hidden border-t"
      style={{ background: '#C8531A', borderColor: 'rgba(26,24,21,0.10)' }}
    >
      {/* Watermark letter */}
      <span
        className="absolute font-display select-none"
        style={{
          right: '-3rem',
          bottom: '-7rem',
          fontSize: '32rem',
          lineHeight: 1,
          color: 'rgba(245,241,234,0.10)',
          fontStyle: 'italic',
          fontVariationSettings: "'opsz' 144",
          pointerEvents: 'none',
        }}
        aria-hidden
      >
        P
      </span>

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4">
                <span
                  className="block h-px"
                  style={{ width: '48px', background: 'rgba(245,241,234,0.45)' }}
                  aria-hidden
                />
                <span
                  className="font-mono uppercase"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.18em',
                    color: 'rgba(245,241,234,0.85)',
                  }}
                >
                  ENROLLMENT OPENS QUARTERLY
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2
                className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl"
                style={{
                  color: '#F5F1EA',
                  lineHeight: 1.0,
                  letterSpacing: '-2px',
                  fontVariationSettings: "'opsz' 144",
                  fontFeatureSettings: "'liga', 'onum'",
                }}
              >
                Begin in the{' '}
                <em
                  className="font-display"
                  style={{ fontStyle: 'italic', color: '#1A1815' }}
                >
                  next season.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p
                className="mt-8 max-w-lg text-lg"
                style={{ color: 'rgba(245,241,234,0.88)', lineHeight: 1.6 }}
              >
                We open enrollments four times a year. Leave your address and
                we will write — once per season — with the new studies, the
                mentors, and the deadline. No marketing.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <Reveal delay={180}>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (email) setSubmitted(true)
                }}
                className="flex flex-col gap-4"
              >
                <label
                  className="font-mono uppercase"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    color: 'rgba(245,241,234,0.75)',
                  }}
                  htmlFor="cta-email"
                >
                  Your address
                </label>
                <div
                  className="flex items-center gap-3 rounded-full px-2 py-2"
                  style={{
                    background: 'rgba(245,241,234,0.10)',
                    border: '1px solid rgba(245,241,234,0.30)',
                  }}
                >
                  <input
                    id="cta-email"
                    type="email"
                    required
                    placeholder="you@studio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent px-4 py-2 outline-none placeholder:text-ivory/60"
                    style={{
                      color: '#F5F1EA',
                      fontSize: '15px',
                    }}
                  />
                  <button
                    type="submit"
                    className="cta-button inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
                    style={{ background: '#1A1815', color: '#F5F1EA' }}
                  >
                    {submitted ? 'On the list' : 'Subscribe'}
                    {!submitted && <span className="cta-arrow">→</span>}
                  </button>
                </div>
                <span
                  className="text-xs"
                  style={{ color: 'rgba(245,241,234,0.7)' }}
                >
                  One letter per season. Unsubscribe with a single click.
                </span>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
