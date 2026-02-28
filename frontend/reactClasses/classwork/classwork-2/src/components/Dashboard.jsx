import { useState } from 'react'
import Status from './Status';

function Dashboard() {
  const [age, setAge] = useState(0);

  const getAge = (e) => {
    setAge(age + 1);
  }

  return (
    <div>
        <button 
        onClick={getAge}
        >Set Age</button>
        <Status age={age} />
        {/* <input 
        type="text" 
        placeholder='Enter your age'
        // onClick={(e) => setAge(e.target.value)}
        /> */}
    </div>
  )
}

export default Dashboard