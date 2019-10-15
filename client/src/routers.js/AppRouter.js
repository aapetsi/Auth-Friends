import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import PrivateRoute from '../components/PrivateRoute'
import Navbar from '../components/Navbar'
import AddFriend from '../components/AddFriend'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/add-friend" component={AddFriend} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
