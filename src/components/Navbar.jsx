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
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-inner">
        <div className="brand" aria-label="EduPath Advisor">EduPath Advisor</div>
        <button
          className="button nav-toggle"
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen(o => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
        <div id="main-menu" className={`nav-links ${open ? 'open' : ''}`} role="menubar">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? 'active' : ''}
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/profile" role="menuitem" onClick={() => setOpen(false)}>Profile</NavLink>
        </div>
      </div>
    </nav>
  )
}
