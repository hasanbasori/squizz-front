import React, { useState } from 'react'
import Layout, { Content } from '../../components/Layout'
import './UserPlayerNickname.postcss'
import { Input, FormControl, Button, Text } from '@chakra-ui/react'
import { socket } from '../../contexts/SocketContextProvider'
import { useHistory, useParams } from 'react-router-dom'

function UserPlayerNickname() {
  const { id } = useParams()
  const history = useHistory()
  const [name, setName] = useState('')
  const handleOkButton = () => {
    const input = {
      name,
      pin: id
    }
    console.log(id)
    socket.emit('player_joined', input)
    history.push(`/play/instruction/${name}/${id}`)
  }

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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div>
                  <Button
                    w="281px"
                    h="40px"
                    colorScheme="blackAlpha"
                    onClick={handleOkButton}
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
