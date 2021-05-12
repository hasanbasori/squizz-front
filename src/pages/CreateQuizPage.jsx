import React, { useState } from 'react'
import Layout, { HeaderCreateQuiz, Content, Footer } from '../components/Layout'
import './CreateQuizPage.postcss'
import Dropzone from 'react-dropzone'
import {
  Box,
  Button,
  IconButton,
  Icon,
  Input,
  Select,
  Radio,
  RadioGroup,
  Stack
} from '@chakra-ui/react'
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
  FiHelpCircle,
  FiCheck
} from 'react-icons/fi'

function ImgDropZone() {
  const [fileNames, setFileNames] = useState([])
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name))

  return (
    <div className="w-2/5 h-2/5 border-2 border-dashed border-gray-300 my-10 flex flex-col items-center">
      
      <div className="pt-28 mb-12">
        <Icon as={FiImage} w={10} h={10} color="#b2b2b2" mr={4} />
        <Icon as={FiFilm} w={9} h={9} color="#b2b2b2" />
      </div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone flex flex-col items-center' })}>
            <Button bgColor="white" fontSize="xs" fontWeight="700">
              Add media
            </Button>
            <input {...getInputProps()} />
            <p className="mt-2 text-gray-500 font-semibold">
              Drag and drop files, or click to select files
            </p>
          </div>
        )}
      </Dropzone>
      {/* <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div> */}
    </div>
  )
}

