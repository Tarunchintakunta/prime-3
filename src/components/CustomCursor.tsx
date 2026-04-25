import { useEffect, useRef, useState } from 'react'

type Props = {
  visible: boolean
  expanded: boolean
}

export default function CustomCursor({ visible, expanded }: Props) {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY
    }

    // 80ms-feeling delay via low-pass smoothing
    const smoothing = 0.18

    const tick = () => {
      currentRef.current.x +=
        (targetRef.current.x - currentRef.current.x) * smoothing
      currentRef.current.y +=
        (targetRef.current.y - currentRef.current.y) * smoothing
      const el = cursorRef.current
      if (el) {
        el.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px) translate(-50%, -50%)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${visible ? 'visible' : ''} ${
        expanded ? 'expanded' : ''
      }`}
      aria-hidden
    >
      {expanded ? 'PLAY' : ''}
    </div>
  )
}
