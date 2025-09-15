import React from 'react'
import { getUser, login, logout, saveProfile } from '../utils/auth.js'

export default function Profile() {
  const [user, setUser] = React.useState(getUser())
  const [profile, setProfile] = React.useState(() => user?.profile || { age: '', classLevel: '', interests: '', chosenStream: '' })

  function handleLogin() {
    const u = login('demo@student.com')
    setUser(u)
  }

  function handleLogout() {
    logout()
    setUser(null)
  }

  function handleSave(e) {
    e.preventDefault()
    const saved = saveProfile(profile)
    setUser(saved)
  }

  if (!user) {
    return (
      <section>
        <h2>Profile</h2>
        <p>Sign in to save your preferences.</p>
        <button className="button primary" onClick={handleLogin}>Sign in (demo)</button>
      </section>
    )
  }

  return (
    <section>
      <h2>Profile</h2>
      <p>Signed in as <strong>{user.email}</strong></p>
      <form onSubmit={handleSave} className="grid" style={{ gap: 12 }}>
        <div style={{ gridColumn: 'span 6' }}>
          <label className="label">Age</label>
          <input className="input" value={profile.age} onChange={e => setProfile({ ...profile, age: e.target.value })} />
        </div>
        <div style={{ gridColumn: 'span 6' }}>
          <label className="label">Class</label>
          <input className="input" value={profile.classLevel} onChange={e => setProfile({ ...profile, classLevel: e.target.value })} />
        </div>
        <div style={{ gridColumn: 'span 12' }}>
          <label className="label">Interests</label>
          <input className="input" value={profile.interests} onChange={e => setProfile({ ...profile, interests: e.target.value })} placeholder="e.g., math, art, business" />
        </div>
        <div style={{ gridColumn: 'span 12' }}>
          <label className="label">Chosen Stream</label>
          <select className="input" value={profile.chosenStream} onChange={e => setProfile({ ...profile, chosenStream: e.target.value })}>
            <option value="">Select...</option>
            <option>Science</option>
            <option>Commerce</option>
            <option>Arts</option>
            <option>Vocational</option>
          </select>
        </div>
        <div style={{ gridColumn: 'span 12', display: 'flex', gap: 8 }}>
          <button className="button primary" type="submit">Save</button>
          <button className="button" type="button" onClick={handleLogout}>Sign out</button>
        </div>
      </form>
    </section>
  )
}
