import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  /* STYLE HERE */
`

function HeaderCreator() {
  return (
    <HeaderStyled className="header-creator">
      <h2>HEADER PUBLIC COMPONENT</h2>
    </HeaderStyled>
  )
}

export default HeaderCreator
