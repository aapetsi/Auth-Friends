import React, { Component } from 'react'
import axiosAuth from '../axiosAuth'
import FriendsList from './FriendsList'

class Dashboard extends Component {
  state = {
    friends: []
  }

  componentDidUpdate() {
    axiosAuth()
      .get('/friends')
      .then(res => {
        this.setState({ friends: [...this.state.friends, ...res.data] })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>dashboard component</h1>
        <FriendsList friends={this.state.friends} />
      </div>
    )
  }
}

export default Dashboard
