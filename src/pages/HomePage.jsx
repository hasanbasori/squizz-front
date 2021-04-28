import React from 'react'
import './HomePage.postcss'
import Layout, { HeaderPublic, Content, Footer } from '../components/Layout'

function HomePage() {
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

export default HomePage
