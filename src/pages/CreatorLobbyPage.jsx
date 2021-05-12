import React, { useState } from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
import './CreatorLobbyPage.postcss'
import { Box, Icon } from '@chakra-ui/react'
import { FiChevronRight, FiUser } from 'react-icons/fi'

function CreatorLobbyPage() {
  const [isLoading, setIsLoading] = useState(true)

  if (!isLoading) {
    return (
      <div className="min-h-screen background-loading flex flex-col items-center">
        <p className="text-4xl font-extrabold mt-28 text-white">
          Get Ready to join
        </p>
        <p className="mt-32 ml-36 bg-white rounded-t px-2 font-semibold">
          Game PIN:
        </p>
        <div className="px-4 py-2 bg-white w-2/5 rounded flex items-center justify-between text-left">
          <div>
            <p className="text-lg">
              Join at <span className="font-bold">www.squizz.it</span>
            </p>
            <p className="text-lg">
              or with the <span className="font-bold">Squizz! app</span>
            </p>
          </div>

          <Icon as={FiChevronRight} color="#864cbf" w={12} h={12} />
          <div className="py-2 px-4 bg-gray-700">
            <p className="font-bold text-lg text-white">Loaing Game PIN...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className="background-header px-2 pt-4 pb-6 flex flex-col items-center">
        <p className="ml-44 w-28 bg-white rounded-t px-2 font-bold text-lg">
          Game PIN:
        </p>
        <div className="px-3 py-2 bg-white w-2/5 rounded flex items-center justify-between text-left">
          <div>
            <p className="text-2xl">
              Join at <span className="font-bold">www.squizz.it</span>
            </p>
            <p className="text-2xl">
              or with the <span className="font-bold">Squizz! app</span>
            </p>
          </div>

          <Icon as={FiChevronRight} color="#25076b" w={12} h={12} />
          <div className="py-2 px-4">
            <p className="font-extrabold text-6xl">123 456</p>
          </div>
        </div>
      </div>
      <Content className="background-content pb-4 flex flex-col items-center">
        <div className="flex justify-between px-4 w-full mt-2">
          <div className="background-detail text-white h-full px-2 flex items-center rounded">
            <Icon as={FiUser} w={6} h={6} />
            <p className="ml-2 text-2xl font-bold">0</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl text-white font-bold mb-0.5">Squizz!</p>
            <p className="text-white text-lg font-bold">at home</p>
          </div>
          <a href="/creator-play" className="px-4 py-1 h-full bg-gray-300 rounded border-b-4 border-gray-400 font-semibold text-xl">
            Start
          </a>
        </div>

        <div className="background-detail px-6 py-1 rounded mt-40">
          <p className="text-white text-3xl font-bold">
            Waiting for players...
          </p>
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorLobbyPage
