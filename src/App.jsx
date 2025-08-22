import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import MyComponent from "./components/MyComponent";
import MyComponentCode from "./components/MyComponentCode";
import CssModulesComponent from "./components/CssModulesComponent";
import StyledComponent from "./components/StyledComponent";

function App() {
  useEffect(() => {
    // Highlight all code blocks when component mounts
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h1>React Concepts</h1>
      <h2>Creating a Custom Component</h2>
      <MyComponentCode />
      <br />
      <h2>Using a Custom Component</h2>
      <div class="d-flex gap">
        <pre>
          <code className="language-jsx">
            {
              "// App.jsx \nimport MyComponent from './MyComponent';\n\nfunction App() {\n  return (\n    <div>\n      <MyComponent />\n      <MyComponent />\n    </div>\n  );\n}"
            }
          </code>
        </pre>

        <div>
          <h3>Page Output:</h3>
          <div className="border">
            <MyComponent />
            <MyComponent />
          </div>
        </div>
      </div>
      {/* <CssModulesComponent /> */}
      {/* <h2>Code Examples</h2>
      
      <h3>JavaScript Example:</h3>
      <pre><code className="language-javascript">
{`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`}
      </code></pre>

      <h3>CSS Example:</h3>
      <pre><code className="language-css">
{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`}
      </code></pre>

      <h3>JSX Example:</h3>
      <pre><code className="language-jsx">
{`function Welcome(props) {
  return (
    <div className="welcome">
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}`}
      </code></pre> */}
    </div>
  );
}

export default App;
