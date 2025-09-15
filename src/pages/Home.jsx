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
      <div className="hero">
        <div style={{ gridColumn: 'span 7' }}>
          <div className="kicker">Your education compass</div>
          <h1 id="home-title">Plan your path with clarity and confidence</h1>
          <p>Take the quiz, explore courses, find nearby colleges, and track deadlines — all in one place.</p>
          <div className="hero-cta">
            <button className="button primary" onClick={() => navigate('/quiz')}>Start the Quiz</button>
            <button className="button" onClick={() => navigate('/courses-careers')}>Explore Careers</button>
          </div>
        </div>
        <div style={{ gridColumn: 'span 5' }}>
          <div className="card" aria-hidden="true" style={{ height: 160, marginBottom: 12 }}></div>
          <div className="card" aria-hidden="true" style={{ height: 120 }}></div>
        </div>
      </div>

      <div style={{ margin: '16px 0' }}>
        <label htmlFor="search" className="label">Quick search</label>
        <input id="search" className="input" placeholder="Search features..." value={query} onChange={e => setQuery(e.target.value)} />
      </div>

      <div className="grid" aria-label="Feature cards">
        {filtered.map((card) => (
          <button
            key={card.to}
            className="card"
            style={{ gridColumn: 'span 4', textAlign: 'left' }}
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
