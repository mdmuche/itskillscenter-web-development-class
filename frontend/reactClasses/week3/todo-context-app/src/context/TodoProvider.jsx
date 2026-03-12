import { useState } from "react"
import { toast } from "react-toastify";

import { TodoContext } from "./TodoContext";

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));

  
  const notify = (mssg) =>
    toast.promise(resolveAfter3Sec, {
      pending: mssg + ' is pending',
      success: mssg + ' was successful!',
      error: mssg + ' failed'
    });

  const addTodos = (todoText) => {
        setTodos([...todos, {id: Date.now(), text: todoText}])
        notify('Todo add')
  }
    
  const editTodos = (id, newTodoText) => {
      todos.map(() => {
        let selected = todos.filter((todo) => todo.id === id);
        selected.map((todo) => todo.text = newTodoText);
        setTodos([...todos])
      })
      notify('Todo update')
  }
    
  const deleteTodos = (id) => {
     setTodos(todos.filter((todo) => todo.id !== id))
     notify('Todo delete')
  }

  return (
    <div>
      <TodoContext.Provider value={{todos, addTodos, deleteTodos, editTodos}} >
        {children}
      </TodoContext.Provider>
    </div>
  )
}

export default TodoProvider