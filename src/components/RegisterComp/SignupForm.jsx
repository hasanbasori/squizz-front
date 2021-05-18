import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PlayButton from '../PlayButton'
import './SignupForm.postcss'
import { FaMicrosoft, FaApple, FaGoogle } from 'react-icons/fa'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
  Checkbox
} from '@chakra-ui/react'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import Separator from '../Separator'
import { Link } from 'react-router-dom'

let registerSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
    )
})

function SignupForm({ onSubmitRegister, username }) {

  const [isShowPwd, setIsShowPwd] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  })

  return (
    <div className="form-container p-6 min-h-3/4 rounded-md bg-white">
      <h1 className="form-title">Sign up with your email</h1>
      <br />
      <form onSubmit={handleSubmit(onSubmitRegister)}>
        <Controller
          name="username"
          control={control}
          defaultValue={username}
          render={({ field }) => (
            <FormControl
              id="username"
              {...field}
              isInvalid={errors.username}
              defaultValue={username}
            >
              <FormLabel>Username</FormLabel>
              <Input disabled={username} defaultValue={username} />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
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
            <FormControl id="password" {...field} isInvalid={errors.password}>
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
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <br />
        <p style={{ textAlign: 'left' }}>
          <Checkbox style={{ marginTop: 5 }} /> &nbsp; I wish to receive
          information, offers, recommendations, &nbsp; &nbsp; &nbsp; &nbsp; and
          updates from Squizz!
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
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <p>
          Already have an account?
          <Link style={{ marginLeft: 7, color: 'sienna' }} to="/auth/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignupForm
