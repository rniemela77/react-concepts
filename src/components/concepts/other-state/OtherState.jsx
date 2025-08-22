import StringState from "./StringState.jsx";
import StringStateCode from "./StringState.jsx?raw";

const OtherState = () => {
  return (
    <div>
      <h2>State examples</h2>
      <p>More examples of state usage:</p>

      <div className="d-flex gap flex-wrap">
        <div className="flex-1">
          <pre>
            <code className="language-jsx">{StringStateCode}</code>
          </pre>
        </div>
        
        <div className="flex-1 page-output">
          <StringState />
        </div>
      </div>
    </div>
  );
};

export default OtherState;
