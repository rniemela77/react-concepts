const jsxExample = `// MyComponent.jsx
import styles from './MyComponent.module.css';

const MyComponent = () => {
  return <div>
    <p className={styles.textRed}>Red text!</p>
    <p className={styles['text-green']}>Green text!</p>
  </div>;
};

export default MyComponent;
`;

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
