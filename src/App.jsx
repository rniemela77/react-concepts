import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";
import CustomComponents from "./components/concepts/custom-components/CustomComponents";
import CustomComponentsProps from "./components/concepts/custom-components-props/CustomComponentsProps";
import StylingComponents from "./components/concepts/styling-components/StylingComponents";
import StatefulComponents from "./components/concepts/stateful-components/StatefulComponents";
import OtherState from "./components/concepts/other-state/OtherState";
import LearnHooks from "./components/concepts/learn-hooks/LearnHooks";

function App() {
  useEffect(() => {
    // Highlight all code blocks when component mounts
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h1>React Concepts</h1>

      <a href="#custom-components">Custom Components</a>
      <a href="#custom-components-props">Custom Components Props</a>
      <a href="#styling-components">Styling Components</a>
      <a href="#stateful-components">Stateful Components</a>
      <a href="#other-state">State Type Examples</a>

      <hr />

      <section>
        <CustomComponents id="custom-components" />
      </section>

      <section>
        <CustomComponentsProps id="custom-components-props" />
      </section>

      <section>
        <StylingComponents id="styling-components" />
      </section>

      <section>
        <StatefulComponents id="stateful-components" />
      </section>

      <section>
        <OtherState id="other-state" />
      </section>

      <section>
        <LearnHooks id="learn-hooks" />
      </section>
    </div>
  );
}

export default App;