function CreateQuizPage() {
  // const [timeLimit, setTimeLimit] = useState(20)
  const [inputSelect, setInputSelect] = useState({
    questionType: 'Quiz',
    timeLimit: '20'
  })

  const [questionName, setQuestionName] = useState('')
  const [TrueOrFalse, setTrueOrFalse] = useState('')

  console.log(questionName)

  const handleInputSelectChange = (e) => {
    const { name, value } = e.target
    setInputSelect((prev) => ({ ...prev, [name]: value }))
  }

  const handleTrueButton = () => {
    setTrueOrFalse('true')
  }

  const handleFalseButton = () => {
    setTrueOrFalse('false')
  }

  return (
    <Layout>
      <HeaderCreateQuiz pathName="createquizpage" />
      <Content>
        <div className="flex w-full ">
          <div className="w-4/5 flex min-h-screen ">
            <div className="w-1/6 flex flex-col min-h-screen shadow-md bg-white">
              <div className="bg-small-quiz flex flex-col py-3 pr-4 mb-4">
                <p className="ml-8 mb-1 text-left text-xs font-bold">
                  1 <span>{inputSelect.questionType}</span>
                </p>
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
                    <div className="text-sm text-gray-400">
                      {questionName ? questionName : 'Question'}
                    </div>
                    <div className="flex w-full pl-4 my-3 items-center">
                      <p className="h-1/3 mr-4 rounded-full border px-1.5 py-1 text-xs text-gray-400">
                        {inputSelect.timeLimit}
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
              <div className="flex flex-col items-center">
                <Button mb={4} bgColor="#1368ce" color="white">
                  Add Question
                </Button>
                <Button bgColor="#f2f2f2">Question Bank</Button>
              </div>
            </div>
            {inputSelect.questionType === 'Quiz' ? (
              <div className="w-5/6 min-h-screen flex flex-col items-center mt-4 px-4">
                <Input
                  placeholder="Start typing your question"
                  h="7%"
                  w="full"
                  boxShadow="md"
                  bgColor="white"
                  value={questionName}
                  onChange={(e) => setQuestionName(e.target.value)}
                ></Input>

                <ImgDropZone />
                {/* <div className="w-2/5 h-2/5 border-2 border-dashed border-gray-300 my-10">
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
                </div> */}

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
            ) : inputSelect.questionType === 'True or false' ? (
              <div className="w-5/6 min-h-screen flex flex-col items-center mt-4 px-4">
                <Input
                  placeholder="Start typing your question"
                  h="7%"
                  w="full"
                  boxShadow="md"
                  bgColor="white"
                  value={questionName}
                  onChange={(e) => setQuestionName(e.target.value)}
                ></Input>

                <div className="w-2/5 h-2/5 border-2 border-dashed border-gray-300 my-10 flex flex-col items-center">
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

                {/* <div className="bg-white w-1/2 h-1/2 mx-2 mb-2 shadow-md rounded flex items-center ">
                  <div className="ml-2 h-full bg-red-700 my-auto">
                  <Icon as={FiTriangle} h={8} w={8} color="white" />
                </div> */}
                {TrueOrFalse === 'true' ? (
                  <div className="flex w-full h-1/4">
                    <div className="h-full w-1/2 bg-blue-600 text-white mx-2 mb-2 shadow-md flex justify-between items-center px-8 rounded">
                      <p className="pl-4 text-2xl font-bold">True</p>
                      <button
                        className="px-2 py-1.5 border-4 border-white bg-green-600 rounded-full"
                        onClick={handleTrueButton}
                      >
                        <Icon as={FiCheck} w={6} h={6}></Icon>
                      </button>
                    </div>
                    <div className="h-full w-1/2 bg-red-600 text-white mx-2 mb-2 shadow-md flex justify-between items-center px-8 rounded">
                      <p className="pl-4 text-2xl font-bold">False</p>
                      <button
                        className="p-5 border-4 border-white bg-red-600 rounded-full"
                        onClick={handleFalseButton}
                      ></button>
                    </div>
                  </div>
                ) : TrueOrFalse === 'false' ? (
                  <div className="flex w-full h-1/4">
                    <div className="h-full w-1/2 bg-blue-600 text-white mx-2 mb-2 shadow-md flex justify-between items-center px-8 rounded">
                      <p className="pl-4 text-2xl font-bold">True</p>
                      <button
                        className="p-5 border-4 border-white bg-blue-600 rounded-full"
                        onClick={handleTrueButton}
                      ></button>
                    </div>
                    <div className="h-full w-1/2 bg-red-600 text-white mx-2 mb-2 shadow-md flex justify-between items-center px-8 rounded">
                      <p className="pl-4 text-2xl font-bold">False</p>
                      <button
                        className="px-2 py-1.5 border-4 border-white bg-green-600 rounded-full"
                        onClick={handleFalseButton}
                      >
                        <Icon as={FiCheck} w={6} h={6}></Icon>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex w-full h-1/4">
                    <div className="h-full w-1/2 bg-blue-600 text-white mx-2 mb-2 shadow-md flex justify-between items-center px-8 rounded">
                      <p className="pl-4 text-2xl font-bold">True</p>
                      <button
                        className="p-5 border-4 border-white bg-blue-600 rounded-full"
                        onClick={handleTrueButton}
                      ></button>
                    </div>
                    <div className="h-full w-1/2 bg-red-600 text-white mx-2 mb-2 shadow-md flex justify-between items-center px-8 rounded">
                      <p className="pl-4 text-2xl font-bold">False</p>
                      <button
                        className="p-5 border-4 border-white bg-red-600 rounded-full"
                        onClick={handleFalseButton}
                      ></button>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
          <div className="w-1/5 min-h-screen flex flex-col justify-between shadow-md bg-white px-4 ">
            <div>
              <div className="mt-4 mb-6">
                <div className="text-left font-bold mb-3 flex items-center">
                  <FiHelpCircle />
                  <p className="ml-2">Question type</p>
                </div>
                <Select
                  value={inputSelect.questionType}
                  onChange={handleInputSelectChange}
                  name="questionType"
                >
                  <option value="Quiz">Quiz</option>
                  <option value="True or false">True or false</option>
                  <option value="Type answer">Type answer</option>
                  <option value="Puzzle">Puzzle</option>
                </Select>
              </div>

              <hr />

              <div className="mt-6">
                <div className="text-left font-bold mb-3 flex items-center">
                  <FiClock />
                  <p className="ml-2">Time limit</p>
                </div>
                <Select
                  value={inputSelect.timeLimit}
                  onChange={handleInputSelectChange}
                  name="timeLimit"
                >
                  <option value="5">5 seconds</option>
                  <option value="10">10 seconds</option>
                  <option value="20">20 seconds</option>
                  <option value="30">30 seconds</option>
                  <option value="60">1 minute</option>
                  <option value="90">1 minute 30 seconds</option>
                  <option value="120">2 minutes</option>
                  <option value="240">4 minutes</option>
                </Select>
              </div>

              <div className="mt-6">
                <div className="text-left font-bold mb-3 flex items-center">
                  <FiAward />
                  <p className="ml-2">Points</p>
                </div>
                <Select>
                  <option value="Standard">Standard</option>
                  <option value="DoublePoints">Double points</option>
                  <option value="NoPoint">No point</option>
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
