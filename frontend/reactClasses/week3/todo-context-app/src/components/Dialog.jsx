import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

function Dialog({todo, setDialog}) {
    const { deleteTodos } = useContext(TodoContext)

    const deleteTodo = () => {
        deleteTodos(todo.id)
        setDialog(false)
    }
  return (
    <div className="dialog">
        <button className="btn" onClick={deleteTodo}>Yes</button>
        <button className="btn no" onClick={() => setDialog(false)}>No</button>
    </div>
  )
}

export default Dialog