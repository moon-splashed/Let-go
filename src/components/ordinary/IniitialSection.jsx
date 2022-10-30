import React from "react";
import styled from "styled-components";
import { Title } from "../../components";

const IniitialSection = ({ title }) => {
  return (
    <IniitialSectionBox>
      <Title width="75vw">{title}</Title>
    </IniitialSectionBox>
  );
};

const IniitialSectionBox = styled.section`
  height: 62.5vw;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-top: 0.035vw solid #ffffff;
  z-index: 1;
  margin-bottom: 16.67vw;
  &::before {
    content: "";
    position: absolute;
    background-color: #111111;
    width: 50%;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export default IniitialSection;
