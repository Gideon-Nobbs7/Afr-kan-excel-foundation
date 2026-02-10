import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const team = [
  { name: 'Founder — Ama Boateng', role: 'Executive Director', img: assets.afkr8 },
  { name: 'Program Lead — Kwame Adu', role: 'Programs Manager', img: assets.afkr9 },
  { name: 'Operations — Fatima Ali', role: 'Operations Coordinator', img: assets.afkr10 },
]

export default function Team(){
  return (
    <motion.section
      id="Team"
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-gray-50 py-16"
    >
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <h2 className="text-3xl font-bold text-center mb-6">Our Team & Partners</h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">Local leaders and partners who make our work possible.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map((m,i)=> (
            <div key={i} className="bg-white p-6 rounded shadow text-center">
              <img src={m.img} alt={m.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
              <p className="font-semibold">{m.name}</p>
              <p className="text-sm text-gray-500">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
      </motion.section>
  )
}
