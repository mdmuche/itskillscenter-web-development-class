import { useContext, useState } from "react"

import { TodoContext } from "../context/TodoContext";

function TodoInput() {
    const [todoInputValue, setTodoInputValue] = useState('');
    const { addTodos } = useContext(TodoContext)

    const handleSubmit = (e) => {
      e.preventDefault();

      if(todoInputValue.trim() === '') return;
      
      addTodos(todoInputValue);
      setTodoInputValue('');
    }
  return (
    <form className="create-todos" onSubmit={handleSubmit}>
      <input className="todo-input" 
      type="text"
      placeholder="Enter Todo"
      value={todoInputValue}
      onChange={(e) => setTodoInputValue(e.target.value)}
       />
       <button className="btn" type="submit">Add</button>
    </form>
  )
}

export default TodoInput