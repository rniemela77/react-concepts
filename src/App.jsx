import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";
import CustomComponents from "./components/concepts/custom-components/CustomComponents";
import CustomComponentsProps from "./components/concepts/custom-components-props/CustomComponentsProps";
import StylingComponents from "./components/concepts/styling-components/StylingComponents";

function App() {
  useEffect(() => {
    // Highlight all code blocks when component mounts
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h1>React Concepts</h1>

      <section>
        <CustomComponents />
      </section>

      <section>
        <CustomComponentsProps />
      </section>

      <section>
        <StylingComponents />
      </section>

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
