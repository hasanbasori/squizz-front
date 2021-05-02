import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AuthContextProvider from './contexts/AuthContextProvider'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
