import MyComponent from "./css-module/MyComponent";
import MyComponentCode from "./css-module/MyComponent.jsx?raw";
import MyCssModuleCode from "./css-module/MyComponent.module.css?raw";
import MyComponent2 from "./css-in-js/MyComponent";
import MyComponent2Code from "./css-in-js/MyComponent.jsx?raw";

const StylingComponents = ({ id }) => {
  return (
    <div>
      <h2 id={id}>Styling Components</h2>
      <p>A couple of ways to style components in React:</p>

      <h3>CSS Modules</h3>
      <p>
        Create CSS files (*.module.css) where class names are scoped locally
      </p>
      <p>Import the CSS file into the component</p>

      <h4>Example:</h4>
      <div className="d-flex gap flex-wrap">
        <div className="flex-1">
          <p>MyComponent.module.css</p>
          <pre>
            <code className="language-css">{MyCssModuleCode}</code>
          </pre>
        </div>
        <div className="flex-1">
          <p>MyComponent.jsx</p>
          <pre>
            <code className="language-jsx">{MyComponentCode}</code>
          </pre>
        </div>
      </div>

      <h4>Page Output:</h4>
      <div className="page-output">
        <MyComponent />
      </div>
      <h3>CSS-in-JS</h3>
      <p>Styling is written in the component file with template literals</p>
      <p>
        Common libraries to help with this: styled-components, emotion, or
        styled-jsx
      </p>
      <h4>Example:</h4>
      <div className="d-flex gap flex-wrap">
        <div className="flex-1">
          <p>MyComponent.jsx (with styled-components)</p>
          <pre>
            <code className="language-jsx">{MyComponent2Code}</code>
          </pre>
        </div>
      </div>
      <h4>Page Output:</h4>
      <div className="page-output">
        <MyComponent2 />
      </div>
    </div>
  );
};

export default StylingComponents;
