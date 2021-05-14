import React from 'react'
import { flex, height } from 'styled-system'
import Layout, { HeaderAuthentication, Content } from '../Layout'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import PlayButton from '../PlayButton'

function UserNameForm({ setStep }) {
  return (
    <div>
      <h1 style={{ margin: 24 }} className="text-2xl font-semibold">
        Create a username
      </h1>
      <div
        style={{
          width: 420,
          height: 230,
          borderRadius: 5,
          boxShadow: 'rgb(0 0 0 / 15%) 0px 2px 4px 0px',
          backgroundColor: 'white',
          paddingLeft: 80,
          paddingRight: 80,
          paddingTop: 45
        }}
      >
        <p className="text-base font-semibold">
          Username <br />
          Do not use your real name{' '}
        </p>
        <FormControl className="p-1" id="username" isRequired>
          <Input className="w=80%" placeholder="Username" />
        </FormControl>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            margin: 10
          }}
        >
          <hr style={{ width: '50%' }} />
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <PlayButton
            onClick={() => setStep(3)}
            style={{ margin: 5 }}
            htmlType="button"
            type="primary"
          >
            Continue
          </PlayButton>
        </div>
      </div>
    </div>
  )
}

export default UserNameForm
