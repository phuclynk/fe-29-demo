import { useContext } from "react";
import { DemoContext, DemoContextB } from "../context";
import List from "../list/List";

function Body(props) {
  const context = useContext(DemoContext);
  const contextB = useContext(DemoContextB);

  console.log(context.globalCount);
  console.log(contextB.data);

  return (
    <div className="body">
      <List data={props.data} />
    </div>
  );
}

export default Body;
