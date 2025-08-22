const jsxExample = `// MyComponent.jsx
const MyComponent = ({ name }) => {
  return <div>Name: {name}</div>;
};`;

const MyComponentWithPropCode = () => {
  return (
    <div>
      <pre>
        <code className="language-jsx">{jsxExample}</code>
      </pre>
    </div>
  );
};

export default MyComponentWithPropCode;
