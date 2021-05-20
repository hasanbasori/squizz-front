import React, { useState } from 'react'
import styled from 'styled-components'
import './HeaderCreator.postcss'
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
} from '@chakra-ui/react'
import {
  FiUser,
  FiHome,
  FiCompass,
  FiList,
  FiBarChart,
  FiUsers,
  FiLogOut,
  FiSettings,
  FiHelpCircle
} from 'react-icons/fi'
import { useDisclosure } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

function ChangeFolderModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <div
        className="w-full border rounded p-1 flex items-center justify-between"
        onClick={onOpen}
      >
        <p className="pl-2">My Squizzes</p>
        <Button
          size="sm"
          w={28}
          h={8}
          bgColor="#1368ce"
          color="white"
          fontWeight="700"
        >
          Change
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="700" fontSize="2xl">
            <p className="mb-4 text-2xl">Change location</p>
            <p className="text-lg">Squizzes</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bgColor="#f2f2f2">
            <div className="py-28">Test</div>
          </ModalBody>

          <ModalFooter mx="auto">
            <Button bgColor="#f2f2f2" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green">Choose</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function SettingModal({
  eachQuiz,
  quizName,
  setQuizName,
  description,
  setDescription
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleCancel = () => {
    onClose()
    setQuizName('')
  }

  return (
    <>
      <div
        className="flex items-center justify-between p-1 border-2 rounded w-2/5 ml-6"
        onClick={onOpen}
      >
        <p className="pl-1">
          {quizName
            ? quizName
            : eachQuiz && eachQuiz.name !== 'titleDraft'
            ? eachQuiz.name
            : 'Enter squiz title...'}
        </p>
        <Button
          size="sm"
          w={28}
          h={8}
          bgColor="#1368ce"
          color="white"
          fontWeight="700"
        >
          Settings
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="700" fontSize="2xl">
            Squizz summary
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex w-full">
              <div className="w-3/5 mr-4">
                <p className="font-bold">Title</p>
                <Input
                  placeholder="Enter squizz title..."
                  value={quizName}
                  onChange={(e) => setQuizName(e.target.value)}
                ></Input>

                <p className="mt-4">
                  <span className="font-bold">Description</span> (Optional)
                </p>
                <Input
                  h={28}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Input>
                <p className="mt-2 text-xs">
                  Pro tip: a good description will help other users find your
                  squizz.
                </p>

                <p className="mt-4 font-bold">Sava to</p>
                <ChangeFolderModal />
              </div>

              <div className="w-2/5">
                <p className="font-bold">Cover image</p>
                <div className="border px-24 pt-32 pb-2 rounded">
                  <Button>Change</Button>
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter mx="auto">
            <Button bgColor="#f2f2f2" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function ExitAlertDialog({ history }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        border="1px solid"
        borderColor="black"
        w="100px"
        mr={2}
        _hover={{ color: 'gray.500', borderColor: 'gray.500' }}
      >
        Exit
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" fontSize="2xl">
              Leave this quiz ?
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? Your quiz isn't save.
            </AlertDialogBody>

            <AlertDialogFooter>
              <div className="w-full flex items-center justify-around">
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button onClick={() => history.push('/')}>Exit</Button>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

function HeaderCreator({
  style,
  className,
  pathName,
  eachQuiz,
  quizName,
  setQuizName,
  description,
  setDescription,
  handleCreateQuiz
}) {
  const history = useHistory()

  console.log(eachQuiz)
  return (
    <div
      className="header-creator w-full flex flex-row justify-between items-center bg-gray-50 px-6 shadow-md relative"
      style={{ ...style }}
    >
      <div className="w-3/6 flex flex-row items-center h-full">
        <a href="/" className="text-3xl text-red-700 font-bold mr-2">
          Squizz!
        </a>
        <SettingModal
          eachQuiz={eachQuiz}
          quizName={quizName}
          setQuizName={setQuizName}
          description={description}
          setDescription={setDescription}
        />
      </div>
      <div className="w-3/6 flex flex-row items-center justify-end">
        <Button
          variant="ghost"
          color="black"
          w="100px"
          mr="8px"
          _hover={{ bgColor: 'none', color: 'gray.400' }}
        >
          Preview
        </Button>
        <ExitAlertDialog history={history} />
        {/* <Button
          variant="ghost"
          border="1px solid"
          borderColor="black"
          w="100px"
          mr={2}
          _hover={{ color: 'gray.500', borderColor: 'gray.500' }}
          onClick={() => history.push('/')}
        >
          Exit
        </Button> */}

        {/* <a href="/my-library/all"  onClick={handleCreateQuiz}> */}
        <Button
          bgColor="#26890c"
          color="white"
          w="100px"
          borderBottom="4px"
          borderColor="gray.800"
          _hover={{
            borderBottom: '2px',
            marginTop: '2px',
            height: '38px',
            borderColor: 'gray.800',
            bgColor: '#26890c'
          }}
          onClick={handleCreateQuiz}
        >
          Done
        </Button>
      </div>
    </div>
  )
}

export default HeaderCreator
