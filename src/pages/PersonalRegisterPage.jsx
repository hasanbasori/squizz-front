import React from 'react'
import './PersonalRegisterPage.postcss'
import { useHistory, useLocation } from 'react-router-dom'
import Layout, { Content, HeaderAuthentication } from '../components/Layout'
import { BsPeople, BsGraphUp } from 'react-icons/bs'
import { BsBook } from 'react-icons/bs'
import { VscGraph } from 'react-icons/vsc'

import { convertConstantToUrl } from '../utils/functions'
import { socialType } from '../utils/constants'

function PersonalRegister() {
  const history = useHistory()
  const location = useLocation()

  const { FRIENDS_AND_FAMILY, COLLEAGUES_OR_CLIENTS, STUDENTS, OTHER } =
    socialType

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
              history.push(
                `/auth/register/personal/${convertConstantToUrl(
                  FRIENDS_AND_FAMILY
                )}/form`,
                {
                  state: { ...location.state, socialType: FRIENDS_AND_FAMILY }
                }
              )
            }
          >
            <div className="friends-and-family">
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
              history.push(
                `/auth/register/personal/${convertConstantToUrl(
                  COLLEAGUES_OR_CLIENTS
                )}/form`,
                {
                  state: {
                    ...location.state,
                    socialType: COLLEAGUES_OR_CLIENTS
                  }
                }
              )
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
              history.push(
                `/auth/register/personal/${convertConstantToUrl(
                  STUDENTS
                )}/form`,
                {
                  state: { ...location.state, socialType: STUDENTS }
                }
              )
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
              history.push(
                `/auth/register/personal/${convertConstantToUrl(OTHER)}/form`,
                {
                  state: { ...location.state, socialType: OTHER }
                }
              )
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
