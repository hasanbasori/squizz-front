import React, { useContext, useEffect, useState } from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
import './CreatorEditProfile.postcss'
import {
  Box,
  Button,
  Text,
  Icon,
  Input,
  FormControl,
  FormLabel,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast
} from '@chakra-ui/react'
import { FiImage } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { CreatorContext } from '../contexts/CreatorContextProvider'
import axios from '../config/axios'

function CreatorEditProfile() {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [dataCreator, setDataCreator] = useState('')
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: ''
  })

  const history = useHistory()
  const toast = useToast()
  const [file, setFile] = useState(null)
  const [creatorImg, setCreatorImg] = useState('')

  const fetchCreateData = async () => {
    try {
      const res = await axios.get(`/creator`)
      setDataCreator(res.data.creators)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setError(err.response.data.message)
    }
  }

  useEffect(() => {
    fetchCreateData()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setDataCreator((prev) => ({ ...prev, [name]: value }))
  }

  const handleInputPassword = (e) => {
    const { name, value } = e.target
    setPassword((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
    console.log(e.target)
  }

  const handleUpload = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', file)
    axios
      .patch('/users/user-img', formData)
      .then((res) => {
        setUserImg(res.data.user.profileImg)
      })
      .catch((err) => console.log(err))
  }

  const handleSaveButton = async () => {
    try {
      await axios.put(`/creator/${dataCreator.id}`, {
        name: dataCreator.name,
        username: dataCreator.username,
        email: dataCreator.email,
        role: dataCreator.role
      })
      fetchCreateData()
      toast({
        title: 'Your data has been change',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true
      })
    } catch (err) {
      setError(err.response.data.message)
      toast({
        title: error,
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true
      })
    }
  }

  const handleChangePasswordButton = async () => {
    try {
      await axios.put(`/creator/change-password/${dataCreator.id}`, {
        oldPassword: password.oldPassword,
        newPassword: password.newPassword,
        repeatNewPassword: password.repeatNewPassword
      })
      fetchCreateData()
      toast({
        title: 'Your password has been change',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true
      })
    } catch (err) {
      setError(err.response.data.message)
      toast({
        title: error,
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true
      })
    }
  }

  if (isLoading) {
    return <p>Loading data</p>
  }

  return (
    <Layout>
      <HeaderCreator pathName="profileEdit" />
      <Content>
        <div className="px-44 py-12">
          <p className="text-3xl font-semibold mb-6">Settings</p>

          <Tabs>
            <TabList>
              <Tab fontWeight="700">Edit Profile</Tab>
              <Tab fontWeight="700">Privacy</Tab>
              <Tab fontWeight="700">Change Password</Tab>
            </TabList>

            <TabPanels>
              <TabPanel px={0}>
                <div className="flex w-full">
                  <div className="width-box1 border shadow-md bg-white rounded mr-4">
                    <div className="flex justify-between items-center py-2 px-3">
                      <p className="font-bold">User information</p>
                      <button
                        className="rounded border px-4 py-1 text-center bg-gray-400 text-white"
                        onClick={handleSaveButton}
                      >
                        Save
                      </button>
                    </div>
                    <hr />
                    <div className="flex my-4 ml-3">
                      <div className="px-2 py-10 bg-gray-100 w-1/4 border-dashed border border-gray-400 rounded hover:bg-blue-400 hover:cursor-pointer">
                        <FormControl id="CreatorImg">
                          <FormLabel
                            d="flex"
                            flexDirection="column"
                            alignItems="center"
                            m={0}
                          >
                            <Icon as={FiImage} w={8} h={8} color="gray.500" />
                            <p className="text-gray-500">Add picture</p>
                          </FormLabel>
                          <Input
                            type="file"
                            display="none"
                            id="CreatorImg"
                            onChange={handleFileChange}
                          />
                        </FormControl>
                        {/* <img src="#" alt="" /> */}
                      </div>
                      <div className="flex flex-col px-2">
                        <div className="flex">
                          <div className="mr-2">
                            <p className="font-bold">Username</p>
                            <Input
                              value={dataCreator.username}
                              onChange={handleInputChange}
                              name="username"
                            ></Input>
                          </div>
                          <div>
                            <p className="font-bold">Name</p>
                            <Input
                              value={dataCreator.name}
                              onChange={handleInputChange}
                              name="name"
                            ></Input>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="font-bold">Email</p>
                          <Input
                            value={dataCreator.email}
                            onChange={handleInputChange}
                            name="email"
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="width-box2 border shadow-md bg-white rounded ">
                    <p className="font-bold pt-4 pb-3 px-3">Account Details</p>
                    <hr />
                    <div className="flex flex-col my-4">
                      <div className="w-full justify-around flex px-3">
                        <div className="w-full mr-2">
                          <p className="font-bold">Organization</p>
                          <Input></Input>
                        </div>
                        <div className="w-full">
                          <p className="font-bold">Language</p>
                          <Select>
                            <option value="english">English</option>
                            <option value="thai">Thai</option>
                          </Select>
                        </div>
                      </div>
                      <div className="px-3 mt-4">
                        <p className="font-bold">Account type</p>
                        <Select
                          value={dataCreator.role}
                          onChange={handleInputChange}
                          name="role"
                        >
                          <option value="BUSINESS">Business</option>
                          <option value="TEACHER">Teacher</option>
                          <option value="PERSONAL">Personal</option>
                          <option value="STUDENT">Student</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel px={0}>
                <div className="w-2/5 border shadow-md bg-white rounded py-3 flex flex-col items-start">
                  <p className="font-bold text-left pb-3 px-3">
                    Change password
                  </p>
                  <hr />
                  <div className="flex my-4 mx-5">
                    <div className="flex flex-col">
                      <div className="w-1/2">
                        <p className="font-bold">Old Password</p>
                        <Input
                          // type={show ? "text" : "password"}
                          type="password"
                          value={password.oldPassword}
                          onChange={handleInputPassword}
                          name="oldPassword"
                        ></Input>
                      </div>
                      <div className="flex mt-4">
                        <div className="w-1/2 mr-2">
                          <p className="font-bold">New password</p>
                          <Input
                            type="password"
                            value={password.newPassword}
                            onChange={handleInputPassword}
                            name="newPassword"
                          ></Input>
                        </div>
                        <div className="w-1/2">
                          <p className="font-bold">Repeat new password</p>
                          <Input
                            type="password"
                            value={password.repeatNewPassword}
                            onChange={handleInputPassword}
                            name="repeatNewPassword"
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="rounded border mx-5 px-4 py-1 text-center bg-gray-400 text-white"
                    onClick={handleChangePasswordButton}
                  >
                    Save
                  </button>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorEditProfile
