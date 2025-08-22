const jsxExample = `// MyComponent.jsx
function MyComponent() {
    return (
      <div>
        <b>Hello!</b>
        <p>This is a custom component!</p>
      </div>
    );
}`;

const MyComponentCode = () => {
  return (
    <div>
      <pre>
        <code className="language-jsx">{jsxExample}</code>
      </pre>
    </div>
  );
};

export default MyComponentCode;
