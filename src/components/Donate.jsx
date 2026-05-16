import React, { useEffect, useRef, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const VOLUNTEER_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd9sRam8_ikKO_wzlru3Uja1O3XEYa30J_gURdXfDu8Ue5lhw/viewform?usp=header' // replace with actual form URL

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

const volunteerRoles = [
  {
    label: "Event Support",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Mentorship",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    label: "Outreach",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Fundraising",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Donate() {
  const [tab, setTab] = useState('donate')
  const [headerRef, headerVisible] = useInView(0.2)
  const [tabsRef,   tabsVisible]   = useInView(0.15)
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
          className="text-center mb-10"
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
            Choose how you'd like to contribute — financially or with your time and skills.
          </p>
        </div>

        {/* Tab switcher */}
        <div
          ref={tabsRef}
          className="flex justify-center mb-10"
          style={{
            opacity: tabsVisible ? 1 : 0,
            transform: tabsVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <div className="flex gap-8">
            {['donate', 'volunteer'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="relative pb-2 text-base font-semibold tracking-wide transition-colors duration-200"
                style={{ color: tab === t ? '#fff' : 'rgba(255,255,255,0.45)' }}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
                <span
                  className="absolute bottom-0 left-0 h-[2px] bg-white rounded-full transition-all duration-300"
                  style={{ width: tab === t ? '100%' : '0%' }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* ── DONATE TAB ── */}
        {tab === 'donate' && (
          <>
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
                We currently accept donations via our secure partner pages. Please reach out to us directly — every contribution counts.
              </p>
            </div>

            {/* Donate CTA */}
            <div
              className="flex items-center justify-center"
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
            </div>
          </>
        )}

        {/* ── VOLUNTEER TAB ── */}
        {tab === 'volunteer' && (
          <div className="max-w-xl mx-auto text-center">

            {/* Volunteer role pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {volunteerRoles.map((role, i) => (
                <div
                  key={i}
                  style={{
                    animation: `fadeUp 0.4s ease ${i * 0.08}s both`,
                  }}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-5 py-2 text-sm font-medium"
                >
                  {role.icon}
                  <span>{role.label}</span>
                </div>
              ))}
            </div>

            {/* Volunteer card */}
            <div
              className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-8 mb-10"
              style={{ animation: 'fadeUp 0.5s ease 0.1s both' }}
            >
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-white/85 text-sm leading-relaxed">
                Join our team of dedicated volunteers and help us drive change across African communities. Whether in-person or remote, your skills and time make a real impact.
              </p>
            </div>

            {/* Volunteer CTA */}
            <div style={{ animation: 'fadeUp 0.5s ease 0.2s both' }}>
              <a
                href={VOLUNTEER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand font-bold px-8 py-3 rounded-full cursor-pointer
                           hover:scale-105 active:scale-95 transition-transform shadow-lg inline-flex items-center gap-2"
              >
                Apply to Volunteer
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        )}

      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
