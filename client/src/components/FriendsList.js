import React from 'react'
import Friend from './Friend'

const FriendsList = ({ friends }) => {
  console.log(friends)
  return (
    <div>
      {friends.map(friend => {
        return (
          <Friend
            id={friend.id}
            key={friend.id}
            name={friend.name}
            email={friend.email}
            age={friend.age}
          />
        )
      })}
    </div>
  )
}

export default FriendsList
