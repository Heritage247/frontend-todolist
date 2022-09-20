import axios from "axios";
import React, { useState, useEffect } from "react";

export default function DisplayTask() {
  let [data, setData] = useState([]);
  const newUrl = "http://localhost:4000/users/";
  useEffect(() => {
    axios
      .get(newUrl)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [data]);
  console.log(data);

  return (
    <div>
      <h1>TODO LIST </h1>
      {data.map((task, index) => (
        <h1>{task.name}</h1>
      ))}
    </div>
  );
}
