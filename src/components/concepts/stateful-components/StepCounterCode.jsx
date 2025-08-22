const jsxExample = `
import { useState } from "react";

const StepCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default StepCounter;
`;

const StepCounterCode = () => {
  return <div>
    <pre>
      <code className="language-jsx">{jsxExample}</code>
    </pre>
  </div>
};

export default StepCounterCode;