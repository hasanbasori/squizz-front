import React from 'react'
import styled from 'styled-components'
import './Content.postcss'

const ContentStyled = styled.div`
  min-height: 100vh;
`

function Content({ style, className, children }) {
  return (
    <ContentStyled
      className={`${className ? className : 'layout-content'}`}
      style={{ ...style }}
    >
      {children}
    </ContentStyled>
  )
}

export default Content
