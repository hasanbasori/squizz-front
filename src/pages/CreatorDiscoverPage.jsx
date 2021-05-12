import React, { useState } from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
// import './CreatorDiscoverPage.postcss'
import {
  Box,
} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

function CreatorDiscoverPage() {
  return (
    <Layout>
      <HeaderCreator pathName="discover" />
      <Content>
      </Content>
    </Layout>
  )
}

export default CreatorDiscoverPage
