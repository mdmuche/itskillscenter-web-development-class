import React from 'react'

function Greeting({myName = 'User', age = 24}) {
  return (
    <div>
      <p className='greeting-para'>Greetings {myName} your are {age}yrs old.</p>
    </div>
  )
}

// Greeting.defaultProps = {
//   myName: 'Martins',
//   age: 24
// }
export default Greeting