import React from 'react'
import { Heading, Text } from '@chakra-ui/react'

function TimesUp() {
  return (
    <div>
      <Heading mb="5px" color="white">
        Time's Up
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
        ❌
      </div>
      <Text mt="10px" color="white">
        Dust yourself off.Greatness awaits!
      </Text>
      {/* <div
        style={{
          whidth: 50,
          height: 35,
          backgroundColor: 'white',
          marginTop: 10
        }}
      > Dig deep on the next one!</div> */}
    </div>
  )
}

export default TimesUp
