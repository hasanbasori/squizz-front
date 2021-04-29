import React, { useState } from 'react'
import PlayButton from '../components/PlayButton'
import './LoginPage.postcss'

import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import { useForm, Controller } from 'react-hook-form'
// import Input from '../components/Input'
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Button,
  Link
} from '@chakra-ui/react'
import { FiEyeOff, FiEye } from 'react-icons/fi'

function LoginPage() {
  const [isShowPwd, setIsShowPwd] = useState(false)

  const { control, handleSubmit } = useForm()

  function handleSubmitLogin(formValues) {
    console.log(formValues)
  }

  return (
    <Layout>
      <HeaderAuthentication />

      <Content className="login-page-content flex justify-center items-center">
        <div className="form-container p-6 h-3/4 rounded-md bg-white">
          <h1 className="form-title">Log in</h1>
          <br />
          <form onSubmit={handleSubmit(handleSubmitLogin)}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl id="email" {...field}>
                  <FormLabel>Email</FormLabel>
                  <Input />
                </FormControl>
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl id="email" {...field}>
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

            <p>
              Forgot password?{' '}
              <Link className="text-primary-normal">Reset your password</Link>
            </p>

            {/* <PlayButton type="secondary">Login</PlayButton> */}
            <PlayButton className="btn-login" htmlType="submit" type="submit">
              Login
            </PlayButton>
          </form>
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
