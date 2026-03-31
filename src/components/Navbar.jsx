import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { assets } from '../assets/assets'

const sections = ["Header", "About", "Projects", "Testimonials", "Team", "Gallery", "Contact"]

function NavItem({ sec, isHome, onClick }) {
  const label = sec === "Header" ? "Home" : sec

  if (sec === "Gallery") {
    return (
      <Link to="/gallery" onClick={onClick} className="cursor-pointer hover:text-gray-400 transition-colors">
        Gallery
      </Link>
    )
  }

  if (isHome) {
    return (
      <ScrollLink to={sec} smooth duration={900} onClick={onClick} className="cursor-pointer hover:text-gray-400 transition-colors">
        {label}
      </ScrollLink>
    )
  }

  return (
    <Link to={`/#${sec.toLowerCase()}`} onClick={onClick} className="cursor-pointer hover:text-gray-400 transition-colors">
      {label}
    </Link>
  )
}

export default function Navbar({ isSticky }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  const closeMobileMenu = () => setShowMobileMenu(false)

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [showMobileMenu])

  return (
    <>
      {/* ── Navbar bar ── */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">

          {/* Logo + sticky mobile title */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src={assets.logo2} alt="Afri Kan-Excel" className="w-10 h-10 cursor-pointer flex-shrink-0" />

            {/* Only visible on mobile when sticky */}
            <div
              className={`md:hidden flex flex-col transition-all duration-300 overflow-hidden ${
                isSticky ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              <span className="text-sm font-bold text-gray-800 leading-tight whitespace-nowrap">
                Afri Kan-Excel
              </span>
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand whitespace-nowrap">
                Renaissance Foundation
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className={`hidden md:flex gap-7 ${isSticky ? 'text-gray-800' : 'text-white'}`}>
            {sections.map(sec => (
              <NavItem key={sec} sec={sec} isHome={isHome} />
            ))}
          </ul>

          {/* Desktop sign up */}
          <Link to="/signup" className="hidden md:block">
            <button className={`px-8 py-2 rounded-full transition ${isSticky ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-gray-800 hover:bg-gray-100'}`}>
              Sign Up
            </button>
          </Link>

          {/* Mobile hamburger */}
          <img
            src={assets.menu_icon}
            alt="Open menu"
            onClick={() => setShowMobileMenu(true)}
            className={`md:hidden w-7 cursor-pointer transition-all ${isSticky ? 'brightness-0' : 'invert'}`}
          />

        </div>
      </div>

      {/* ── Mobile menu ── */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <div onClick={closeMobileMenu} className="absolute inset-0 bg-black/50" />

          {/* Sliding panel */}
          <div className="absolute right-0 top-0 bottom-0 w-3/4 max-w-xs bg-white shadow-2xl flex flex-col">

            {/* Panel header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <img src={assets.logo2} alt="Afri Kan-Excel" className="w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800 leading-tight">Afri Kan-Excel</span>
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand">Renaissance Foundation</span>
                </div>
              </div>
              <img
                src={assets.cross_icon}
                alt="Close menu"
                onClick={closeMobileMenu}
                className="w-5 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Nav links */}
            <ul className="flex flex-col gap-1 px-4 py-4 flex-1 overflow-y-auto">
              {sections.map(sec => (
                <li key={sec} className="w-full">
                  <div className="px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium text-base cursor-pointer">
                    <NavItem sec={sec} isHome={isHome} onClick={closeMobileMenu} />
                  </div>
                </li>
              ))}
            </ul>

            {/* Sign up pinned at bottom */}
            <div className="px-4 py-5 border-t border-gray-100">
              <Link
                to="/signup"
                onClick={closeMobileMenu}
                className="block w-full text-center py-3 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                Sign Up →
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  )
}