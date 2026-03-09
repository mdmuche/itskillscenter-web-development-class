import { useReducer } from 'react'

function CounterReducer() {
//   const [state, dispatch] = useReducer(reducerFn, initalState); structure
const reducer = (state, action) => {
    switch (action.type) {
        case 'increament'
          : return {count: state.count + 1};
        case 'decreament'
          : return {count: state.count -1};
        default: return state
    }
}

const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <div>
        <p>Count: {state.count}</p>
        <button className='reducer-btn' onClick={() => dispatch({type: 'increament'})}>+</button>
        <button className='reducer-btn' onClick={() => dispatch({type: 'decreament'})}>-</button>
    </div>
  )
}

export default CounterReducer