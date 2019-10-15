import React from 'react'
import { deleteFriend } from '../actions/actions'
import { connect } from 'react-redux'

const Friend = ({ id, name, age, email, dispatch }) => {
  const handleClick = () => {
    dispatch(deleteFriend(id))
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

export default connect(
  null,
  null
)(Friend)
