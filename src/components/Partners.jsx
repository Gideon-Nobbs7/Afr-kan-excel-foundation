import React, { useEffect, useRef, useState } from 'react'
import nyaLogo from '../assets/NYA.jpg'

const partner = {
  name: "National Youth Authority",
  logo: nyaLogo,
  tagline: "Official Partner",
  description:
    "AERF is proud to be in official partnership with the National Youth Authority (NYA) of Ghana. " +
    "Together, we are committed to empowering young people across the country through targeted programmes, " +
    "shared resources, and a united vision for African excellence.",
  website: "https://nya.gov.gh",
  websiteLabel: "Visit National Youth Authority",
}
// ───────────────────────────────────────────────────────

function useInView(threshold = 0.2) {
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

export default function Partners() {
  const [ref, visible] = useInView(0.2)

  return (
    <section id="Partners" className="py-20">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">

        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand mb-3">
            Collaboration
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="underline underline-offset-4 decoration-1 font-light">Partners</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Working together to deepen our impact across Africa.
          </p>
        </div>

        {/* Partner card */}
        <div
          className="card max-w-2xl mx-auto p-10 flex flex-col items-center text-center gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}
        >
          {/* Logo or placeholder */}
          {partner.logo ? (
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="h-20 object-contain"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-2xl">
              {partner.name.charAt(0)}
            </div>
          )}

          {/* Name & tagline */}
          <div>
            <h3 className="text-xl font-bold text-gray-800">{partner.name}</h3>
            {partner.tagline && (
              <p className="text-sm text-brand mt-1 italic">{partner.tagline}</p>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed max-w-lg">
            {partner.description}
          </p>

          {/* Link */}
          {partner.website && (
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand px-6 py-2 rounded transition-transform hover:scale-105 active:scale-95 inline-block"
            >
              {partner.websiteLabel}
            </a>
          )}
        </div>

      </div>
    </section>
  )
}
