import React from 'react'
import PlayButton from '../components/PlayButton'

import Layout, { Content, HeaderPublic } from '../components/Layout'

function LoginPage() {
  return (
    <Layout>
      <HeaderPublic />
      <Content>
        <h1 className="text-red-500">LoginPage</h1>
        <h2>HEADING 2</h2>
        <h3>HEADING 3</h3>
        <h4>HEADING 4</h4>
        <h5>HEADING 5</h5>
        <h6>HEADING 6</h6>

        <a href="#">Link</a>
        <PlayButton type="secondary" disabled>TEST BTN</PlayButton>
      </Content>
    </Layout>
  )
}

export default LoginPage
