import axios from "axios";
const apiUrl = "http://localhost:4000/users";
export function getTasks() {
  return axios.get(apiUrl);
}
export function addTask(newList) {
  return axios.post(apiUrl, newList);
}
export function updateTask(id, newList) {
  return axios.put(apiUrl + "/" + id, newList);
}

export function deleteTask(id) {
  return axios.delete(apiUrl + "/" + id);
}
