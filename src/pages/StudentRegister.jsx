import React from 'react'
import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import './StudentRegister.postcss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm, Controller } from 'react-hook-form'
import { FormControl } from '@chakra-ui/react'

function StudentRegister() {
  const { control, handleSubmit } = useForm()

  function handleSubmitStudentBirthdate(formValues) {
    console.log(formValues.birthDate.toISOString())
  }
  return (
    <Layout>
      <HeaderAuthentication />

      <Content
        style={{ height: 'calc(100vh - var(--header-height))' }}
        className="student-register-component"
      >
        <div>
          <h1 className="student-type-title">Enter your date of birth</h1>
        </div>
        <br />
        <div className="student-date-picker">
          <form onSubmit={handleSubmit(handleSubmitStudentBirthdate)}>
            <Controller
              name="birthDate"
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <DatePicker
                  placeholderText="Enter your Birthdate"
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
            <br />
            <button>Continue</button>
          </form>
        </div>

        <br />
      </Content>
    </Layout>
  )
}

export default StudentRegister
