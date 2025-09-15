import React from 'react'
import { colleges } from '../data/colleges.js'

export default function Colleges() {
  const [location, setLocation] = React.useState('')
  const [program, setProgram] = React.useState('')

  const filtered = colleges.filter(c => {
    const matchLocation = `${c.city} ${c.state}`.toLowerCase().includes(location.toLowerCase())
    const matchProgram = program ? c.programs.some(p => p.toLowerCase().includes(program.toLowerCase())) : true
    return matchLocation && matchProgram
  })

  return (
    <section>
      <h2>Nearby Government Colleges</h2>
      <div className="grid" style={{ gap: 12, marginBottom: 12 }}>
        <div style={{ gridColumn: 'span 6' }}>
          <label className="label">Location</label>
          <input className="input" placeholder="City or State" value={location} onChange={e => setLocation(e.target.value)} />
        </div>
        <div style={{ gridColumn: 'span 6' }}>
          <label className="label">Program</label>
          <input className="input" placeholder="e.g., B.Com., B.Sc." value={program} onChange={e => setProgram(e.target.value)} />
        </div>
      </div>

      <div className="grid">
        {filtered.map(c => (
          <div key={c.id} className="card" style={{ gridColumn: 'span 6' }}>
            <h3>{c.name}</h3>
            <p>{c.city}, {c.state}</p>
            <p><strong>Programs:</strong> {c.programs.join(', ')}</p>
            <p><strong>Facilities:</strong> {c.facilities.join(', ')}</p>
            <p><strong>Cut-off:</strong> {c.cutoff}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
