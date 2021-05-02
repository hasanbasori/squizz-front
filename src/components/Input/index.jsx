import React from 'react'
import './Input.postcss'

/**
 * @param {{ id: string, label?: string, className?: string, style?: import('react').CSSProperties, placeholder?: string, value?: string }} props
 * @return import('react').ReactElement | null | undefined
 */
function Input(props) {
  const { id, label, className, style, placeholder, value } = props

  return (
    <div
      class={`input-component ${className ? className : ''}`}
      style={{ ...style }}
    >
      <input id={id} type="text" {...{ value, placeholder }} />
      <label for={id}>{label}</label>
    </div>
  )
}

export default Input
