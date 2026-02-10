import React from 'react'
import { motion } from 'framer-motion'

export default function Volunteer(){
  return (
    <motion.section
      id="Volunteer"
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-6 md:px-20 lg:px-32 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-4">Volunteer with us</h2>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-8">Join our teams on the ground — we welcome skilled and general volunteers for short and long-term programs.</p>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow text-center">
        <p className="mb-4">We're excited to have volunteers join our programs. To apply, please contact us so we can match you with the right opportunity.</p>
        <div className="flex items-center justify-center gap-4">
          <a href="#Contact" className="btn-brand px-6 py-3 rounded font-semibold">Join Us</a>
          <a href="#Projects" className="border border-gray-300 px-6 py-3 rounded">See Projects</a>
        </div>
      </div>
    </motion.section>
  )
}
