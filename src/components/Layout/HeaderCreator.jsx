import React from 'react'
import styled from 'styled-components'
import './HeaderCreator.postcss'
import {
  Button,
  IconButton,
  Text,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
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
      <div className="w-3/6 gap-5 flex flex-row items-center justify-around">
        <h1 className="text-3xl text-red-700 mr-4 font-bold">Squizz!</h1>
        {/* <Tabs>
          <TabList>
            <Tab>
              <Icon as={FiHome} w={5} h={5} mr="8px" />
              <Text fontSize="md">Home</Text>
            </Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs> */}
        
        <Button
          variant="ghost"
          borderRadius="0"
        >
          <Icon as={FiHome} w={5} h={5} mr="8px" />
          <Text fontSize="md">Home</Text>
        </Button>
        <Button variant="ghost">
          <Icon as={FiCompass} w={5} h={5} mr="8px" />
          <Text fontSize="md">Discover</Text>
        </Button>
        <Button variant="ghost">
          <Icon as={FiList} w={5} h={5} mr="8px" />
          <Text fontSize="md">Library</Text>
        </Button>
        <Button variant="ghost">
          <Icon as={FiBarChart} w={5} h={5} mr="8px" />
          <Text fontSize="md">Reports</Text>
        </Button>
        <Button variant="ghost">
          <Icon as={FiUsers} w={5} h={5} mr="8px" />
          <Text fontSize="md">Groups</Text>
        </Button>

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
        <IconButton
          icon={<FiUser />}
          bgColor="#1368ce"
          color="white"
          borderRadius="full"
          _hover={{ color: 'white', bgColor: '#1368ce' }}
        />
      </div>
    </div>
  )
}

export default HeaderCreator
