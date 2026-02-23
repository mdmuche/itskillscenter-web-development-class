import React, { useState } from 'react'

function Home({name}) {
   const [count, setCounter] = useState(0);
    
  return (
    <div className='home'>
        <h3>hi, {name}</h3>
        <p>you clicked {count}</p>
        <button onClick={() => setCounter(count + 1)}>clickme</button>
    </div>
  )
}

export default Home