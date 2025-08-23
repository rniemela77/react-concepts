import { useState, useEffect } from "react";

const UseEffectAlert = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      window.alert("hello!");
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffectAlert;