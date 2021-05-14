import React from 'react'
import './BirthDate.postcss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

function BirthDateForm({ setStep, setBirthDate }) {
  const { control, handleSubmit } = useForm()
  const history = useHistory()

  function handleSubmitStudentBirthdate(formValues) {
    console.log(formValues?.birthDate?.toISOString())
  }
  return (
    <div>
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
                onChange={setBirthDate}
                onBlur={onBlur}
                selected={value}
              />
            )}
          />
          <br />
          <button onClick={() => setStep(2)}>Continue</button>
        </form>
      </div>

      <br />
    </div>
  )
}

export default BirthDateForm
