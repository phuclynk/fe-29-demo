import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function HttpRequestDemo() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todo-items")
      .then((response) => {
        setTodoList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {todoList.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
}

export default HttpRequestDemo;
