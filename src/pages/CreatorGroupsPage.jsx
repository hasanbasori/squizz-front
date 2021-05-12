import React from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
// import './CreatorGroupsPage.postcss'
import {
  Box,
  Button,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  outline
} from '@chakra-ui/react'

function CreatorGroupsPage() {
  return (
    <Layout>
      <HeaderCreator pathName="groups" />
      <Content>
        <div className="flex flex-col mt-10 px-44">
          <div className="flex justify-between">
            <p className="text-3xl font-semibold">Groups</p>
            <Button bgColor="#1368ce" color="white">
              Create group
            </Button>
          </div>
          <div className="mt-12 px-72 py-24 border-dashed border-2 border-gray-300 flex flex-col items-center">
            <img />
            <p className="mb-6">
              Welcome to Groups, a seamless and secure way to share content and
              collaborate with selected Kahoot! users. Get started by creating
              your first group and inviting members.
            </p>
            <Button bgColor="#1368ce" color="white">Create Group</Button>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorGroupsPage
