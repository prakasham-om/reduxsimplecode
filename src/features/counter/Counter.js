import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCounter } from "./CounterSlice";

function Counter() {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </>
  );
}

export default Counter;
