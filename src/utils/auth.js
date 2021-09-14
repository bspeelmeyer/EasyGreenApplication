const TOKEN_KEY = 'mxg-msm-token'
const USER_KEY = 'mxg-msm-user'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

function setToken(token) {
  return localStorage.setItem(TOKEN_KEY, token)
}

function isTokenNull() {
  const token = getToken()
  if (!token) {
    return true
  }

  return false
}

function setTokenNull() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}

// function getUser() {
//   return JSON.parse(localStorage.getItem(USER_KEY))
// }
//
// function setUser(user) {
//   return localStorage.setItem(USER_KEY, JSON.stringify(user))
// }

function isLogged() {
  return !isTokenNull()
}

function logout() {
  setTokenNull()
}

export default {
  setToken, isLogged, logout,
}
