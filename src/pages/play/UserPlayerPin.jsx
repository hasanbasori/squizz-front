import React, { useState } from 'react'
import Layout, { Content } from '../../components/Layout'
import './UserPlayerPin.postcss'
import { Input, FormControl, Button, Text, Link } from '@chakra-ui/react'
<<<<<<< HEAD
import { flex } from 'styled-system'
import { useHistory } from 'react-router-dom'
import { io } from 'socket.io-client'

function UserPlayer() {
  const [pin, setPin] = useState()
  const history = useHistory()

  const handleEnterButton = () => {
    history.push(`/play/join/${pin}`)
  }

=======
import { useHistory } from 'react-router-dom'

function UserPlayer() {
  const history = useHistory()
>>>>>>> eb100b0d602e98dd1d122ba52ff2ff011b5c805b
  return (
    <Layout>
      <Content className="user-player-wrapper">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 160
          }}
        >
          <Text
            mb="25px"
            fontSize="5xl"
            fontWeight="extrabold"
            fontFamily="sans-serif"
            color="white"
          >
            Squizz!
          </Text>
          <div className="input-pin-wrap">
            <div>
              <FormControl>
                <Input
                  display="flex"
                  alignItems="center"
                  h="48px"
                  justifyContent="center"
                  placeholder="Game PIN"
                  fontWeight="bold"
                  mb="10px"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
                <div>
                  <Button
<<<<<<< HEAD
                    w="281px"
                    h="40px"
                    colorScheme="blackAlpha"
                    onClick={handleEnterButton}
=======
                    onClick={() => history.push('/play/join')}
                    w="281px"
                    h="40px"
                    colorScheme="blackAlpha"
>>>>>>> eb100b0d602e98dd1d122ba52ff2ff011b5c805b
                  >
                    Enter
                  </Button>
                </div>
              </FormControl>
            </div>
          </div>
        </div>

        <Text color="white"> Create your Squizz for FREE at Squizz.com</Text>
        <Text color="white">
          {' '}
          <Link>Terms</Link> | <Link> Privacy</Link>
        </Text>
      </Content>
    </Layout>
  )
}

export default UserPlayer
