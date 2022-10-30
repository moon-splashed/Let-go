import React from "react";
import styled from "styled-components";
import footerSectionArrow from "../../assets/img/icons/footerSectionArrow.svg";

const SectionFooterBlock = ({ text }) => {
  return (
    <SectionFooterBlockBox>
      <SectionFooterBlockBoxText>{text}</SectionFooterBlockBoxText>
      <SectionFooterBlockBoxImg
        src={footerSectionArrow}
        alt=""
      ></SectionFooterBlockBoxImg>
    </SectionFooterBlockBox>
  );
};

const SectionFooterBlockBoxImg = styled.img``;

const SectionFooterBlockBoxText = styled.div`
  font-weight: 300;
  font-size: 3.33vw;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

const SectionFooterBlockBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4.93vw;
  background-color: #111111;
  border: 0.07vw solid #ffffff;
  padding: 6.04vw 0 6.04vw 5.63vw;
`;

export default SectionFooterBlock;
