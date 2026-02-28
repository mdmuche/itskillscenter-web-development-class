import { useState } from 'react'
import Child from './Child';

function Parent() {
  const [name, setName] = useState('User');

  return (
    <div>
        <h2>Parent Component</h2>
        <Child name={name} setName={setName}/>
    </div>
  )
}

export default Parent