import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";

function UseCallBackDemo() {
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("NEW");

  const filterTodoList = useMemo(
    () => todoList.filter((item) => item.status === status),
    [todoList, status]
  );

  const [count2, setCount2] = useState(0);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  console.log(color);

  const total = useMemo(() => {
    console.log("count2", count2);
    console.log("count", count);

    return count2 + count;
  }, [count2]);

  const renderUi = useCallback(() => {
    console.log(color);

    return (
      <div
        style={{
          width: "200px",
          heigth: "200px",
          backgroundColor: color,
        }}
      >
        {count}
      </div>
    );
  }, [count]);

  return (
    <div>
      <h1>Hello</h1>
      {renderUi()}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount2(count2 + 2)}>+2</button>
      <button onClick={() => setCount2(count2 - 2)}>-2</button>
      <div>{total}</div>
      <button
        onClick={() => {
          if (color === "red") {
            setColor("yellow");
            return;
          }

          setColor("red");
        }}
      >
        Change color
      </button>
    </div>
  );
}

export default UseCallBackDemo;
