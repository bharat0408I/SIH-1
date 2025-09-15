import React from 'react'
import { courseCareerMap } from '../data/coursesCareers.js'

export default function CourseCareer() {
  const [query, setQuery] = React.useState('')
  const filtered = courseCareerMap.filter(row => row.course.toLowerCase().includes(query.toLowerCase()))

  return (
    <section>
      <h2>Courses to Careers</h2>
      <div style={{ margin: '12px 0' }}>
        <label className="label" htmlFor="course-search">Search course</label>
        <input id="course-search" className="input" value={query} onChange={e => setQuery(e.target.value)} placeholder="e.g., B.Com., B.Sc." />
      </div>

      <div className="card" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }} aria-label="Course to career mapping">
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: 8 }}>Course</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Jobs</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Govt Exams</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Higher Education</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Industries</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(row => (
              <tr key={row.course}>
                <td style={{ padding: 8, borderTop: '1px solid var(--border)' }}>{row.course}</td>
                <td style={{ padding: 8, borderTop: '1px solid var(--border)' }}>{row.jobs.join(', ')}</td>
                <td style={{ padding: 8, borderTop: '1px solid var(--border)' }}>{row.exams.join(', ')}</td>
                <td style={{ padding: 8, borderTop: '1px solid var(--border)' }}>{row.higher.join(', ')}</td>
                <td style={{ padding: 8, borderTop: '1px solid var(--border)' }}>{row.industries.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
