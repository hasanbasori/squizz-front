import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './RegisterFormPage.postcss'
import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import { useParams } from 'react-router-dom'
import { setToken } from '../services/localStorageService'

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

function RegisterFormPage() {
  const { TEACHER, STUDENT, PROFESSIONAL } = uType
  const { FRIENDS_AND_FAMILY, COLLEAGUES_OR_CLIENTS, STUDENTS, OTHER } = sType

  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState('')
  const [socialType, setSocialType] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [userName, setUserName] = useState('')

  const params = useParams()
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
    console.log('Regis function', formValues, userName, birthDateISO)
    const { email, password } = formValues
    try {
      const { data, status } = await axios.post('/creator/register', {
        role: convertUrlToConstant(userType),
        username: userName || 'NoUsernameToShow',
        email,
        password,
        name: userName || 'NO NAME TO SHOW'
      })
      setIsAuthenticated(data.token)
    } catch (err) {
      console.error('❌ Error', err.data?.response.message)
      console.error('❌ Error', err)
      history.push('/')
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
    <SignupForm onSubmitRegister={handleSubmitRegister} />
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
