import "./app.css";
import ConditionalRemndering from "./ConditionalRemndering";
import { useState } from "react";
const App = () => {
  const colorList = ["red", "orange", "blue", "green", "pink"];
  const [count, setCount] = useState(0);

  function inCreaseCount() {
    setCount(count + 1);
  }
  function deCreaseCount() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>This is the first class of suraj</h1>
      {colorList.map((a, b) => {
        return (
          <h3
            key={a}
            style={{
              color: a,
              fontSize: "5vw",
              // background: "var(--primaryBgColor)",
            }}
          >
            {b + 1}
          </h3>
        );
      })}
      <button onClick={() => inCreaseCount(4)}> increase count </button>
      <button onClick={deCreaseCount}> decrease count </button>
      <h2>{count}</h2>

      {count > 3 ? <ConditionalRemndering count={count} name="Suraj" age={21} /> : <>Loading.....</>}
    </div>
  );
};

export default App;
