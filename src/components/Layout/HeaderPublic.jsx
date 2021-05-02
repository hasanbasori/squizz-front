import React from 'react'
// import styled from 'styled-components'
import './HeaderPublic.postcss'

function HeaderPublic({ style, className }) {
  return (
    <div className={`header-public ${className? className : ''}`} style={{ ...style }}>
      <div>HEADER PUBLIC COMPONENT</div>
    </div>
  )
}

export default HeaderPublic
