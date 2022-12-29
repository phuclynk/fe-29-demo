import { BrowserRouter } from "react-router-dom";
import "./App.css";
import {
  Circle,
  Rectangle,
  Square,
  Star,
} from "./custom-hook-demo/CustomHookDemo";
import Content from "./demo-context/content/Content";
import { DemoProvider } from "./demo-context/context";
import UseCallBackDemo from "./demo-hook/UseCallbackDemo";
import { TodoProvider } from "./excercise/context/todo-context";
import { TodoApp } from "./excercise/todo-app";
import { ReactRouterDemoApp } from "./react-router/ReactRouterDemoApp";

function App() {
  return (
    // <DemoProvider>
    //   <Content />
    // </DemoProvider>

    // <UseCallBackDemo />
    // <>
    //   <Square></Square>
    //   <Circle />
    //   <Rectangle />
    //   <Star />
    // </>
    // <TodoProvider>
    //   <TodoApp />
    // </TodoProvider>
    <BrowserRouter>
      <ReactRouterDemoApp />
    </BrowserRouter>
  );
}

export default App;
