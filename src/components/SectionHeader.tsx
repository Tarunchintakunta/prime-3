import Reveal from './Reveal'

type Props = {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: Props) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : ''
  return (
    <div className={`flex flex-col gap-6 ${alignCls}`}>
      <Reveal>
        <div className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="block h-px bg-ink/20" style={{ width: '48px' }} aria-hidden />
          <span
            className="font-mono uppercase"
            style={{ fontSize: '12px', letterSpacing: '0.18em', color: '#6B6660' }}
          >
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className="font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl"
          style={{
            color: '#1A1815',
            lineHeight: 1.02,
            letterSpacing: '-1.6px',
            fontVariationSettings: "'opsz' 144",
            fontFeatureSettings: "'liga', 'onum'",
          }}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p
            className="max-w-xl text-base sm:text-lg"
            style={{ color: '#4A4640', lineHeight: 1.7 }}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
