import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const STEPS = [
  {
    n: '01',
    title: 'Choose your study',
    body: 'Browse the Library by track — Python, Machine Learning, AI Engineering, Web, Data, Cloud. Each study is a contained body of work, eight to sixteen weeks long.',
  },
  {
    n: '02',
    title: 'Pair with a working engineer',
    body: 'You are matched with a practicing engineer or ML researcher — not a content marketer. They review your code each week, in writing and on a live call.',
  },
  {
    n: '03',
    title: 'Ship something to production',
    body: 'You graduate with a real, deployed project — a Python service, a trained model, an LLM app — and a small cohort of engineers who will read your PRs for years.',
  },
]

export default function Pedagogy() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <SectionHeader
          eyebrow="THE METHOD // 01"
          title={
            <>
              Three movements,{' '}
              <em
                className="font-display"
                style={{ fontStyle: 'italic', color: '#C8531A' }}
              >
                one season.
              </em>
            </>
          }
          description="We don't measure learning in modules or minutes. We measure it in shipped code — and in the engineers you become friends with trying to ship it."
        />

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="flex flex-col gap-5 border-t border-ink/10 pt-8">
                <span
                  className="font-mono"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.22em',
                    color: '#C8531A',
                  }}
                >
                  STEP {s.n}
                </span>
                <h3
                  className="font-display text-3xl"
                  style={{
                    color: '#1A1815',
                    lineHeight: 1.05,
                    letterSpacing: '-0.6px',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-base"
                  style={{ color: '#4A4640', lineHeight: 1.7 }}
                >
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
