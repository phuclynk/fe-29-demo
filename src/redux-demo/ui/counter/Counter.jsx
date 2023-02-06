import { useDispatch } from "react-redux";
import { decrease, increase } from "../../slice/counter.slice";

function Counter() {
  // Hàm useDispatch trả về hàm dispatch giúp gửi action tới redux store
  const dispatch = useDispatch();

  const handleIncrease = () => {
    // gửi action và action payload tới redux store
    dispatch(increase(1));
  };

  const handleDescrease = () => {
    // gửi action và action payload tới redux store
    dispatch(decrease(1));
  };

  return (
    <div className="counter">
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDescrease}>-</button>
    </div>
  );
}

export default Counter;
