import styled from "styled-components";

export default styled.h3`
  width: ${(props) => (props.width ? props.width : "auto")};
  font-weight: 800;
  font-size: 4.44vw;
  line-height: 4.86vw;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
`;
