import React, { useEffect, useState } from 'react'
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
import axios from '../config/axios'
import { useParams } from 'react-router-dom'

function ImgDropZone() {
  const [file, setFile] = useState([])
  const handleDrop = (acceptedFiles) =>
    setFile(acceptedFiles.map((file) => file.name))

  // console.log(file)
  // if (!file) return (
  //   <div className="w-2/5 h-2/5 border-2 border-gray-300 my-10 flex flex-col items-center">
  //     <img src={file} alt="" />
  //   </div>
  // )

  return (
    <div className="w-2/5 h-2/5 border-2 border-dashed border-gray-300 my-10 flex flex-col items-center">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({
              className: 'dropzone flex flex-col items-center'
            })}
          >
            <div className="pt-28 mb-12">
              <Icon as={FiImage} w={10} h={10} color="#b2b2b2" mr={4} />
              <Icon as={FiFilm} w={9} h={9} color="#b2b2b2" />
            </div>
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
          {file.map((file) => (
            <li key={file}>{file}</li>
            ))}
        </ul>
      </div> */}
    </div>
  )
}

function CreateQuizPage() {
  // const [timeLimit, setTimeLimit] = useState(20)
  const { id } = useParams()
  const [eachQuestion, setEachQuestion] = useState([])

  const [inputQuestion, setInputQuestion] = useState({
    questionNo: 1,
    questionName: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    questionType: 'quiz',
    points: '1',
    timeLimit: '20',
    answerOptions: '1'
  })
  console.log(inputQuestion)

  const [quizName, setQuizName] = useState('')
  const [description, setDescription] = useState('')
  const [answer, setAnswer] = useState('')
  const [eachQuiz, setEachQuiz] = useState('')
  const [isLoading, setIsLoading] = useState('')

  const [TrueOrFalse, setTrueOrFalse] = useState('')

  useEffect(() => {
    const getCreateData = async () => {
      try {
        const res = await axios.get(`/quiz/each-quiz/${id}`)
        console.log(res)
        if (res) setEachQuiz(res.data.quiz)
        setIsLoading(false)
      } catch (err) {
        setError(err.response.data.message)
      }
    }
    getCreateData()
  }, [])

  console.log(eachQuiz)

  const handleCreateQuiz = async () => {
    if (inputQuestion.questionType === 'quiz') {
      await axios.post('/quiz/create', {
        quizName,
        description,
        questionName: inputQuestion.questionName,
        questionType: inputQuestion.questionType,
        points: inputQuestion.points,
        timeLimit: inputQuestion.timeLimit,
        answerOptions: inputQuestion.answerOptions,
        option1: inputQuestion.option1,
        option2: inputQuestion.option2,
        option3: inputQuestion.option3,
        option4: inputQuestion.option4,
        // questionImg,
        answer
      })
    } else if (inputQuestion.questionType === 'trueOrFalse') {
      await axios.post('/quiz/create', {
        quizName,
        description,
        questionName: inputQuestion.questionName,
        questionType: inputQuestion.questionType,
        points: inputQuestion.points,
        timeLimit: inputQuestion.timeLimit,
        answerOptions: inputQuestion.answerOptions,
        option1: 'true',
        option2: 'false',
        // questionImg,
        answer:
          TrueOrFalse === 'true'
            ? 'option1'
            : TrueOrFalse === 'false'
            ? 'option2'
            : null
      })
    }
  }

  const handleInputQuestion = (e) => {
    const { name, value } = e.target
    setInputQuestion((prev) => ({ ...prev, [name]: value }))
  }

  const handleTrueButton = () => {
    setTrueOrFalse('true')
  }

  const handleFalseButton = () => {
    setTrueOrFalse('false')
  }

  const addQuestion = () => {
    setEachQuestion(
      eachQuestion.concat(
        <div
          key={eachQuestion.length}
          className="bg-small-quiz flex flex-col py-3 pr-4"
        >
          <p className="ml-8 mb-1 text-left text-xs font-bold">
            {inputQuestion.questionNo + 1}
            <span className="ml-1">{inputQuestion.questionType}</span>
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
                {inputQuestion.questionName
                  ? inputQuestion.questionName
                  : 'Question'}
              </div>
              <div className="flex w-full pl-4 my-3 items-center">
                <p className="h-1/3 mr-4 rounded-full border px-1.5 py-1 text-xs text-gray-400">
                  {inputQuestion.timeLimit}
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
      )
    )
  }

  return (
    <Layout>
      <HeaderCreateQuiz
        pathName="createquizpage"
        quizName={quizName}
        setQuizName={setQuizName}
        description={description}
        setDescription={setDescription}
        handleCreateQuiz={handleCreateQuiz}
      />
      <Content>
        <div className="flex w-full">
          <div className="w-4/5 flex min-h-screen">
            <div className="w-1/6 flex flex-col min-h-screen shadow-md bg-white overflow-y-auto">
              <div className="bg-small-quiz flex flex-col py-3 pr-4">
                <p className="ml-8 mb-1 text-left text-xs font-bold">
                  {inputQuestion.questionNo}
                  <span className="ml-1">
                    {inputQuestion.questionType === 'trueOrFalse'
                      ? 'True or fasle'
                      : inputQuestion.questionType === 'quiz'
                      ? 'Quiz'
                      : inputQuestion.questionType}
                  </span>
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
                      {inputQuestion.questionName
                        ? inputQuestion.questionName
                        : 'Question'}
                    </div>
                    <div className="flex w-full pl-4 my-3 items-center">
                      <p className="h-1/3 mr-4 rounded-full border px-1.5 py-1 text-xs text-gray-400">
                        {inputQuestion.timeLimit}
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
              {eachQuestion}
              <div className="flex flex-col items-center mt-4">
                <Button
                  mb={4}
                  bgColor="#1368ce"
                  color="white"
                  borderBottom="4px"
                  borderColor="gray.600"
                  w="75%"
                  onClick={addQuestion}
                >
                  Add Question
                </Button>
                <Button
                  bgColor="#f2f2f2"
                  borderBottom="4px"
                  borderColor="gray.500"
                  w="75%"
                >
                  Question Bank
                </Button>
              </div>
            </div>

            {inputQuestion.questionType === 'quiz' ? (
              <div className="w-5/6 min-h-screen flex flex-col items-center mt-4 px-4">
                <Input
                  placeholder="Start typing your question"
                  h="7%"
                  w="full"
                  boxShadow="md"
                  bgColor="white"
                  value={inputQuestion.questionName}
                  onChange={handleInputQuestion}
                  name="questionName"
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

                <div className="flex flex-wrap justify-around w-full h-1/4">
                  {/* <div className="bg-white w-1/2 h-1/2 mx-2 mb-2 shadow-md rounded flex items-center ">
                  <div className="ml-2 h-full bg-red-700 my-auto">
                    <Icon as={FiTriangle} h={8} w={8} color="white" />
                  </div> */}
                  {answer === 'option1' ? (
                    <div className="flex h-1/2 width-answer mr-1 px-2 mb-2 shadow-md rounded items-center bg-white">
                      <Input
                        variant="ghost"
                        h="full"
                        // size="lg"
                        // w="48%"
                        // mx={2}
                        // mb={2}
                        // boxShadow="md"
                        // h="full"
                        // border="none"
                        placeholder="Add answer 1"
                        name="option1"
                        value={inputQuestion.option1}
                        onChange={handleInputQuestion}
                      ></Input>
                      <button className="px-2 py-1.5 border-4 border-gray-200 bg-green-600 rounded-full">
                        <Icon as={FiCheck} w={6} h={6}></Icon>
                      </button>
                    </div>
                  ) : (
                    <div className="flex h-1/2 width-answer mr-1 px-2 mb-2 shadow-md rounded items-center bg-white">
                      <Input
                        variant="ghost"
                        h="full"
                        // size="lg"
                        // w="48%"
                        // mx={2}
                        // mb={2}
                        // boxShadow="md"
                        // h="full"
                        // border="none"
                        placeholder="Add answer 1"
                        name="option1"
                        value={inputQuestion.option1}
                        onChange={handleInputQuestion}
                      ></Input>
                      <button
                        className="p-5 border-4 border-gray-200 bg-white-600 rounded-full"
                        onClick={
                          inputQuestion.option1
                            ? () => setAnswer('option1')
                            : null
                        }
                      ></button>
                    </div>
                  )}
                  {/* </div> */}

                  {answer === 'option2' ? (
                    <div className="flex h-1/2 width-answer px-2 mb-2 shadow-md rounded items-center bg-white">
                      <Input
                        variant="ghost"
                        h="full"
                        placeholder="Add answer 2"
                        name="option2"
                        value={inputQuestion.option2}
                        onChange={handleInputQuestion}
                      ></Input>
                      <button className="px-2 py-1.5 border-4 border-gray-200 bg-green-600 rounded-full">
                        <Icon as={FiCheck} w={6} h={6}></Icon>
                      </button>
                    </div>
                  ) : (
                    <div className="flex h-1/2 width-answer px-2 mb-2 shadow-md rounded items-center bg-white">
                      <Input
                        variant="ghost"
                        h="full"
                        placeholder="Add answer 2"
                        name="option2"
                        value={inputQuestion.option2}
                        onChange={handleInputQuestion}
                      ></Input>
                      <button
                        className="p-5 border-4 border-gray-200 bg-white-600 rounded-full"
                        onClick={
                          inputQuestion.option2
                            ? () => setAnswer('option2')
                            : null
                        }
                      ></button>
                    </div>
                  )}
                  {answer === 'option3' ? (
                    <div className="flex h-1/2 width-answer px-2 mb-2 shadow-md rounded items-center bg-white">
                      <Input
                        variant="ghost"
                        h="full"
                        placeholder="Add answer 3 (optional)"
                        name="option3"
                        value={inputQuestion.option3}
                        onChange={handleInputQuestion}
                      ></Input>
                      <button className="px-2 py-1.5 border-4 border-gray-200 bg-green-600 rounded-full">
                        <Icon as={FiCheck} w={6} h={6}></Icon>
                      </button>
                    </div>
                  ) : (
                    <div className="flex h-1/2 width-answer px-2 mb-2 shadow-md rounded items-center bg-white">
                      <Input
                        variant="ghost"
                        h="full"
                        placeholder="Add answer 3 (optional)"
                        name="option3"
                        value={inputQuestion.option3}
                        onChange={handleInputQuestion}
                      ></Input>
                      <button
                        className="p-5 border-4 border-gray-200 bg-white-600 rounded-full"
                        onClick={
                          inputQuestion.option3
                            ? () => setAnswer('option3')
                            : null
                        }
                      ></button>
                    </div>
                  )}
                  {answer === 'option4' ? (
                    <div className="flex h-1/2 width-answer px-2 mb-2 shadow-md rounded items-center bg-white">
                      <Input
                        variant="ghost"
                        h="full"
                        placeholder="Add answer 4 (optional)"
                        name="option4"
                        value={inputQuestion.option4}
                        onChange={handleInputQuestion}
                      ></Input>
                      <button className="px-2 py-1.5 border-4 border-gray-200 bg-green-600 rounded-full">
                        <Icon as={FiCheck} w={6} h={6}></Icon>
                      </button>
                    </div>
                  ) : (
                    <div className="flex h-1/2 width-answer px-2 mb-2 shadow-md rounded items-center bg-white">
                      <Input
                        variant="ghost"
                        h="full"
                        placeholder="Add answer 4 (optional)"
                        name="option4"
                        value={inputQuestion.option4}
                        onChange={handleInputQuestion}
                      ></Input>
                      <button
                        className="p-5 border-4 border-gray-200 bg-white-600 rounded-full"
                        onClick={
                          inputQuestion.option4
                            ? () => setAnswer('option4')
                            : null
                        }
                      ></button>
                    </div>
                  )}
                </div>
              </div>
            ) : inputQuestion.questionType === 'trueOrFalse' ? (
              <div className="w-5/6 min-h-screen flex flex-col items-center mt-4 px-4">
                <Input
                  placeholder="Start typing your question"
                  h="7%"
                  w="full"
                  boxShadow="md"
                  bgColor="white"
                  value={inputQuestion.questionName}
                  onChange={handleInputQuestion}
                  name="questionName"
                ></Input>

                <ImgDropZone />

                {/* <div className="w-2/5 h-2/5 border-2 border-dashed border-gray-300 my-10 flex flex-col items-center">
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
                  value={inputQuestion.questionType}
                  onChange={handleInputQuestion}
                  name="questionType"
                >
                  <option value="quiz">Quiz</option>
                  <option value="trueOrFalse">True or fasle</option>
                  {/* <option value="Type answer">Type answer</option>
                  <option value="Puzzle">Puzzle</option> */}
                </Select>
              </div>

              <hr />

              <div className="mt-6">
                <div className="text-left font-bold mb-3 flex items-center">
                  <FiClock />
                  <p className="ml-2">Time limit</p>
                </div>
                <Select
                  value={inputQuestion.timeLimit}
                  onChange={handleInputQuestion}
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
                <Select
                  value={inputQuestion.points}
                  onChange={handleInputQuestion}
                  name="points"
                >
                  <option value="1">Standard</option>
                  <option value="2">Double points</option>
                  <option value="3">No point</option>
                </Select>
              </div>

              <div className="mt-6">
                <div className="text-left font-bold mb-3 flex items-center">
                  <FiGrid />
                  <p className="ml-2">Answer options</p>
                </div>
                <Select
                  value={inputQuestion.answerOptions}
                  onChange={handleInputQuestion}
                  name="answerOptions"
                >
                  <option value="1">Single select</option>
                  <option value="2">Multi-select</option>
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
