import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../slices/counter/counterSlice";
import './counter.css'

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="counter">
        <button aria-label="Increment value" onClick={() => dispatch(increment())} className="btn-counter">
          Добавить 1
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())} className="btn-counter">
          Отнять 1
        </button>
      </div>
    </div>
  );
};
