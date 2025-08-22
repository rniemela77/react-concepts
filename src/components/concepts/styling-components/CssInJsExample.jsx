import styled from "styled-components";

const StyledParagraph = styled.p`
  color: pink;
  font-size: 2rem;
`;

const CssInJsExample = () => {
  return (
    <div>
      <StyledParagraph>Big Pink Text!</StyledParagraph>
    </div>
  );
};

export default CssInJsExample;
