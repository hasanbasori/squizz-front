import React from 'react'
import './PlayButton.postcss'
/**
 * @param { { htmlType: 'submit'|'reset'|'button', type: 'primary'|'secondary'|'success'|'warning'|'danger', style?: import('react').CSSProperties, disabled?: boolean, className?: string } } props
 * @return import('react').ReactElement | null | undefined
 */
function PlayButton(props) {
  const { type, htmlType, className, style, children, disabled } = props

  return (
    <button
      className={`play-button  font-bold py-2 px-4 border-b-4  rounded ${
        disabled
          ? 'text-disabled cursor-not-allowed bg-gray-300'
          : `hover:text-secondary-hover hover:border-${type}-hover hover:bg-${type}-hover border-${type}-normal bg-${type}-normal text-${type}-normal`
      } ${className ? className : ''}`}
      type={htmlType}
      {...{ disabled, type: htmlType, style: { ...style } }}
    >
      {children}
    </button>
  )
}

export default PlayButton
