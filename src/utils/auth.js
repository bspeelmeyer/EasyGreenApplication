let sto = window.sessionStorage;
let headers = {};

export function getTokenHeader() {
  let token = getToken();
  if (!isTokenNull()) {
    token = "Bearer " + token;
    headers = {Authorization: token,};
  }
  return headers;
}

export function getToken() {
  return sto.getItem("token");
}

function setToken(token) {
  let sto = window.sessionStorage;
  sto.setItem("token", token);
}

function isTokenNull() {
  const token = getToken()
  if (!token) {
    return true
  }
  return false
}

function setTokenNull() {
  let sto = window.sessionStorage;
  sto.removeItem("token");
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
