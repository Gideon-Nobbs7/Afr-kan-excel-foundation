import React, { useEffect, useRef, useState } from 'react'
import { testimonialsData, assets } from '../assets/assets'

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

// ── Single testimonial card ──
function TestimonialCard({ t, index }) {
  const [ref, visible] = useInView(0.1)

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`,
      }}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-7 flex flex-col gap-5
                 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Quote mark */}
      <div className="text-5xl font-serif text-brand/20 leading-none select-none">"</div>

      {/* Testimonial text */}
      <p className="text-gray-600 leading-relaxed flex-1 text-sm md:text-base">
        {t.text}
      </p>

      {/* Star rating */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <img
            key={idx}
            src={assets.star_icon}
            alt=""
            className={`w-4 h-4 transition-opacity ${idx < t.rating ? 'opacity-100' : 'opacity-20'}`}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={t.image}
          alt={t.alt || t.name}
          className="w-20 h-20 rounded-full object-cover ring-2 ring-brand/20 group-hover:ring-brand/50 transition-all"
        />
        <div>
          <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
          <p className="text-xs text-gray-400">{t.title}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [headerRef, headerVisible] = useInView(0.2)

  return (
    <section id="Testimonials" className="bg-gray-50 py-20">
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
            What People Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Voices from the <span className="underline underline-offset-4 decoration-1 font-light">Community</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real stories from the people we work alongside every day.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}