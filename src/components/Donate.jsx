import React from 'react'
import { motion } from 'framer-motion'

export default function Donate(){
  return (
    <motion.section
      id="Donate"
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="brand-gradient text-white py-16"
    >
      <div className="container mx-auto px-6 md:px-20 lg:px-32 text-center">
        <h2 className="text-3xl font-bold mb-3">Support our work</h2>
        <p className="max-w-2xl mx-auto mb-6">Your donation helps fund outreach programs, school supplies, clean water projects and entrepreneurship training.</p>
        <p className="max-w-xl mx-auto bg-white/10 p-6 rounded mb-6">We currently accept donations via our secure partner pages. For now, please reach out to us or join our volunteer efforts.</p>
        <div className="flex items-center justify-center gap-4">
          <a href="#Contact" className="bg-white text-brand px-6 py-3 rounded font-semibold">Donate</a>
          {/* <a href="#Volunteer" className="border border-white px-6 py-3 rounded">Volunteer</a> */}
        </div>
      </div>
    </motion.section>
  )
}
