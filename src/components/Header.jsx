// Header.jsx
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import hero from '../assets/afkr10.jpg'
import { Link as ScrollLink } from 'react-scroll'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)

  // Detect scroll to toggle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <Navbar isSticky={isSticky} />

      {/* Hero Section */}
      <div
        className='min-h-[100vh] mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative'
        style={{ backgroundImage: `url(${hero})` }}
        id="Header"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10" aria-hidden="true" />

        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto relative z-10 px-6 md:px-20 lg:px-32 text-white"
        >
          <div className="max-w-3xl pt-24 pb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Afri Kan-excel Foundation
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/95">
              Building resilient communities across Africa through education, entrepreneurship, and sustainable development.
            </p>
            <div className="mt-6 text-sm text-white/80">
              We partner with local leaders to deliver measurable impact — join us.
            </div>
            <div className="mt-8 flex gap-4 flex-wrap">
              {/* Smooth scroll button */}
              <ScrollLink

                id="Projects"
                to="Projects"
                smooth={true}
                duration={500}
                className="inline-block bg-white text-brand font-semibold px-6 py-3 rounded shadow hover:scale-[1.02] transition cursor-pointer"
              >
                Our Programs
              </ScrollLink>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}