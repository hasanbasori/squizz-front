import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import './AllRanking.postcss'
import { Flex } from '@chakra-ui/react'

function ThirdPlace() {
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
        3
      </Flex>

      <Heading fontSize="xx-large" color="white">
        3rd place
      </Heading>
      <Heading p="5px" fontSize="xl" color="white">
        Third place
      </Heading>
    </Flex>
  )
}

export default ThirdPlace
