import React from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
// import './CreatorProfilePage.postcss'
import {
  Icon,
  IconButton,
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
  Box,
  Button,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  outline
} from '@chakra-ui/react'
import { FiUser, FiMoreVertical } from 'react-icons/fi'

function CreatorProfilePage() {
  return (
    <Layout>
      <HeaderCreator />
      <Content>
        <div className="px-20 py-12">
          <div className="flex justify-between">
            <div className="flex">
              <div className="bg-gray-400 p-4 rounded-full mr-4">
                <Icon as={FiUser} w={8} h={7} color="white" />
              </div>
              <p className="font-bold text-lg">Creator Username</p>
            </div>

            <div className="flex w-1/3">
              <div className="flex w-2/5">
                <p className="mr-2">Profile options</p>

                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<FiMoreVertical />}
                    size="sm"
                    borderRadius="full"
                    bgColor="white"
                  />
                  <MenuList>
                    <MenuItem>
                      Copy profile link
                    </MenuItem>
                    <MenuItem>
                      Flag user
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
              <div className="flex flex-col px-3 border-b-2 border-blue-800 text-left w-1/5">
                <p className="mb-3">Squizzes</p>
                <p className="mb-2 font-bold">0</p>
              </div>
              <div className="flex flex-col px-3 ml-4 border-b-2 border-blue-800 text-left w-1/5">
                <p className="mb-4">Plays</p>
                <p className="font-bold">0</p>
              </div>
              <div className="flex flex-col px-3 ml-4 border-b-2 border-blue-800 text-left w-1/5">
                <p className="mb-4">Players</p>
                <p className="font-bold">0</p>
              </div>
            </div>
          </div>
          <div className="mt-56 flex flex-col items-center">
            <p className="text-2xl font-bold">
              No public squizzes created by al3atross
            </p>
            <Button w="15%" mt="36px" bgColor="#1368ce" color="white">
              Go back
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorProfilePage
