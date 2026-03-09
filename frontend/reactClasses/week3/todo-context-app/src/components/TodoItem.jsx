import { useState } from "react"

import ShowEdit from "./ShowEdit"
import Dialog from "./Dialog";

function TodoItem({ todo }) {
    const [ show, setShow ] = useState(false);
    const [ dialog, setDialog ] = useState(false);

    const showEditForm = () => {
        setShow(true);
      }

      const showDialog = () => {
        setDialog(true);
      }
      
      return (
        <div className="list-item">
          <div className="text-checkbox">
            <input className="checkbox" type="checkbox" name="" id="" />
            <span>{todo.text}</span>
          </div>
        <div className="btn-flex">
          <button className="btn edit-btn" onClick={showEditForm}>
            <i className="fa fa-pencil-square-o"></i>
          </button>
          {
            show &&
            <ShowEdit todo={todo} text={todo.text} setShow={setShow}/>
          }
          <button className="btn delete-btn" onClick={showDialog}>
            <i className="fa fa-trash-o"></i>
          </button>
          {
            dialog &&
            <Dialog setDialog={setDialog} todo={todo}/>
          }
        </div>
    </div>
  )
}

export default TodoItem