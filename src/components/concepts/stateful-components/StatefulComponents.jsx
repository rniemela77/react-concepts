import StepCounter from "./StepCounter";
import StepCounterCode from "./StepCounter.jsx?raw";

const StatefulComponents = ({ id }) => {
  return (
    <div>
      <h2 id={id}>State</h2>

      <p>
        State is a way to store data that can change, and can cause components
        to re-render when it changes.
      </p>

      <h3>How to use state:</h3>
      <ol>
        <li>Import the useState hook from React</li>
        <pre>
          <code className="language-jsx">
            {'import { useState } from "react";'}
          </code>
        </pre>
        <li>
          Inside the component, create a variable (count) to store the state,
          and a function (setCount) to update the state. The name of the
          variable and function are arbitrary, but this syntax is how React
          handles state.
        </li>
        <pre>
          <code className="language-jsx">
            {"const [count, setCount] = useState(0);"}
          </code>
        </pre>
        <li>Update the state using the function we created (setCount)</li>
        <pre>
          <code className="language-jsx">{"setCount(count + 1);"}</code>
        </pre>
        <li>Render the state in the component (count)</li>
        <pre>
          <code className="language-jsx">{"<p>Count: {count}</p>"}</code>
        </pre>
      </ol>

      <h3>All together:</h3>
      <div className="d-flex gap flex-wrap">
        <div className="flex-1">
          <p>StepCounter.jsx</p>
          <pre>
            <code className="language-jsx">{StepCounterCode}</code>
          </pre>
        </div>
      </div>

      <h3>Page Output:</h3>
      <div className="page-output">
        <StepCounter />
      </div>
    </div>
  );
};

export default StatefulComponents;
