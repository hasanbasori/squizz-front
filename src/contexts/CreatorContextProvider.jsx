import React from 'react'
import { createContext, useState } from 'react'
import * as localStorageService from '../services/localStorageService'
import jwt_decode from 'jwt-decode'

export const CreatorContext = createContext()

function CreatorContextProvider({ children }) {
  let decode = ''
  let createdAtDate = ''
  if (localStorageService.getToken()) {
    decode = jwt_decode(localStorageService.getToken())
    createdAtDate = new Date(decode.createdAt)
  }
  // const decode = jwt_decode(localStorageService.getToken())
  // const createdAtDate = new Date(decode.createdAt)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  
  const [creator, setCreator] = useState({
    ...decode,
    createdAt: createdAtDate ? `${
      months[createdAtDate.getMonth()]
    } ${createdAtDate.getDate()}, ${createdAtDate.getFullYear()}` : null
  })

  return (
    <CreatorContext.Provider value={{ creator, setCreator }}>
      {children}
    </CreatorContext.Provider>
  )
}

export default CreatorContextProvider
