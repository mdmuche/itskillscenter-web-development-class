import { useContext, useState } from "react"

import { TodoContext } from "../context/TodoContext"
import ShowEdit from "./ShowEdit"

function TodoItem({ todo }) {
    const { deleteTodos } = useContext(TodoContext)
    const [ show, setShow ] = useState(false);

    const showEditForm = () => {
        setShow(true);
      }
      
      return (
        <div>
        <span>{todo.text}</span>
        <button onClick={showEditForm}>Edit</button>
        {
          show &&
          <ShowEdit todo={todo} text={todo.text} setShow={setShow}/>
        }
        <button onClick={() => deleteTodos(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem