import React, { useState } from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
import { Input, Button, IconButton, Select } from '@chakra-ui/react'
import { FiMenu, FiLayers, FiFolder, FiPlus, FiFolderPlus, FiShare2 } from 'react-icons/fi'
import { VscGrabber, VscMenu } from 'react-icons/vsc'
import { borderColor } from 'styled-system'

function CreatorLibraryAllPage() {
  const [isCollections, setIsCollections] = useState(false)
  const [isUsernameFolder, setIsUsernameFolder] = useState(false)

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

  return (
    <Layout>
      <HeaderCreator />
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
                className="text-left flex items-center pl-6 py-2 my-1 bg-gray-200 text-red-700 hover:bg-gray-200 hover:text-red-700"
                onClick={handleOpenFolder}
              >
                <FiFolder />
                <p className="pl-2 pr-6 font-bold">Creator Username</p>
                <FiPlus />
              </a>
            ) : (
              <a
                href="#"
                className="text-left flex items-center pl-6 py-2 my-1 hover:bg-gray-200 hover:text-red-700"
                onClick={handleOpenFolder}
              >
                <FiFolder />
                <p className="pl-2 pr-6 font-bold">Creator Username</p>
                <FiPlus />
              </a>
            )}
          </div>

          {!isCollections && !isUsernameFolder && (
            <div className="w-full px-8 pt-8 flex flex-col">
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

              <div className="w-full p-32 border-dashed border-2 border-gray-400 rounded">
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
            <div className="w-full px-8 pt-8 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex w-4/6">
                  <a
                    href="#"
                    className="px-4 py-1 text-sm font-bold text-gray-700 hover:underline"
                  >
                    Creator Username
                  </a>
                  
                </div>

                <div className='flex'>
                  <Select bgColor='white'>
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

              <div className="w-full p-32 border-dashed border-2 border-gray-400 rounded">
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
            </div>
          )}
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorLibraryAllPage
