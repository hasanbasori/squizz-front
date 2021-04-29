import React from 'react'
import './PlayButton.postcss'
/**
 * @param { { type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger', style?: import('react').CSSProperties, disabled?: boolean, className?: string } } props
 * @return import('react').ReactElement | null | undefined
 */
function PlayButton(props) {
  const { type, className, style, children, disabled } = props

  return (
    <button
      className={`text-secondary-normal font-bold py-2 px-4 border-b-4 border-${type}-normal  bg-${type}-normal rounded ${
        disabled
          ? 'text-disabled cursor-not-allowed'
          : 'hover:text-secondary-hover hover:border-${type}-hover hover:bg-${type}-hover'
      } ${className ? className : ''}`}
      style={{ ...style }}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default PlayButton
