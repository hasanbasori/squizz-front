import React, { useContext, useEffect, useState } from 'react'
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
import { useHistory } from 'react-router-dom'
import { CreatorContext } from '../contexts/CreatorContextProvider'
import axios from '../config/axios'

function CreatorHomePage() {
  const { creator, setCreator } = useContext(CreatorContext)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [dataSquizz, setDataSquizz] = useState([])
  const history = useHistory()

  useEffect(() => {
    const getSquizzes = async () => {
      try {
        const res = await axios.get(`/quiz`)
        console.log(res)
        if (res) setDataSquizz(res.data.quiz)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getSquizzes()
  }, [])
  // console.log(dataSquizz)

  if (isLoading) {
    return <p>Loading data</p>
  }

  return (
    <Layout>
      <HeaderCreator pathName="homepage" />
      <Content>
        <div className="flex flex-wrap sm:px-8 md:px-16 lg:px-36 pt-6">
          <div className="w-full sm:w-1/3 lg:w-3/12">
            <div className="content-box py-4 mb-4 ">
              <div className="px-6 mb-4">
                <p className="text-lg font-bold">{creator.name}</p>
                <p className="text-xs font-bold text-gray-500">
                  {creator.username}
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
                      bgColor: 'white',
                      outline: 'none'
                    }}
                    _selected={{
                      color: 'black',
                      borderBottom: '2px',
                      borderColor: 'blue.400',
                      boxShadow: 'none',
                      outline: 'none'
                    }}
                    fontWeight="600"
                    color="gray.500"
                  >
                    My Squizzes
                  </Tab>
                  <Tab
                    _hover={{
                      color: 'black',
                      borderBottom: '2px',
                      borderColor: 'blue.400'
                    }}
                    _active={{
                      bgColor: 'white',
                      outline: 'none'
                    }}
                    _selected={{
                      color: 'black',
                      borderBottom: '2px',
                      borderColor: 'blue.400',
                      boxShadow: 'none',
                      outline: 'none'
                    }}
                    fontWeight="600"
                    color="gray.500"
                  >
                    Team Space
                  </Tab>
                </TabList>

                <TabPanels>
                  {dataSquizz[0] ? (
                    <TabPanel
                      m={2}
                      p={2}
                      h={28}
                      textAlign="center"
                      alignItems="center"
                    >
                      <div
                        className="text-sm text-gray-500 w-full h-4/5 bg-gray-400 flex mb-4 rounded shadow-md hover:cursor-pointer"
                        onClick={() =>
                          history.push('/each-quiz', {
                            params: dataSquizz[0].id
                          })
                        }
                      >
                        <div className="w-2/5 bg-gray-200 rounded-l flex items-end px-4 pb-2">
                          <p className="py-0.5 w-full bg-gray-700 rounded text-white text-xs font-semibold">
                            {dataSquizz[0].Questions.length} Questions
                          </p>
                        </div>
                        <div className="w-3/5 flex flex-col justify-between bg-gray-50 border-l border-white ">
                          <p className="mt-2 ml-2 text-left font-bold">
                            {dataSquizz[0].name}
                          </p>
                          <div className="flex bg-gray-200 justify-between px-2 py-0.5">
                            <p className="text-xs">{creator.username}</p>
                            <p className="text-xs font-bold">0 plays</p>
                          </div>
                        </div>
                      </div>
                      <a
                        href="/my-library/all"
                        className="py-1 underline text-blue-600 text-xs font-bold"
                      >
                        See all ({dataSquizz.length})
                      </a>
                    </TabPanel>
                  ) : (
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
                  )}
                  <TabPanel
                    border="1px dashed"
                    borderColor="gray.300"
                    borderRadius="5px"
                    m={4}
                    py={6}
                    px={12}
                    h={44}
                    bgColor="#f2f2f2"
                    textAlign="center"
                  >
                    <p className="text-sm text-gray-500 mb-4">
                      Upgrade and start collaborating with friends and family in
                      a private team space.
                    </p>
                    <Button
                      fontSize="sm"
                      bgColor="#1368ce"
                      color="white"
                      py={1}
                      h={7}
                    >
                      Upgrade now
                    </Button>
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
