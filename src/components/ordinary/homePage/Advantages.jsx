import React from "react";
import styled from "styled-components";
import {
  Container,
  MiniTitleSection,
  TitleSection,
  Text,
  SectionFooterBlock,
  Line
} from "../../../components";

const list = [
  {
    id: 1,
    name: "Делаем все проекты в срок",
    description:
      "Много компаний тратят средства и время на фрилансеров, которые выполняют работу не вовремя или не присылают результаты."
  },
  {
    id: 2,
    name: "Работаем по договору",
    description:
      "Мы работаем только честно, после подписания договора и предоплаты."
  },
  {
    id: 3,
    name: "Показываем этапы",
    description:
      "Показываем вам все этапы работы, от начала и до конца, аргументируя каждое решение."
  }
];

const Advantages = () => {
  return (
    <AdvantagesSectionBox>
      <Container>
        <Line />
        <MiniTitleSection>Преимущества</MiniTitleSection>
        <TitleSection width="53.13vw" marginBottom="3.47vw">
          Причины сотрудничать с нашей академией
        </TitleSection>
        <List>
          {list.map((item) => (
            <ListItem key={item.id}>
              <ListItemNumber>
                {item.id < 10 ? `0${item.id}` : item.id}
              </ListItemNumber>
              <div style={{ width: "41.67vw" }}>
                <ListItemName>{item.name}</ListItemName>
                <Text>{item.description}</Text>
              </div>
            </ListItem>
          ))}
        </List>
        <SectionFooterBlock text={"Перейти к заказу"} />
      </Container>
    </AdvantagesSectionBox>
  );
};

const ListItemName = styled.div`
  font-weight: 400;
  font-size: 3.33vw;
  letter-spacing: -0.01em;
  color: rgba(17, 17, 17, 0.7);
  margin-bottom: 2.22vw;
`;

const ListItemNumber = styled.div`
  font-weight: 600;
  font-size: 19.65vw;
  line-height: 15vw;
  letter-spacing: -0.01em;
  color: rgba(17, 17, 17, 0.8);
`;

const ListItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 5.56vw;
  border: 0.07vw solid #111111;
  padding-top: 8.54vw;
  padding-bottom: 8.54vw;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.78vw;
  margin-bottom: 6.94vw;
`;

const AdvantagesSectionBox = styled.section`
  margin-bottom: 16.67vw;
`;

export default Advantages;
