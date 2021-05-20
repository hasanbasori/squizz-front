import React, { useState, useContext } from 'react'
import PlayButton from '../components/PlayButton'
import './LoginPage.postcss'
import { FcGoogle } from 'react-icons/fc'
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
  Link as LinkChakra
} from '@chakra-ui/react'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import Separator from '../components/Separator'
import { useHistory, Link } from 'react-router-dom'
import axios from '../config/axios'
import * as localStorageService from '../services/localStorageService'
import { AuthContext } from '../contexts/AuthContextProvider'
import { NotificationContext } from '../contexts/NotiContextProvider'

const loginSchema = yup.object().shape({
  emailOrUsername: yup.string().required(),
  password: yup.string().required()
})

function LoginPage() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
  const { showNotification } = useContext(NotificationContext)

  const [isShowPwd, setIsShowPwd] = useState(false)

  const history = useHistory()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const handleSubmitLogin = async ({ emailOrUsername, password }) => {
    try {
      const { data, status } = await axios.post('/creator/login', {
        emailOrUsername,
        email: emailOrUsername,
        username: emailOrUsername,
        password
      })

      console.log(typeof status, status)
      if (status === 200) {
        localStorageService.setToken(data.token)
        setIsAuthenticated(true)
        showNotification('success', 'Logged in successfully!')
        history.push('/')
      }
    } catch (err) {
      console.dir(err)

      const errorMessage = err.response
        ? err.response.data.message
        : err.message
      showNotification('error', errorMessage + '!')
    }
  }

  return (
    <Layout>
      <HeaderAuthentication />
      <Content
        style={{ height: 'calc(100vh - var(--header-height))' }}
        className="login-page-content flex justify-center items-center"
      >
        <div className="form-container p-6 rounded-md bg-white">
          <h1 className="form-title">Log in</h1>
          <br />
          <form onSubmit={handleSubmit(handleSubmitLogin)}>
            <Controller
              name="emailOrUsername"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl
                  id="emailOrUsername"
                  {...field}
                  isInvalid={errors.emailOrUsername}
                >
                  <FormLabel>Email or Username</FormLabel>
                  <Input />
                  <FormErrorMessage>
                    {errors.emailOrUsername?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl
                  id="password"
                  {...field}
                  isInvalid={errors.password}
                >
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
                  <FormErrorMessage>
                    {errors.password?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            />
            <br />
            <p>
              Forgot password?{' '}
              <Link className="textprimary-normal">Reset your password</Link>
            </p>
            <br />
            {/* <PlayButton type="secondary">Login</PlayButton> */}
            <PlayButton
              className="btn-login w-full"
              htmlType="submit"
              type="success"
            >
              Login
            </PlayButton>
            <br />
            <br />
          </form>
          <Separator>or</Separator>
          <br />
          <Button className="btn-other-login">
            <div>
              <FaGoogle />
            </div>
            <div> Continue with Google</div>
            <div />
          </Button>
          <br />
          <Button className="btn-other-login">
            {' '}
            <div>
              <FaMicrosoft />
            </div>
            <div> Continue with Microsoft</div>
            <div />
          </Button>{' '}
          <br />
          <Button className="btn-other-login">
            {' '}
            <div>
              <FaApple />
            </div>
            <div>Continue with Apple</div>
            <div />
          </Button>
          <br />
          <p>
            Don't have an account?
            <Link to="/auth/register">
              <LinkChakra className="text-primary-normal">Sign up</LinkChakra>
            </Link>
          </p>
        </div>
      </Content>
    </Layout>
  )
}

export default LoginPage

// import React from 'react'
// import PlayButton from '../components/PlayButton'
// import HeaderLoginAndRegister from '../components/Layout/HeaderLoginAndRegisterr'

// import Layout, { Content, HeaderPublic } from '../components/Layout'

// function LoginPage() {
//   return (
//     <Layout>
//       <HeaderLoginAndRegister />
//       <HeaderPublic />
//       <Content>
//         <h1 className="text-red-500">LoginPage</h1>
//         <h2>HEADING 2</h2>
//         <h3>HEADING 3</h3>
//         <h4>HEADING 4</h4>
//         <h5>HEADING 5</h5>
//         <h6>HEADING 6</h6>

//         <a href="#">Link</a>
//         <PlayButton type="secondary" disabled>
//           TEST BTN
//         </PlayButton>
//       </Content>
//     </Layout>
//   )
// }

// export default LoginPage
