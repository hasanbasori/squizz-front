import React from 'react'
import './TeacherRegister.postcss'
import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import PlayButton from '../components/PlayButton'
import { Button } from '@chakra-ui/react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { BsBook } from 'react-icons/bs'
import { VscHome } from 'react-icons/vsc'
import { BsPeople, BsGraphUp } from 'react-icons/bs'
import { workplace, socialType } from '../utils/constants'
import { TEACHER_FORM_PATH } from '../utils/constants'

function TeacherRegister() {
  const history = useHistory()
  const location = useLocation()

  const { SCHOOL, HIGHER_EDUCATION, SCHOOL_ADMINSTRATION, BUSINESS } = workplace
  const { OTHER } = socialType
  return (
    <Layout>
      <HeaderAuthentication />

      <Content
        style={{ height: 'calc(100vh - var(--header-height))' }}
        className="teacher-register-component"
      >
        <PlayButton
          htmlType="button"
          type="secondary"
          className="absolute top-5 left-5 bg-red-500"
        >
          Back
        </PlayButton>
        <div>
          <h1 className="teacher-type-title">Describe your workplace</h1>
        </div>

        <br />

        <div className="teacher-type-wrap">
          <div
            className="teacher-type-box hover:shadow-lg"
            onClick={() =>
              history.push(TEACHER_FORM_PATH, {
                state: { ...location.state, workplace: SCHOOL }
              })
            }
          >
            <div className="school">
              {/* <div className="block"> */}
              <div className="hovicon">
                <BsBook />
              </div>
              {/* </div> */}
            </div>
            <div className="type-user">School</div>
          </div>

          <div
            className="teacher-type-box hover:shadow-lg"
            onClick={() =>
              history.push(TEACHER_FORM_PATH, {
                state: { ...location.state, workplace: HIGHER_EDUCATION }
              })
            }
          >
            <div className="higher-education">
              <div className="hovicon effect-1 sub-a">
                <VscHome />
              </div>
            </div>
            <div className="type-user">Higher education</div>
          </div>

          <div
            className="teacher-type-box hover:shadow-lg"
            onClick={() =>
              history.push(TEACHER_FORM_PATH, {
                state: { ...location.state, workplace: SCHOOL_ADMINSTRATION }
              })
            }
          >
            <div className="school-adminstration">
              <div className="hovicon effect-1 sub-a">
                <BsPeople />
              </div>
            </div>
            <div className="type-user">
              <div>School </div> <div> adminstration</div>
            </div>
          </div>

          <div
            className="teacher-type-box hover:shadow-lg"
            onClick={() =>
              history.push(TEACHER_FORM_PATH, {
                state: { ...location.state, workplace: BUSINESS }
              })
            }
          >
            <div className="business">
              <div className="hovicon effect-1 sub-a">
                <BsGraphUp />
              </div>
            </div>
            <div className="type-user">Business</div>
          </div>
        </div>
        <br />
        {/* <div>
          <Button onClick={() => history.push(`/auth/register/other/form`)}>
            Other
          </Button>
        </div> */}
      </Content>
    </Layout>
  )
}

export default TeacherRegister
