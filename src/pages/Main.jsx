import React from 'react'
import Layout, { HeaderPublic, Content, Footer } from '../components/Layout'

function Main() {
  return (
    <Layout>
      <HeaderPublic />
      <Content>
        <h1>Home Page</h1>
      </Content>
      <Footer />
    </Layout>
  )
}

export default Main
