import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import CreatorHomePage from './pages/CreatorHomePage'
import CreatorDiscoverPage from './pages/CreatorDiscoverPage'
import CreatorLibraryAllPage from './pages/CreatorLibraryAllPage'
import CreatorReportsPage from './pages/CreatorReportsPage'
import CreatorGroupsPage from './pages/CreatorGroupsPage'
import CreateQuizPage from './pages/CreateQuizPage'
import CreatorEachQuizPage from './pages/CreatorEachQuizPage'
import CreatorProfilePage from './pages/CreatorProfilePage'
import CreatorEditProfile from './pages/CreatorEditProfile'
import CreatorSelectModesPage from './pages/CreatorSelectModePage'
import CreatorPlayQuizPage from './pages/CreatorPlayQuizPage'
import CreatorLobbyPage from './pages/CreatorLobbyPage'
import HomePage from './pages/HomePage'
import Auth from './pages/Auth'
import Main from './pages/Main'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TeacherRegister from './pages/TeacherRegister'
import StudentRegister from './pages/StudentRegister'
import GameBlock from './pages/GameBlock'
import PlayerLobbyPage from './pages/PlayerLobbyPage'
import UserPlayerNickname from './pages/play/UserPlayerNickname'
import UserPlayerInstruction from './pages/play/UserPlayerInstruction'
import UserPlayerGetReady from './pages/play/UserPlayerGetReady'
import UserPlayerNextQuestion from './pages/play/UserPlayerNextQueition'
import CreatorShowResult from './pages/CreatorShowResult'
import Result from './pages/play/Result'
import RankingPage from './pages/play/RankingPage'
import SentPage from './pages/play/SentPage'
import StudentRegisterUsername from './pages/StudentRegisterUsername'
import UserPlayerPin from './pages/play/UserPlayerPin'
import PersonalRegisterPage from './pages/PersonalRegisterPage'
import RegisterFormPage from './pages/RegisterFormPage'
import './App.css'
import { useContext } from 'react'
import { AuthContext } from './contexts/AuthContextProvider'
import axios from './config/axios'

const privateRoutes = [
  {
    path: '/',
    component: CreatorHomePage
  },
  {
    path: '/discover',
    component: CreatorDiscoverPage
  },
  {
    path: '/my-library/all',
    component: CreatorLibraryAllPage
  },
  {
    path: '/reports',
    component: CreatorReportsPage
  },
  {
    path: '/groups',
    component: CreatorGroupsPage
  },
  {
    path: '/create-quiz/:id',
    component: CreateQuizPage
  },
  {
    path: '/each-quiz/:id',
    component: CreatorEachQuizPage
  },
  {
    path: '/profiles',
    component: CreatorProfilePage
  },
  {
    path: '/edit-profile',
    component: CreatorEditProfile
  },
  {
    path: '/select-game-mode/:id',
    component: CreatorSelectModesPage
  },
  {
    path: '/creator-lobby/:id',
    component: CreatorLobbyPage
  },
  {
    path: '/creator-play/:id',
    component: CreatorPlayQuizPage
  },
  {
    path: '/player-lobby',
    component: PlayerLobbyPage
  },
  {
    path: '/show-result',
    component: CreatorShowResult
  }
]

const publicRoutes = [
  {
    path: '/auth/login',
    component: LoginPage
  },
  {
    path: '/auth/register/teacher',
    component: TeacherRegister
  },
  // {
  //   path: '/auth/register/:userType/form/1',
  //   component: StudentRegister
  // },
  // {
  //   path: '/auth/register/:userType/form/2',
  //   component: StudentRegisterUsername
  // },
  {
    path: '/auth/register/personal',
    component: PersonalRegisterPage
  },
  {
    path: '/auth/register/professional',
    component: null
  },
  {
    path: '/auth/register',
    component: RegisterPage
  },
  {
    path: '/auth/register/personal/:socialType/form',
    component: RegisterFormPage
  },
  {
    path: '/auth/register/:userType/form',
    component: RegisterFormPage
  },
  {
    path: '/',
    component: Main
  }
]

function App() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {isAuthenticated &&
            privateRoutes.map((el) => {
              return (
                <Route
                  exact
                  key={el.path}
                  path={el.path}
                  component={el.component}
                />
              )
            })}

          {!isAuthenticated &&
            publicRoutes.map((el) => {
              return (
                <Route
                  exact
                  key={el.path}
                  path={el.path}
                  component={el.component}
                />
              )
            })}
          <Route exact path="/play" component={UserPlayerPin} />
          <Route exact path="/play/join/:id" component={UserPlayerNickname} />
          <Route
            exact
            path="/play/instruction/:name/:id"
            component={UserPlayerInstruction}
          />
          <Route exact path="/play/start" component={UserPlayerGetReady} />
          <Route exact path="/play/game-block/:id" component={GameBlock} />
          <Route
            exact
            path="/play/next-question"
            component={UserPlayerNextQuestion}
          />
          <Route exact path="/play/result" component={Result} />
          <Route exact path="/play/sent" component={SentPage} />
          <Route exact path="/play/ranking" component={RankingPage} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
