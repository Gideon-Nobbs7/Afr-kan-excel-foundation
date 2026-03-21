import React, { useEffect, useRef, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

// ── Intersection observer hook ──
function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

const impacts = [
  {
    label: "School Supplies",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    label: "Clean Water",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C12 2 5 10 5 14a7 7 0 0014 0c0-4-7-12-7-12z" />
      </svg>
    ),
  },
  {
    label: "Entrepreneurship",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    label: "Community Outreach",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function Donate() {
  const [headerRef, headerVisible] = useInView(0.2)
  const [impactRef, impactVisible] = useInView(0.2)
  const [cardRef,   cardVisible]   = useInView(0.2)

  return (
    <section id="Donate" className="brand-gradient text-white py-20 overflow-hidden relative">

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-12"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-3">
            Make a Difference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Support Our <span className="underline underline-offset-4 decoration-1 font-light">Work</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/80 leading-relaxed">
            Your donation helps fund outreach programs, school supplies, clean water projects, and entrepreneurship training across Africa.
          </p>
        </div>

        {/* Impact pills */}
        <div
          ref={impactRef}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {impacts.map((item, i) => (
            <div
              key={i}
              style={{
                opacity: impactVisible ? 1 : 0,
                transform: impactVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
              className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-5 py-2 text-sm font-medium"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Notice card */}
        <div
          ref={cardRef}
          style={{
            opacity: cardVisible ? 1 : 0,
            transform: cardVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
          className="max-w-xl mx-auto bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-8 text-center mb-10"
        >
          <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-white/85 text-sm leading-relaxed">
            We currently accept donations via our secure partner pages. For now, please reach out to us directly or join our volunteer efforts — every contribution counts.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex items-center justify-center gap-4 flex-wrap"
          style={{
            opacity: cardVisible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.4s',
          }}
        >
          <ScrollLink
            to="Contact"
            smooth
            duration={600}
            className="bg-white text-brand font-bold px-8 py-3 rounded-full cursor-pointer
                       hover:scale-105 active:scale-95 transition-transform shadow-lg inline-flex items-center gap-2"
          >
            Donate Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </ScrollLink>

          <ScrollLink
            to="Volunteer"
            smooth
            duration={600}
            className="border border-white/50 text-white font-semibold px-8 py-3 rounded-full cursor-pointer
                       hover:bg-white/10 transition-colors inline-block"
          >
            Volunteer Instead
          </ScrollLink>
        </div>

      </div>
    </section>
  )
}