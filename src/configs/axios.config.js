import Axios from 'axios'

import localStorageService from '../services/localStorageService'

Axios.defaults.baseURL = 'http://localhost:8000'

//intercept request ส่ง header ไปให้ back end
Axios.interceptors.request.use(
  (config) => {
    if (localStorageService.getToken())
      config.headers.Authorization = `Bearer ${localStorageService.getToken()}`
    return config
  },
  (err) => Promise.reject(err) //คล้ายๆ next function
)

Axios.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) {
      localStorageService.clearToken()
      window.location.assign('/') // window = globalObject, location = redirect path
      localStorageService.setAuthError('Unauthorize to see this page.')
      return
    }
    return Promise.reject(err)
  }
)

export default Axios
