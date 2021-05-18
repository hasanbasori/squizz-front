const TOKEN_NAME = 'token'
const AUTH_ERROR = 'authError'
const QUESTION = 'question'

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

/**
 * @param { Array<{ questionName: string, questionType: string, points: number, timeLimit: number, answerOptions: number, option1: string, option2: string, option3: string, option4: string, answer: string }> } questions
 */
export const setQuestion = (questions) => {
  localStorage.setItem(QUESTION, JSON.stringify(questions))
}

/**
 * @return { Array<{ questionName: string, questionType: string, points: number, timeLimit: number, answerOptions: number, option1: string, option2: string, option3: string, option4: string, answer: string }> }
 */
export const getQuestions = () => {
  return JSON.parse(localStorage.getItem(QUESTION)) || []
}

export const clearQuestions = () => localStorage.removeItem(QUESTION)

// export const setToken = (token) => localStorage.setItem(tokenName, token)

// export const getToken = () => localStorage.getItem(tokenName)

// export const clearToken = () => localStorage.removeItem(tokenName);

// export default {
//     setToken,
//     getToken,
//     clearToken
// }
