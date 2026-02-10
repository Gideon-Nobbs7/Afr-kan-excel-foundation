import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.9 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border-t py-12"
    >
      <div className="container mx-auto px-6 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={assets.logo_dark} alt="logo" className="w-10 h-10"/>
            <div>
              <p className="font-semibold">Afri Kan-excel Foundation</p>
              <p className="text-sm text-gray-500">Empowering communities across Africa</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">We partner with local leaders to deliver programs in health, education, water and entrepreneurship.</p>
        </div>
        <div>
          <p className="font-semibold mb-3">Quick links</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#Programs">Programs</a></li>
            <li><a href="#Gallery">Gallery</a></li>
            <li><a href="#Volunteer">Volunteer</a></li>
            <li><a href="#Donate">Donate</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Connect</p>
          <p className="text-sm text-gray-600">info@afrikan-excel.org</p>
          <div className="mt-4 flex gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">F</div>
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">T</div>
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">I</div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-20 lg:px-32 text-sm text-gray-400 mt-10 border-t pt-6">&copy; {new Date().getFullYear()} Afri Kan-excel Foundation. All rights reserved.</div>
    </motion.footer>
  )
}
