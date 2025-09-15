import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Quiz from './pages/Quiz.jsx'
import CourseCareer from './pages/CourseCareer.jsx'
import Colleges from './pages/Colleges.jsx'
import Timeline from './pages/Timeline.jsx'
import Scholarships from './pages/Scholarships.jsx'
import Profile from './pages/Profile.jsx'
import DarkModeToggle from './components/DarkModeToggle.jsx'

export default function App() {
  return (
    <div className="app" data-theme="light">
      <Navbar />
      <main className="container" role="main">
        <div className="top-actions">
          <DarkModeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/courses-careers" element={<CourseCareer />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <footer className="footer" role="contentinfo" aria-label="Footer">
        <p>© {new Date().getFullYear()} EduPath Advisor</p>
      </footer>
    </div>
  )
}
