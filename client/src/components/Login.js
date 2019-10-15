import React, { useState } from 'react'
import axiosAuth from '../axiosAuth'

const Login = props => {
  const [userCredentials, setUserCredentials] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  })

  const handleChange = e => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value })
    console.log(userCredentials)
  }
  const handleSubmit = e => {
    e.preventDefault()
    axiosAuth()
      .post('/login', userCredentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/dashboard')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Login component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={userCredentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={userCredentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  )
}

export default Login
