import React from 'react'
import Layout, { Content, Footer } from '../../components/Layout'
import './UserPlayerNextQueition.postcss'
import { Heading, Text, Spinner } from '@chakra-ui/react'

const contentHeight = 'calc(100vh - var(--footer-height))'

function UserPlayerNextQuestion() {
  return (
    <Layout>

      <Content
        style={{
          height: contentHeight,

          minHeight: contentHeight
        }}
        className="user-player-next-quietion-wrapper"
      >
        <Heading color="white">Question 2</Heading> <br />
        <Spinner
          thickness="15px"
          speed="0.80s"
          emptyColor="gray.200"
          color="white.500"
          size="xl"
        />
        <Text mt="1rem" color="white">
          Ready ...
        </Text>
      </Content>
      <Footer>
        <div className="footer-bar">
          <Text m="10px" fontWeight="bold" fontSize="20px">
            Nickname
          </Text>
          <div
            style={{
              width: 60,
              height: 35,
              backgroundColor: 'black',
              borderRadius: 5,
              marginRight: 10,
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            10
          </div>
        </div>
      </Footer>
    </Layout>
  )
}

export default UserPlayerNextQuestion
