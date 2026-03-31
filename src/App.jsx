import React from "react"
import { Routes, Route } from "react-router-dom"
import './index.css'

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
import OperationalStructure from "./components/OperationalStructure"
import ProjectDetails from './components/ProjectDetails'




function Home() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Testimonials />
      {/* <Volunteer /> */}
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
        <Route path="/operational-structure" element={<OperationalStructure />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/volunteer" element={<Volunteer />} /> */}
        <Route path="/projects/:id" element={<ProjectDetails />} /> 
        
      </Routes>
    </>
  )
}
