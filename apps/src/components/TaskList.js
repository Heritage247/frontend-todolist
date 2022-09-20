import React, { useState, useEffect } from "react";

import "./TaskList.css";
import Task from "./Task";

function TaskList({ tasks, handleDelete, handleStar, handleCheck }) {
  return (
    <div className='task-list'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleStar={handleStar}
        />
      ))}
    </div>
  );
}
export default TaskList;
