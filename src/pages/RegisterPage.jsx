import React from 'react'
import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import { Link as LinkChakra } from '@chakra-ui/react'
import './RegisterPage.postcss'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { BsGraphUp } from 'react-icons/bs'
import { BsBook } from 'react-icons/bs'
import { BsPerson } from 'react-icons/bs'
import { BiCar } from 'react-icons/bi'
import { userType } from '../utils/enums'

function RegisterPage() {
  const { STUDENT, TEACHER, PERSONAL } = userType
  const history = useHistory()
  const location = useLocation()

  return (
    <div>
      <Layout>
        <HeaderAuthentication />
        <Content
          className="users-type-container"
          style={{ height: 'calc(100vh - var(--header-height))' }}
        >
          <div>
            <h1 className="users-type-title">Choose your account type</h1>
          </div>
          <br />
          <div className="users-type-wrap">
            <div
              className="users-type-box hover:shadow-lg"
              onClick={() => {
                return history.push(`/auth/register/teacher`, {
                  userType: TEACHER
                })
              }}
            >
              <div className="teacher">
                <div className="teacher-hovicon">
                  <BsBook />
                </div>
              </div>
              <div className="type-user">Teacher</div>
            </div>

            <div
              className="users-type-box hover:shadow-lg"
              onClick={() =>
                history.push(`/auth/register/student/form`, {
                  userType: STUDENT
                })
              }
            >
              <div className="students">
                <div className="student-hovicon">
                  <BsPerson />
                </div>
              </div>
              <div className="type-user">Student</div>
            </div>

            <div
              className="users-type-box hover:shadow-lg"
              onClick={() =>
                history.push(`/auth/register/personal`, {
                  userType: PERSONAL
                })
              }
            >
              <div className="personal">
                {' '}
                <div className="personal-hovicon">
                  <BiCar />
                </div>
              </div>
              <div className="type-user">Personal</div>
            </div>

            <div
              className="users-type-box hover:shadow-lg"
              onClick={() =>
                history.push('/auth/register/professional/form', {
                  state: { ...location.state, workplace: 'PROFESSIONAL' }
                })
              }
            >
              <div className="professional">
                {' '}
                <div className="professional-hovicon">
                  <BsGraphUp />
                </div>
              </div>
              <div className="type-user">Professional</div>
            </div>
          </div>
          <br />
          <div>
            <p>
              Already have an account?
              <LinkChakra>
                {' '}
                <Link to="/auth/login">Log in </Link>
              </LinkChakra>
            </p>
          </div>
        </Content>
      </Layout>
    </div>
  )
}

export default RegisterPage
