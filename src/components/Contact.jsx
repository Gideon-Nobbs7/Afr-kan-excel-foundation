import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({name:'', email:'', message:''})
  const handleChange = e=>setForm({...form,[e.target.name]:e.target.value})
  const handleSubmit = e=>{
    e.preventDefault()
    alert('Thanks! Message sent (demo).')
    setForm({name:'',email:'',message:''})
  }
  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-6 md:px-20 lg:px-32 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">Reach out for collaborations, volunteering or support.</p>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} required className="border p-3 rounded" placeholder="Your name"/>
          <input name="email" value={form.email} onChange={handleChange} required type="email" className="border p-3 rounded" placeholder="Your email"/>
        </div>
        <textarea name="message" value={form.message} onChange={handleChange} required className="border p-3 rounded w-full mt-4" rows="6" placeholder="Your message"></textarea>
        <div className="mt-4 text-right">
          <button type="submit" className="btn-brand px-6 py-2 rounded">Send Message</button>
        </div>
      </form>
    </motion.section>
  )
}
