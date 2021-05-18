import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App'
import AuthContextProvider from './contexts/AuthContextProvider'
import CreatorContextProvider from './contexts/CreatorContextProvider'
import NotiContextProvider from './contexts/NotiContextProvider'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CreatorContextProvider>
        <ChakraProvider>
          <NotiContextProvider>
            <App />
          </NotiContextProvider>
        </ChakraProvider>
      </CreatorContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
