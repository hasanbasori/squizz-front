import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Auth from './pages/Auth'
import Main from './pages/Main'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TeacherRegister from './pages/TeacherRegister'
import StudentRegister from './pages/StudentRegister'
import PersonalRegister from './pages/PersonalRegister'
import './App.css'
import { useContext } from 'react'
import { AuthContext } from './contexts/AuthContextProvider'

const privateRoutes = [
  {
    path: '/',
    component: HomePage
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
            privateRoutes.map((el) => (
              <Route
                exact
                key={el.path}
                path={el.path}
                component={el.component}
              />
            ))}

          {!isAuthenticated &&
            publicRoutes.map((el) => (
              <Route
                exact
                key={el.path}
                path={el.path}
                component={el.component}
              />
            ))}

          {/* <Redirect to="/" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
