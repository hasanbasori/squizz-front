import React from 'react'
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'
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

function CreatorLibraryPage() {
  return (
    <Layout>
      <HeaderCreator />
      <Content>
        <div className="grid grid-cols-6 h-full">
          <div className="shadow-md bg-gray-50">
            <div className="flex flex-col">
              <Button m='25px 5px 0 0'>Squizzes</Button>
              <Button m='5px 5px 5px 0'>Collections</Button>
            </div>
            <hr />
          </div>
          <div className="col-span-5">squizzs</div>
        </div>
      </Content>
    </Layout>
  )
}

export default CreatorLibraryPage
