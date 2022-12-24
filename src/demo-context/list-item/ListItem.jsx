import { useState } from "react";
import { useContext } from "react";
import { DemoContext } from "../context";

function ListItem() {
  const context = useContext(DemoContext);
  console.log(context);

  const handleIncrease = () => {
    context.increase();
  };
  const handleDecrease = () => {
    context.decrease();
  };

  return (
    <div className="item">
      <button onClick={handleDecrease}>DECREASE</button>
      <div>{context.globalCount}</div>
      <button onClick={handleIncrease}>INCREASE</button>
    </div>
  );
}

export default ListItem;
