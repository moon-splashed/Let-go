import React from "react";
import styled from "styled-components";
import {
  Container,
  MiniTitleSection,
  TitleSection,
  Text,
  SectionFooterBlock
} from "../../../components";

const list = [
  {
    id: 1,
    value: "570+",
    name: "Проектов у нас в портфолио"
  },
  {
    id: 2,
    value: "20+",
    name: "Сотрудников в академии"
  },
  {
    id: 3,
    value: "100%",
    name: "Довольных слушателей"
  }
];

const About = () => {
  return (
    <AboutSectionBox>
      <Container>
        <MiniTitleSection>Об академии</MiniTitleSection>
        <TitleSection width="69.79vw" marginBottom="2.71vw">
          Обучаем создавать качественные сайты и помогаем продвигать их.
        </TitleSection>
        <Text width="69.44vw" marginBottom="2.92vw">
          Мастера производственного обучения, преподаватели по веб-дизайну,
          smm-продвижению, программированию работают у нас в академии.
        </Text>
        <List>
          {list.map((item) => (
            <ListItem key={item.id}>
              <ListItemValue>{item.value}</ListItemValue>
              <Text
                width="16.67vw"
                fontWeight="400"
                lineHeight="2.08vw"
                color="#111111"
              >
                {item.name}
              </Text>
            </ListItem>
          ))}
        </List>
        <SectionFooterBlock text={"Узнать подробнее"} />
      </Container>
    </AboutSectionBox>
  );
};

const ListItemValue = styled.div`
  font-weight: 500;
  font-size: 6.25vw;
  line-height: 4.86vw;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 1.67vw;
`;

const ListItem = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border: 0.035vw solid #000000;
  flex: 1;
  padding: 5.21vw 4.86vw;
  text-align: center;
`;

const List = styled.div`
  display: flex;
  margin-bottom: 6.94vw;
`;

const AboutSectionBox = styled.section`
  margin-bottom: 16.67vw;
`;

export default About;
