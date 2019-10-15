import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Login</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  )
}

export default Navbar
