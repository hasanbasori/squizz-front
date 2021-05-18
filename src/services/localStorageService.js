const TOKEN_NAME = 'token'
const AUTH_ERROR = 'authError'

/**
 * @param { string } token
 * @return { void }
 */
export const setToken = (token) => localStorage.setItem(TOKEN_NAME, token)

/**
 * @return { string | undefined }
 */
export const getToken = () => {
  return localStorage.getItem(TOKEN_NAME)
}

/**
 * @return { string }
 */
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

// export const setToken = (token) => localStorage.setItem(tokenName, token)

// export const getToken = () => localStorage.getItem(tokenName)

// export const clearToken = () => localStorage.removeItem(tokenName);

// export default {
//     setToken,
//     getToken,
//     clearToken
// }
