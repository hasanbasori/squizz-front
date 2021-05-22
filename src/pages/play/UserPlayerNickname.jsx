import React from 'react'
import Layout, { Content } from '../../components/Layout'
import './UserPlayerNickname.postcss'
import { Input, FormControl, Button, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

function UserPlayerNickname() {
  const history = useHistory()
  return (
    <Layout>
      <Content className="user-player-nickname">
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
                  placeholder="Nickname"
                  fontWeight="bold"
                  mb="10px"
                />
                <div>
                  <Button
                    onClick={() => history.push('/play/instruction')}
                    w="281px"
                    h="40px"
                    colorScheme="blackAlpha"
                  >
                    Ok,go!
                  </Button>
                </div>
              </FormControl>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default UserPlayerNickname
