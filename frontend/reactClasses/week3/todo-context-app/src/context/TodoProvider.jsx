import { useState } from "react"
//toastify step 1
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TodoContext } from "./TodoContext";

function TodoProvider({ children }) {
    const [todos, setTodos] = useState([]);

     //toastify step 2
  const notify = (mssg) =>
    toast.success(mssg, {
      theme: "dark",
      position: "top-right",
      duration: 1000,
    });

    const addTodos = (todoText) => {
        setTodos([...todos, {id: Date.now(), text: todoText}])
        notify('Todo added Successfully!')
    }
    
    const editTodos = (id, newTodoText) => {
      todos.map(() => {
        let selected = todos.filter((todo) => todo.id === id);
        selected.map((todo) => todo.text = newTodoText);
        setTodos([...todos])
      })
      notify('Todo updated successfully!')
    }
    
    const deleteTodos = (id) => {
     setTodos(todos.filter((todo) => todo.id !== id))
     notify('Todo deleted successfully!')
    }

  return (
    <div>
      <TodoContext.Provider value={{todos, addTodos, deleteTodos, editTodos}} >
        {children}
      </TodoContext.Provider>
       <ToastContainer />
    </div>
  )
}

export default TodoProvider