import { useEffect, useRef } from 'react'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const FADE_DURATION = 0.6 // seconds

// cubic-bezier(0.16, 1, 0.3, 1) approximated for opacity easing
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

type Props = {
  onCursorEnter?: () => void
  onCursorLeave?: () => void
}

export default function VideoPanel({ onCursorEnter, onCursorLeave }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const restartingRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tick = () => {
      const v = videoRef.current
      if (v && v.duration && !Number.isNaN(v.duration)) {
        const t = v.currentTime
        const d = v.duration

        let opacity = 1

        if (t < FADE_DURATION) {
          const p = Math.min(1, Math.max(0, t / FADE_DURATION))
          opacity = easeOutExpo(p)
        } else if (d - t < FADE_DURATION) {
          const p = Math.min(1, Math.max(0, (d - t) / FADE_DURATION))
          opacity = easeOutExpo(p)
        }

        if (!restartingRef.current) {
          v.style.opacity = String(opacity)
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const handleEnded = () => {
      const v = videoRef.current
      if (!v) return
      restartingRef.current = true
      v.style.opacity = '0'
      window.setTimeout(() => {
        if (!videoRef.current) return
        videoRef.current.currentTime = 0
        videoRef.current
          .play()
          .catch(() => {
            /* autoplay may be blocked momentarily; ignored */
          })
          .finally(() => {
            restartingRef.current = false
          })
      }, 120)
    }

    video.addEventListener('ended', handleEnded)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      video.removeEventListener('ended', handleEnded)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      className="video-frame video-cursor-zone hidden lg:block"
      onMouseEnter={onCursorEnter}
      onMouseLeave={onCursorLeave}
      style={{
        position: 'absolute',
        top: '120px',
        right: '32px',
        bottom: '32px',
        width: 'calc(50vw - 32px)',
        borderRadius: '24px',
        overflow: 'hidden',
        zIndex: 10,
        background: '#1A1815',
      }}
    >
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{
          opacity: 0,
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      <div
        className="absolute font-mono text-xs"
        style={{
          bottom: '24px',
          left: '24px',
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '0.12em',
        }}
      >
        REEL // 04 — PRIME STUDIES — 2026
      </div>
    </div>
  )
}

// Mobile fallback: full-width 16:9 below hero
export function VideoPanelMobile() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const restartingRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tick = () => {
      const v = videoRef.current
      if (v && v.duration && !Number.isNaN(v.duration)) {
        const t = v.currentTime
        const d = v.duration
        let opacity = 1
        if (t < FADE_DURATION) {
          opacity = easeOutExpo(Math.min(1, t / FADE_DURATION))
        } else if (d - t < FADE_DURATION) {
          opacity = easeOutExpo(Math.min(1, (d - t) / FADE_DURATION))
        }
        if (!restartingRef.current) v.style.opacity = String(opacity)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const handleEnded = () => {
      const v = videoRef.current
      if (!v) return
      restartingRef.current = true
      v.style.opacity = '0'
      window.setTimeout(() => {
        if (!videoRef.current) return
        videoRef.current.currentTime = 0
        videoRef.current
          .play()
          .catch(() => {})
          .finally(() => (restartingRef.current = false))
      }, 120)
    }

    video.addEventListener('ended', handleEnded)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      video.removeEventListener('ended', handleEnded)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      className="lg:hidden video-frame relative mx-6 mt-12 overflow-hidden rounded-2xl bg-ink"
      style={{ aspectRatio: '16 / 9' }}
    >
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ opacity: 0 }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      <div
        className="absolute font-mono text-xs"
        style={{
          bottom: '16px',
          left: '16px',
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '0.12em',
        }}
      >
        REEL // 04 — PRIME STUDIES — 2026
      </div>
    </div>
  )
}
