import { FETCH_ALL_FRIENDS, ADD_FRIEND, DELETE_FRIEND } from '../actions/types'

const intialState = {
  friends: []
}

export const friendsReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_ALL_FRIENDS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload]
      }
    case ADD_FRIEND:
      return {
        ...state,
        friends: [...action.payload]
      }
    case DELETE_FRIEND:
      return {
        ...state,
        friends: [...action.payload]
      }
    default:
      return state
  }
}
