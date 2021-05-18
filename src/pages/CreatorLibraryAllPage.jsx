import React, { useContext, useEffect, useState } from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
import {
  Input,
  Button,
  IconButton,
  Select,
  Checkbox,
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
  FiMenu,
  FiLayers,
  FiFolder,
  FiPlus,
  FiFolderPlus,
  FiShare2,
  FiStar,
  FiMoreVertical,
  FiTrash2,
  FiEdit3
} from 'react-icons/fi'
import { VscGrabber, VscMenu } from 'react-icons/vsc'
import { borderColor } from 'styled-system'
import { CreatorContext } from '../contexts/CreatorContextProvider'
import axios from '../config/axios'
import { useHistory } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'
import computer from '../../pic/computer.jpg'
import earth from '../../pic/earth.jpg'

function PlayModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <button
        onClick={(e) => {
          onOpen()
          e.stopPropagation()
        }}
        className="px-4 py-1 border bg-green-600 rounded text-white text-sm font-bold"
      >
        Play
      </button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose a way to play this squizz</ModalHeader>
          <ModalBody>
            <div className="flex mx-6 justify-between">
              <div className="bg-gray-200 w-2/5 py-6 flex flex-col justify-between">
                <img src={computer} alt="" />
                <a
                  href="/select-game-mode"
                  className="mx-auto w-2/3 py-2 text-center text-white bg-green-800 rounded"
                >
                  Host
                </a>
              </div>
              <div className="bg-gray-200 w-2/5 py-6 flex flex-col justify-between">
                <img src={earth} alt="" />
                <a
                  href="#"
                  className="mx-auto w-2/3 py-2 text-center text-white bg-green-800 rounded"
                >
                  Challenge
                </a>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mx="auto"
              bgColor="#f2f2f2"
              color="black"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function CreatorLibraryAllPage() {
  const [isCollections, setIsCollections] = useState(false)
  const [isUsernameFolder, setIsUsernameFolder] = useState(false)
  const { creator, setCreator } = useContext(CreatorContext)
  const [dataSquizz, setDataSquizz] = useState([])
  const [error, setError] = useState('')
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(true)

  const getSquizzes = async () => {
    try {
      const res = await axios.get(`/quiz`)
      setDataSquizz(res.data.quiz)
      setIsLoading(false)
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  useEffect(() => {
    getSquizzes()
  }, [])
  // console.log(dataSquizz)

  // const quizCreatedAt = new Date(dataSquizz.quiz[0].createdAt)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const handleOpenCollections = () => {
    setIsCollections(true)
    setIsUsernameFolder(false)
  }

  const handleOpenSquizz = () => {
    setIsCollections(false)
    setIsUsernameFolder(false)
  }

  const handleOpenFolder = () => {
    setIsCollections(false)
    setIsUsernameFolder(true)
  }

  const handleEditButton = (e, id) => {
    history.push(`/create-quiz/${id}`)
    e.stopPropagation()
  }

  const handlePlayButton = (e) => {
    alert('play')
    e.stopPropagation()
  }

  const handleMoreButton = (e) => {
    e.stopPropagation()
  }

  const handleDeleteButton = async (e, id) => {
    e.stopPropagation()
    await axios.delete(`/quiz/${id}`)
    getSquizzes()
  }

  if (isLoading) {
    return <p>data is loading</p>
  }

  return (
    <Layout>
      <HeaderCreator pathName="library" />
      <Content>
        <div className="flex">
          <div className="shadow-md bg-gray-50 pt-8 pb-40 min-h-screen">
            <div className="flex flex-col pr-4">
              {isCollections === false && isUsernameFolder === false ? (
                <a
                  href="#"
                  className="text-left flex items-center pl-6 pr-24 py-2 mb-1 rounded  bg-gray-200 text-red-700 hover:bg-gray-200 hover:text-red-700 focus:bg-gray-200 focus:text-red-700"
                  onClick={handleOpenSquizz}
                >
                  <FiMenu />
                  <p className="pl-2 font-bold ">Squizzes</p>
                </a>
              ) : (
                <a
                  href="#"
                  className="text-left flex items-center pl-6 pr-24 py-2 mb-1 rounded hover:bg-gray-200 hover:text-red-700 focus:bg-gray-200 focus:text-red-700"
                  onClick={handleOpenSquizz}
                >
                  <FiMenu />
                  <p className="pl-2 font-bold ">Squizzes</p>
                </a>
              )}

              {isCollections === true && isUsernameFolder === false ? (
                <a
                  href="#"
                  className="text-left flex items-center pl-6 pr-24 py-2 mb-1 rounded bg-gray-200 text-red-700 hover:bg-gray-200 hover:text-red-700 focus:bg-gray-200 focus:text-red-700"
                  onClick={handleOpenCollections}
                >
                  <FiLayers />
                  <p className="pl-2 font-bold">Collections</p>
                </a>
              ) : (
                <a
                  href="#"
                  className="text-left flex items-center pl-6 pr-24 py-2 mb-1 rounded hover:bg-gray-200 hover:text-red-700 focus:bg-gray-200 focus:text-red-700"
                  onClick={handleOpenCollections}
                >
                  <FiLayers />
                  <p className="pl-2 font-bold">Collections</p>
                </a>
              )}
            </div>

            <hr />

            {isCollections === false && isUsernameFolder === true ? (
              <a
                href="#"
                className="text-left flex items-center justify-between pl-6 pr-2 py-2 my-1 bg-gray-200 text-red-700 hover:bg-gray-200 hover:text-red-700"
                onClick={handleOpenFolder}
              >
                <div className="pr-6 flex items-center">
                  <FiFolder />
                  <p className="font-bold ml-2">{creator.name}</p>
                </div>
                <FiPlus />
              </a>
            ) : (
              <a
                href="#"
                className="text-left flex items-center justify-between pl-6 pr-2 py-2 my-1 hover:bg-gray-200 hover:text-red-700"
                onClick={handleOpenFolder}
              >
                <div className="pr-6 flex items-center">
                  <FiFolder />
                  <p className="font-bold ml-2">{creator.name}</p>
                </div>
                <FiPlus />
              </a>
            )}
          </div>

          {!isCollections && !isUsernameFolder && (
            <div className="w-full px-8 pt-8 pb-4 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex w-4/6">
                  <a
                    href="#"
                    className="border border-gray-300 px-4 py-1 text-sm font-bold text-gray-700 focus:bg-white focus:text-red-700"
                  >
                    Recent
                  </a>
                  <a
                    href="#"
                    className="border-t border-r border-b border-gray-300 px-4 py-1 text-sm font-bold text-gray-700 focus:bg-white focus:text-red-700"
                  >
                    Drafts
                  </a>
                  <a
                    href="#"
                    className="border-t border-r border-b border-gray-300 px-4 py-1 text-sm font-bold text-gray-700 focus:bg-white focus:text-red-700"
                  >
                    Favorites
                  </a>
                  <a
                    href="#"
                    className="border-t border-r border-b border-gray-300 px-4 py-1 text-sm font-bold text-gray-700 focus:bg-white focus:text-red-700 mr-4"
                  >
                    Shared with me
                  </a>
                  <div className="w-2/6">
                    <Input
                      placeholder="Search"
                      size="sm"
                      borderColor="gray.300"
                      bgColor="white"
                    ></Input>
                  </div>
                </div>

                <div>
                  <IconButton icon={<VscGrabber />} variant="ghost" />
                  <IconButton icon={<VscMenu />} variant="ghost" />
                </div>
              </div>
              {dataSquizz ? (
                dataSquizz.map(
                  ({ id, name, createdDate, Questions }, index) => (
                    <div
                      className="flex w-full h-1/6 border-2 shadow-md bg-white mb-2"
                      onClick={() => history.push(`/each-quiz/${id}`)}
                      key={index}
                    >
                      <div className="w-2/12 h-full flex items-end p-0.5">
                        {/* <p className="h-1/2 ml-2 mr-4">CB</p> */}
                        <Checkbox h="100%" ml={2} mr={4}></Checkbox>
                        <div className="bg-gray-300 w-full h-full flex items-end">
                          <p className="text-right ml-16 mb-2 p-1 bg-gray-500 rounded text-white">
                            {Questions.length} Questions
                          </p>
                        </div>
                      </div>
                      <div className="w-10/12 flex flex-col justify-between pt-3 pb-0.5 ">
                        <div className="flex justify-between pl-3 pr-2">
                          <p className="font-bold text-xl">{name}</p>
                          <div className="flex items-center">
                            <IconButton
                              icon={<FiStar />}
                              variant="ghost"
                              _hover={{ outline: 'none' }}
                              size="lg"
                              mr={2}
                            />
                            <Menu>
                              <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<FiMoreVertical />}
                                variant="ghost"
                                _hover={{ outline: 'none' }}
                                onClick={handleMoreButton}
                              />
                              <MenuList>
                                <MenuItem
                                  icon={<FiEdit3 />}
                                  onClick={(e) => handleEditButton(e, id)}
                                >
                                  Edit
                                </MenuItem>
                                <MenuItem
                                  icon={<FiTrash2 />}
                                  onClick={(e) => handleDeleteButton(e, id)}
                                >
                                  Delete
                                </MenuItem>
                              </MenuList>
                            </Menu>
                          </div>
                        </div>
                        <div className="flex justify-between items-center w-full bg-gray-100 h-2/5">
                          <p className="ml-2">{creator.username}</p>
                          <div className="flex items-center justify-evenly w-1/3 py-1.5">
                            <p>
                              Created {createdDate}
                              {/* {`${
                            months[createdAt.getMonth()]
                          } ${createdAt.getDate()}, ${createdAt.getFullYear()}`} */}
                            </p>
                            <button
                              className="px-4 py-1 border bg-blue-600 rounded text-white text-sm font-bold"
                              onClick={(e) => handleEditButton(e, id)}
                            >
                              Edit
                            </button>

                            <PlayModal />
                            {/* <button
                              className="px-4 py-1 border bg-green-600 rounded text-white text-sm font-bold"
                              onClick={handlePlayButton}
                            >
                              Play
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )
              ) : (
                <div className="w-full p-32 border-dashed border-2 border-gray-400 rounded flex flex-col items-center">
                  <img src="" alt="" />
                  <p className="mb-4">
                    It looks very empty in here, go ahead and create a squizz.
                  </p>
                  <Button
                    bgColor="#1368ce"
                    color="white"
                    _hover={{ bgColor: '#135bb0' }}
                  >
                    Create Squizz
                  </Button>
                </div>
              )}
            </div>
          )}

          {isCollections && !isUsernameFolder && (
            <div className="w-full px-8 pt-8 flex flex-col">
              <div className="text-left text-xl font-bold mb-6">
                Collections
              </div>
              <div className="w-full p-44 border-dashed border-2 border-gray-400 rounded">
                <img src="" alt="" />
                <p className="mb-4 text-lg">
                  You don’t yet have any collections! Create your first
                  collection by adding several squizzes.
                </p>
              </div>
            </div>
          )}

          {!isCollections && isUsernameFolder && (
            <div className="w-full px-8 pt-8 flex flex-col pb-4">
              <div className="flex justify-between items-center mb-6">
                <div className="flex w-4/6">
                  <a
                    href="#"
                    className="py-1 text-sm font-bold text-gray-700 hover:underline"
                  >
                    {creator.name}
                  </a>
                </div>

                <div className="flex">
                  <Select bgColor="white">
                    <option value="mostRecent">Most Recent</option>
                    <option value="oldest">Oldest</option>
                    <option value="nameA-Z">Name (a-z)</option>
                    <option value="nameZ-A">Name (z-a)</option>
                  </Select>
                  <IconButton icon={<FiFolderPlus />} variant="ghost" />
                  <IconButton icon={<FiShare2 />} variant="ghost" />
                  <IconButton icon={<VscGrabber />} variant="ghost" />
                  <IconButton icon={<VscMenu />} variant="ghost" />
                </div>
              </div>

              {dataSquizz ? (
                dataSquizz.map(
                  ({ id, name, createdDate, Questions }, index) => (
                    <div
                      className="flex w-full h-1/6 border-2 shadow-md bg-white mb-2"
                      onClick={() => history.push(`/each-quiz/${id}`)}
                      key={index}
                    >
                      <div className="w-2/12 h-full flex items-end p-0.5">
                        {/* <p className="h-1/2 ml-2 mr-4">CB</p> */}
                        <Checkbox h="100%" ml={2} mr={4}></Checkbox>
                        <div className="bg-gray-300 w-full h-full flex items-end">
                          <p className="text-right ml-16 mb-2 p-1 bg-gray-500 rounded text-white">
                            {Questions.length} Questions
                          </p>
                        </div>
                      </div>
                      <div className="w-10/12 flex flex-col justify-between pt-3 pb-0.5 ">
                        <div className="flex justify-between pl-3 pr-2">
                          <p className="font-bold text-xl">{name}</p>
                          <div className="flex items-center">
                            <IconButton
                              icon={<FiStar />}
                              variant="ghost"
                              _hover={{ outline: 'none' }}
                              size="lg"
                              mr={2}
                            />
                            {/* <IconButton
                              icon={<FiMoreVertical />}
                              variant="ghost"
                              _hover={{ outline: 'none' }}
                            /> */}
                            <Menu>
                              <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<FiMoreVertical />}
                                variant="ghost"
                                _hover={{ outline: 'none' }}
                                onClick={handleMoreButton}
                              />
                              <MenuList>
                                <MenuItem
                                  icon={<FiEdit3 />}
                                  onClick={(e) => handleEditButton(e, id)}
                                >
                                  Edit
                                </MenuItem>
                                <MenuItem
                                  icon={<FiTrash2 />}
                                  onClick={(e) => handleDeleteButton(e, id)}
                                >
                                  Delete
                                </MenuItem>
                              </MenuList>
                            </Menu>
                          </div>
                        </div>
                        <div className="flex justify-between items-center w-full bg-gray-100 h-2/5">
                          <p className="ml-2">{creator.username}</p>
                          <div className="flex items-center justify-evenly w-1/3 py-1.5">
                            <p>Created {createdDate}</p>
                            <button
                              className="px-4 py-1 border bg-blue-600 rounded text-white text-sm font-bold"
                              onClick={(e) => handleEditButton(e, id)}
                            >
                              Edit
                            </button>
                            <PlayModal />
                            {/* <button
                              className="px-4 py-1 border bg-green-600 rounded text-white text-sm font-bold"
                              onClick={handlePlayButton}
                            >
                              Play
                            </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )
              ) : (
                <div className="w-full p-32 border-dashed border-2 border-gray-400 rounded flex flex-col items-center">
                  <img src="" alt="" />
                  <p className="mb-4">
                    It looks very empty in here, go ahead and create a squizz.
                  </p>
                  <Button
                    bgColor="#1368ce"
                    color="white"
                    _hover={{ bgColor: '#135bb0' }}
                  >
                    Create Squizz
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorLibraryAllPage
