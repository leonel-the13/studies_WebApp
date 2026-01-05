import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  const handleClick = (e: any) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React is so fun.</h1>
      <p>Click this button!</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>coutn: {count}</p>
        <button onClick={handleClick} style={{ margin: "5px" }}>
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default Contador;
