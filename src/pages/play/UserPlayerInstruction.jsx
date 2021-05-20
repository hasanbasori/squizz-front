import React from 'react'
import Layout, { Content, Footer } from '../../components/Layout'
import './UserPlayerInstruction.postcss'
import { Heading, Text } from '@chakra-ui/react'

const contentHeight = 'calc(100vh - var(--footer-height))'

function UserPlayerInstruction() {
  return (
    <Layout>
      <Content
        style={{
          height: contentHeight,

          minHeight: contentHeight
        }}
        className="user-player-instruction-wrapper"
      >
        <Heading color="white">You're in</Heading> <br />
        <Text fontSize="20px" color="white">See your nickname on your screen?</Text>
      </Content>
      <Footer className="footer-bar">
        <div className="footer-bar">
          <Text m="10px" fontWeight="bold" fontSize="20px">
            Nickname
          </Text>
        </div>
      </Footer>
    </Layout>
  )
}

export default UserPlayerInstruction