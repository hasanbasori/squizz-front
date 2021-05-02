import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App'
import AuthContextProvider from './contexts/AuthContextProvider'

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
