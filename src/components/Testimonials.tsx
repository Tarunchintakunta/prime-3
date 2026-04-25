import Reveal from './Reveal'

type T = {
  quote: string
  author: string
  context: string
}

const ITEMS: T[] = [
  {
    quote:
      'I had been stuck in tutorial loops for two years. In twelve weeks I shipped a real Python service with tests, CI, and a mentor who actually read every PR. The difference was not the syllabus — it was the seriousness.',
    author: 'Anders Holm',
    context: 'Backend engineer — graduated Python Foundations',
  },
  {
    quote:
      'Most courses sell you a certificate. Prime sold me a small group of engineers who still review each other’s pull requests two years later. That is the actual value.',
    author: 'Priya Raman',
    context: 'Wellbound — graduated Building LLM Applications',
  },
  {
    quote:
      'I came in already writing PyTorch, but had never owned a model in production. I left with a deployed classifier, a real evaluation harness, and the calm of having done it once with someone watching.',
    author: 'Kenji Iwasaki',
    context: 'ML engineer — graduated Machine Learning with PyTorch',
  },
]

export default function Testimonials() {
  return (
    <section className="border-t border-ink/20" style={{ background: '#1A1815' }}>
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <Reveal>
          <div className="flex items-center gap-4">
            <span
              className="block h-px"
              style={{ width: '48px', background: 'rgba(245,241,234,0.25)' }}
              aria-hidden
            />
            <span
              className="font-mono uppercase"
              style={{
                fontSize: '12px',
                letterSpacing: '0.18em',
                color: 'rgba(245,241,234,0.55)',
              }}
            >
              FIELD NOTES // 06
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2
            className="mt-8 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl"
            style={{
              color: '#F5F1EA',
              lineHeight: 1.05,
              letterSpacing: '-1.4px',
              fontVariationSettings: "'opsz' 144",
              fontFeatureSettings: "'liga', 'onum'",
            }}
          >
            What graduates{' '}
            <em
              className="font-display"
              style={{ fontStyle: 'italic', color: '#C8531A' }}
            >
              still say,
            </em>{' '}
            three years on.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
          {ITEMS.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <figure className="flex h-full flex-col gap-8 border-t pt-8" style={{ borderColor: 'rgba(245,241,234,0.18)' }}>
                <span
                  className="font-display"
                  style={{
                    color: '#C8531A',
                    fontStyle: 'italic',
                    fontSize: '3.5rem',
                    lineHeight: 0.6,
                  }}
                  aria-hidden
                >
                  “
                </span>
                <blockquote
                  className="font-display text-xl"
                  style={{
                    color: '#F5F1EA',
                    fontStyle: 'italic',
                    lineHeight: 1.35,
                    letterSpacing: '-0.2px',
                  }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto flex flex-col gap-1">
                  <span
                    style={{ color: '#F5F1EA', fontSize: '15px' }}
                  >
                    {t.author}
                  </span>
                  <span
                    className="font-mono uppercase"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.18em',
                      color: 'rgba(245,241,234,0.55)',
                    }}
                  >
                    {t.context}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
