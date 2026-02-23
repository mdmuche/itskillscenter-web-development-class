import { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        if(count >= 20){
           alert('reached maximum count');
           return;
        }
        setCount(count + 1)
    }
    
    const decrement = () => {
        if(count <= 0){
            alert('reached minimum count');
            return
        }

        setCount(count - 1)
    }

    useEffect(() => {
      console.log('Count changed: ', count);
    }, [count])
  return (
    <div className='counter'>
        <button onClick={decrement}>👈<span className='inc-dec'>-</span></button>
        <p className='count'>{count}</p>
        <button onClick={increment}>👉<span className='inc-dec'>+</span></button>
    </div>
  )
}

export default Counter