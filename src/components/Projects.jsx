import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../assets/assets'

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

// ── Single project card ──
function ProjectCard({ p, index }) {
  const [ref, visible] = useInView(0.08)
  const [hovered, setHovered] = useState(false)

  return (
    <article
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card overflow-hidden flex flex-col h-full rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image with zoom on hover */}
      <div className="overflow-hidden relative h-52">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        />

        {/* Category badge */}
        {p.category && (
          <span className="absolute top-3 left-3 bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {p.category}
          </span>
        )}

        {/* Status badge */}
        {p.status && (
          <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full shadow ${
            p.status === 'Completed'
              ? 'bg-green-100 text-green-700'
              : 'bg-yellow-100 text-yellow-700'
          }`}>
            {p.status}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex-1 flex flex-col">

        {/* Location + date row */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {p.location}
          </span>
          <span className="text-xs text-gray-400">{p.date}</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-800 text-lg leading-snug mb-2">
          {p.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed flex-1">
          {p.description}
        </p>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            to={`/projects/${p.id}`}
            className="inline-flex items-center gap-1 text-brand font-semibold text-sm hover:gap-2 transition-all duration-200"
          >
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Impact pill */}
          {p.impact && p.impact.length > 0 && (
            <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-3 py-1">
              {p.impact.length} impact{p.impact.length > 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [headerRef, headerVisible] = useInView(0.2)

  return (
    <section id="Projects" className="container mx-auto px-6 md:px-20 lg:px-32 py-20">

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
          What We've Done
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Our <span className="underline underline-offset-4 decoration-1 font-light">Projects</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Highlights from our community visits and programs. Click a project to learn more or support the initiative.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((p, i) => (
          <ProjectCard key={p.id ?? i} p={p} index={i} />
        ))}
      </div>

    </section>
  )
}