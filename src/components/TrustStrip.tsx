import Reveal from './Reveal'

const PARTNERS = [
  'GitHub',
  'OpenAI',
  'PyTorch',
  'Hugging Face',
  'MIT CSAIL',
  'Vercel',
  'AWS',
]

export default function TrustStrip() {
  return (
    <section className="border-y border-ink/8 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <span
              className="font-mono uppercase shrink-0"
              style={{
                fontSize: '11px',
                letterSpacing: '0.22em',
                color: '#6B6660',
              }}
            >
              Mentors who build with —
            </span>
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {PARTNERS.map((p) => (
                <li
                  key={p}
                  className="font-display text-xl"
                  style={{
                    color: '#4A4640',
                    fontStyle: 'italic',
                    opacity: 0.7,
                  }}
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
