<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import Layout, { Content, Footer } from '../../components/Layout'
import './UserPlayerInstruction.postcss'
import { Heading, Text } from '@chakra-ui/react'
import { useHistory, useParams } from 'react-router-dom'
import { socket } from '../../contexts/SocketContextProvider'
import { set } from 'react-hook-form'
=======
import React, {useEffect} from 'react'
import Layout, { Content, Footer } from '../../components/Layout'
import './UserPlayerInstruction.postcss'
import { Heading, Text } from '@chakra-ui/react'
import {useHistory} from 'react-router-dom'
>>>>>>> eb100b0d602e98dd1d122ba52ff2ff011b5c805b

const contentHeight = 'calc(100vh - var(--footer-height))'

function UserPlayerInstruction() {
  const { name, id } = useParams()
  const history = useHistory()
  const [statusRoom, setStatusRoom] = useState()

  useEffect(() => {
    socket.on('player_start', (status) => {
      setStatusRoom(status)

      if (statusRoom === 'start') {
        return history.push('/play/game-block')
      }
    })
  }, [statusRoom])
  console.log(statusRoom)

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     history.push('/play/start')
  //   }, 5000)
  // })

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
        <Text fontSize="20px" color="white">
          See your nickname on your screen?
        </Text>
      </Content>
      <Footer className="footer-bar">
        <div className="footer-bar">
          <Text m="10px" fontWeight="bold" fontSize="20px">
            {name ? name : 'Nickname'}
          </Text>
        </div>
      </Footer>
    </Layout>
  )
}

export default UserPlayerInstruction
