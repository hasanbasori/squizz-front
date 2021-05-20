import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import './AllRanking.postcss'
import { Flex } from '@chakra-ui/react'

function SecondPlace() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex
        justifyContent="center"
        alignItems="center"
        color="whitesmoke"
        fontSize="7xl"
        fontWeight="bold"
        className="show-winner"
      >
        2
      </Flex>

      <Heading fontSize="xx-large" color="white">
        2nd place
      </Heading>
      <Heading p="5px" fontSize="xl" color="white">
        Second place
      </Heading>
    </Flex>
  )
}

export default SecondPlace
