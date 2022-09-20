import "./Container.css";
import Form from "./Form";
import TaskContainer from "./TaskContainer";
import { useState, useEffect } from "react";
import axios from "axios";

function Container() {
  const [data, setData] = useState([]);
  let [tasks, setTasks] = useState([
    {
      id: 1,
      task: "dance",
      checked: false,
      star: false,
    },
    {
      id: 2,
      task: "bath",
      checked: true,
      star: false,
    },
  ]);

  let [newTask, setNewTask] = useState("");

  const url = "http://localhost:4000/users/";

  // connect to backend and get data
  const myData = axios
    .get(url)
    .then((result) => setData(result))
    .catch((error) => console.log(error));
  console.log(data.data);

  function saveTasks(newTasks) {
    setTasks(newTasks);
  }

  function addTasks(task) {
    let id = tasks[tasks.length - 1].id + 1;
    let myNewTask = { id, task, checked: false, star: false };
    let listTasks = [...tasks, myNewTask];
    console.log(myNewTask);
    console.log(listTasks);
    saveTasks(listTasks);
  }
  function handleDelete(id) {
    let listTasks = tasks.filter((task) => task.id !== id);
    saveTasks(listTasks);
  }
  function handleCheck(id) {
    let listTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    saveTasks(listTasks);
  }
  function handleStar(id) {
    let listTasks = tasks.map((task) =>
      task.id === id ? { ...task, star: !task.star } : task
    );
    saveTasks(listTasks);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addTasks(newTask);
    setNewTask("");
  }

  return (
    <section className='section'>
      <Form
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <TaskContainer
        tasks={tasks}
        handleCheck={handleCheck}
        handleStar={handleStar}
        handleDelete={handleDelete}
      />
    </section>
  );
}
export default Container;
