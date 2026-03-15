import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

export default function Gallery() {
  const images = [assets.afkr2, assets.afkr3, assets.afkr4, assets.afkr5, assets.afkr6, assets.afkr7, assets.afkr8, assets.afkr9, assets.afkr10]
  const [active, setActive] = useState(null)

  return (
    <>
      <Navbar isSticky={true}/>

      <motion.section
        id="Gallery"
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, x: 0 }}
        className="container mx-auto px-6 md:px-20 lg:px-32 pt-32 pb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>

        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
          Photos from our community visits.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <button key={i} onClick={() => setActive(i)} className="overflow-hidden rounded">
              <img
                src={src}
                alt={`Community ${i + 1}`}
                className="w-full h-40 object-cover"
              />
            </button>
          ))}
        </div>

        {active !== null && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setActive(null)}
          >
            <img
              src={images[active]}
              alt={`Community ${active + 1}`}
              className="max-h-[80vh] max-w-[90vw] rounded"
            />
          </div>
        )}
      </motion.section>
    </>
  )
}