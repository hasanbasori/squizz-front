import React from 'react'

/**
 * @param { { type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger', style: import('react').CSSProperties, disabled: boolean } } props
 * @return import('react').ReactElement | null | undefined
 */
function Button(props) {
  const { type, style, children, disabled } = props

  return (
    <button
      className={`text-secondary-normal font-bold py-2 px-4 border-b-4 border-${type}-normal  bg-${type}-normal rounded ${
        disabled
          ? 'text-disabled cursor-not-allowed'
          : 'hover:text-secondary-hover hover:border-${type}-hover hover:bg-${type}-hover'
      }`}
      style={{ ...style }}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
