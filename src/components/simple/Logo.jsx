import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <LogoBox href="/#">Webi</LogoBox>;
};

const LogoBox = styled.a`
  font-weight: 800;
  font-size: ${(props) => (props.size ? props.size : "2.22vw")};
  letter-spacing: 0.03em;
  color: #ffffff;
`;

export default Logo;
