import React from 'react'
import styled from 'styled-components'

const ContentStyled = styled.div``

function Content({ style, className, children }) {
  return (
    <ContentStyled className={`content ${className ? className : ''}`}>
      <h2>Content COMPONENT</h2>
      {children}
    </ContentStyled>
  )
}

export default Content
