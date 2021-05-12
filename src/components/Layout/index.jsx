import React from 'react'
import HeaderPublic from './HeaderPublic'
import HeaderCreator from './HeaderCreator'
import HeaderCreateQuiz from './HeaderCreateQuiz'
import HeaderAuthentication from './HeaderAuthentication'
import Content from './Content'
import Footer from './Footer'
import './index.postcss'

function Layout({ children, className }) {
  return <div className={`${className ? className : 'background-layout'}`}>{children}</div>
}

export {
  HeaderPublic,
  HeaderCreator,
  HeaderCreateQuiz,
  HeaderAuthentication,
  Content,
  Footer
}
export default Layout
