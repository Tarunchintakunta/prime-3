import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

type Tier = {
  name: string
  price: string
  unit: string
  blurb: string
  features: string[]
  highlighted?: boolean
  cta: string
}

const TIERS: Tier[] = [
  {
    name: 'Single Study',
    price: '$480',
    unit: 'per study',
    blurb: 'A single twelve-to-sixteen week study with a paired mentor.',
    features: [
      'Weekly written feedback',
      'Two 1:1 mentor reviews',
      'Cohort of 12 — no larger',
      'Lifetime access to your study notes',
    ],
    cta: 'Begin a study',
  },
  {
    name: 'Season Pass',
    price: '$1,180',
    unit: 'three studies / year',
    blurb: 'For practitioners stitching a longer arc across seasons.',
    features: [
      'Three studies of your choice',
      'Priority mentor matching',
      'Quarterly cohort dinners (in person, where possible)',
      'Field Notes annual subscription',
    ],
    highlighted: true,
    cta: 'Reserve a Season Pass',
  },
  {
    name: 'Yearly Studio',
    price: '$3,200',
    unit: 'twelve months',
    blurb: 'Open access to the full Library, plus a dedicated mentor for the year.',
    features: [
      'Unlimited studies for twelve months',
      'A dedicated mentor for the full year',
      'Studio space at our Lisbon and Kyoto outposts',
      'Public showing of your final work',
    ],
    cta: 'Apply for the Studio',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-ink/8 bg-[#EFE8DA]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeader
          eyebrow="ENROLLMENT // 08"
          title={
            <>
              Plain prices for{' '}
              <em
                className="font-display"
                style={{ fontStyle: 'italic', color: '#C8531A' }}
              >
                patient work.
              </em>
            </>
          }
          description="No surge pricing, no certificates for sale, no upsells. Choose the rhythm that fits your year."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => {
            const dark = t.highlighted
            return (
              <Reveal key={t.name} delay={i * 120}>
                <article
                  className="flex h-full flex-col gap-6 rounded-2xl p-8 lg:p-10"
                  style={{
                    background: dark ? '#1A1815' : '#F5F1EA',
                    color: dark ? '#F5F1EA' : '#1A1815',
                    border: dark ? 'none' : '1px solid rgba(26,24,21,0.10)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono uppercase"
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        color: dark ? 'rgba(245,241,234,0.55)' : '#6B6660',
                      }}
                    >
                      Tier 0{i + 1}
                    </span>
                    {t.highlighted && (
                      <span
                        className="font-mono uppercase rounded-full px-3 py-1"
                        style={{
                          fontSize: '10px',
                          letterSpacing: '0.18em',
                          background: '#C8531A',
                          color: '#F5F1EA',
                        }}
                      >
                        Most Chosen
                      </span>
                    )}
                  </div>

                  <h3
                    className="font-display text-3xl"
                    style={{
                      color: dark ? '#F5F1EA' : '#1A1815',
                      letterSpacing: '-0.4px',
                    }}
                  >
                    {t.name}
                  </h3>

                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-display"
                      style={{
                        fontSize: '3rem',
                        letterSpacing: '-1.5px',
                        lineHeight: 1,
                        color: dark ? '#F5F1EA' : '#1A1815',
                      }}
                    >
                      {t.price}
                    </span>
                    <span
                      className="font-mono uppercase"
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        color: dark ? 'rgba(245,241,234,0.55)' : '#6B6660',
                      }}
                    >
                      {t.unit}
                    </span>
                  </div>

                  <p
                    style={{
                      color: dark ? 'rgba(245,241,234,0.7)' : '#4A4640',
                      lineHeight: 1.6,
                      fontSize: '15px',
                    }}
                  >
                    {t.blurb}
                  </p>

                  <ul className="flex flex-col gap-3 mt-2">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3"
                        style={{
                          color: dark ? '#F5F1EA' : '#1A1815',
                          fontSize: '14.5px',
                          lineHeight: 1.55,
                        }}
                      >
                        <span
                          className="font-display"
                          style={{
                            color: '#C8531A',
                            fontStyle: 'italic',
                            lineHeight: 1,
                          }}
                          aria-hidden
                        >
                          ·
                        </span>
                        <span>{f}</span>
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
                    <span>{t.cta}</span>
                    <span className="cta-arrow">→</span>
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={160}>
          <p
            className="mt-10 max-w-2xl text-sm"
            style={{ color: '#4A4640', lineHeight: 1.7 }}
          >
            Need-based scholarships are open year-round. We reserve at least
            20% of every cohort for students on full or partial aid — no
            paperwork beyond a short note explaining your situation.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
