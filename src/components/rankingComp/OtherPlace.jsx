import React from 'react'
import { Heading, Text, Flex } from '@chakra-ui/react'
import './AllRanking.postcss'

function OtherPlace() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <div
        style={{
          width: 180,
          height: 175,
          backgroundColor: 'white',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: 160,
            height: 160,
            backgroundColor: 'tomato',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            // border: '1px solid',
            // padding: '10px 10px 10px 10px',
            // boxShadow: '5px 10px #888888'
          }}
        >
          <Text color="white" fontSize="90px" fontWeight="bold">
            5
          </Text>
        </div>
      </div>
      <Heading mt="5px" fontSize="x-large" color="white">
        You are 5th place
      </Heading>
      <Text color="whitesmoke" fontSize="xl">
        Keep Fighting
      </Text>
    </Flex>
  )
}

export default OtherPlace
