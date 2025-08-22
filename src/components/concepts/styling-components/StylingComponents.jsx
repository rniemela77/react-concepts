import MyComponent from "./MyComponent";
import MyComponentCode from "./MyComponentCode";
import MyCssModuleCode from "./MyCssModuleCode";
import CssInJsExample from "./CssInJsExample";
import CssInJsExampleCode from "./CssInJsExampleCode";

const StylingComponents = () => {
  return (
    <div>
      <h2>Styling Components</h2>
      <p>A couple of ways to style components in React:</p>
      <h3>CSS Modules</h3>
      <p>
        Create CSS files (*.module.css) where class names are scoped locally
      </p>
      <p>Import the CSS file into the component</p>
      <h4>Example:</h4>
      <div className="d-flex gap flex-wrap">
        <div className="flex-1">
          <MyCssModuleCode />
        </div>
        <div className="flex-1">
          <MyComponentCode />
        </div>
      </div>
      <h4>Page Output:</h4>
      <div className="border">
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
          <CssInJsExampleCode />
        </div>
      </div>
      <h4>Page Output:</h4>
      <div className="border">
        <CssInJsExample />
      </div>
    </div>
  );
};

export default StylingComponents;
