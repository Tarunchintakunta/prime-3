import { useMobileMenu, useSavedCourses } from '../store/AppContext'

const MENU = ['Index', 'Library', 'Mentors', 'Field Notes', 'Studio']

export default function MobileMenu() {
  const { open, closeMenu } = useMobileMenu()
  const { count: savedCount } = useSavedCourses()
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
          onClick={closeMenu}
        >
          Prime Learning
        </a>
        <button
          type="button"
          onClick={closeMenu}
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
              onClick={closeMenu}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {savedCount > 0 && (
        <a
          href="#library"
          onClick={closeMenu}
          className="mt-8 inline-flex items-center gap-3 self-start rounded-full px-4 py-2"
          style={{
            background: 'rgba(200, 83, 26, 0.10)',
            border: '1px solid rgba(200, 83, 26, 0.35)',
          }}
        >
          <span
            className="inline-flex items-center justify-center rounded-full"
            style={{
              minWidth: 22,
              height: 22,
              padding: '0 7px',
              background: '#C8531A',
              color: '#F5F1EA',
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: '11px',
            }}
          >
            {savedCount}
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: '12px',
              letterSpacing: '0.16em',
              color: '#1A1815',
            }}
          >
            SAVED STUDIES
          </span>
        </a>
      )}

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
