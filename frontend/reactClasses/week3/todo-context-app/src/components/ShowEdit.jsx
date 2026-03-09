import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function ShowEdit({ todo , text, setShow }) {
const [todoInputValue, setTodoInputValue] = useState(text);
    const { editTodos } = useContext(TodoContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodos(todo.id, todoInputValue);
          
        setTodoInputValue('');
        setShow(false);
    }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Enter Todo"
      value={todoInputValue}
      onChange={(e) => setTodoInputValue(e.target.value)}
       />
       <button type="submit">Update</button>
    </form>
  )
}

export default ShowEdit