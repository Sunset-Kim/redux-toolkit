import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, asyncCounterUp } from "./index";

function App() {
  const value = useSelector((state) => state.counter.value);
  const status = useSelector((stete) => stete.counter.status);

  const dispatch = useDispatch();

  const increaseCounter = useCallback(() => dispatch(increment()), []);

  return (
    <div className="App">
      <div>
        <div>
          <p>카운트</p>
          <p>{value}</p>
          <p>{status}</p>
        </div>
        <button onClick={increaseCounter}>증가</button>
        <button onClick={() => dispatch(asyncCounterUp())}>비동기 증가</button>
      </div>
    </div>
  );
}

export default App;
