import React, { useState } from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
// import './CreatorPlayQuizPage.postcss'
import { Box, Icon } from '@chakra-ui/react'
import { FiChevronRight, FiUser } from 'react-icons/fi'
import question from '../../pic/question.jpg'

function CreatorPlayQuizPage() {
  return (
    <Layout>
      <Content>
        <div className="flex flex-col items-end">
          <div className="bg-white w-full py-8 shadow-md relative mb-2">
            <p className="text-3xl font-bold">Question 1 title</p>
          </div>

          <button className="bg-yellow-300 mb-2 mr-4 px-4 py-1.5 rounded border-b-4 border-yellow-600 text-white text-lg font-bold">
            Skip
          </button>
        </div>

        <div className="flex flex-col items-center w-full mb-8">
          <div className="w-full flex items-center justify-between px-4">
            <p className="bg-red-300 p-6 rounded-full text-4xl font-bold text-white">
              10
            </p>
            <img src={question} alt="" className="w-1/3 rounded shadow-md" />
            <div className="flex flex-col font-bold">
              <p className="text-3xl">0</p>
              <p className="text-xl">Answers</p>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly flex-wrap w-full text-left">
          <div className="w-5/12 pl-4 py-8 border shadow-md bg-red-700 rounded text-white font-semibold text-2xl">
            Answer 1
          </div>
          <div className="w-5/12 pl-4  py-8 border shadow-md bg-blue-700 rounded text-white font-semibold text-2xl">
            Answer 2
          </div>
          <div className="w-5/12 pl-4 py-8 border shadow-md bg-green-700 rounded text-white font-semibold text-2xl">
            Answer 3
          </div>
          <div className="w-5/12 pl-4  py-8 border shadow-md bg-yellow-700 rounded text-white font-semibold text-2xl">
            Answer 4
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorPlayQuizPage
