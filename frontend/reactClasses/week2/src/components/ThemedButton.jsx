import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

function ThemedButton() {
    const themed = useContext(ThemeContext);
  return (
    <div>
        <button className={themed}>I am {themed}-themed!</button>
    </div>
  )
}

export default ThemedButton