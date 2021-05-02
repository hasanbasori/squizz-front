import React from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
import './CreatorHomePage.postcss'
import {
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

function CreatorHomePage() {
  return (
    <Layout>
      <HeaderCreator />
      <Content>
        <div className="flex flex-wrap px-36 pt-6">
          <div className="w-full sm:w-1/3 lg:w-3/12">
            <div className="content-box py-4 mb-4 ">
              <div className="px-6 mb-4">
                <p className="text-md font-bold">Creator name</p>
                <p className="text-xs font-bold text-gray-500">
                  Creator username
                </p>
              </div>

              <div className="bg-gray-100 flex flex-row justify-between px-3 py-2 text-xs rounded font-bold mb-2 mx-4">
                <p className="text-gray-500">Plan:</p>
                <a href="#" className="underline">
                  Upgrade
                </a>
              </div>
              <div className="bg-gray-100 flex flex-row justify-between px-3 py-2 text-xs rounded font-bold pb-2 mx-4">
                <p className="text-gray-500">My interests</p>
                <a href="#" className="underline">
                  Add interests
                </a>
              </div>
            </div>

            <div className="content-box py-3 mb-4">
              <p className="px-4 pb-3 font-bold">Challenge in process</p>
              <hr />
              <div className="detail-box py-6">
                <p className="px-12 pb-4 text-sm">
                  Find engaging learning games for kids to play independently
                  with questions and answers displayed on their devices.
                </p>
                <Button
                  fontSize="sm"
                  bgColor="#1368ce"
                  color="white"
                  py={1}
                  h={7}
                >
                  Learn more
                </Button>
              </div>
            </div>
            <div className="content-box h-60">
              <p className="px-4 py-3 font-bold">Upgrade now</p>
            </div>
          </div>

          <div className="w-full sm:w-2/3 lg:w-6/12 px-4 pb-4">
            <div
              className="rounded h-52 mb-4 shadow-md text-left"
              style={{ backgroundColor: '#26890c' }}
            >
              <p className="pt-3 px-4 text-white">Host a Squizz!</p>
              <p className="px-4 text-white font-bold text-lg">
                More Players - more fun! Invite 2 or more
              </p>
            </div>
            <div className="content-box py-3 mb-4">
              <p className="px-4 pb-3 font-bold">Collections</p>
              <hr />
              <div className="detail-box py-6">
                <p className="px-12 pb-6 text-sm">
                  Welcome to Collections! Here you can create collections and
                  add several squizzs to them. Get started by creating your
                  first collection and assign to your learners.
                </p>
                <Button
                  fontSize="sm"
                  bgColor="#1368ce"
                  color="white"
                  py={1}
                  h={7}
                >
                  Create Collection
                </Button>
              </div>
            </div>
            <div className="content-box h-60">
              <p className="px-4 py-3 font-bold">What's new</p>
              <hr />
            </div>
          </div>

          <div className="hidden lg:block lg:w-3/12">
            <div className="content-box py-4 mb-4">
              <Tabs>
                <TabList>
                  <Tab
                    _hover={{
                      color: 'black',
                      borderBottom: '2px',
                      borderColor: 'blue.400'
                    }}
                    _active={{
                      bgColor: 'white'
                    }}
                    _selected={{
                      color: 'black',
                      borderBottom: '2px',
                      borderColor: 'blue.400',
                      boxShadow: 'none'
                    }}
                    fontWeight="600"
                    color="gray.500"
                  >
                    My Squizzs
                  </Tab>
                  <Tab
                    _hover={{
                      color: 'black',
                      borderBottom: '2px',
                      borderColor: 'blue.400'
                    }}
                    _active={{
                      bgColor: 'white'
                    }}
                    _selected={{
                      color: 'black',
                      borderBottom: '2px',
                      borderColor: 'blue.400',
                      boxShadow: 'none'
                    }}
                    fontWeight="600"
                    color="gray.500"
                  >
                    Team Space
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel
                    border="1px dashed"
                    borderColor="gray.300"
                    borderRadius="5px"
                    m={4}
                    p={6}
                    h={32}
                    bgColor="#f2f2f2"
                    textAlign="center"
                  >
                    <p className="text-sm text-gray-500">
                      Create your first squizz using
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      one of our templates.
                    </p>
                    <Button
                      fontSize="sm"
                      bgColor="#1368ce"
                      color="white"
                      py={1}
                      h={7}
                    >
                      Create Squizz
                    </Button>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
              {/* <p className="px-4 py-3 font-bold">My Squizzs</p>
              <div className="m-4 border-2 border-gray-300 border-dashed rounded h-32">
                squizz
              </div> */}
            </div>
            <div className="content-box py-3 items-center">
              <p className="px-4 pb-3 font-bold">Latest reports</p>
              <hr />
              <div className="detail-box py-6">
                <p className="px-12 pb-4 text-sm">
                  Host your first squizz to see reports here.
                </p>
                <Button
                  fontSize="sm"
                  bgColor="#1368ce"
                  color="white"
                  py={1}
                  h={7}
                >
                  Host Squizz
                </Button>
              </div>
              <Button
                variant="link"
                fontSize="sm"
                color="#1368ce"
                w="full"
                h={7}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorHomePage
