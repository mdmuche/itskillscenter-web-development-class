import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import './App.css'

function App() {

  return (
    <div style={{ maxWidth: 500, margin: 'auto', textAlign: 'center' }}>
      <h1>React Redux Toolkit</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
