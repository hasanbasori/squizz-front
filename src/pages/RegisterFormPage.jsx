import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PlayButton from '../components/PlayButton'
import './RegisterFormPage.postcss'
import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import { useForm, Controller } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import {
  SignupForm,
  UserNameForm,
  BirthDateForm
} from '../components/RegisterComp'
import { userType as uType, socialType as sType } from '../utils/constants'
import { convertConstantToUrl } from '../utils/functions'

function RegisterFormPage() {
  const { PERSONAL, TEACHER, STUDENT } = uType
  const { FRIENDS_AND_FAMILY, COLLEAGUES_OR_CLIENTS, STUDENTS, OTHER } = sType

  const [isShowPwd, setIsShowPwd] = useState(false)
  const [step, setStep] = useState(1)
  const { userType, socialType } = useParams()
  const history = useHistory()

  return (
    <Layout>
      <HeaderAuthentication />
      <Content
        style={{ height: 'calc(100vh - var(--header-height))' }}
        className="register-form-page-content flex justify-center items-center"
      >
        {userType === TEACHER.toLowerCase() ? <SignupForm /> : null}
        {userType === STUDENT.toLowerCase() && step === 1 ? (
          <BirthDateForm setStep={setStep} />
        ) : null}
        {userType === STUDENT.toLowerCase() && step === 2 ? (
          <UserNameForm setStep={setStep} />
        ) : null}
        {userType === STUDENT.toLowerCase() && step === 3 ? (
          <SignupForm />
        ) : null}
        {socialType === convertConstantToUrl(FRIENDS_AND_FAMILY) &&
        step === 1 ? (
          <BirthDateForm setStep={setStep} />
        ) : null}
      </Content>
    </Layout>
  )
}

export default RegisterFormPage
