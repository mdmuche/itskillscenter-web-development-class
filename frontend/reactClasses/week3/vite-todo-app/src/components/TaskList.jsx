import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

function TaskList() {
    const { tasks, deleteTask } = useContext(TodoContext)
  return (
    <div>
        <ul>
            { tasks.map((t, index) => (
                <li key={index}>
                    {t} {' '}
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))
            }
        </ul>
    </div>
  )
}

export default TaskList