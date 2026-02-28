import React from 'react'
import UserCard from './UserCard'

function CardWrapper({userName}) {
  return (
    <div>
        <UserCard userName={userName} age={24}/>
    </div>
  )
}

export default CardWrapper