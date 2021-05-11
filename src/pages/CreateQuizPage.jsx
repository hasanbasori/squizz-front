import React from 'react'
import Layout, { HeaderCreateQuiz, Content, Footer } from '../components/Layout'
import './CreateQuizPage.postcss'

import { Box, Button, IconButton, Icon, Input, Select } from '@chakra-ui/react'
import {
  FiTrash2,
  FiCopy,
  FiImage,
  FiFilm,
  FiCircle,
  FiSquare,
  FiTriangle,
  FiHexagon,
  FiAward,
  FiGrid,
  FiClock,
  FiHelpCircle
} from 'react-icons/fi'

function CreateQuizPage() {
  return (
    <Layout>
      <HeaderCreateQuiz pathName="createquizpage" />
      <Content>
        <div className="flex w-full ">
          <div className="w-4/5 flex min-h-screen ">
            <div className="w-1/6 flex flex-col min-h-screen shadow-md bg-white">
              <div className="bg-small-quiz flex flex-col py-3 pr-4 mb-4">
                <p className="ml-8 mb-1 text-left text-xs font-bold">1 Quiz</p>
                <div className="flex items-end">
                  <div className="flex flex-col">
                    <IconButton
                      icon={<FiCopy />}
                      variant="ghost"
                      borderRadius="full"
                      size="sm"
                    ></IconButton>
                    <IconButton
                      icon={<FiTrash2 />}
                      variant="ghost"
                      borderRadius="full"
                      size="sm"
                    ></IconButton>
                  </div>
                  <div className="w-full bg-white rounded flex flex-col items-center">
                    <div className="text-sm text-gray-400">Question</div>
                    <div className="flex w-full pl-4 my-3 items-center">
                      <p className="h-1/3 mr-4 rounded-full border px-1.5 py-1 text-xs text-gray-400">
                        20
                      </p>
                      <div className="border-dashed border px-1">
                        <Icon as={FiImage} w={8} h={5} color="gray.400"></Icon>
                      </div>
                    </div>
                    <div className="flex flex-wrap pl-4">
                      <div className="border px-7 py-0.5 mr-1.5 mb-1"></div>
                      <div className="border px-7 py-0.5 mr-1.5 mb-1"></div>
                      <div className="border px-7 py-0.5 mr-1.5 mb-1"></div>
                      <div className="border px-7 py-0.5 mr-1.5 mb-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Button mb={4} bgColor="#1368ce" color="white">
                  Add Question
                </Button>
                <Button bgColor="#f2f2f2">Question Bank</Button>
              </div>
            </div>
            <div className="w-5/6 min-h-screen flex flex-col items-center mt-4 px-4">
              <Input
                placeholder="Start typing your question"
                h="7%"
                w="full"
                boxShadow="md"
                bgColor="white"
              ></Input>

              <div className="w-2/5 h-2/5 border-2 border-dashed border-gray-300 my-10">
                <div className="pt-28 mb-12">
                  <Icon as={FiImage} w={10} h={10} color="#b2b2b2" mr={4} />
                  <Icon as={FiFilm} w={9} h={9} color="#b2b2b2" />
                </div>
                <Button bgColor="white" fontSize="xs" fontWeight="700">
                  Add media
                </Button>
                <p className="mt-2 text-gray-500 font-semibold">
                  Drag and drop image from your computer
                </p>
              </div>

              <div className="flex flex-wrap w-full h-1/4">
                {/* <div className="bg-white w-1/2 h-1/2 mx-2 mb-2 shadow-md rounded flex items-center ">
                  <div className="ml-2 h-full bg-red-700 my-auto">
                    <Icon as={FiTriangle} h={8} w={8} color="white" />
                  </div> */}
                <Input
                  bgColor="white"
                  size="lg"
                  w="48%"
                  h="55%"
                  mx={2}
                  mb={2}
                  boxShadow="md"
                  // h="full"
                  // border="none"
                  placeholder="Add answer 1"
                ></Input>
                {/* </div> */}
                <Input
                  bgColor="white"
                  size="lg"
                  w="48%"
                  h="55%"
                  mb={2}
                  boxShadow="md"
                  placeholder="Add answer 2"
                ></Input>
                <Input
                  bgColor="white"
                  size="lg"
                  w="48%"
                  h="55%"
                  mx={2}
                  boxShadow="md"
                  placeholder="Add answer 3 (optional)"
                ></Input>
                <Input
                  bgColor="white"
                  size="lg"
                  w="48%"
                  h="55%"
                  boxShadow="md"
                  placeholder="Add answer 4 (optional)"
                ></Input>
              </div>
            </div>
          </div>

          <div className="w-1/5 min-h-screen flex flex-col justify-between shadow-md bg-white px-4 ">
            <div>
              <div className="mt-4 mb-6">
                <div className="text-left font-bold mb-3 flex items-center">
                  <FiHelpCircle />
                  <p className="ml-2">Question type</p>
                </div>
                <Select>
                  <option value="option1">Quiz</option>
                  <option value="option2">True of false</option>
                  <option value="option3">Type answer</option>
                  <option value="option4">Puzzle</option>
                </Select>
              </div>

              <hr />

              <div className="mt-6">
                <div className="text-left font-bold mb-3 flex items-center">
                  <FiClock />
                  <p className="ml-2">Time limit</p>
                </div>
                <Select defaultValue="twentySeconds">
                  <option value="fiveSeconds">5 seconds</option>
                  <option value="tenSeconds">10 seconds</option>
                  <option value="twentySeconds">20 seconds</option>
                  <option value="thirtySeconds">30 seconds</option>
                  <option value="oneMinute">1 minute</option>
                  <option value="oneHalfMinute">1 minute 30 seconds</option>
                  <option value="twoMinutes">2 minutes</option>
                  <option value="fourMinutes">4 minutes</option>
                </Select>
              </div>

              <div className="mt-6">
                <div className="text-left font-bold mb-3 flex items-center">
                  <FiAward />
                  <p className="ml-2">Points</p>
                </div>
                <Select>
                  <option value="option1">Standard</option>
                  <option value="option2">Double points</option>
                  <option value="option3">No point</option>
                </Select>
              </div>

              <div className="mt-6">
                <div className="text-left font-bold mb-3 flex items-center">
                  <FiGrid />
                  <p className="ml-2">Answer options</p>
                </div>
                <Select>
                  <option value="option1">Single select</option>
                  <option value="option2">Multi-select</option>
                </Select>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <hr />
              <div className="flex justify-around w-full my-2">
                <Button variant="ghost">Delete</Button>
                <Button bgColor="white" border="1px solid">
                  Duplicate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default CreateQuizPage
