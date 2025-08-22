import MyComponent from "./MyComponent.jsx";
import MyComponentCode from "./MyComponent.jsx?raw";

const OtherState = ({ id }) => {
  return (
    <div>
      <h2 id={id}>State examples</h2>
      <p>More examples of state usage with different data types:</p>

      <div className="d-flex gap flex-wrap">
        <div className="flex-1">
          <p>MyComponent.jsx</p>
          <pre>
            <code className="language-jsx">{MyComponentCode}</code>
          </pre>
        </div>

        <div className="flex-1 page-output">
          <MyComponent />
        </div>
      </div>
    </div>
  );
};

export default OtherState;
