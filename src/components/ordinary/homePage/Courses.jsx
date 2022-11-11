import React from "react";
import {
  Container,
  MiniTitleSection,
  TitleSection,
  Text,
  SectionFooterBlock,
  Line
} from "../../../components";
import styled from "styled-components";

const list = [
  {
    id: 1,
    name: "Разработка",
    list: [
      {
        id: 1,
        name: "Веб-сайты"
      },
      {
        id: 2,
        name: "Приложения"
      },
      {
        id: 3,
        name: "Чат-боты"
      },
      {
        id: 4,
        name: "Интеграция CRM"
      }
    ]
  },
  {
    id: 2,
    name: "Дизайн",
    list: [
      {
        id: 1,
        name: "Дизайн сайтов "
      },
      {
        id: 2,
        name: "Оформление соц-сетей"
      },
      {
        id: 3,
        name: "Айдентика"
      },
      {
        id: 4,
        name: "UX/UI дизайн"
      },
      {
        id: 5,
        name: "Полиграфия"
      }
    ]
  },
  {
    id: 3,
    name: "SMM",
    list: [
      {
        id: 1,
        name: "Продвижение"
      },
      {
        id: 2,
        name: "Копирайтинг"
      },
      {
        id: 3,
        name: "Медиа"
      },
      {
        id: 4,
        name: "Воронки продаж"
      },
      {
        id: 5,
        name: "Аналитика"
      }
    ]
  }
];

const Courses = () => {
  return (
    <CoursesSectionBox>
      <Container>
        <Line />
        <MiniTitleSection>Курсы</MiniTitleSection>
        <TitleSection width="59.03vw" marginBottom="5.90vw">
          Предоставляем разноплановые курсы в различных IT-сферах
        </TitleSection>
        <List>
          {list.map((item) => (
            <ListItem key={item.id}>
              <Text
                fontWeight={600}
                color="rgba(17, 17, 17, 0.7)"
                marginBottom="3.33vw"
              >
                {item.name}
              </Text>
              <ListSecond>
                {item.list.map((itemSecond) => (
                  <ListSecondItem key={itemSecond.id}>
                    <ListSecondItemName>{itemSecond.name}</ListSecondItemName>
                  </ListSecondItem>
                ))}
              </ListSecond>
            </ListItem>
          ))}
        </List>
        <SectionFooterBlock text={"Оставить заявку"} />
      </Container>
    </CoursesSectionBox>
  );
};

const ListSecondItemName = styled(Text)`
  cursor: pointer;
  &:hover {
    color: #111111;
  }
`;

const ListSecondItem = styled.div``;

const ListSecond = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.22vw;
`;

const ListItem = styled.div``;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5.56vw;
`;

const CoursesSectionBox = styled.section`
  margin-bottom: 16.67vw;
`;

export default Courses;
