import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatorHomePage from './pages/CreatorHomePage'
import "./App.css";
import { useContext } from 'react'
import { AuthContext } from './contexts/AuthContextProvider'

const privateRoutes = [
  {
    path: "/",
    component: CreatorHomePage,
  },
  {
    path: "/my-library",
    component: CreatorHomePage,
  },
];

const publicRoutes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/auth/login",
    component: LoginPage,
  },
  {
    path: "/auth/register",
    component: RegisterPage,
  },
];

function App() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {!isAuthenticated &&
            privateRoutes.map((el) => (
              <Route exact key={el.path} path={el.path} component={el.component} />
            ))}

          {isAuthenticated &&
            publicRoutes.map((el) => (
              <Route exact key={el.path} path={el.path} component={el.component} />
            ))}

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
