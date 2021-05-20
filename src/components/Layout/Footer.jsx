import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.div`
  height: var(--footer-height);
`

function Footer({ children }) {
  return <FooterStyled className="layout-footer">{children}</FooterStyled>
}

export default Footer
