import React from 'react'
import { Heading, Text } from '@chakra-ui/react'

function CorrectAnswer() {
  return (
    <div>
      <Heading mb="5px" color="white">
        Correct
      </Heading>
      <div
        style={{
          width: 65,
          height: 65,
          backgroundColor: 'white',
          borderRadius: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 36
        }}
      >
        ✔
      </div>
      <Text mt="10px" color="white">
        {' '}
        Answer Streak 1
      </Text>
      <div
        style={{
          whidth: 50,
          height: 35,
          backgroundColor: 'white',
          marginTop: 10
        }}
      ></div>
    </div>
  )
}

export default CorrectAnswer
