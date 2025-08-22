import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";
import CustomComponents from "./components/concepts/custom-components/CustomComponents";
import CustomComponentsProps from "./components/concepts/custom-components-props/CustomComponentsProps";
import StylingComponents from "./components/concepts/styling-components/StylingComponents";
import StatefulComponents from "./components/concepts/stateful-components/StatefulComponents";

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

      <section>
        <StatefulComponents />
      </section>
    </div>
  );
}

export default App;
