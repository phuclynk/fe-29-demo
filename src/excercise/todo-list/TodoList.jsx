import { useContext } from "react";
import { TodoContext } from "../context/todo-context";
import { ListItem } from "../list-item/ListItem";

export function TodoList() {
  const { todoList } = useContext(TodoContext);

  return (
    <div className="todo-list">
      {todoList.map((item) => (
        <ListItem data={item} />
      ))}
    </div>
  );
}
