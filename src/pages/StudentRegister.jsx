import React from 'react'
import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import './StudentRegister.postcss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm, Controller } from 'react-hook-form'
import { FormControl } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import BirthDateForm from '../components/RegisterComp/BirthDateForm'

function StudentRegister() {
  const { control, handleSubmit } = useForm()
  const history = useHistory()
  function handleSubmitStudentBirthdate(formValues) {
    console.log(formValues.birthDate.toISOString())
  }

  return (
    <Layout>
      <HeaderAuthentication />
      //
      <Content
        style={{ height: 'calc(100vh - var(--header-height))' }}
        className="student-register-component"
      >
        <BirthDateForm />
      </Content>
    </Layout>
  )
}
export default StudentRegister
