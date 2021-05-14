const TOKEN_NAME = 'token'
const AUTH_ERROR = 'authError'

export const setToken = (token) => {
  console.log('kuy')
  localStorage.setItem(TOKEN_NAME, token)
}

export const getToken = () => localStorage.getItem(TOKEN_NAME)

export const clearToken = () => localStorage.removeItem(TOKEN_NAME)

/**
 * @param { string } errMessage
 * @return { void }
 */
export const setAuthError = (errMessage) => {
  localStorage.setItem(AUTH_ERROR, JSON.stringify({ errMessage }))
}

/**
 * @return { string }
 */
export const getAuthError = () => {
  return localStorage.getItem(AUTH_ERROR)
}
