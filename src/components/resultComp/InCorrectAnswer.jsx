import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'

function InCorrectAnswer() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading mb="5px" color="white">
        Incorrect
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
          fontSize: 36,
          margin: 10
        }}
      >
        ❌
      </div>
      <Text mt="10px" color="white">
        Dig deep on the next one!
      </Text>
      {/* <div
        style={{
          whidth: 50,
          height: 35,
          backgroundColor: 'white',
          marginTop: 10
        }}
      > Dig deep on the next one!</div> */}
    </Flex>
  )
}

export default InCorrectAnswer
