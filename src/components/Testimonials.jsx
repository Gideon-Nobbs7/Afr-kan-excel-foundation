import React from 'react'
import { testimonialsData, assets } from '../assets/assets'
import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section id="Testimonials" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">What people say about our work</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} alt={t.alt} className="w-12 h-12 object-cover rounded-full"/>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-600">{t.text}</p>
              <div className="mt-4 flex gap-1">
                {Array.from({length: t.rating}).map((_,idx)=>(<img key={idx} src={assets.star_icon} alt="star" className="w-4 h-4" />))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
