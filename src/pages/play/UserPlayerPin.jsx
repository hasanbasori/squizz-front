import React from 'react'
import Layout, { Content } from '../../components/Layout'
import './UserPlayerPin.postcss'
import { Input, FormControl, Button, Text, Link } from '@chakra-ui/react'
import { flex } from 'styled-system'

function UserPlayer() {
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
                />
                <div>
                  <Button w="281px" h="40px" colorScheme="blackAlpha">
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
