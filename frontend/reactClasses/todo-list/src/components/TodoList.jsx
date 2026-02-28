import { useState } from "react";

function TodoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if(task.trim() === '') return;
        setTasks([...tasks, task]);
        setTask('');
    }

    // console.log(tasks);

    const handleDeleteTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove))
    };
  return (
    <div className="todo-app">
        <h2>TODO List</h2>
        <input 
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
         />
         <button className="add-btn" onClick={handleAddTask}>Add</button>
         <ul style={{ marginTop: '20px' }}>
            {
                tasks.map((t, index) => (
                <li key={index}>
                    <span>{t}</span>
                    <button className="delete-btn" onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))
            }
         </ul>
    </div>
  )
}

export default TodoList