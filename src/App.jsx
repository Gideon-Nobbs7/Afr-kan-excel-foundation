import React from "react"
import { Routes, Route } from "react-router-dom"

import MetaTags from "./components/MetaTags"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Gallery from "./pages/Gallery"
import Testimonials from "./components/Testimonials"
import Volunteer from "./components/Volunteer"
import Donate from "./components/Donate"
import Contact from "./components/Contact"
import Team from "./components/Team"
import Footer from "./components/Footer"
import Signup from "./components/Signup"
import OurStory from "./components/OurStory"
import OurWork from "./components/OurWork"




function Home() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Volunteer />
      <Donate />
      <Contact />
      <Team />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <MetaTags />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  )
}
