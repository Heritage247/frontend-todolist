import "./Task.css"
import {FaTrashAlt, FaStar} from "react-icons/fa"

function Task({task,handleDelete,handleStar,handleCheck}){
    return(
        <article key={task.id}>
            <div className="name">
            <input
            onChange={()=>handleCheck(task.id)}
            type='checkbox'
            checked={task.checked}
            />
            <p>{task.task}</p>
            </div>
            <div className="btn-container">
                <FaTrashAlt
                role="button"
                className="btn"
                onClick={()=>handleDelete(task.id)}
                /> 
                {/* <FaEdit
                role="button"
                className="btn"
                onClick={()=>handleEdit()}
                /> */}
                <FaStar
                className={task.star? "star btn": ""}
                role="button"
                onClick={()=>handleStar(task.id)}
                type='checkbox'
                checked={task.star}
                />
            </div>
        </article>
    )
}
export default Task