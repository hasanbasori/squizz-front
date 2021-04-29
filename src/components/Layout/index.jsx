import React from 'react'
import styled from 'styled-components'

import HeaderPublic from './HeaderPublic'
import HeaderAuthentication from './HeaderAuthentication'
import Content from './Content'
import Footer from './Footer'

const LayoutWrapped = styled.div`
  background-color: silver;
`

function Layout({ children }) {
  return <LayoutWrapped>{children}</LayoutWrapped>
}

export { HeaderPublic, HeaderAuthentication, Content, Footer }
export default Layout
