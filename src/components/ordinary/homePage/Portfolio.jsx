import React from "react";
import styled from "styled-components";
import {
  Container,
  Line,
  MiniTitleSection,
  TitleSection,
  Text,
  SectionFooterBlock
} from "../../../components";

import sliderImageSrc from "../../../assets/img/portfolio/slider/1.png";
import arrowPrevious from "../../../assets/img/icons/arrow-previous.svg";
import arrowNext from "../../../assets/img/icons/arrow-next.svg";

const Portfolio = () => {
  return (
    <PortfolioBox>
      <Container>
        <Line />
        <MiniTitleSection>Портфолио</MiniTitleSection>
        <TitleSection width="71.67vw" marginBottom="6.94vw">
          Мы обучаем дизайну, вёрстке и разбираемся с подключением контекстной
          рекламы.
        </TitleSection>
        <Slider>
          <SliderLeft>
            <SliderLeftItem>
              <SliderImage background={sliderImageSrc} />
              <SliderBtn left>
                <SliderBtnImage src={arrowPrevious} />
              </SliderBtn>
              <SliderBtn active right>
                <SliderBtnImage src={arrowNext} />
              </SliderBtn>
            </SliderLeftItem>
            <SliderDots>
              <SliderDotsItem active />
              <SliderDotsItem />
              <SliderDotsItem />
              <SliderDotsItem />
              <SliderDotsItem />
            </SliderDots>
          </SliderLeft>
          <SliderRight>
            <SliderRightTitle active>KKFood</SliderRightTitle>
            <SliderRightTitle>Friday</SliderRightTitle>
            <SliderRightTitle>TransferSS</SliderRightTitle>
            <SliderRightTitle>JobMaker</SliderRightTitle>
            <SliderRightTitle>Banda</SliderRightTitle>
            <SliderRightTitle>FAA</SliderRightTitle>
            <SliderRightTitle>SHTORM</SliderRightTitle>
          </SliderRight>
        </Slider>
        <TextBox>
          <Text>
            <Text fontWeight="600" color="rgba(17, 17, 17, 0.7)">
              О проекте:
            </Text>{" "}
            разработка сайта ресторана под ключ.
          </Text>
        </TextBox>
        <SectionFooterBlock text={"Оставить заявку"} />
      </Container>
    </PortfolioBox>
  );
};

const TextBox = styled.div`
  margin-bottom: 5.56vw;
`;

const SliderBtnImage = styled.img``;

const SliderBtn = styled.div`
  width: 6.39vw;
  height: 6.39vw;
  background-color: ${(props) => (props.active ? "#111111" : "#D9D9D9")};
  position: absolute;
  top: 50%;
  left: ${(props) => (props.left ? "0" : "auto")};
  right: ${(props) => (props.right ? "0" : "auto")};
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderRightTitle = styled(TitleSection)`
  font-size: 3.33vw;
  line-height: unset;
  color: ${(props) => (props.active ? "#111111" : "rgba(17, 17, 17, 0.2)")};
`;

const SliderDotsItem = styled.div`
  width: ${(props) => (props.active ? "1.11vw" : "0.83vw")};
  height: ${(props) => (props.active ? "1.11vw" : "0.83vw")};
  background-color: ${(props) =>
    props.active ? "rgba(17, 17, 17, 0.7)" : "rgba(17, 17, 17, 0.2)"};
  border-radius: 50%;
`;

const SliderDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.83vw;
`;

const SliderImage = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.background
      ? `url(${props.background}) no-repeat center center/cover`
      : "rgba(17, 17, 17, 0.2)"};
`;

const SliderLeftItem = styled.div`
  height: 38.89vw;
  margin-bottom: 1.11vw;
  position: relative;
`;

const SliderRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 37.36vw;
  padding-top: 0.83vw;
`;

const SliderLeft = styled.div`
  width: 61.11vw;
`;

const Slider = styled.div`
  display: flex;
  gap: 2.29vw;
  margin-bottom: 2.64vw;
`;

const PortfolioBox = styled.section`
  margin-bottom: 16.67vw;
`;

export default Portfolio;
