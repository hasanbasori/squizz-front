import React from 'react'
import Layout, { HeaderAuthentication, Content } from '../components/Layout'
import UserNameForm from '../components/RegisterComp/UserNameForm'

function StudentRegisterUsername() {
  return (
    <Layout>
      <HeaderAuthentication />
      <Content
        style={{
          'min-height': 'calc(100vh - var(--header-height))',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <UserNameForm />
      </Content>
    </Layout>
  )
}

export default StudentRegisterUsername
