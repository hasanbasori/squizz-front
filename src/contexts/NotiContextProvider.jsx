import { useToast } from '@chakra-ui/toast'
import React from 'react'

import { createContext, useState } from 'react'

/**
 * @typedef TNotiContext
 * @property {(type: 'success'|'error'|'warning', message: string) => string|number} showNotification
 */
/** @type {import('react').Context<TNotiContext|null>} */
export const NotificationContext = createContext(null)

/**
 * @param { { children: import('react').ReactNode } } props
 * @return { import('react').Provider<{ showNotification: ({ type: 'success'|'error'|'warning', message: string }) => string|number }> }
 */
function NotiContextProvider(props) {
  const { children } = props

  const toast = useToast()

  /**
   * @param { 'success' | 'error' | 'warning' } } type
   * @param { string } message
   */
  const showNotification = (type, message) => {
    const title =
      type === 'success'
        ? '✔ Success'
        : type === 'error'
        ? '❌ Error'
        : type === 'info'
        ? 'ℹ Info'
        : '⚠ Warning'

    return toast({
      title,
      description: message,
      status: type,
      position: 'bottom-right',
      duration: 3000,
      isClosable: true
    })
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotiContextProvider
