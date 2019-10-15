import React, { Component } from 'react'
import axiosAuth from '../axiosAuth'
import FriendsList from './FriendsList'
import { connect } from 'react-redux'
import { fetchAllFriends } from '../actions/actions'

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllFriends())
  }

  render() {
    return (
      <div>
        <h1>dashboard component</h1>
        <FriendsList friends={this.props.friends} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  friends: state.friends
})

export default connect(
  mapStateToProps,
  null
)(Dashboard)
