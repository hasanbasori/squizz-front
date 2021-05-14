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
import { userType as type } from '../utils/enums'

function RegisterFormPage() {
  const { PERSONAL, TEACHER, STUDENT } = type

  const [isShowPwd, setIsShowPwd] = useState(false)
  const [step, setStep] = useState(1)
  const { userType } = useParams()
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
      </Content>
    </Layout>
  )
}

export default RegisterFormPage
