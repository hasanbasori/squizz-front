import React from 'react'
import styled from 'styled-components'
import './Content.postcss'

const ContentStyled = styled.div`
  height: 100vh;
`

function Content({ style, className, children }) {
  return (
    <ContentStyled
      className={`layout-content ${className ? className : ''}`}
      style={{ ...style }}
    >
      {children}
    </ContentStyled>
  )
}

export default Content
