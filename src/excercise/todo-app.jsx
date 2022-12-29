import { AddForm } from "./form/add-form";
import { TodoList } from "./todo-list/TodoList";

import "./style.scss";

export function TodoApp() {
  return (
    <div className="todo-app">
      <AddForm />
      <TodoList />
    </div>
  );
}
