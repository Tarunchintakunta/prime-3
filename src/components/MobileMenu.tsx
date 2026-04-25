const MENU = ['Index', 'Library', 'Mentors', 'Field Notes', 'Studio']

type Props = {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: Props) {
  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-30 flex flex-col px-8 py-7"
      style={{ backgroundColor: '#F5F1EA' }}
    >
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="font-display italic tracking-tight text-2xl"
          style={{ color: '#1A1815' }}
        >
          Prime Learning
        </a>
        <button
          type="button"
          onClick={onClose}
          className="text-2xl font-display"
          aria-label="Close menu"
          style={{ color: '#1A1815' }}
        >
          ×
        </button>
      </div>
      <ul className="mt-16 flex flex-col gap-6">
        {MENU.map((label) => (
          <li key={label}>
            <a
              href="#"
              className="nav-link font-display text-4xl"
              style={{ color: '#1A1815' }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="animate-pulse-dot inline-block rounded-full"
            style={{ width: 8, height: 8, backgroundColor: '#C8531A' }}
          />
          <span
            className="font-mono text-xs"
            style={{ color: '#1A1815', letterSpacing: '0.16em' }}
          >
            NOW ENROLLING
          </span>
        </div>
        <a
          href="#"
          className="cta-button inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
          style={{ backgroundColor: '#1A1815', color: '#F5F1EA' }}
        >
          Begin <span className="cta-arrow">→</span>
        </a>
      </div>
    </div>
  )
}
