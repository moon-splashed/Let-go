import React from "react";
import styled from "styled-components";

const list = [
  {
    id: "1",
    name: "О студии"
  },
  {
    id: "2",
    name: "Вакансии"
  },
  {
    id: "3",
    name: "Портфолио"
  },
  {
    id: "4",
    name: "Отзывы"
  },
  {
    id: "5",
    name: "Услуги"
  }
];

const Menu = () => {
  return (
    <MenuBox>
      <List>
        {list.map((item) => (
          <ListItem key={item.id}>
            <ListLink href="/#">{item.name}</ListLink>
          </ListItem>
        ))}
      </List>
    </MenuBox>
  );
};

const ListLink = styled.a`
  font-weight: 300;
  font-size: 1.25vw;
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ListItem = styled.li``;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 5.56vw;
`;

const MenuBox = styled.nav`
  margin-left: 8.33vw;
  margin-right: auto;
`;

export default Menu;
