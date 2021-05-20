import React from 'react'
import { createContext, useState } from 'react'
import * as localStorageService from '../services/localStorageService'
import { io } from 'socket.io-client'

export const socket = io('http://localhost:8008/')
export const SocketContext = createContext()

function SocketContextProvider({ children }) {
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketContextProvider
