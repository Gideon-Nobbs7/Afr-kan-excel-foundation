import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
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

const perks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Community Impact",
    desc: "Work directly alongside local leaders and youth to deliver real, measurable change.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Skill Development",
    desc: "Gain hands-on experience in community organizing, leadership, and humanitarian action.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Flexible Commitment",
    desc: "Short or long-term programs available — we match you with the right opportunity.",
  },
]

export default function Volunteer() {
  const [headerRef, headerVisible] = useInView(0.2)
  const [perksRef, perksVisible]   = useInView(0.15)
  const [cardRef, cardVisible]     = useInView(0.2)

  return (
    <section id="Volunteer" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">

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
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand mb-3">
            Get Involved
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Volunteer <span className="underline underline-offset-4 decoration-1 font-light">With Us</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Join our teams on the ground — we welcome skilled and general volunteers for short and long-term programs.
          </p>
        </div>

        {/* Perks */}
        <div
          ref={perksRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {perks.map((perk, i) => (
            <div
              key={i}
              style={{
                opacity: perksVisible ? 1 : 0,
                transform: perksVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
              }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                {perk.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{perk.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div
          ref={cardRef}
          style={{
            opacity: cardVisible ? 1 : 0,
            transform: cardVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Make a Difference?</h3>
          <p className="text-gray-500 text-sm mb-7 max-w-md mx-auto leading-relaxed">
            We're excited to have you join our programs. Sign up and we'll match you with the right opportunity based on your skills and availability.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/signup"
              className="btn-brand px-7 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
            >
              Join Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <ScrollLink
              to="Projects"
              smooth
              duration={600}
              className="border border-gray-200 text-gray-600 px-7 py-3 rounded-full font-medium cursor-pointer hover:border-brand hover:text-brand transition-colors"
            >
              See Projects
            </ScrollLink>
          </div>
        </div>

      </div>
    </section>
  )
}