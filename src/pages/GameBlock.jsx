import React from 'react'
import Layout, { Content } from '../components/Layout'
import './GameBlock.postcss'
import PlayButton from '../components/PlayButton'
import { FaCircle } from 'react-icons/fa'
import { BsFillTriangleFill, BsSquareFill } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { Flex, Text, Grid } from '@chakra-ui/react'

function Play() {
  const history = useHistory()
  return (
    <Layout>
      <Content className="play-page">
        <Flex
          pl="5px"
          justifyContent="space-between"
          alignItems="center"
          className="player-header"
        >
          <div style={{ width: 150 }}>
            <Text fontSize="xl">Page of ?</Text>
          </div>
          <div style={{ width: 100 }}>
            <Text fontSize="2xl">Quiz</Text>
          </div>
          <div style={{ width: 100 }}></div>
        </Flex>
        <Grid ml="5px" mr="5px" templateColumns="repeat(2, 1fr)" gap={2}>
          <PlayButton
            onClick={() => {
              history.push('/play/result')
            }}
            htmlType="button"
            type="danger"
            className="choice-button"
          >
            <BsFillTriangleFill className="icon-size" />
          </PlayButton>
          <PlayButton
            onClick={() => {
              history.push('/play/result')
            }}
            htmlType="button"
            type="primary"
            className="choice-button"
          >
            <FaStar size="60px" />
          </PlayButton>
          <PlayButton
            onClick={() => {
              history.push('/play/result')
            }}
            htmlType="button"
            type="warning"
            className="choice-button"
          >
            <FaCircle size="70px" />
          </PlayButton>
          <PlayButton
            onClick={() => {
              history.push('/play/result')
            }}
            htmlType="button"
            type="success"
            className="choice-button"
          >
            <BsSquareFill size="50px" />
          </PlayButton>
        </Grid>
        <div className="user-header">
          {' '}
          <Text ml="5px" fontSize="2xl">
            Username
          </Text>
        </div>
      </Content>
    </Layout>
  )
}

export default Play
