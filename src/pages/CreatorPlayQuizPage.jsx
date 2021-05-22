import React, { useEffect, useState } from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
// import './CreatorPlayQuizPage.postcss'
import { Box, Icon } from '@chakra-ui/react'
import { FiChevronRight, FiUser } from 'react-icons/fi'
import question from '../../pic/question.jpg'
import { useParams } from 'react-router-dom'
import axios from '../config/axios'
import { socket } from '../contexts/SocketContextProvider'

function CreatorPlayQuizPage() {
  const { id } = useParams()
  const [index, setIndex] = useState(0)
  const [questions, setQuestions] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [countdown, setCountdown] = useState('')

  const getQuestions = async () => {
    try {
      const res = await axios.get(`/quiz/each-quiz/${id}`)
      console.log(res)
      if (res) setQuestions(res.data.quiz.Questions)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])
  console.log(questions)

  const handleSkipButton = () => {
    // if (questions.length - 1 > index) {
    //   setIndex((prev) => prev + 1)
    // } else {
    //   setIndex((prev) => prev)
    // }
    // console.log()

    const test = { name: 'leo' }

    // socket.on('hello', (arg) => {
    //   console.log(arg) // world
    // })

    socket.emit('hello', test.name)
  }

  console.log(index)
  console.log(questions.length - 1)

  if (isLoading) {
    return <p>data is loading</p>
  }

  return (
    <Layout>
      <Content>
        <div className="flex flex-col items-end">
          <div className="bg-white w-full py-8 shadow-md relative mb-2">
            <p className="text-3xl font-bold text-center">
              {questions[index].title}
            </p>
          </div>

          <button
            className="bg-yellow-300 mb-2 mr-4 px-4 py-1.5 rounded border-b-4 border-yellow-600 text-white text-lg font-bold"
            onClick={() => handleSkipButton()}
          >
            Skip
          </button>
        </div>

        <div className="flex flex-col items-center w-full mb-8">
          <div className="w-full flex items-center justify-between px-4">
            <p className="bg-red-300 p-6 rounded-full text-4xl font-bold text-white">
              {questions[index].timeLimit}
            </p>
            {questions[index].questionImg ? (
              <img
                src={questions[index].questionImg}
                alt=""
                className="w-1/3 rounded shadow-md"
              />
            ) : (
              <img src={question} alt="" className="w-1/3 rounded shadow-md" />
            )}
            <div className="flex flex-col items-center font-bold">
              <p className="text-3xl">0</p>
              <p className="text-xl">Answers</p>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly flex-wrap w-full text-left">
          <div className="w-5/12 pl-4 py-8 border shadow-md bg-red-700 rounded text-white font-semibold text-2xl">
            {questions[index].option1}
          </div>
          <div className="w-5/12 pl-4  py-8 border shadow-md bg-blue-700 rounded text-white font-semibold text-2xl">
            {questions[index].option2}
          </div>
          {questions[index].option3 ? (
            <div className="w-5/12 pl-4 py-8 border shadow-md bg-green-700 rounded text-white font-semibold text-2xl">
              {questions[index].option3}
            </div>
          ) : null}
          {questions[index].option4 ? (
            <div className="w-5/12 pl-4  py-8 border shadow-md bg-yellow-700 rounded text-white font-semibold text-2xl">
              {questions[index].option4}
            </div>
          ) : null}
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorPlayQuizPage
