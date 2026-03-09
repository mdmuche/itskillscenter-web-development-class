import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

function TaskInput() {
    const {task, setTask, addTask} = useContext(TodoContext)
  return (
    <div>
        <input 
        type="text"
        placeholder="Enter a Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default TaskInput