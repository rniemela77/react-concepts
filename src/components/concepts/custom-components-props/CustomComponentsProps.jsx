import MyComponent from "./MyComponent";
import MyComponentCode from "./MyComponent.jsx?raw";

const jsxExample = `import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent name='John' />
      <MyComponent name='Alice' />
    </div>
  );
}`;

const CustomComponentsProps = () => {
  return (
    <div>
      <h2>Using Props</h2>
      <h3>Code Example:</h3>
      <div className="d-flex gap flex-wrap">
        <div className="flex-1">
          <p>App.jsx</p>
          <pre>
            <code className="language-jsx">{jsxExample}</code>
          </pre>
        </div>

        <div className="flex-1">
          <p>MyComponentWithProp.jsx</p>
          <pre>
            <code className="language-jsx">{MyComponentCode}</code>
          </pre>
        </div>
      </div>

      <h3>Page Output:</h3>
      <div className="page-output">
        <MyComponent name="John" />
        <MyComponent name="Alice" />
      </div>
    </div>
  );
};

export default CustomComponentsProps;
