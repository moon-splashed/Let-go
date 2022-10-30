import styled from "styled-components";

export default styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "300")};
  font-size: 2.22vw;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "2.78vw")};
  letter-spacing: 0.01em;
  color: ${(props) => (props.color ? props.color : "rgba(17, 17, 17, 0.5)")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
  display: inline-block;
`;
