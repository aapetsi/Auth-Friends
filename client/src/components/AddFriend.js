import React, { useState } from 'react'
import { addFriend } from '../actions/actions'
import { connect } from 'react-redux'

const AddFriend = props => {
  const [friend, setFriend] = useState({ name: '', email: '', age: '' })
  const handleChange = e => {
    setFriend({ ...friend, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    props.dispatch(addFriend(friend))
    props.history.push('/dashboard')
  }
  return (
    <div>
      <h1>add friend component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={friend.name}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={friend.email}
        />
        <input
          type="number"
          placeholder="age"
          name="age"
          onChange={handleChange}
          value={friend.age}
        />
        <button>Add friend</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  null
)(AddFriend)
