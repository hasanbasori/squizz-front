import React from 'react'

import Layout, { Content } from '../components/Layout'


function LoginPage() {
  return (
    <Layout>
      <Content>
        <h1 className="text-red-500">LoginPage</h1>
        <h2>HEADING 2</h2>
        <h3>HEADING 3</h3>
        <h4>HEADING 4</h4>
        <h5>HEADING 5</h5>
        <h6>HEADING 6</h6>

        <a href="#">Link</a>
        <button>TEST BTN</button>
      </Content>
    </Layout>
  )
}

export default LoginPage
