import "./TaskContainer.css"
import TaskList from "./TaskList"

function TaskContainer({tasks,handleDelete,handleStar,handleCheck}){
    return(
        <div className="task-container">
            {tasks.length ? (
                <TaskList
                tasks={tasks}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                handleStar={handleStar}
                />
            ) : (
            <p>You don't have any task</p>
            )}
        </div>
    )
}
export default TaskContainer