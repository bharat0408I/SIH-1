import React from 'react'
import { timelineItems } from '../data/timeline.js'

export default function Timeline() {
  const items = [...timelineItems].sort((a,b) => a.date.localeCompare(b.date))

  const badge = (type) => {
    switch(type){
      case 'admission': return '🎓'
      case 'scholarship': return '💰'
      case 'exam': return '📝'
      default: return '📌'
    }
  }

  return (
    <section>
      <h2>Timeline</h2>
      <div className="grid">
        {items.map(it => (
          <div key={it.id} className="card" style={{ gridColumn: 'span 12', display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ fontSize: 24 }}>{badge(it.type)}</div>
            <div>
              <div style={{ fontWeight: 700 }}>{it.title}</div>
              <div style={{ color: 'var(--muted)' }}>{new Date(it.date).toDateString()}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
