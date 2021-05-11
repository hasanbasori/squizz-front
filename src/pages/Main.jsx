import React from 'react'
import './Main.postcss'
import Layout, { HeaderPublic, Content, Footer } from '../components/Layout'
import PlayButton from '../components/PlayButton'
import { Link } from '@chakra-ui/react'
function Main() {
  return (
    <Layout>
      <HeaderPublic />
      <Content>
        <div className="w-full mainpage-wrapper">
          <div className="banner-container">
            <div className="banner-wraper1 ">
              <div className="banner-text1 p-8 justify-self-start">
                <div className=" text-3xl text-white font-black">
                  Make learning awesome!
                </div>
                <div>
                  <p
                    style={{ color: '#c2a5df', fontSize: 16 }}
                    className="text-lg mt-2.5 font-medium"
                  >
                    Squizz! delivers engaging <br />
                    learning to billions.
                  </p>
                </div>

                <div>
                  <PlayButton className="mt-2.5" type="success">
                    Sign up for Free!
                  </PlayButton>
                </div>
              </div>

              <div className="picture ">
                <img
                  src="https://kahoot.com/files/2020/05/main-image-cropped.jpg"
                  alt="picture1"
                />
              </div>
            </div>
            <div className="banner-wraper2 shadow-md">
              <div className="banner-text2 p-8">
                {' '}
                <div className=" text-white font-black text-xl">
                  Make remote work <br /> more engaging!
                </div>
                <div>
                  {' '}
                  <p style={{ color: 'white' }} className="mt-2.5 font-medium">
                    Deliver training, presentations, meetings, and events on any
                    video conferencing platform with Squizz!
                  </p>
                </div>
                <div>
                  <PlayButton className="mt-2.5" type="success">
                    Buy Squizz! 360 Pro
                  </PlayButton>
                </div>
              </div>
              <div className="picture2">
                <img
                  src="https://kahoot.com/files/2021/02/desktop-K360Pro-recreated.png"
                  alt="picture2"
                />
              </div>
            </div>
          </div>

          <div className="banner-container">
            <div className="banner-wraper3 shadow-md">
              <div className="banner-text3 p-8">
                <div className="text-xl font-black">
                  Watch the Squizz!
                  <br /> WorkMeetup on-
                  <br />
                  demand
                </div>
                <div className="text-sm mt-2.5 font-medium">
                  Discover how to improve employee engagement in a hybrid
                  workplace! Hear from Microsoft, Actimo, Motimate, and more!
                </div>
                <div className="mt-2.5">
                  <Link>Watch on-demand &gt;</Link>
                </div>
              </div>
              <div className="picture3">
                <img
                  src="https://res.cloudinary.com/dpca8fz8n/image/upload/v1620679349/Kahoot-WorkMeetup-on-demand-desktop-mosaic_kkporr.png"
                  alt="picture3"
                />
              </div>
            </div>

            <div className="banner-wraper4 shadow-md">
              <div className="banner-text4 p-8">
                <div className="text-xl font-black">
                  Reserve your spot at the Squizz! EDU Summit!
                </div>
                <div className="text-sm mt-2.5 font-medium">
                  Join us on June 16 and 17 for inspiring sessions on preparing
                  a future-proof plan for coming back to the classroom.
                </div>
                <div className=" mt-2.5">
                  <Link>Learn more &gt;</Link>
                </div>
              </div>
              <div className="picture4">
                {' '}
                <img
                  src="https://res.cloudinary.com/dpca8fz8n/image/upload/v1620722275/Mosaic-desktop_KES21_qghiwa.png"
                  alt="picture3"
                />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default Main
