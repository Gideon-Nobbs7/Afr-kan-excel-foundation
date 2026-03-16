import React from 'react'
import { Link } from "react-router-dom"
import { assets } from '../assets/assets'
import afkr4 from '../assets/afkr4.jpg'
import { motion } from 'framer-motion'

export default function () {
    return (
       <motion.div
    initial={{opacity: 0, x:200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
    className='flex flex-col items-center justify-center text-center container mx-auto p-14 px-6 md:px-20 lg:px-32 w-full overflow-hidden' id="About">
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Foundation</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Committed to empowering communities across Africa</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={afkr4} alt="Community program" loading="lazy" decoding="async" className='w-full sm:w-1/2 max-w-lg rounded-lg shadow-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>1+</p>
                        <p>Years of Service</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Communities Reached</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>40+</p>
                        <p>Volunteers & Partners</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Projects Completed</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg text-gray-700'>The AFRI KAN-EXCEL RENAISSANCE FOUNDATION (AERF) is a last-mile operational force dedicated to bridging the Contextual Deficit in African development. Based in Ghana with a continental outlook, AERF serves as the "Social Software" that allows global resources to function within the African reality.</p>
                <div className="flex items-center gap-10">
                    <Link to="/story" className='btn-brand px-8 py-2 rounded cursor-pointer'>Our Story</Link>
                    <Link to="/work" className='btn-brand px-8 py-2 rounded cursor-pointer'>Our Work</Link>
                    <Link to="/operational-structure" className='btn-brand px-8 py-2 rounded cursor-pointer'>Operational Structure</Link>
                </div>
            </div>
        </div>
    </motion.div>
    )
}