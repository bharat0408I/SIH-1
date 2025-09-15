import React from 'react'
import { useNavigate } from 'react-router-dom'

const features = [
  { title: 'Aptitude & Interest Quiz', desc: 'Find your best-fit stream with a quick quiz.', to: '/quiz' },
  { title: 'Courses & Careers', desc: 'Map courses to jobs, exams, and industries.', to: '/courses-careers' },
  { title: 'Colleges Nearby', desc: 'Search government colleges around you.', to: '/colleges' },
  { title: 'Timeline', desc: 'Admission dates and exam schedules.', to: '/timeline' },
  { title: 'Scholarships', desc: 'Government and open resources.', to: '/scholarships' },
  { title: 'Profile', desc: 'Save preferences for personalized tips.', to: '/profile' },
]

export default function Home() {
  const navigate = useNavigate()
  const [query, setQuery] = React.useState('')

  const filtered = features.filter(f => f.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <section aria-labelledby="home-title">
      <h1 id="home-title">Welcome to EduPath Advisor</h1>
      <p className="muted">Your one-stop platform for education and career guidance.</p>

      <div style={{ margin: '12px 0' }}>
        <label htmlFor="search" className="label">Quick search</label>
        <input id="search" className="input" placeholder="Search features..." value={query} onChange={e => setQuery(e.target.value)} />
      </div>

      <div className="grid" aria-label="Feature cards">
        {filtered.map((card) => (
          <button
            key={card.to}
            className="card"
            style={{ gridColumn: 'span 6', textAlign: 'left' }}
            onClick={() => navigate(card.to)}
          >
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </button>
        ))}
      </div>
    </section>
  )
}
