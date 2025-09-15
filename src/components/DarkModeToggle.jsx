import React from 'react'

const STORAGE_KEY = 'edupath-theme'

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'dark' || saved === 'light') return saved
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export default function DarkModeToggle() {
  const [theme, setTheme] = React.useState(getInitialTheme)

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return (
    <button
      className="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
