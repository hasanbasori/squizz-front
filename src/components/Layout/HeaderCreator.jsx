import React from 'react'
import styled from 'styled-components'
import './HeaderCreator.postcss'
import {
  Button,
  IconButton,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider
} from '@chakra-ui/react'
import {
  FiUser,
  FiHome,
  FiCompass,
  FiList,
  FiBarChart,
  FiUsers
} from 'react-icons/fi'

function HeaderCreator({ style, className }) {
  return (
    <div
      className="header-creator w-full flex flex-row justify-between items-center bg-gray-50 px-6 shadow-md relative"
      style={{ ...style }}
    >
      <div className="w-3/6 flex flex-row items-center justify-between">
        <a href="/" className="text-3xl text-red-700 font-bold">
          Squizz!
        </a>
        <a href="/" className="flex items-center pl-4 hover:text-red-700">
          <Icon as={FiHome} w={5} h={5} mr="8px" />
          <p className="text-base font-semibold">Home</p>
        </a>
        <a href="#" className="flex items-center pl-2 hover:text-red-700">
          <Icon as={FiCompass} w={5} h={5} mr="8px" />
          <p className="text-base font-semibold">Discover</p>
        </a>
        <a
          href="/my-library/all"
          className="flex items-center pl-2 hover:text-red-700"
        >
          <Icon as={FiList} w={5} h={5} mr="8px" />
          <p className="text-base font-semibold">Library</p>
        </a>
        <a href="#" className="flex items-center pl-2 hover:text-red-700">
          <Icon as={FiBarChart} w={5} h={5} mr="8px" />
          <p className="text-base font-semibold">Reports</p>
        </a>
        <a href="#" className="flex items-center pl-2 hover:text-red-700">
          <Icon as={FiUsers} w={5} h={5} mr="8px" />
          <p className="text-base font-semibold">Groups</p>
        </a>
      </div>
      <div className="w-3/6 gap-4 flex flex-row items-center justify-end">
        <Button
          variant="ghost"
          border="1px solid"
          borderColor="black"
          w="100px"
          _hover={{ color: 'gray.500', borderColor: 'gray.500' }}
        >
          Share
        </Button>
        <Button w="100px" bgColor="#1368ce" color="white">
          Create
        </Button>
        {/* <IconButton
          icon={<FiUser />}
          bgColor="#1368ce"
          color="white"
          borderRadius="full"
          _hover={{ color: 'white', bgColor: '#1368ce' }}
        /> */}

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FiUser />}
            variant="ghost"
            bgColor="#1368ce"
            color="white"
            borderRadius="full"
          />
          <MenuList py={0}>
            <MenuItem bgColor="#f2f2f2">Creator Username</MenuItem>
            <MenuItem>Setting</MenuItem>
            <MenuItem>Profile Setting</MenuItem>
            <MenuItem>Support Center</MenuItem>
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}

export default HeaderCreator
