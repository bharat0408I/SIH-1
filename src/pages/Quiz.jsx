import React from 'react'
import { quizQuestions } from '../data/quizQuestions.js'
import { recommendStreamFromQuiz } from '../utils/recommend.js'

export default function Quiz() {
  const [answers, setAnswers] = React.useState({})
  const [result, setResult] = React.useState(null)

  function submit(e) {
    e.preventDefault()
    const selected = Object.values(answers)
    const rec = recommendStreamFromQuiz(selected)
    setResult(rec)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section>
      <h2>Aptitude & Interest Quiz</h2>
      <p>Answer a few questions to get a stream recommendation.</p>

      {result && (
        <div className="card" role="status" aria-live="polite" style={{ margin: '12px 0' }}>
          <h3>Recommended Stream: {result.best}</h3>
          <p>
            Science favors analytical and lab-oriented work; Commerce focuses on business and finance;
            Arts emphasizes creativity and humanities; Vocational builds practical job-ready skills.
          </p>
        </div>
      )}

      <form onSubmit={submit} className="grid" style={{ gap: 12 }}>
        {quizQuestions.map((q) => (
          <div key={q.id} className="card" style={{ gridColumn: 'span 12' }}>
            <fieldset>
              <legend className="label">{q.question}</legend>
              <div className="row">
                {q.options.map((o) => (
                  <label key={o.value} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                      type="radio"
                      name={q.id}
                      value={o.value}
                      checked={answers[q.id] === o.value}
                      onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        ))}

        <div style={{ gridColumn: 'span 12' }}>
          <button className="button primary" type="submit">Get Recommendation</button>
        </div>
      </form>
    </section>
  )
}
