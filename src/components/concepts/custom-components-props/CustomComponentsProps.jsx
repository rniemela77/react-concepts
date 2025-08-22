import MyComponentWithProp from "./MyComponentWithProp";
import MyComponentWithPropCode from "./MyComponentWithPropCode";

const jsxExample = `// App.jsx
import MyComponent from './MyComponent';

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
        <pre className="flex-1">
          <code className="language-jsx">{jsxExample}</code>
        </pre>
        <div className="flex-1">
          <MyComponentWithPropCode />
        </div>
      </div>

      <h3>Page Output:</h3>
      <div className="border">
        <MyComponentWithProp name="John" />
        <MyComponentWithProp name="Alice" />
      </div>
    </div>
  );
};

export default CustomComponentsProps;
