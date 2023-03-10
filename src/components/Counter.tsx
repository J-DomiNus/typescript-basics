import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = (num: number = 1): void => {
    setCounter(counter + num);
  };
  return (
    <div className="mt-5">
      <h3>UseState</h3>
      <h3>Counter</h3>
      <span>Value: {counter}</span>
      <br />
      <button
        onClick={() => increment()}
        className="btn btn-outline-primary mt-2"
      >
        +1
      </button>
      <button
        onClick={() => increment(2)}
        className="btn btn-outline-primary mt-2"
      >
        +2
      </button>
      <button
        onClick={() => setCounter(0)}
        className="btn btn-outline-danger mt-2"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
