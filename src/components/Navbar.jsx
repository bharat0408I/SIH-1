import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/quiz', label: 'Aptitude Quiz' },
  { to: '/courses-careers', label: 'Courses & Careers' },
  { to: '/colleges', label: 'Colleges Nearby' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/scholarships', label: 'Scholarships' },
]

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-inner">
        <div className="brand" aria-label="EduPath Advisor">EduPath Advisor</div>
        <div className="nav-links" role="menubar">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? 'active' : ''}
              role="menuitem"
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/profile" role="menuitem">Profile</NavLink>
        </div>
      </div>
    </nav>
  )
}
