import MyComponentCode from "./MyComponentCode";
import MyComponent from "./MyComponent";

const jsxExample = `// App.jsx
import MyComponent from './MyComponent';

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
      <div class="d-flex gap flex-wrap">
        <pre className="flex-1">
          <code className="language-jsx">{jsxExample}</code>
        </pre>

        <div className="flex-1">
          <MyComponentCode />
        </div>
      </div>

      <h3>Page Output:</h3>
      <div className="border">
        <MyComponent />
        <MyComponent />
      </div>
    </div>
  );
};

export default CustomComponents;
