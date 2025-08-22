import MyComponentCode from "./MyComponent.jsx?raw";
import MyComponent from "./MyComponent.jsx";

const jsxExample = `import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent />
      <MyComponent />
    </div>
  );
}`;

const CustomComponents = () => {
  return (
    <div>
      <h2>Creating a React Component</h2>
      <h3>Code Example:</h3>
      <div className="d-flex gap flex-wrap">
        <div className="flex-1">
          <p>App.jsx</p>
          <pre>
            <code className="language-jsx">{jsxExample}</code>
          </pre>
        </div>

        <div className="flex-1">
          <p>MyComponent.jsx</p>
          <pre>
            <code className="language-jsx">{MyComponentCode}</code>
          </pre>
        </div>
      </div>

      <h3>Page Output:</h3>
      <div className="page-output">
        <MyComponent />
        <MyComponent />
      </div>
    </div>
  );
};

export default CustomComponents;
