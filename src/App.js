import { Provider } from "react-redux";
import { rootStore } from "./http-request-demo/store";
import Content from "./redux-demo/ui/content/Content";

function App() {
  return (
    <Provider store={rootStore}>
      <Content />
    </Provider>
  );
}

export default App;
