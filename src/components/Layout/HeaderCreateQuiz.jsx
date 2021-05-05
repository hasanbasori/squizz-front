import React from 'react'
import styled from 'styled-components'
import './HeaderCreator.postcss'
import { Button, Input } from '@chakra-ui/react'
import {
  FiUser,
  FiHome,
  FiCompass,
  FiList,
  FiBarChart,
  FiUsers,
  FiLogOut,
  FiSettings,
  FiHelpCircle
} from 'react-icons/fi'
import { useDisclosure } from '@chakra-ui/react'

function HeaderCreator({ style, className, pathName }) {
  return (
    <div
      className="header-creator w-full flex flex-row justify-between items-center bg-gray-50 px-6 shadow-md relative"
      style={{ ...style }}
    >
      <div className="w-3/6 flex flex-row items-center h-full">
        <a href="/" className="text-3xl text-red-700 font-bold mr-2">
          Squizz!
        </a>
        <div className="flex items-center border-2 rounded w-2/5 ml-6 ">
          <Input
            placeholder="Enter squiz title..."
            border="none"
            _focus={{ border: 'none' }}
          ></Input>
          <Button
            size="sm"
            w={28}
            h={8}
            bgColor="#1368ce"
            color="white"
            fontWeight="700"
          >
            Settings
          </Button>
        </div>
      </div>
      <div className="w-3/6 flex flex-row items-center justify-end">
        <Button
          variant="ghost"
          color="black"
          w="100px"
          mr="8px"
          _hover={{ bgColor: "none", color: "gray.400"}}
        >
          Preview
        </Button>
        <a href="/" className="mr-2">
          <Button
            variant="ghost"
            border="1px solid"
            borderColor="black"
            w="100px"
            _hover={{ color: 'gray.500', borderColor: 'gray.500' }}
          >
            Exit
          </Button>
        </a>

        <Button
          variant="ghost"
          border="1px solid"
          borderColor="#ccc"
          bgColor="#ccc"
          color="white"
          w="100px"
          _hover={{ color: 'gray.500', borderColor: 'gray.500' }}
        >
          Done
        </Button>
      </div>
    </div>
  )
}

export default HeaderCreator
