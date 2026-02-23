import React from 'react'

function UserCard({name, age, role = 'Guest'}) {
  return (
    <div>
        <ul>
            <l1>{name}</l1>
            <l1>{age}</l1>
            <l1>{role}</l1>
        </ul>
    </div>
  )
}

export default UserCard