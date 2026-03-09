import { useContext } from 'react';
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { ThemeContext } from './context/ThemeContext';
import ClearBtn from './components/ClearBtn';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#000",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    padding: "20px",
    textAlign: "center"
  };

  return (
    <div style={styles} className='app'>
      <h1 className='h'>TODO List (useContext)</h1>

      <h3>{theme.toUpperCase()} MODE</h3>

      <button className='toggle-btn btn' onClick={toggleTheme}>
        Toggle Theme
      </button>
      <TodoInput />
      <TodoList />
      <ClearBtn />
      <p className='copy'>&copy;Mdmuche</p>
    </div>
  )
}

export default App
