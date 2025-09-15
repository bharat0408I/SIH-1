export function recommendStreamFromQuiz(answers) {
  const scores = { Science: 0, Commerce: 0, Arts: 0, Vocational: 0 }
  answers.forEach(a => {
    if (a.includes('math') || a.includes('lab')) scores['Science'] += 2
    if (a.includes('business') || a.includes('finance')) scores['Commerce'] += 2
    if (a.includes('writing') || a.includes('design') || a.includes('art')) scores['Arts'] += 2
    if (a.includes('hands-on') || a.includes('skills')) scores['Vocational'] += 2
  })
  const best = Object.entries(scores).sort((a,b) => b[1]-a[1])[0][0]
  return { best, scores }
}

export function aiRecommendationPlaceholder(profile) {
  const { interests = '', chosenStream = '' } = profile || {}
  return `Based on interests in ${interests || 'your inputs'}, explore opportunities in ${chosenStream || 'multiple streams'}.`
}
