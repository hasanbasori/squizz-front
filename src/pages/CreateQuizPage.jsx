import React, { useEffect, useState } from 'react'
import Layout, { HeaderCreateQuiz, Content, Footer } from '../components/Layout'
import './CreateQuizPage.postcss'
import Dropzone from 'react-dropzone'
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
  FiHelpCircle,
  FiCheck
} from 'react-icons/fi'
import axios from '../config/axios'
import { useHistory, useParams } from 'react-router-dom'
import * as localStorageService from '../services/localStorageService'

function ImgDropZone() {
  const [file, setFile] = useState([])
  const handleDrop = (acceptedFiles) =>
    setFile(acceptedFiles.map((file) => file.name))

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
  const { id } = useParams()
  const history = useHistory()

  const [quizName, setQuizName] = useState('')
  const [description, setDescription] = useState('')
  const [eachQuiz, setEachQuiz] = useState('')
  const [eachQuestion, setEachQuestion] = useState([])
  const [isLoading, setIsLoading] = useState('')
  const [questions, setQuestions] = useState(localStorageService.getQuestions())

  const [questionIndex, setQuestionIndex] = useState(0)

  const fetchCreateData = async () => {
    try {
      const res = await axios.get(`/quiz/each-quiz/${id}`)
      console.log(res)
      if (res) {
        setEachQuiz(res.data.quiz)
        setEachQuestion(res.data.quiz.Questions)
        setQuizName(res.data.quiz.name)
      }
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchCreateData()
  }, [])

  console.log(eachQuiz)
  // console.log('quizName',quizName)

  const handleCreateQuiz = async () => {
    // if (inputQuestion.questionType === 'quiz') {
    const resQuiz = await axios.put(`/quiz/update-quiz/${id}`, {
      name: quizName ? quizName : eachQuiz.title,
      description
    })

    console.log(resQuiz)

    const responses = await Promise.all(
      eachQuestion.map((question) => {
        const isQuizType = question.type === 'quiz'
        return axios.put(`/question/${question.id}`, {
          ...question,
          option1: isQuizType ? question.option1 : 'True',
          option2: isQuizType ? question.option2 : 'False'
        })
      })
    )

    console.log('promiseAll', responses)
    history.push('/my-library/all')
  }

  const handleInputQuestion = (e, index, option) => {
    const { name, value } = e.target
    const data = [...eachQuestion]
    if (option) {
      data[index].answer = option
    } else {
      data[index][name] = value
    }

    console.log(data)
    setEachQuestion(data)
    // setInputQuestion((prev) => ({ ...prev, [name]: value }))
  }

  const addQuestion = async () => {
    const res = await axios.post(`/question/draft-create/${id}`)
    const newQuestion = res.data.question
    setEachQuestion([...eachQuestion, newQuestion])
    // fetchCreateData()
  }

  console.log(eachQuestion)

  const deleteQuestion = async (questionId) => {
    await axios.delete(`/question/${questionId}`)
    const data = eachQuestion.filter((item, index) => item.id !== questionId)
    setEachQuestion(data)
    // fetchCreateData()
  }

  if (isLoading) {
    return <p>data is loading.</p>
  }

  return (
    <Layout>
      <HeaderCreateQuiz
        pathName="createquizpage"
        eachQuiz={eachQuiz}
        setEachQuiz={setEachQuiz}
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
              {eachQuestion
                ? eachQuestion.map(({ id, title, type, timeLimit }, index) => (
                    <div
                      className={`flex flex-col py-3 pr-4 ${
                        questionIndex === index ? 'bg-small-quiz' : null
                      }`}
                      key={index}
                      onClick={() => setQuestionIndex(index)}
                    >
                      <p className="ml-8 mb-1 text-left text-xs font-bold">
                        {index + 1}
                        <span className="ml-1">
                          {type === 'trueOrFalse'
                            ? 'True or fasle'
                            : type === 'quiz'
                            ? 'Quiz'
                            : type}
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
                            onClick={() => deleteQuestion(id)}
                          ></IconButton>
                        </div>
                        <div
                          className={`w-full ${
                            questionIndex === index ? 'bg-white' : 'bg-gray-50'
                          } rounded flex flex-col items-center`}
                        >
                          <div className="text-sm text-gray-400">
                            {title && title !== 'draft' ? title : 'Question'}
                          </div>
                          <div className="flex w-full pl-4 my-3 items-center">
                            <p className="h-1/3 mr-4 rounded-full border px-1.5 py-1 text-xs text-gray-400">
                              {timeLimit}
                            </p>
                            <div className="border-dashed border px-1">
                              <Icon
                                as={FiImage}
                                w={8}
                                h={5}
                                color="gray.400"
                              ></Icon>
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
                  ))
                : null}

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
            {eachQuestion
              ? eachQuestion.map((item, index) =>
                  index === questionIndex && item.type === 'quiz' ? (
                    <div
                      className="w-5/6 min-h-screen flex flex-col items-center mt-4 px-4"
                      key={index}
                    >
                      <Input
                        placeholder="Start typing your question"
                        h="7%"
                        w="full"
                        boxShadow="md"
                        bgColor="white"
                        value={item.title === 'draft' ? null : item.title}
                        onChange={(e) => handleInputQuestion(e, index)}
                        name="title"
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
                        {item.answer === 'option1' ? (
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
                              value={
                                item.option1 === 'draft' ? null : item.option1
                              }
                              onChange={(e) => handleInputQuestion(e, index)}
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
                              value={
                                item.option1 === 'draft' ? null : item.option1
                              }
                              onChange={(e) => handleInputQuestion(e, index)}
                            ></Input>
                            <button
                              className="p-5 border-4 border-gray-200 bg-white-600 rounded-full"
                              onClick={
                                item.option1 && item.option1 !== 'draft'
                                  ? (e) =>
                                      handleInputQuestion(e, index, 'option1')
                                  : null
                              }
                            ></button>
                          </div>
                        )}
                        {/* </div> */}

                        {item.answer === 'option2' ? (
                          <div className="flex h-1/2 width-answer px-2 mb-2 shadow-md rounded items-center bg-white">
                            <Input
                              variant="ghost"
                              h="full"
                              placeholder="Add answer 2"
                              name="option2"
                              value={
                                item.option2 === 'draft' ? null : item.option2
                              }
                              onChange={(e) => handleInputQuestion(e, index)}
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
                              value={
                                item.option2 === 'draft' ? null : item.option2
                              }
                              onChange={(e) => handleInputQuestion(e, index)}
                            ></Input>
                            <button
                              className="p-5 border-4 border-gray-200 bg-white-600 rounded-full"
                              onClick={
                                item.option2 && item.option2 !== 'draft'
                                  ? (e) =>
                                      handleInputQuestion(e, index, 'option2')
                                  : null
                              }
                            ></button>
                          </div>
                        )}
                        {item.answer === 'option3' ? (
                          <div className="flex h-1/2 width-answer px-2 mb-2 shadow-md rounded items-center bg-white">
                            <Input
                              variant="ghost"
                              h="full"
                              placeholder="Add answer 3 (optional)"
                              name="option3"
                              value={item.option3}
                              onChange={(e) => handleInputQuestion(e, index)}
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
                              value={item.option3}
                              onChange={(e) => handleInputQuestion(e, index)}
                            ></Input>
                            <button
                              className="p-5 border-4 border-gray-200 bg-white-600 rounded-full"
                              onClick={
                                item.option3
                                  ? (e) =>
                                      handleInputQuestion(e, index, 'option3')
                                  : null
                              }
                            ></button>
                          </div>
                        )}
                        {item.answer === 'option4' ? (
                          <div className="flex h-1/2 width-answer px-2 mb-2 shadow-md rounded items-center bg-white">
                            <Input
                              variant="ghost"
                              h="full"
                              placeholder="Add answer 4 (optional)"
                              name="option4"
                              value={item.option4}
                              onChange={(e) => handleInputQuestion(e, index)}
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
                              value={item.option4}
                              onChange={(e) => handleInputQuestion(e, index)}
                            ></Input>
                            <button
                              className="p-5 border-4 border-gray-200 bg-white-600 rounded-full"
                              onClick={
                                item.option4
                                  ? (e) =>
                                      handleInputQuestion(e, index, 'option4')
                                  : null
                              }
                            ></button>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : index === questionIndex && item.type === 'trueOrFalse' ? (
                    <div className="w-5/6 min-h-screen flex flex-col items-center mt-4 px-4">
                      <Input
                        placeholder="Start typing your question"
                        h="7%"
                        w="full"
                        boxShadow="md"
                        bgColor="white"
                        value={item.title === 'draft' ? null : item.title}
                        onChange={(e) => handleInputQuestion(e, index)}
                        name="title"
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
                      {item.answer === 'option1' ? (
                        <div className="flex w-full h-1/4">
                          <div className="h-full w-1/2 bg-blue-600 text-white mx-2 mb-2 shadow-md flex justify-between items-center px-8 rounded">
                            <p className="pl-4 text-2xl font-bold">True</p>
                            <button
                              className="px-2 py-1.5 border-4 border-white bg-green-600 rounded-full"
                              onClick={(e) =>
                                handleInputQuestion(e, index, 'option1')
                              }
                            >
                              <Icon as={FiCheck} w={6} h={6}></Icon>
                            </button>
                          </div>
                          <div className="h-full w-1/2 bg-red-600 text-white mx-2 mb-2 shadow-md flex justify-between items-center px-8 rounded">
                            <p className="pl-4 text-2xl font-bold">False</p>
                            <button
                              className="p-5 border-4 border-white bg-red-600 rounded-full"
                              onClick={(e) =>
                                handleInputQuestion(e, index, 'option2')
                              }
                            ></button>
                          </div>
                        </div>
                      ) : item.answer === 'option2' ? (
                        <div className="flex w-full h-1/4">
                          <div className="h-full w-1/2 bg-blue-600 text-white mx-2 mb-2 shadow-md flex justify-between items-center px-8 rounded">
                            <p className="pl-4 text-2xl font-bold">True</p>
                            <button
                              className="p-5 border-4 border-white bg-blue-600 rounded-full"
                              onClick={(e) =>
                                handleInputQuestion(e, index, 'option1')
                              }
                            ></button>
                          </div>
                          <div className="h-full w-1/2 bg-red-600 text-white mx-2 mb-2 shadow-md flex justify-between items-center px-8 rounded">
                            <p className="pl-4 text-2xl font-bold">False</p>
                            <button
                              className="px-2 py-1.5 border-4 border-white bg-green-600 rounded-full"
                              onClick={(e) =>
                                handleInputQuestion(e, index, 'option2')
                              }
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
                              onClick={(e) =>
                                handleInputQuestion(e, index, 'option1')
                              }
                            ></button>
                          </div>
                          <div className="h-full w-1/2 bg-red-600 text-white mx-2 mb-2 shadow-md flex justify-between items-center px-8 rounded">
                            <p className="pl-4 text-2xl font-bold">False</p>
                            <button
                              className="p-5 border-4 border-white bg-red-600 rounded-full"
                              onClick={(e) =>
                                handleInputQuestion(e, index, 'option2')
                              }
                            ></button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null
                )
              : null}
          </div>
          {eachQuestion
            ? eachQuestion.map((item, index) =>
                index === questionIndex ? (
                  <div className="w-1/5 min-h-screen flex flex-col justify-between shadow-md bg-white px-4 ">
                    <div>
                      <div className="mt-4 mb-6">
                        <div className="text-left font-bold mb-3 flex items-center">
                          <FiHelpCircle />
                          <p className="ml-2">Question type</p>
                        </div>
                        <Select
                          value={item.type}
                          onChange={(e) => handleInputQuestion(e, index)}
                          name="type"
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
                          value={item.timeLimit}
                          onChange={(e) => handleInputQuestion(e, index)}
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
                          value={item.points}
                          onChange={(e) => handleInputQuestion(e, index)}
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
                          value={item.answerOptions}
                          onChange={(e) => handleInputQuestion(e, index)}
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
                ) : null
              )
            : null}
        </div>
      </Content>
    </Layout>
  )
}

export default CreateQuizPage
