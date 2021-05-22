import React from 'react'
import Layout, { Content, Footer } from '../../components/Layout'
import './RankingPage.postcss'
import { Text } from '@chakra-ui/react'
import FirstPlace from '../../components/rankingComp/FirstPlace'
import SecondPlace from '../../components/rankingComp/SecondPlace'
import ThirdPlace from '../../components/rankingComp/ThirdPlace'

const contentHeight = 'calc(100vh - var(--footer-height))'

function RankingPage() {
  return (
    <Layout>
      <Content
        style={{
          height: contentHeight,

          minHeight: contentHeight
        }}
        className="user-player-ranking-wrapper"
      >
        <FirstPlace />
        {/* <SecondPlace /> */}
        {/* <ThirdPlace /> */}
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

export default RankingPage
