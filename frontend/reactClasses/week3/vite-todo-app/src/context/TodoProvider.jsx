import { useState } from "react";

import { TodoContext } from "./TodoContext";

// Context Provide
export const TodoProvider = ({ children }) => {
 const [task, setTask] = useState('');
 const [tasks, setTasks] = useState([]);

 const addTask = () => {
    if(task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
 }

 const deleteTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove))
 }

 return (
    <TodoContext.Provider value={{task, setTask, tasks, addTask, deleteTask}}>
        {children}
    </TodoContext.Provider>
 );
}