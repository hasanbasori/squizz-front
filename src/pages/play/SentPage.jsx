import React, { useEffect, useState } from 'react'
import Layout, { Content, Footer } from '../../components/Layout'
import './SentPage.postcss'
import { Heading, Text, Spinner } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

const contentHeight = 'calc(100vh - var(--footer-height))'

function SentPage() {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.push('/play/instruction')
    }, 5000)
  })
  return (
    <Layout>
      <Content className="user-player-loading-wrapper">
        <Spinner
          thickness="15px"
          speed="0.80s"
          emptyColor="gray.200"
          color="white.500"
          size="xl"
        />{' '}
        <Text mt="1rem" color="white">
          Loading ...
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

export default SentPage
