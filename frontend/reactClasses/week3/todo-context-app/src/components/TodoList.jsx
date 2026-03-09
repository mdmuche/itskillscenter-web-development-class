import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import TodoItemm from "./TodoItem"

// in named export you cant change the name of the module when importing but in default export you can change the name that is why here TodoItem is called TodoItemm just for learning purposes

function TodoList() {
  const { todos: todolist } = useContext(TodoContext)
  return (
    <div>
        {
            todolist.length === 0 ?
            <p className="no-todo">No Todo(s)</p> :
            (
                <ul className="list-items">
                    {
                        todolist.map((todo) => (
                           <TodoItemm key={todo.id} todo={todo}/> 
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default TodoList