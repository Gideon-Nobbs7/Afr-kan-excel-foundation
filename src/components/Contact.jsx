import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ENDPOINTS } from '../config'

export default function Contact() {
  const [form, setForm] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })

  const [loading,setLoading] = useState(false)
  const [success,setSuccess] = useState(false)

  const handleChange = e =>
    setForm({...form,[e.target.name]:e.target.value})

  const handleSubmit = async e=>{
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    try{
      const res = await fetch(ENDPOINTS.CONTACT, {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({
          full_name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        })
      })

      if(!res.ok) throw new Error()

      setSuccess(true)
      setForm({name:'',email:'',subject:'' ,message:''})
    }
    catch{
      alert("Failed to send message")
    }

    setLoading(false)
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
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
        Reach out for collaborations, volunteering or support.
      </p>

      {success && (
        <div
          style={{
            background: "#ecfdf5",
            border: "1px solid #16a34a",
            color: "#166534",
            padding: "0.75rem 1rem",
            borderRadius: "0.5rem",
            textAlign: "center",
            marginBottom: "1rem",
            fontWeight: 500,
          }}
        >
          Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="border p-3 rounded"
            placeholder="Your name"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            className="border p-3 rounded"
            placeholder="Your email"
          />
        </div>

        <br/>

        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="border p-3 rounded w-full"
          placeholder="Subject"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="border p-3 rounded w-full mt-4"
          rows="6"
          placeholder="Your message"
        />

        <div className="mt-4 text-right">
          <button
            type="submit"
            disabled={loading}
            className="btn-brand px-6 py-2 rounded"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </motion.section>
  )
}
