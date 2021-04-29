import React from "react";
import Layout, { HeaderCreator, Content, Footer } from '../components/Layout'

function CreatorHomePage() {
    return (
        <Layout>
        <HeaderCreator />
        <Content>
          <div className="flex flex-row justify-around">
            <div>
                Box left
            </div>
            <div>
                Box middle
            </div>
            <div>
                Box right
            </div>
          </div>
        </Content>
        <Footer />
      </Layout>
    )
}

export default CreatorHomePage