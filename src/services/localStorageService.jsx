const tokenName = 'token'

export const setToken = (token) => localStorage.setItem(tokenName, token)

export const getToken = () => localStorage.getItem(tokenName)

export const clearToken = () => localStorage.removeItem(tokenName);

// export default {
//     setToken,
//     getToken,
//     clearToken
// }