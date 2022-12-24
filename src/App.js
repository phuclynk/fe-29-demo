import "./App.css";
import Content from "./demo-context/content/Content";
import { DemoProvider } from "./demo-context/context";
import UseCallBackDemo from "./demo-hook/UseCallbackDemo";

function App() {
  return (
    // <DemoProvider>
    //   <Content />
    // </DemoProvider>

    <UseCallBackDemo />
  );
}

export default App;
