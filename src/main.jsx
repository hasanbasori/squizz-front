import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App'
import AuthContextProvider from './contexts/AuthContextProvider'
import CreatorContextProvider from './contexts/CreatorContextProvider'
import NotiContextProvider from './contexts/NotiContextProvider'
import SocketContextProvider from './contexts/SocketContextProvider'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <CreatorContextProvider>
          <ChakraProvider>
            <NotiContextProvider>
              <App />
            </NotiContextProvider>
          </ChakraProvider>
        </CreatorContextProvider>
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,

  document.getElementById('root')
)
