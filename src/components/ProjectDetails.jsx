// components/ProjectDetails.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../assets/assets'
 
export default function ProjectDetails() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === id)
 
  // If project not found
  if (!project) {
    return (
      <div className="container mx-auto px-6 md:px-20 lg:px-32 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <p className="text-gray-500 mb-8">The project you're looking for doesn't exist.</p>
        <Link to="/#Projects" className="text-brand font-medium">← Back to Projects</Link>
      </div>
    )
  }
 
  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-32 py-16 max-w-4xl">
 
      {/* Back link */}
      <Link
        to="/#Projects"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-brand transition-colors mb-8 text-sm font-medium"
      >
        ← Back to Projects
      </Link>
 
      {/* Hero image */}
      <div className="rounded-2xl overflow-hidden mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 object-cover"
        />
      </div>
 
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <h1 className="text-3xl font-bold mt-3">{project.title}</h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span> {project.location}</span>
            <span> {project.date}</span>
          </div>
        </div>
        <span className={`text-sm font-semibold px-4 py-1.5 rounded-full ${
          project.status === 'Completed'
            ? 'bg-green-100 text-green-700'
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {project.status}
        </span>
      </div>
 
      {/* Divider */}
      <hr className="border-gray-200 mb-8" />
 
      {/* Full description */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">About this project</h2>
        <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
      </div>
 
      {/* Impact stats */}
      {project.impact && project.impact.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.impact.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
              >
                <span className="text-brand text-lg">✓</span>
                <span className="text-gray-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
 
      {/* Gallery */}
      {project.gallery && project.gallery.length > 1 && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.gallery.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square">
                <img
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}
 
      {/* CTA */}
      <div className="bg-brand/5 border border-brand/20 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Want to support this initiative?</h3>
        <p className="text-gray-500 text-sm mb-6">Your contribution helps us reach more communities across Ghana.</p>
        <a
          href="/#Contact"
          className="inline-block bg-brand text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Get Involved
        </a>
      </div>
 
    </div>
  )
}
 