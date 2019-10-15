import React from 'react'
import axiosAuth from '../axiosAuth'

const Friend = ({ id, name, age, email }) => {
  const handleClick = () => {
    axiosAuth()
      .delete(`/friends/${id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>email: {email}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default Friend
