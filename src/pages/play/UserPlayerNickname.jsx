import React, { useState } from 'react'
import Layout, { Content } from '../../components/Layout'
import './UserPlayerNickname.postcss'
import { Input, FormControl, Button, Text } from '@chakra-ui/react'
<<<<<<< HEAD
import { socket } from '../../contexts/SocketContextProvider'
import { useHistory, useParams } from 'react-router-dom'
=======
import { useHistory } from 'react-router-dom'
>>>>>>> eb100b0d602e98dd1d122ba52ff2ff011b5c805b

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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div>
                  <Button
<<<<<<< HEAD
                    w="281px"
                    h="40px"
                    colorScheme="blackAlpha"
                    onClick={handleOkButton}
=======
                    onClick={() => history.push('/play/instruction')}
                    w="281px"
                    h="40px"
                    colorScheme="blackAlpha"
>>>>>>> eb100b0d602e98dd1d122ba52ff2ff011b5c805b
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
