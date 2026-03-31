import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import afkr4 from '../assets/afkr4.jpg'
import manifestoMovement from '../assets/manifesto-movement.jpg'

// ── Animated counter hook ──
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

// ── Intersection observer hook ──
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

// ── Single stat item ──
function StatItem({ value, suffix, label, animate, delay }) {
  const count = useCounter(value, 1800, animate)
  return (
    <div
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      <p className="text-4xl font-extrabold text-gray-800">
        {count}{suffix}
      </p>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
    </div>
  )
}

const stats = [
  { value: 3,  suffix: "+", label: "Years of Service" },
  // { value: 9,  suffix: "+", label: "Communities Reached" },
  // { value: 2, suffix: "+", label: " Partners" },
  { value: 5,  suffix: "+", label: "Projects Completed" },
]

const links = [
  { to: "/story",                label: "Our Story" },
  { to: "/work",                 label: "Our Work" },
  { to: "/operational-structure", label: "Operational Structure" },
]

export default function About() {
  const [sectionRef, sectionVisible] = useInView(0.15)
  const [statsRef, statsVisible]     = useInView(0.3)

  return (
    <div
      className="flex flex-col items-center justify-center text-center container mx-auto p-14 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      {/* Section heading */}
      <div
        ref={sectionRef}
        style={{
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Our <span className="underline underline-offset-4 decoration-1 font-light">Impacts</span>
        </h1>
        <p className="text-gray-500 max-w-80 text-center mb-8">
          Committed to empowering communities across Africa
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">

        {/* Image */}
        <div
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateX(0)' : 'translateX(-24px)',
            transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s',
          }}
        >
          <img
            src={manifestoMovement}
            alt="Community program"
            loading="lazy"
            decoding="async"
            className="w-full sm:w-1/2 md:w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">

          {/* Animated stats grid */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28"
          >
            {stats.map((s, i) => (
              <StatItem
                key={i}
                {...s}
                animate={statsVisible}
                delay={i * 0.1}
              />
            ))}
          </div>

          {/* Description */}
          <p
            className="my-10 max-w-lg text-gray-700 text-left leading-relaxed"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
            }}
          >
            <strong>The AFRI KAN-EXCEL RENAISSANCE FOUNDATION (AERF) </strong>
            is a last-mile operational force dedicated to bridging the Contextual Deficit
            in African development. Based in Ghana with a continental outlook, AERF serves
            as the "Social Software" that allows global resources to function within the
            African reality.
          </p>

          {/* Links */}
          <div
            className="flex flex-wrap items-center gap-3"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s',
            }}
          >
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="btn-brand px-5 py-1 rounded cursor-pointer transition-transform hover:scale-105 active:scale-95"
              >
                {label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}