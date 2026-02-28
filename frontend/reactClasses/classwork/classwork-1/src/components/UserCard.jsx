import React from 'react'
import { EnhancedDisplayName } from './CompanyName'

function UserCard({userName, age, role = 'Guest'}) {
  return (
    <div>
        <ul>
            <h2>User Details</h2>
            <EnhancedDisplayName />
            <l1>Username: {userName}</l1>
            <l1>Age: {age}</l1>
            <l1>Role: {role}</l1>
        </ul>
    </div>
  )
}

export default UserCard