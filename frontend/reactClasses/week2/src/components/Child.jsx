import React from 'react'

function Child({name, setName}) {
  return (
    <div>
        <h2>Child Component</h2>
        <p>Name from parent: {name}</p>
        <button onClick={() => setName('chimakpa')}>Change Name</button>
    </div>
  )
}

export default Child