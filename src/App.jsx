import React from 'react'
import MetaTags from './components/MetaTags'
import Header from "./components/Header"
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Volunteer from './components/Volunteer'
import Donate from './components/Donate'
import Contact from './components/Contact'
import Team from './components/Team'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <MetaTags />
      <Header />
      <About />
      <Projects />
      <Gallery />
      <Testimonials />
      <Volunteer />
      <Donate />
      <Contact />
      <Team />
      <Footer />
    </>
  )
}


