import './App.css'
import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import CreatorHomePage from './pages/CreatorHomePage'
import CreatorLibraryAllPage from './pages/CreatorLibraryAllPage'
import CreatorReportsPage from './pages/CreatorReportsPage'
import CreatorGroupsPage from './pages/CreatorGroupsPage'
import CreateQuizPage from './pages/CreateQuizPage'
import CreatorProfilePage from './pages/CreatorProfilePage'
import HomePage from './pages/HomePage'
import Auth from './pages/Auth'
import Main from './pages/Main'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TeacherRegister from './pages/TeacherRegister'
import StudentRegister from './pages/StudentRegister'
import PersonalRegister from './pages/PersonalRegister'
import RegisterFormPage from './pages/RegisterFormPage'
import './App.css'
import { useContext } from 'react'
import { AuthContext } from './contexts/AuthContextProvider'

const privateRoutes = [
  {
    path: '/',
    component: CreatorHomePage
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
    path: '/create-quiz',
    component: CreateQuizPage
  },
  {
    path: '/profiles',
    component: CreatorProfilePage
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
  {
    path: '/auth/register/student',
    component: StudentRegister
  },
  {
    path: '/auth/register/personal',
    component: PersonalRegister
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
    path: '/auth/register/:userType/form',
    component: RegisterFormPage
  },
  {
    path: '/mainpage',
    component: Main
  }
]

function App() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {!isAuthenticated &&
            privateRoutes.map((el) => {
              console.log('private el', el)
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
              console.log('el', el)
              return (
                <Route
                  exact
                  key={el.path}
                  path={el.path}
                  component={el.component}
                />
              )
            })}

          {/* <Redirect to="/" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
