import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'

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

const team = [
  { name: 'Mr. Andrew Kwabena Agyapong',  role: 'Founder',    title: 'Founder',        img: assets.andy  },
  { name: 'Ms Agnes Kyerewaa Frimpong',    role: 'Division Lead',      title: 'Division Lead',   img: assets.agnes  },
  { name: 'Mr. Okyere Cosmos Abeiku',   role: 'Administrator', title: 'Administrator',    img: assets.cosmos },
  { name: 'Mr. Sie Kofi Eugene',   role: 'Acting Media Manger', title: 'Acting Media Manger',     },
]

function TeamCard({ member, index }) {
  const [ref, visible] = useInView(0.1)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full bg-brand transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0.4 }}
      />

      <div className="p-8 flex flex-col items-center text-center flex-1">

        {/* Avatar */}
        <div className="relative mb-5">
          <div
            className="w-24 h-24 rounded-full overflow-hidden ring-3 ring-brand/10 transition-all duration-300"
            style={{ ringColor: hovered ? 'var(--brand)' : undefined }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
            />
          </div>

          {/* Title badge */}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full whitespace-nowrap shadow">
            {member.title}
          </span>
        </div>

        {/* Name & role */}
        <h3 className="font-bold text-gray-800 text-lg mt-3">{member.name}</h3>
        <p className="text-sm text-gray-400 mt-1">{member.role}</p>

        {/* Divider */}
        <div
          className="mt-5 h-px bg-gray-100 w-full transition-all duration-300"
          style={{ width: hovered ? '100%' : '40%', margin: '1.25rem auto 0' }}
        />

        {/* Placeholder social row — easy to extend */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand transition-colors cursor-pointer">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand transition-colors cursor-pointer">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}

export default function Team() {
  const [headerRef, headerVisible] = useInView(0.2)

  return (
    <section id="Team" className="py-20">
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
            The People
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="underline underline-offset-4 decoration-1 font-light">Team</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Local leaders and partners who make our work possible every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}