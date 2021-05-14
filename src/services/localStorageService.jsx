const tokenName = 'token'
const AUTH_ERROR = 'authError'

const setToken = (token) => localStorage.setItem(tokenName, token)

const getToken = () => localStorage.getItem(tokenName)

const clearToken = () => localStorage.removeItem(tokenName)

/**
 * @param { string } errMessage
 * @return { void }
 */
const setAuthError = (errMessage) => {
  localStorage.setItem(AUTH_ERROR, JSON.stringify({ errMessage }))
}

/**
 * @returns { string }
 */
const getAuthError = () => {
  return localStorage.getItem(AUTH_ERROR)
}

export default {
  setToken,
  getToken,
  setAuthError,
  getAuthError,
  clearToken
}
