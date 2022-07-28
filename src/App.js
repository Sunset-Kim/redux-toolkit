import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./index";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increaseCounter = useCallback(() => dispatch(increment()), []);

  return (
    <div className="App">
      <div>
        <div>
          <p>카운트</p>
          <p>{value}</p>
        </div>
        <button onClick={increaseCounter}>증가</button>
      </div>
    </div>
  );
}

export default App;
