import React from 'react'
import './TeacherRegister.postcss'
import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import { Button } from '@chakra-ui/react'

function TeacherRegister() {
  return (
    <Layout>
      <HeaderAuthentication />
      <div>
        <button>Back</button>
      </div>

      <Content className="teacher-register-component">
        <div>
          <h1 className="teacher-type-title">Describe your workplace</h1>
        </div>

        <br />

        <div className="teacher-type-wrap">
          <div className="teacher-type-box hover:shadow-lg">
            <div className="school ">teacher icon</div>
            <div className="type-user">School</div>
          </div>

          <div className="teacher-type-box hover:shadow-lg">
            <div className="higher-education">
              <div className="circle-box"></div>
            </div>
            <div className="type-user">Higher education</div>
          </div>

          <div className="teacher-type-box hover:shadow-lg">
            <div className="school-adminstration"></div>
            <div className="type-user">
              School <br /> adminstration
            </div>
          </div>

          <div className="teacher-type-box hover:shadow-lg">
            <div className="business"></div>
            <div className="type-user">Business</div>
          </div>
        </div>
        <br />
        <div>
          <Button>Other</Button>
        </div>
      </Content>
    </Layout>
  )
}

export default TeacherRegister
