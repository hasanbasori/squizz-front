import React from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
// import './CreatorEachQuizPage.postcss'
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import computer from '../../pic/computer.jpg'
import earth from '../../pic/earth.jpg'

function PlayModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} w="25%" mr={4}>
        Play
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose a way to play this squizz</ModalHeader>
          <ModalBody>
            <div className="flex mx-6 justify-between">
              <div className="bg-gray-200 w-2/5 py-6 flex flex-col justify-between">
                <img src={computer} alt=""/>
                <a
                  href="/select-game-mode"
                  className="mx-auto w-2/3 py-2 text-center text-white bg-green-800 rounded"
                >
                  Host
                </a>
              </div>
              <div className="bg-gray-200 w-2/5 py-6 flex flex-col justify-between">
                <img src={earth} alt="" />
                <a
                  href="#"
                  className="mx-auto w-2/3 py-2 text-center text-white bg-green-800 rounded"
                >
                  Challenge
                </a>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mx="auto"
              bgColor="#f2f2f2"
              color="black"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function CreatorEachQuizPage() {
  return (
    <Layout>
      <HeaderCreator pathName="eachQuiz" />
      <Content>
        <div className="flex w-full">
          <div className="w-1/4 min-h-screen flex flex-col bg-white shadow-md">
            <div className="h-2/5 bg-gray-200"></div>
            <div className="ml-4 flex flex-col mt-4">
              <p className="text-left text-2xl font-bold">Quiz title</p>
              <div className="mt-4 flex">
                <p className="mr-6">
                  <span className="font-bold">0</span> favorites
                </p>
                <p className="mr-6">
                  <span className="font-bold">0</span> plays
                </p>
                <p>
                  <span className="font-bold">0</span> players
                </p>
              </div>
              <div className="flex mt-4 mb-6">
                <PlayModal />
                {/* <Button w="25%" mr={4}>
                  Play
                </Button> */}
                <Button w="25%">Edit</Button>
              </div>
              <p className="text-left font-bold text-lg mb-6">
                A private kahoot
              </p>
              <div className="flex items-start">
                <div className="rounded-full w-1/6 h-full bg-gray-400 mr-2"></div>
                <div className="flex flex-col text-left">
                  <p>Username Creator</p>
                  <p>Created At</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/4 px-8 pt-6">
            <div className="flex justify-between mb-6">
              <p className="text-lg font-bold">
                Questions <span>(1)</span>
              </p>
              <p className="underline text-lg font-bold">Show answers</p>
            </div>
            <div className="w-full bg-white h-1/6 rounded flex justify-between">
              <div className="flex flex-col pl-2 pt-3">
                <p className="text-left text-lg">1 - Quiz</p>
                <p className="text-left text-lg font-bold">test</p>
              </div>
              <div className="w-1/6 bg-gray-300">
                <p className="text-right">20 sec</p>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorEachQuizPage
