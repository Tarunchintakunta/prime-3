const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: 'Studies',
    links: ['Index', 'Library', 'Mentors', 'Field Notes', 'Studio'],
  },
  {
    title: 'Studio',
    links: ['About', 'Mission', 'Pedagogy', 'Press', 'Hiring'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Mentor Matching', 'Scholarships', 'Contact', 'Status'],
  },
  {
    title: 'Legal',
    links: ['Terms', 'Privacy', 'Accessibility', 'Cookies'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <a
              href="#"
              className="font-display italic tracking-tight text-3xl"
              style={{ color: '#1A1815' }}
            >
              Prime Learning
            </a>
            <p
              className="mt-5 max-w-xs"
              style={{ color: '#4A4640', lineHeight: 1.65, fontSize: '15px' }}
            >
              A learning studio for the patient and the precise. Lisbon · Kyoto · online.
            </p>

            <div className="mt-8 flex items-center gap-2">
              <span
                className="animate-pulse-dot inline-block rounded-full"
                style={{ width: 8, height: 8, backgroundColor: '#C8531A' }}
              />
              <span
                className="font-mono"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  color: '#1A1815',
                }}
              >
                NOW ENROLLING — SPRING 2026
              </span>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <span
                  className="font-mono uppercase"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.22em',
                    color: '#6B6660',
                  }}
                >
                  {col.title}
                </span>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="nav-link"
                        style={{ color: '#1A1815', fontSize: '14px' }}
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Base bar */}
        <div
          className="mt-16 flex flex-col gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <span
            className="font-mono"
            style={{
              fontSize: '11px',
              letterSpacing: '0.18em',
              color: '#6B6660',
            }}
          >
            © 2026 PRIME LEARNING — ALL WORK BY ITS MAKERS
          </span>
          <div className="flex items-center gap-5">
            {['Are.na', 'Instagram', 'Substack', 'Vimeo'].map((s) => (
              <a
                key={s}
                href="#"
                className="nav-link"
                style={{ color: '#1A1815', fontSize: '13px' }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
