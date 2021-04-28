import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  height: var(--header-height);
`

function HeaderCreator({ style }) {
  return (
    <HeaderStyled className="header-creator" style={{ ...style }}>
      <h2>HEADER PUBLIC COMPONENT</h2>
    </HeaderStyled>
  )
}

export default HeaderCreator
