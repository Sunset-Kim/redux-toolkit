import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { value } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log(value);

  const increaseCounter = useCallback(() => dispatch({ type: "increase" }), []);

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
