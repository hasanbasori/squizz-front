import React from 'react'
import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import { Link } from '@chakra-ui/react'
import './RegisterPage.postcss'
import { useHistory } from 'react-router-dom'

function RegisterPage() {
  const history = useHistory()

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
              className="users-type-box"
              onClick={() => {
                return history.push(`/auth/register/teacher`, {
                  userType: 'TEACHER'
                })
              }}
            >
              <div className="teacher">teacher icon</div>
              <div className="type-user">Teacher</div>
            </div>

            <div
              className="users-type-box"
              onClick={() =>
                history.push(`/auth/register/student`, {
                  userType: 'STUDENT'
                })
              }
            >
              <div className="student">
                <div className="circle-box"></div>
              </div>
              <div className="type-user">Student</div>
            </div>

            <div
              className="users-type-box"
              onClick={() =>
                history.push(`/auth/register/personal`, {
                  userType: 'PERSONAL'
                })
              }
            >
              <div className="personal"></div>
              <div className="type-user">Personal</div>
            </div>

            <div
              className="users-type-box"
              onClick={() =>
                history.push(`/auth/register/professional`, {
                  userType: 'PROFESSIONAL'
                })
              }
            >
              <div className="professional"></div>
              <div className="type-user">Professional</div>
            </div>
          </div>
          <br />
          <div>
            <p>
              Already have an account? <Link>Log in</Link>
            </p>
          </div>
        </Content>
      </Layout>
    </div>
  )
}

export default RegisterPage
