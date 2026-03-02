import React from "react"
import { useEffect, useState } from "react"
import "../styles/signup.css"
import { ENDPOINTS } from "../config"

export default function Signup() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    country_code: "+233", // Default to Ghana
    phone_number: "",
    country: "",
    volunteer: "",
    why_join: ""
  })
  
  // Common country codes
  const countryCodes = [
    { code: "+1", country: "USA/Canada" },
    { code: "+44", country: "UK" },
    { code: "+233", country: "Ghana" },
    { code: "+234", country: "Nigeria" },
    { code: "+254", country: "Kenya" },
    { code: "+27", country: "South Africa" },
    { code: "+20", country: "Egypt" },
    { code: "+212", country: "Morocco" },
    { code: "+213", country: "Algeria" },
    { code: "+216", country: "Tunisia" },
    { code: "+218", country: "Libya" },
    { code: "+220", country: "Gambia" },
    { code: "+221", country: "Senegal" },
    { code: "+222", country: "Mauritania" },
    { code: "+223", country: "Mali" },
    { code: "+224", country: "Guinea" },
    { code: "+225", country: "Ivory Coast" },
    { code: "+226", country: "Burkina Faso" },
    { code: "+227", country: "Niger" },
    { code: "+228", country: "Togo" },
    { code: "+229", country: "Benin" },
    { code: "+230", country: "Mauritius" },
    { code: "+231", country: "Liberia" },
    { code: "+232", country: "Sierra Leone" },
    { code: "+235", country: "Chad" },
    { code: "+236", country: "Central African Republic" },
    { code: "+237", country: "Cameroon" },
    { code: "+238", country: "Cape Verde" },
    { code: "+239", country: "Sao Tome and Principe" },
    { code: "+240", country: "Equatorial Guinea" },
    { code: "+241", country: "Gabon" },
    { code: "+242", country: "Republic of Congo" },
    { code: "+243", country: "DR Congo" },
    { code: "+244", country: "Angola" },
    { code: "+245", country: "Guinea-Bissau" },
    { code: "+246", country: "British Indian Ocean Territory" },
    { code: "+248", country: "Seychelles" },
    { code: "+249", country: "Sudan" },
    { code: "+250", country: "Rwanda" },
    { code: "+251", country: "Ethiopia" },
    { code: "+252", country: "Somalia" },
    { code: "+253", country: "Djibouti" },
    { code: "+255", country: "Tanzania" },
    { code: "+256", country: "Uganda" },
    { code: "+257", country: "Burundi" },
    { code: "+258", country: "Mozambique" },
    { code: "+260", country: "Zambia" },
    { code: "+261", country: "Madagascar" },
    { code: "+262", country: "Reunion" },
    { code: "+263", country: "Zimbabwe" },
    { code: "+264", country: "Namibia" },
    { code: "+265", country: "Malawi" },
    { code: "+266", country: "Lesotho" },
    { code: "+267", country: "Botswana" },
    { code: "+268", country: "Eswatini" },
    { code: "+269", country: "Comoros" },
    { code: "+91", country: "India" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+61", country: "Australia" },
    { code: "+55", country: "Brazil" },
  ].sort((a, b) => a.country.localeCompare(b.country))
  
  // fetch countries
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then(res => res.json())
      .then(data =>
        setCountries(
          data
            .map(c => c.name.common)
            .sort((a, b) => a.localeCompare(b))
        )
      )
      .catch(err => console.error("Failed to load countries:", err))
  }, [])
  
  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })
    
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    
    // Combine country code and phone number
    const fullPhone = form.country_code + form.phone_number
    
    try {
      const res = await fetch(ENDPOINTS.MEMBERS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone_number: fullPhone // Send combined phone number
        })
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
      setForm({
        full_name: "",
        email: "",
        country_code: "+233",
        phone_number: "",
        country: "",
        volunteer: "",
        why_join: ""
      })
    } catch {
      alert("Submission failed. Try again.")
    }
    setLoading(false)
  }
  
  return (
    <div className="page">
      <div className="card">
        <div className="header">
          <h1>AFRI KAN-EXCEL FOUNDATION</h1>
          <p>Join us in building resilient communities</p>
        </div>
        {success && (
          <div className="success">
            Signup successful! We'll contact you soon.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <Field label="Full Name">
            <input 
              name="full_name" 
              value={form.full_name} 
              onChange={handleChange} 
              required 
              placeholder="Enter your full name"
            />
          </Field>
          
          <Field label="Email">
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              required 
              placeholder="your.email@example.com"
            />
          </Field>
          
          <Field label="Phone Number">
            <div className="phone-container">
              <select 
                name="country_code" 
                value={form.country_code} 
                onChange={handleChange}
                required
                className="country-code-select"
              >
                {countryCodes.map(cc => (
                  <option key={cc.code} value={cc.code}>
                    {cc.code}
                  </option>
                ))}
              </select>
              <input 
                type="tel"
                name="phone_number" 
                value={form.phone_number} 
                onChange={handleChange} 
                required 
                placeholder="123456789"
                className="phone-input"
                pattern="[0-9]*"
              />
            </div>
          </Field>
          
          <Field label="Country">
            <select name="country" value={form.country} onChange={handleChange} required>
              <option value="">Select Country</option>
              {countries.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </Field>
          
          <Field label="Volunteer Area">
            <select name="volunteer" value={form.volunteer} onChange={handleChange} required>
              <option value="">Select option</option>
              <option value="Education and Skills Development">Education and Skills Development</option>
              <option value="Community Outreach">Community Outreach</option>
              <option value="Advocacy and Awareness">Advocacy and Awareness</option>
              <option value="Administrative Support">Administrative Support</option>
              <option value="Creative Contributions">Creative Contributions</option>
              <option value="Environmental Conservation">Environmental Conservation</option>
              <option value="Partnership Development">Partnership Development</option>
            </select>
          </Field>
          
          <Field label="Reason for Joining">
            <input 
              name="why_join" 
              value={form.why_join} 
              onChange={handleChange} 
              required 
              placeholder="Tell us why you want to join"
            />
          </Field>
          
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
    </div>
  )
}