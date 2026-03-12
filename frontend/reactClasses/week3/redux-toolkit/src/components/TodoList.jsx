import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, toggleTodo } from "../features/todos/TodoSlice";
import EditTodo from "./EditTodo";
import { useState } from "react";

const TodoList = () => {
    const [editedId, setEditedId] = useState(null)
    const todos = useSelector(state => state.todos.todos);
    const count = useSelector(state => state.todos.count);
    const dispatch = useDispatch();
      
    return (
        <>
          <ul>
            {count > 0 &&
                todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                        style={{ 
                            textDecoration: todo.completed ? 'line-through' : 'none', 
                            cursor: 'pointer' 
                            }}

                            >
                            <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            onClick={() => dispatch(toggleTodo(todo.id))}
                            />
                            {todo.text}</span>
                            <button className="btn edit-btn" onClick={() => setEditedId(todo.id)}>
                            edit
                            </button>
                            {
                                editedId === todo.id &&
                                <EditTodo todo={todo} text={todo.text} setShow={() => setEditedId(null)}/>
                            }
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
                    </li>
                ))
            }
            {count === 0 &&
              <p>No Todo(s)</p>
            }
          </ul>
        </>
    )
}

export default TodoList;