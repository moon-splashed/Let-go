import styled from "styled-components";

export default styled.h1`
  width: ${(props) => (props.width ? props.width : "auto")};
  margin-left: auto;
  margin-right: auto;
  font-weight: 800;
  font-size: 6.04vw;
  line-height: 6.25vw;
  text-align: center;
  letter-spacing: -0.01em;
  background: linear-gradient(90deg, #ffffff 49.95%, #111111 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
