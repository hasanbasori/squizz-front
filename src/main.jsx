import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App'
import AuthContextProvider from './contexts/AuthContextProvider'
import CreatorContextProvider from './contexts/CreatorContextProvider'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CreatorContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </CreatorContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
