import React, { useContext, useEffect } from 'react'
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
  ModalCloseButton,
  Avatar
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
import quiz from '../../../pic/quiz.png'
import * as localStorageService from '../../services/localStorageService'
import { CreatorContext } from '../../contexts/CreatorContextProvider'
import axios from '../../config/axios'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContextProvider'

function ModalCreate() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history = useHistory()

  const handleCreateDraftQuiz = async () => {
    const res = await axios.post('/quiz/create')
    history.push(`/create-quiz/${res.data.quiz.id}`)
  }

  return (
    <>
      <Button
        onClick={onOpen}
        w="100px"
        bgColor="#1368ce"
        color="white"
        borderBottom="4px"
        borderColor="blue.800"
        _hover={{
          borderBottom: '2px',
          height: '37px',
          borderColor: 'blue.800',
          bgColor: '#1260be'
        }}
      >
        Create
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="2xl" fontWeight="700">
            Create a new squizz
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bgColor="#f2f2f2" pt={8} pb={60} px={6} display="flex">
            <div className="rounded py-4 w-1/3 bg-white shadow-md mr-3 flex flex-col items-center">
              <p className="mb-8 text-2xl font-bold">New squizz</p>
              <img src={quiz} alt="" className="w-2/3 mb-4" />
              <button
                onClick={handleCreateDraftQuiz}
                href="/create-quiz"
                className="h-full px-6 py-1 bg-green-500 text-white rounded"
              >
                Create
              </button>
              {/* h="100%" px={6} py={1.5} bgColor="#26890c" color="white" */}
            </div>
            <div className="rounded pb-4 w-1/3 bg-white shadow-md mr-3 flex flex-col items-center">
              <div className="mb-8 text-2xl font-bold h-2/3 w-full bg-gray-300 rounded-t">
                <p className="ml-2 rounded-b-2xl border bg-white w-2/5 text-sm text-center">
                  Template 1
                </p>
              </div>
              <img src="" alt="" />
              <p className="ml-2 w-full text-lg text-left">
                Topic template quiz
              </p>
            </div>
            <div className="rounded pb-4 w-1/3 bg-white shadow-md flex flex-col items-center">
              <div className="mb-8 text-2xl font-bold h-2/3 w-full bg-gray-300 rounded-t">
                <p className="ml-2 rounded-b-2xl border bg-white w-2/5 text-sm text-center">
                  Template 2
                </p>
              </div>
              <img src="" alt="" />
              <p className="ml-2 w-full text-lg text-left">
                Topic template quiz
              </p>
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

function HeaderCreateQuiz({ style, className, pathName }) {
  const history = useHistory()
  const { creator, setCreator } = useContext(CreatorContext)
  const { setIsAuthenticated } = useContext(AuthContext)
  const noSelectNavbar =
    'border-transparent border-b-4 hover:border-b-4 hover:text-red-700 hover:border-red-700'

  const menusDetail = [
    {
      href: '/',
      title: 'Home',
      icon: FiHome,
      className:
        pathName === 'homepage' ? 'border-red-700 text-red-700' : noSelectNavbar
    },
    {
      href: '/discover',
      title: 'Discover',
      icon: FiCompass,
      className:
        pathName === 'discover' ? 'border-red-700 text-red-700' : noSelectNavbar
    },
    {
      href: '/my-library/all',
      title: 'Library',
      icon: FiList,
      className:
        pathName === 'library' ? 'border-red-700 text-red-700' : noSelectNavbar
    },
    {
      href: '/reports',
      title: 'Reports',
      icon: FiBarChart,
      className:
        pathName === 'reports' ? 'border-red-700 text-red-700' : noSelectNavbar
    },
    {
      href: '/groups',
      title: 'Groups',
      icon: FiUsers,
      className:
        pathName === 'groups' ? 'border-red-700 text-red-700' : noSelectNavbar
    }
  ]

  const handleLogout = (e) => {
    localStorageService.clearToken()
    setIsAuthenticated(false)
    history.push('/')
  }

  return (
    <div
      className="header-creator w-full flex flex-row justify-between items-center bg-gray-50 px-6 shadow-md relative"
      style={{ ...style }}
    >
      <div className="w-3/6 flex flex-row items-center justify-between h-full">
        <a
          href={pathName === 'homepage' ? '#' : '/'}
          className="text-3xl text-red-700 font-bold mr-2 border-transparent border-b-4"
        >
          Squizz!
        </a>

        {menusDetail.map(({ href, title, icon, className }, index) => (
          <a
            key={index}
            href={href}
            className={`flex h-full items-center ml-2 border-b-2 ${className}`}
          >
            <Icon as={icon} w={5} h={5} mr="8px" />
            <p className="text-base font-semibold">{title}</p>
          </a>
        ))}
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
            as={Avatar}
            aria-label="Options"
            bgColor="#1368ce"
            color="white"
            size="sm"
          />
          <MenuList py={0}>
            <MenuItem bgColor="#f2f2f2">
              <a href="/profiles">{creator.username}</a>
            </MenuItem>
            <MenuItem icon={<FiSettings />}>Setting</MenuItem>
            <MenuItem>Profile Setting</MenuItem>
            <MenuItem icon={<FiHelpCircle />}>Support Center</MenuItem>
            <MenuItem
              icon={<FiLogOut />}
              onClick={handleLogout}
            >
              Sign out
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}

export default HeaderCreateQuiz
