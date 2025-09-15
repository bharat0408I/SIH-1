import React from 'react'
import { scholarships } from '../data/scholarships.js'

export default function Scholarships() {
  return (
    <section>
      <h2>Scholarships & Resources</h2>
      <div className="grid">
        {scholarships.map(s => (
          <div key={s.id} className="card" style={{ gridColumn: 'span 6' }}>
            <h3>{s.name}</h3>
            <p style={{ color: 'var(--muted)' }}>{s.type}</p>
            <a className="button" href={s.url} target="_blank" rel="noopener noreferrer">Open</a>
          </div>
        ))}
      </div>
    </section>
  )
}
