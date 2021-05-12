import React from 'react'
import './PersonalRegister.postcss'
import { useHistory, useLocation, Link } from 'react-router-dom'
import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import { Button } from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'
import { BsPeople, BsGraphUp } from 'react-icons/bs'
import { BsBook } from 'react-icons/bs'
import { VscGraph } from 'react-icons/vsc'

function PersonalRegister() {
  const history = useHistory()
  const location = useLocation()
  return (
    <Layout>
      <HeaderAuthentication />

      <Content
        style={{ height: 'calc(100vh - var(--header-height))' }}
        className="personal-register-component"
      >
        <div>
          <h1 className="personal-type-title">
            Who will you play Squizz! with most often?
          </h1>
        </div>

        <br />

        <div className="personal-type-wrap">
          <div
            className="personal-type-box hover:shadow-lg"
            onClick={() =>
              history.push('/auth/register/personal/form', {
                state: { ...location.state, workplace: 'FRIENDS_AND_FAMILY' }
              })
            }
          >
            <div className="friends-and-family ">
              {' '}
              <div className="hovicon">
                <BsPeople />
              </div>
            </div>
            <div className="type-user">
              Friends and <br /> family
            </div>
          </div>

          <div
            className="personal-type-box hover:shadow-lg"
            onClick={() =>
              history.push('/auth/register/personal/form', {
                state: { ...location.state, workplace: 'COLLEAGUES_OR_CLIENT' }
              })
            }
          >
            <div className="colleagues-or-client">
              {' '}
              <div className="hovicon">
                <BsGraphUp />
              </div>
            </div>
            <div className="type-user">
              Colleagues or <br /> clients
            </div>
          </div>

          <div
            className="personal-type-box hover:shadow-lg"
            onClick={() =>
              history.push('/auth/register/personal/form', {
                state: { ...location.state, workplace: 'STUDENT' }
              })
            }
          >
            <div className="student">
              {' '}
              <div className="hovicon">
                <BsBook />
              </div>
            </div>
            <div className="type-user">Student</div>
          </div>

          <div
            className="personal-type-box hover:shadow-lg"
            onClick={() =>
              history.push('/auth/register/personal/form', {
                state: { ...location.state, workplace: 'OTHER' }
              })
            }
          >
            <div className="other">
              <div className="hovicon">
                <VscGraph />
              </div>
            </div>
            <div className="type-user">Other</div>
          </div>
        </div>
        <br />
      </Content>
    </Layout>
  )
}

export default PersonalRegister
