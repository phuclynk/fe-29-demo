import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList } from "./slice/todo.slice";

function HttpRequestDemo() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const loading = useSelector((state) => state.todo.loading);
  // const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    dispatch(fetchTodoList());
    // axios
    //   .get("http://localhost:3000/todo-items")
    //   .then((response) => {
    //     setTodoList(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div>
      {loading && <h1>Loading</h1>}
      {todoList.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
}

export default HttpRequestDemo;
