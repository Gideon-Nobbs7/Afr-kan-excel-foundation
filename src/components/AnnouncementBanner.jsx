import React from 'react'
import nyaLogo from '../assets/NYA.jpg'

export default function AnnouncementBanner({ onDismiss }) {
  return (
    <div className="fixed top-0 left-0 w-full z-[60]" style={{ backgroundColor: '#8B5E3C', color: 'white' }}>
      <div className="w-full px-6 flex items-center justify-between gap-4" style={{ height: '40px' }}>

        {/* Content */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
          <img
            src={nyaLogo}
            alt="National Youth Authority"
            style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
          />
          <p style={{ fontSize: '13px', fontWeight: 500, color: 'white', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <strong>Official Partnership Announcement —</strong>{' '}
            AERF is now an official partner of the{' '}
            <strong>National Youth Authority (NYA)</strong> of Ghana.
          </p>
        </div>

        <button
          onClick={onDismiss}
          aria-label="Dismiss announcement"
          style={{ flexShrink: 0, width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>
    </div>
  )
}
