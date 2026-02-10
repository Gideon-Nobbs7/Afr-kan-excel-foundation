import React from 'react'
import { projectsData } from '../assets/assets'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section id="Projects" className="container mx-auto px-6 md:px-20 lg:px-32 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Our Projects</h2>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">Highlights from our community visits and programs. Click a project to learn more or support the initiative.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((p, i) => (
          <motion.article
            key={i}
            whileHover={{ scale: 1.02 }}
            className="card overflow-hidden flex flex-col h-full"
          >
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover" loading="lazy" decoding="async"/>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{p.location}</p>
                </div>
                <span className="text-sm text-gray-400">{p.date}</span>
              </div>
              <p className="mt-3 text-gray-700 flex-1">{p.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <a href="#" className="text-brand font-medium">Learn more</a>
                <div className="flex gap-2">
                  {/* <button className="bg-white text-brand border border-brand px-3 py-1 rounded">Volunteer</button>
                  <button className="bg-brand text-white px-3 py-1 rounded">Donate</button> */}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
