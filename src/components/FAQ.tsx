import { useState } from 'react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const ITEMS = [
  {
    q: 'How long is each study?',
    a: 'Most studies run twelve to sixteen weeks. A few foundations run eight, and a handful of mastery studies stretch to twenty. The pace is set by the work, not by a content calendar.',
  },
  {
    q: 'Live sessions, or pre-recorded?',
    a: 'Both. Each week opens with a recorded craft talk — usually 25 to 40 minutes — followed by a live cohort review and one mentor office-hour block. Recordings stay yours for life.',
  },
  {
    q: 'How does mentor matching work?',
    a: 'You write a short application — what you are working on, where you are stuck, what you want to ship. We pair you with the practitioner whose calendar and craft fits. Typical match time is 4 days.',
  },
  {
    q: 'Refund policy?',
    a: 'Full refund within the first two weeks of any study, no questions. After that, we offer a credit toward a future study within twelve months.',
  },
  {
    q: 'Do you offer certificates?',
    a: 'No. Our graduates leave with a portfolio piece, a written reference from their mentor, and a small cohort that knows their work. We have not found certificates to be the thing employers actually read.',
  },
  {
    q: 'Payment plans and team enrollments?',
    a: 'Three- and six-month installment plans are available at no extra cost. Team enrollments (3+ seats) are 15% off and include a private cohort if requested.',
  },
]

function Item({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span
          className="font-display text-2xl lg:text-[1.75rem]"
          style={{ color: '#1A1815', letterSpacing: '-0.3px', lineHeight: 1.15 }}
        >
          {q}
        </span>
        <span
          className="font-display shrink-0 text-3xl"
          style={{
            color: '#C8531A',
            fontStyle: 'italic',
            transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            lineHeight: 1,
          }}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: open ? '1fr' : '0fr',
          transition: 'grid-template-rows 350ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <p
            className="max-w-2xl pb-7 text-base"
            style={{ color: '#4A4640', lineHeight: 1.7 }}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-ink/8 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="QUESTIONS // 09"
              title={
                <>
                  Plainly put,{' '}
                  <em
                    className="font-display"
                    style={{ fontStyle: 'italic', color: '#C8531A' }}
                  >
                    asked often.
                  </em>
                </>
              }
              description="If your question is not here, write to us. A real person — usually one of the mentors — will answer within two working days."
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div>
                {ITEMS.map((item, i) => (
                  <Item key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
                ))}
                <div className="border-t border-ink/10" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
