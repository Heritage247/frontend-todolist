import "./Form.css"

function Form({newTask,handleSubmit,setNewTask}){
    
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
            />
            <button type="sumbit">Add Task</button>
        </form>
    )
}
export default Form