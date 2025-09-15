const USER_KEY = 'edupath-user'

export function getUser() {
  const raw = localStorage.getItem(USER_KEY)
  return raw ? JSON.parse(raw) : null
}

export function login(email) {
  const user = { email, profile: getUser()?.profile || {} }
  localStorage.setItem(USER_KEY, JSON.stringify(user))
  return user
}

export function logout() {
  localStorage.removeItem(USER_KEY)
}

export function saveProfile(profile) {
  const current = getUser() || { email: 'demo@student.com', profile: {} }
  const next = { ...current, profile }
  localStorage.setItem(USER_KEY, JSON.stringify(next))
  return next
}
