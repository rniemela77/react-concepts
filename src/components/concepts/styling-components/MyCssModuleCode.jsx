const cssExample = `/* MyComponent.module.css */

.textRed {
    color: red;
}

.text-green {
    color: lime;
}
`;

const MyCssModuleCode = () => {
  return (
    <div>
      <pre>
        <code className="language-css">{cssExample}</code>
      </pre>
    </div>
  );
};

export default MyCssModuleCode;
