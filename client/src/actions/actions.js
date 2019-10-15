import axiosWithAuth from '../axiosAuth'
import { FETCH_ALL_FRIENDS, ADD_FRIEND, DELETE_FRIEND } from './types'

export const fetchAllFriends = () => dispatch => {
  axiosWithAuth()
    .get('/friends')
    .then(res => {
      dispatch({
        type: FETCH_ALL_FRIENDS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export const addFriend = friendDetails => dispatch => {
  axiosWithAuth()
    .post('/friends', friendDetails)
    .then(res => {
      dispatch({
        type: ADD_FRIEND,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteFriend = id => dispatch => {
  axiosWithAuth()
    .delete(`/friends/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_FRIEND,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.data)
    })
}
