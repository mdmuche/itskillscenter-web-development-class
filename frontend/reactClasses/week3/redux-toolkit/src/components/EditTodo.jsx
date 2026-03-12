import { useState } from "react";


import { useDispatch } from "react-redux";
import { editTodo } from "../features/todos/TodoSlice";

function EditTodo({ todo , text, setShow }) {
const dispatch = useDispatch();
const [todoInputValue, setTodoInputValue] = useState(text);

const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editTodo({
        text: todoInputValue, 
        id: todo.id
    })
);
          
    setTodoInputValue('');
    setShow(false);
}

  return (
    <form className="update-todos" onSubmit={handleSubmit}>
      <input 
        className="update-input"
        type="text"
        placeholder="Enter Todo"
        value={todoInputValue}
        onChange={(e) => setTodoInputValue(e.target.value)}
       />
       <button className="btn" type="submit">Update</button>
    </form>
  )
}

export default EditTodo