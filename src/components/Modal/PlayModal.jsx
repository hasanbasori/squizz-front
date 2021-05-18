import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'

import computer from '../../../pic/computer.jpg'
import earth from '../../../pic/earth.jpg'

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
                <img src={computer} alt="" />
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

export default PlayModal
