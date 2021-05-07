import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PlayButton from '../components/PlayButton'
import './RegisterFormPage.postcss'
import { FaMicrosoft, FaApple, FaGoogle } from 'react-icons/fa'
import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Button,
  Link as ChakraLink,
  Divider
} from '@chakra-ui/react'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import Separator from '../components/Separator'
import { Link, useParams } from 'react-router-dom'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

function RegisterFormPage() {
  const [isShowPwd, setIsShowPwd] = useState(false)
  const { userType } = useParams()

  const history = useHistory()
  const [input, setInput] = useState({
    email: '',
    password: '',
    position: ''
  })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function handleSubmitRegister(formValues) {
    console.log(formValues)
  }

  console.log('Register')
  return (
    <Layout>
      <HeaderAuthentication />
      <Content
        style={{ height: 'calc(100vh - var(--header-height))' }}
        className="register-form-page-content flex justify-center items-center"
      >
        <div className="form-container p-6 min-h-3/4 rounded-md bg-white">
          <h1 className="form-title">Sign up with your email</h1>
          <br />
          <form onSubmit={handleSubmit(handleSubmitRegister)}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl id="email" {...field} isInvalid={errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input />
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl id="email" {...field} isInvalid={errors.password}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input pr="4.5rem" type={isShowPwd ? 'text' : 'password'} />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        bg="transparent"
                        border="none"
                        onClick={() => setIsShowPwd(!isShowPwd)}
                      >
                        {isShowPwd ? <FiEyeOff /> : <FiEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              )}
            />
            <br />
            <p style={{ textAlign: 'left' }}>
              <Checkbox style={{ marginTop: 5 }} /> &nbsp; I wish to receive
              information, offers, recommendations, &nbsp; &nbsp; &nbsp; &nbsp;
              and updates from Squizz!
            </p>
            <br />
            {/* <PlayButton type="secondary">Login</PlayButton> */}
            <PlayButton
              className="btn-register w-full"
              htmlType="submit"
              type="success"
            >
              Sign Up
            </PlayButton>
            <br />
            <br />
          </form>
          <Separator>or</Separator>
          <br />
          <Button className="btn-other-signup">
            <div>
              <FaGoogle />
            </div>
            <div> Continue with Google</div>
            <div />
          </Button>
          <br />
          <Button className="btn-other-signup">
            {' '}
            <div>
              <FaMicrosoft />
            </div>
            <div> Continue with Microsoft</div>
            <div />
          </Button>
          <br />
          <Button className="btn-other-signup">
            <div>
              <FaApple />
            </div>
            <div>Continue with Apple</div>
            <div />
          </Button>
          <br />
          <br />
          <p>
            Already have an account?
            <Link style={{ marginLeft: 7, color: 'sienna' }} to="/auth/login">
              Log in
            </Link>
          </p>
        </div>
      </Content>
    </Layout>
  )
}

export default RegisterFormPage
