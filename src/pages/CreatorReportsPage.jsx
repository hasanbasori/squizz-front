import React from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
// import './CreatorReports.postcss'
import { Box, Button, Input, Icon } from '@chakra-ui/react'
import { FiTrash2 } from 'react-icons/fi'

function CreatorReports() {
  return (
    <Layout>
      <HeaderCreator pathName="reports" />
      <Content>
        <div className="flex flex-col mt-8 mx-4 min-h-screen items-end">
          <div className="flex w-1/4 mb-6">
            <div className="w-2/3 ">
              <Input placeholder="Search" borderColor="gray.400" />
            </div>
            <div className="w-1/3 ">
              <Button
                alignItems="center"
                color="gray.600"
                variant="ghost"
                _hover={{ bgColor: 'none' }}
                pr={0}
              >
                <Icon as={FiTrash2} w={6} h={6} />
                <p className="text-lg ml-3 text-right">Bin</p>
              </Button>
            </div>
          </div>
          <div className="py-52 border border-gray-300 rounded shadow-md w-full">
            <p className="text-4xl font-bold mb-4">Nothing to see here!</p>
            <p className="text-md font-semibold mb-8">
              Come back after hosting your first squizz to view your game
              report.
            </p>
            <Button bgColor="#1368ce" color="white">
              Host Squizz
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorReports
