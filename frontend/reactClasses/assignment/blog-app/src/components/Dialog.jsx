import { useDispatch } from "react-redux"
import { deleteBlog } from "../features/blog/blogSlice";

function Dialog({blog, setDialog}) {
    const dispatch = useDispatch();

    const deleteTodo = () => {
        dispatch(deleteBlog(blog.id))
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