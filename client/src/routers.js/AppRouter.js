import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import PrivateRoute from '../components/PrivateRoute'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter

;('003258019843783AAOEM')
