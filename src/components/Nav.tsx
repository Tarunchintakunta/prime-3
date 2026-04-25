import { useEffect, useState } from 'react'

const MENU = ['Index', 'Library', 'Mentors', 'Field Notes', 'Studio']

type Props = {
  onOpenMobileMenu: () => void
}

export default function Nav({ onOpenMobileMenu }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5 lg:px-10 lg:py-7"
      style={{
        backgroundColor: scrolled ? 'rgba(245, 241, 234, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(26, 24, 21, 0.08)'
          : '1px solid transparent',
        transition:
          'background-color 300ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-display italic tracking-tight text-2xl"
        style={{ color: '#1A1815', fontFeatureSettings: "'liga'" }}
      >
        Prime Learning
      </a>

      {/* Center menu (desktop) */}
      <ul className="hidden lg:flex items-center gap-9 text-sm">
        {MENU.map((label) => (
          <li key={label}>
            <a
              href="#"
              className={`nav-link ${label === 'Index' ? 'active' : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right cluster (desktop) */}
      <div className="hidden lg:flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span
            className="animate-pulse-dot inline-block rounded-full"
            style={{
              width: 8,
              height: 8,
              backgroundColor: '#C8531A',
            }}
          />
          <span
            className="font-mono text-xs"
            style={{
              color: '#1A1815',
              letterSpacing: '0.16em',
            }}
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

      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={onOpenMobileMenu}
        className="lg:hidden inline-flex flex-col items-end justify-center gap-1.5 p-2"
        aria-label="Open menu"
      >
        <span className="block h-px w-7 bg-ink" />
        <span className="block h-px w-5 bg-ink" />
      </button>
    </nav>
  )
}
