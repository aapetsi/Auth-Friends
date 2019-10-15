import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { friendsReducer } from '../reducers/friends'

const middleware = [thunk]

const store = createStore(
  friendsReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
