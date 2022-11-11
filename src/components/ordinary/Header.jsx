import React from "react";
import styled from "styled-components";
import { Container, Logo, Menu, Social } from "../../components";

const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <HeaderWrapper>
          <Logo />
          <Menu />
          <Social />
        </HeaderWrapper>
      </Container>
    </HeaderBox>
  );
};

const HeaderWrapper = styled.div`
  height: 6.25vw;
  display: flex;
  align-items: center;
`;

const HeaderBox = styled.header`
  background-color: #111111;
`;

export default Header;
