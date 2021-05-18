import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './RegisterFormPage.postcss'
import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import { useParams } from 'react-router-dom'

import {
  SignupForm,
  UserNameForm,
  BirthDateForm
} from '../components/RegisterComp'
import { userType as uType, socialType as sType } from '../utils/constants'
import {
  convertConstantToUrl,
  convertUrlToConstant,
  convertDateStringToIso8601
} from '../utils/functions'

import axios from '../config/axios'
import CreatorHomePage from './CreatorHomePage'
import { AuthContext } from '../contexts/AuthContextProvider'
import { setToken } from '../services/localStorageService'
import { NumberInputStepper } from '@chakra-ui/number-input'

function RegisterFormPage() {
  const { TEACHER, STUDENT, PROFESSIONAL } = uType
  const { FRIENDS_AND_FAMILY, COLLEAGUES_OR_CLIENTS, STUDENTS, OTHER } = sType

  const params = useParams()

  const [step, setStep] = useState(
    Number(localStorage.getItem('registerStep')) || 1
  )
  const [userType, setUserType] = useState(params.userType)
  const [socialType, setSocialType] = useState(
    localStorage.getItem('socialType')
  )
  const [birthDate, setBirthDate] = useState(
    new Date(localStorage.getItem('birthDate'))
  )
  const [userName, setUserName] = useState(localStorage.getItem('userName'))

  useEffect(() => {
    // localStorage.removeItem('birthDate')
    // localStorage.removeItem('userName')
    // localStorage.removeItem('socialType')
    // localStorage.removeItem('registerStep')

    return () => {
      localStorage.setItem('registerStep', step)
    }
  }, [])

  const history = useHistory()

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)

  const isUserTypeEqualStudent =
    params.userType === convertConstantToUrl(STUDENT)

  const isSocialTypeEqualFriendsAndFam =
    params.socialType === convertConstantToUrl(FRIENDS_AND_FAMILY)
  const isSocialTypeEqualStudents =
    params.socialType === convertConstantToUrl(STUDENTS)
  const isSocialTypeEqualOther =
    params.socialType === convertConstantToUrl(OTHER)

  async function handleSubmitRegister(formValues) {
    const birthDateISO = birthDate ? convertDateStringToIso8601(birthDate) : ''
    const { email, password } = formValues
    try {
      const { data, status } = await axios.post('/creator/register', {
        role: convertUrlToConstant(userType),
        username: userName || 'NoUsernameToShow',
        email,
        password,
        name: userName || 'NO NAME TO SHOW',
        birthdate: birthDateISO
      })
      localStorage.clear()
      setToken(data.token)
      setIsAuthenticated(data.token)
      history.push('/')
    } catch (err) {
      console.error('❌ Error', err.data?.response.message)
      console.error('❌ Error', err)
    } finally {
      console.log('completed')
    }
  }

  const renderBirthDateForm = () => (
    <BirthDateForm {...{ setStep, setBirthDate }} />
  )
  const renderUserNameForm = () => (
    <UserNameForm {...{ setStep, setUserName }} />
  )
  const renderSignUpForm = () => (
    <SignupForm onSubmitRegister={handleSubmitRegister} username={userName} />
  )

  if (isAuthenticated) history.push('/')

  return (
    <Layout>
      <HeaderAuthentication />
      <Content
        style={{ height: 'calc(100vh - var(--header-height))' }}
        className="register-form-page-content flex justify-center items-center"
      >
        {params.userType === convertConstantToUrl(TEACHER) ||
        params.userType === convertConstantToUrl(PROFESSIONAL) ||
        params.socialType === convertConstantToUrl(COLLEAGUES_OR_CLIENTS)
          ? renderSignUpForm()
          : null}

        {isUserTypeEqualStudent && step === 1
          ? renderBirthDateForm()
          : isUserTypeEqualStudent && step === 2
          ? renderUserNameForm()
          : isUserTypeEqualStudent && step === 3
          ? renderSignUpForm()
          : null}

        {isSocialTypeEqualFriendsAndFam && step === 1
          ? renderBirthDateForm()
          : isSocialTypeEqualFriendsAndFam && step === 2
          ? renderUserNameForm()
          : isSocialTypeEqualFriendsAndFam && step === 3
          ? renderSignUpForm()
          : null}

        {isSocialTypeEqualStudents && step === 1
          ? renderBirthDateForm()
          : isSocialTypeEqualStudents && step === 2
          ? renderUserNameForm()
          : isSocialTypeEqualStudents && step === 3
          ? renderSignUpForm()
          : null}

        {isSocialTypeEqualOther && step === 1
          ? renderBirthDateForm()
          : isSocialTypeEqualOther && step === 2
          ? renderUserNameForm()
          : isSocialTypeEqualOther && step === 3
          ? renderSignUpForm()
          : null}
      </Content>
    </Layout>
  )
}

export default RegisterFormPage
