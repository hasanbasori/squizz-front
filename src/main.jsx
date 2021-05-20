import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App'
import AuthContextProvider from './contexts/AuthContextProvider'
import CreatorContextProvider from './contexts/CreatorContextProvider'
import SocketContextProvider from './contexts/SocketContextProvider'

ReactDOM.render(
  <React.StrictMode>
    <SocketContextProvider>
      <AuthContextProvider>
        <CreatorContextProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </CreatorContextProvider>
      </AuthContextProvider>
    </SocketContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
