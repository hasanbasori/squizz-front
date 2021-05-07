import React from 'react'
import styled from 'styled-components'

import HeaderPublic from './HeaderPublic'
import HeaderCreator from './HeaderCreator'
import HeaderCreateQuiz from './HeaderCreateQuiz'
import HeaderAuthentication from './HeaderAuthentication'
import Content from './Content'
import Footer from './Footer'

const LayoutWrapped = styled.div`
  background-color: #f2f2f2;
`

function Layout({ children }) {
  return <LayoutWrapped>{children}</LayoutWrapped>
}

export { HeaderPublic, HeaderCreator, HeaderCreateQuiz, HeaderAuthentication, Content, Footer }
export default Layout
