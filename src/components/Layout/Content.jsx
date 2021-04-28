import React from 'react'
import styled from 'styled-components'

const ContentStyled = styled.div`
  height: 100vh;
`

function Content({ style, className, children }) {
  return (
    <ContentStyled
      className={`content ${className ? className : ''}`}
      style={{ ...style }}
    >
      {children}
    </ContentStyled>
  )
}

export default Content
