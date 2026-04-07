import React, { useState, useEffect, useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Navbar from './Navbar'
import AnnouncementBanner from './AnnouncementBanner'
import hero from '../assets/afkr10.jpg'


// Animated counter hook
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

const stats = [
  { value: 3000, suffix: "+", label: "Youths Empowered" },
  { value: 9,    suffix: "+", label: "Communities Reached" },
  { value: 2022, suffix: "",  label: "Year Founded" },
]

function StatItem({ value, suffix, label, animate }) {
  const count = useCounter(value, 2200, animate)
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-extrabold text-white">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs md:text-sm text-white/60 mt-1 uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  )
}

export default function Header() {
  const [isSticky, setIsSticky]         = useState(false)
  const [mounted, setMounted]           = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [showBanner, setShowBanner]     = useState(() => sessionStorage.getItem('nya-banner-dismissed') !== 'true')
  const statsRef = useRef(null)

  const dismissBanner = () => {
    sessionStorage.setItem('nya-banner-dismissed', 'true')
    setShowBanner(false)
  }

  // Sticky navbar
  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hero entrance animation
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Trigger stat counters when visible
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect() } },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="relative w-full" id="Header" style={{ paddingTop: showBanner ? '40px' : '0' }}>
      {showBanner && <AnnouncementBanner onDismiss={dismissBanner} />}
      <Navbar isSticky={isSticky} bannerVisible={showBanner} />

      {/* Hero */}
      <div
        className="min-h-[100vh] bg-cover bg-center flex flex-col justify-between w-full overflow-hidden relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />

        {/* Subtle animated grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px',
          }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="container mx-auto relative z-10 px-6 md:px-20 lg:px-32 text-white flex-1 flex items-center">
          <div className="max-w-3xl pt-32 pb-14">

            {/* Eyebrow tag */}
            <div
              className="inline-flex items-center gap-2 mb-5"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s'
              }}
            >
              <span className="w-6 h-[2px] bg-brand inline-block rounded-full" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/70">
                Empowering Africa's Future
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
              }}
            >
              AFRI KAN-EXCEL<br />
              <span className="text-brand">RENAISSANCE</span><br />
              FOUNDATION
            </h1>

            {/* Subheading */}
            <p
              className="mt-5 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s'
              }}
            >
              Committed to empowering communities across Africa through youth-led action, cultural intelligence, and last-mile delivery.
            </p>

            {/* CTA buttons */}
            <div
              className="mt-8 flex gap-4 flex-wrap"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s'
              }}
            >
              <ScrollLink
                to="Projects"
                smooth
                duration={600}
                className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:brightness-110 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
              >
                Our Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </ScrollLink>

              <ScrollLink
                to="About"
                smooth
                duration={600}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 backdrop-blur-sm text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition-all cursor-pointer"
              >
                Learn More
              </ScrollLink>
            </div>

          </div>
        </div>

        {/* Stats bar — pinned to bottom of hero */}
        <div
          ref={statsRef}
          className="relative z-10 w-full"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1s ease 0.8s'
          }}
        >
          <div className="container mx-auto px-6 md:px-20 lg:px-32 pb-10">
            <div
              className="inline-flex flex-wrap gap-8 md:gap-14 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-8 py-5"
            >
              {stats.map((s, i) => (
                <StatItem key={i} {...s} animate={statsVisible} />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1s ease 1.2s'
        }}
      >
        <span className="text-white/40 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>

    </div>
  )
}