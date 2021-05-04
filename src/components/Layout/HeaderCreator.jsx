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
  MenuDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
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

function ModalCreate() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} w="100px" bgColor="#1368ce" color="white">
        Create
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="2xl" fontWeight="700">Create a new squizz</ModalHeader>
          <ModalCloseButton />
          <ModalBody bgColor="#f2f2f2" pt={8} pb={60} px={6} display="flex">
            <div className="rounded py-4 w-1/3 bg-white shadow-md mr-3 flex flex-col items-center">
              <p className="mb-8 text-2xl font-bold">New squizz</p>
              <img src="" alt="" />
              <Button h='100%' px={6} py={1.5} bgColor="#26890c" color='white'>Create</Button>
            </div>
            <div className="rounded py-4 w-1/3 bg-white shadow-md mr-3 flex flex-col items-center">
              <p className="mb-8 text-2xl font-bold">Template 1</p>
              <img src="" alt="" />
              <p>Topic template quiz</p>
            </div>
            <div className="rounded py-4 w-1/3 bg-white shadow-md flex flex-col items-center">
              <p className="mb-8 text-2xl font-bold">Template 2</p>
              <img src="" alt="" />
              <p>Topic template quiz</p>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button bgColor="#f2f2f2" mx="auto" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

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
        <a
          href="/reports"
          className="flex items-center pl-2 hover:text-red-700"
        >
          <Icon as={FiBarChart} w={5} h={5} mr="8px" />
          <p className="text-base font-semibold">Reports</p>
        </a>
        <a href="/groups" className="flex items-center pl-2 hover:text-red-700">
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
        <ModalCreate />

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
            <MenuItem bgColor="#f2f2f2">
              <a href="/profiles">Creator Username</a>
            </MenuItem>
            <MenuItem icon={<FiSettings />}>Setting</MenuItem>
            <MenuItem>Profile Setting</MenuItem>
            <MenuItem icon={<FiHelpCircle />}>Support Center</MenuItem>
            <MenuItem icon={<FiLogOut />}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}

export default HeaderCreator
