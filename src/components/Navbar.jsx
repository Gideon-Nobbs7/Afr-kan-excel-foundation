// Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar({ isSticky }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [showMobileMenu])

  const location = useLocation()
  const isHome = location.pathname === "/"

  const sections = ["Header", "About", "Programs", "Testimonials", "Volunteer", "Team", "Gallery", "Contact"]

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isSticky ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo2} alt="Afri Kan-excel" className={`w-10 h-10 cursor-pointer`} />
        </Link>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex gap-7 ${isSticky ? 'text-gray-800' : 'text-white'}`}>
          {sections.map((sec) => {
            if (sec === "Gallery") {
              return (
                <Link key={sec} to="/gallery" className="cursor-pointer hover:text-gray-400">
                  Gallery
                </Link>
              )
            } else if (isHome) {
              return (
                <ScrollLink
                  key={sec}
                  to={sec}
                  smooth={true}
                  duration={900}
                  className="cursor-pointer hover:text-gray-400"
                >
                  {sec === "Header" ? "Home" : sec}
                </ScrollLink>
              )
            } else {
              return (
                <Link key={sec} to={`/#${sec.toLowerCase()}`} className="cursor-pointer hover:text-gray-400">
                  {sec === "Header" ? "Home" : sec}
                </Link>
              )
            }
          })}
        </ul>

        {/* Sign Up Button */}
        <Link to="/signup">
          <button className={`hidden md:block px-8 py-2 rounded-full transition ${
            isSticky ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}>
            Sign Up
          </button>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="menu"
          className={`md:hidden w-7 cursor-pointer ${isSticky ? '' : 'invert'}`}
        />

        {/* Mobile Menu Panel */}
        <div className={`md:hidden fixed inset-0 z-40 ${showMobileMenu ? '' : 'pointer-events-none'}`}>
          {/* Backdrop */}
          <div
            onClick={() => setShowMobileMenu(false)}
            className={`absolute inset-0 bg-black/40 transition-opacity ${showMobileMenu ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Sliding Panel */}
          <div className={`absolute right-0 top-0 bottom-0 w-3/4 max-w-xs bg-white shadow-lg transform transition-transform ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex justify-end p-6 cursor-pointer'>
              <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="close" />
            </div>

            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
              {sections.map((sec) => {
                if (sec === "Gallery") {
                  return (
                    <Link
                      key={sec}
                      to="/gallery"
                      onClick={() => setShowMobileMenu(false)}
                      className='px-4 py-2 rounded-full inline-block cursor-pointer hover:bg-gray-100 w-full text-center'
                    >
                      Gallery
                    </Link>
                  )
                } else if (isHome) {
                  return (
                    <ScrollLink
                      key={sec}
                      to={sec}
                      smooth={true}
                      duration={900}
                      onClick={() => setShowMobileMenu(false)}
                      className='px-4 py-2 rounded-full inline-block cursor-pointer hover:bg-gray-100 w-full text-center'
                    >
                      {sec === "Header" ? "Home" : sec}
                    </ScrollLink>
                  )
                } else {
                  return (
                    <Link
                      key={sec}
                      to={`/#${sec.toLowerCase()}`}
                      onClick={() => setShowMobileMenu(false)}
                      className='px-4 py-2 rounded-full inline-block cursor-pointer hover:bg-gray-100 w-full text-center'
                    >
                      {sec === "Header" ? "Home" : sec}
                    </Link>
                  )
                }
              })}

              {/* Sign Up Button for Mobile */}
              <Link to="/signup" onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block bg-blue-600 text-white w-full text-center'>
                Sign Up
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}











// // Navbar.jsx
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import { motion } from 'framer-motion'
// import { Link as ScrollLink } from 'react-scroll'

// export default function Navbar({ isSticky }) {
//   const [showMobileMenu, setShowMobileMenu] = useState(false)

//   // Lock scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
//     return () => { document.body.style.overflow = 'auto' }
//   }, [showMobileMenu])

//   // List of internal sections
//   const sections = ["Header", "About", "Programs", "Testimonials", "Volunteer", "Team", "Gallery", "Contact"]

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
//         isSticky ? 'bg-white shadow-md' : 'bg-transparent'
//       }`}
//     >
//       <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
//         {/* Logo */}
//         <Link to="/">
//           <img
//             src={assets.logo2}
//             alt="Afri Kan-excel"
//             className={`w-10 h-10 cursor-pointer`}
//           />
//         </Link>

      


      
//         {/* Desktop Menu */}
//        <ul className={`hidden md:flex gap-7 ${isSticky ? 'text-gray-800' : 'text-white'}`}>
//   {sections.map((sec) => {
//     if (sec === "Gallery") {
//       return (
//         <Link
//           key={sec}
//           to="/gallery"
//           className="cursor-pointer hover:text-gray-400"
//         >
//           {sec}
//         </Link>
//       )
//     } else {
//       return (
//         <Link
//           key={sec}
//           to={`/#${sec.toLowerCase()}`} // navigate to home page section
//           className="cursor-pointer hover:text-gray-400"
//         >
//           {sec === "Header" ? "Home" : sec}
//         </Link>
//       )
//     }
//   })}
// </ul>



//         {/* Sign Up Button */}
//         <Link to="/signup">
//           <button className={`hidden md:block px-8 py-2 rounded-full transition ${
//             isSticky ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-gray-800 hover:bg-gray-100'
//           }`}>
//             Sign Up
//           </button>
//         </Link>
        

//         {/* Mobile Menu Icon */}
//         <img
//           onClick={() => setShowMobileMenu(true)}
//           src={assets.menu_icon}
//           alt="menu"
//           className={`md:hidden w-7 cursor-pointer ${isSticky ? '' : 'invert'}`}
//         />

//         {/* Mobile Menu Panel */}
//         <div className={`md:hidden fixed inset-0 z-40 ${showMobileMenu ? '' : 'pointer-events-none'}`}>
//           {/* Backdrop */}
//           <div
//             onClick={() => setShowMobileMenu(false)}
//             className={`absolute inset-0 bg-black/40 transition-opacity ${showMobileMenu ? 'opacity-100' : 'opacity-0'}`}
//           />

//           {/* Sliding Panel */}
//           <div className={`absolute right-0 top-0 bottom-0 w-3/4 max-w-xs bg-white shadow-lg transform transition-transform ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
//             <div className='flex justify-end p-6 cursor-pointer'>
//               <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="close" />
//             </div>

//             <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
             
//                       {sections.map((sec) =>
//             sec === "Gallery" ? (
//               <Link
//                 key={sec}
//                 to="/gallery"
//                 onClick={() => setShowMobileMenu(false)}
//                 className='px-4 py-2 rounded-full inline-block cursor-pointer hover:bg-gray-100 w-full text-center'
//               >
//                 Gallery
//               </Link>
//             ) : (
//               <ScrollLink
//                 key={sec}
//                 to={sec}
//                 smooth={true}
//                 duration={900}
//                 onClick={() => setShowMobileMenu(false)}
//                 className='px-4 py-2 rounded-full inline-block cursor-pointer hover:bg-gray-100 w-full text-center'
//               >
//                 {sec === "Header" ? "Home" : sec}
//               </ScrollLink>
//             )
//           )}

//               {/* Sign Up Button for Mobile */}
//               <Link to="/signup" onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block bg-blue-600 text-white w-full text-center'>
//                 Sign Up
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }