import React, { useContext, useEffect, useState } from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
import './CreatorSelectModePage.postcss'
import { Button, Icon, Switch } from '@chakra-ui/react'
import { FiGlobe, FiChevronsLeft, FiChevronsDown } from 'react-icons/fi'
import { CreatorContext } from '../contexts/CreatorContextProvider'
import { useHistory, useParams } from 'react-router-dom'
import axios from '../config/axios'
import { socket } from '../contexts/SocketContextProvider'

function CreatorSelectModePage() {
  const { id } = useParams()
  const { creator, setCreator } = useContext(CreatorContext)
  const history = useHistory()
  const [squizz, setSquizz] = useState('')
  const [dataCreator, setDataCreator] = useState('')
  const [isOpenGameOption, setIsOpenGameOption] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const toggleGameOption = () => {
    setIsOpenGameOption((prev) => !prev)
  }

  const getSquizz = async () => {
    try {
      const res = await axios.get(`/quiz/each-quiz/${id}`)
      console.log(res)
      if (res) setSquizz(res.data.quiz)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchCreator = async () => {
    try {
      const res = await axios.get(`/creator`)
      console.log(res.data)
      setDataCreator(res.data.creators)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getSquizz()
    fetchCreator()
  }, [])
  console.log(squizz)

  const handleClassicButton = () => {
    socket.emit('create_lobby', squizz.pin)
    history.push(`/creator-lobby/${id}`)
  }

  const EachGeneralOption = [
    {
      firstLine: "Show question and answer on player's devices",
      secondLine: 'For video conferencing and improved accessibility'
    },
    {
      firstLine: 'Lobby music',
      secondLine: ''
    },
    {
      firstLine: 'Friendly nickname generator',
      secondLine: 'Avoid inappropriate nicknames in the game'
    },
    {
      firstLine: 'Randomize order of questions',
      secondLine: ''
    },
    {
      firstLine: 'Randomize order of answers',
      secondLine: ''
    },
    {
      firstLine: 'Show minimized intro instructions',
      secondLine: ''
    }
  ]

  const EachAdvancedOption = [
    {
      firstLine: '2-Step Join',
      secondLine: 'view details'
    },
    {
      firstLine: 'Automatic move through questions',
      secondLine: ''
    },
    {
      firstLine: 'Rejoin after every game',
      secondLine: ''
    }
  ]

  if (isLoading) {
    return <p>data is loading</p>
  }

  return (
    <Layout className="background-select-page pb-4">
      <div className="flex justify-between pt-4 px-4">
        <div className="px-1.5 py-1 rounded-full bg-white flex items-center">
          <Icon as={FiGlobe} h={5} w={5} />
          <p className="ml-1 font-bold">EN</p>
        </div>
        <p className="rounded-full bg-white font-bold py-1.5 px-1.5">
          {dataCreator.username ? dataCreator.username : creator.username}
        </p>
      </div>
      <Content className="background-select-page ">
        <div className="flex flex-col items-center">
          <div className="px-40 -mt-12 flex flex-col items-center">
            <p className="text-6xl text-white font-bold mb-1">Squizz!</p>
            <em className="text-white font-bold">at home</em>
            <p className="px-4 mt-6 background-detail  rounded text-white text-lg">
              Play live games with up to 10 players
            </p>
          </div>

          <div className="mt-4 w-2/5 py-2 bg-white shadow-md border-b-4 rounded">
            <p className="text-2xl font-bold text-center">{squizz.name}</p>
          </div>

          <div className="w-2/5 mt-8 flex justify-between">
            <div className="background-detail py-6 rounded flex flex-col items-center">
              <div className="flex flex-col items-center px-20 mb-4 text-white">
                <p className="text-lg">Player vs Player</p>
                <p className="text-lg">1:1 Devices</p>
              </div>
              <button
                onClick={handleClassicButton}
                className=" px-24 py-2 rounded text-white border-b-4 border-gray-700 classic-button"
              >
                Classic
              </button>
            </div>
            <div className="background-detail py-6 rounded flex flex-col items-center">
              <div className="flex flex-col items-center px-20 mb-4 text-white">
                <p className="text-lg">Team vs Team</p>
                <p className="text-lg">Shared Devices</p>
              </div>
              <button className="px-20 py-2 rounded text-white border-b-4 border-gray-700 team-button">
                Team mode
              </button>
            </div>
          </div>

          <div
            className="w-2/5 mt-4 px-4 py-2 bg-white shadow-md border-b-4 rounded flex justify-between items-center"
            onClick={toggleGameOption}
          >
            <p className="text-xl font-bold">Game Options</p>
            {isOpenGameOption ? (
              <Icon as={FiChevronsDown} w={8} h={8} />
            ) : (
              <Icon as={FiChevronsLeft} w={8} h={8} />
            )}
          </div>

          {isOpenGameOption ? (
            <div className="mt-4 w-2/5 flex flex-col items-center">
              <p className="mb-1 text-white text-lg font-bold">General</p>
              {EachGeneralOption.map(({ firstLine, secondLine }, index) => (
                <div
                  key={index}
                  className="background-detail flex justify-between items-center text-white rounded w-full py-3 px-4 mb-0.5"
                >
                  <div className="flex flex-col text-left">
                    <p className="text-xl font-bold">{firstLine}</p>
                    <p>{secondLine}</p>
                  </div>

                  <div className="bg-gray-800 w-1/6 p-2 rounded flex justify-between">
                    <p className="text-lg">ON</p>
                    <p className="text-lg">OFF</p>
                  </div>
                </div>
              ))}
              <p className="mb-1 mt-4 text-white text-lg font-bold">Advanced</p>
              {EachAdvancedOption.map(({ firstLine, secondLine }, index) => (
                <div
                  key={index}
                  className="background-detail flex justify-between items-center text-white rounded w-full py-3 px-4 mb-0.5"
                >
                  <div className="flex flex-col text-left">
                    <p className="text-xl font-bold">{firstLine}</p>
                    <p>{secondLine}</p>
                  </div>

                  <div className="bg-gray-800 w-1/6 p-2 rounded flex justify-between">
                    <p className="text-lg">ON</p>
                    <p className="text-lg">OFF</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorSelectModePage
