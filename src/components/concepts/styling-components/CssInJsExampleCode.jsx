const cssInJsExample = `// MyComponent.jsx
import styled from 'styled-components';

const StyledParagraph = styled.p\`
  color: pink;
  font-size: 2rem;
\`;

const MyComponent = () => {
  return <div>
    <StyledParagraph>Big Pink Text!</StyledParagraph>
  </div>;
};
`;

const CssInJsExampleCode = () => {
  return <div>
    <pre>
      <code className="language-jsx">{cssInJsExample}</code>
    </pre>
  </div>
};

export default CssInJsExampleCode;