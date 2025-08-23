import UseEffectApiExample from "./UseEffectApiExample";
import UseEffectApiExampleCode from "./UseEffectApiExample.jsx?raw";
import UseEffectAlert from "./UseEffectAlert";
import UseEffectAlertCode from "./UseEffectAlert.jsx?raw";

const LearnHooks = ({ id }) => {
  return (
    <div>
      <h2 id={id}>Hooks</h2>

      <p>Hooks are a way to use state and other React features.</p>

      <h3>useState</h3>
      <p>
        As we learned above, <b>useState</b> is a hook that lets you use state.
      </p>

      <h3>useEffect</h3>
      <p>
        <b>useEffect</b> is a hook that lets you use side effects. It's a way to
        get React to do something when something happens. It takes two
        arguments: a function and an array of dependencies.
      </p>

      <h4>How to use useEffect</h4>
      <p>
        First, we need to import the <b>useEffect</b> hook.
      </p>

      <pre>
        <code className="language-jsx">
          {`import { useEffect } from "react";`}
        </code>
      </pre>

      <p>
        Then, we can use the <b>useEffect</b> hook to do something when the
        component mounts.
      </p>

      <pre>
        <code className="language-jsx">
          {`useEffect(function, [dependencies]);`}
        </code>
      </pre>

      <p>
        The first argument in the <b>useEffect</b> hook is a function that will
        be called when the component mounts.
      </p>

      <p>
        The second argument is an array of dependencies. If any dependency
        changes, the useEffect function is called again.
      </p>

      <h4>useEffect with no dependencies</h4>
      <p>
        useEffect with no dependencies will run only once when the component
        mounts.
      </p>

      <pre>
        <code className="language-jsx">{UseEffectApiExampleCode}</code>
      </pre>

      <h4>Page Output</h4>

      <div className="page-output">
        <UseEffectApiExample />
      </div>

      <h4>useEffect with dependencies</h4>
      <p>
        Passing in data to the useEffect function will cause it to run again
        when the data changes.
      </p>

      <pre>
        <code className="language-jsx">{UseEffectAlertCode}</code>
      </pre>

      <h4>Page Output</h4>
      <p>Notice that the function is called any time the count changes (and is above 0)</p>
      <div className="page-output">
        <UseEffectAlert />
      </div>
    </div>
  );
};

export default LearnHooks;
