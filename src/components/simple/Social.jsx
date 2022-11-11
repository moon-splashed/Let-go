import React from "react";
import styled from "styled-components";

import telegram from "../../assets/img/icons/header/telegram.svg";
import vk from "../../assets/img/icons/header/vk.svg";
import behance from "../../assets/img/icons/header/behance.svg";
import telegramHover from "../../assets/img/icons/header/telegramHover.svg";
import vkHover from "../../assets/img/icons/header/vkHover.svg";
import behanceHover from "../../assets/img/icons/header/behanceHover.svg";

const list = [
  {
    id: 1,
    name: "telegram",
    imgUrl: telegram,
    imgUrlHover: telegramHover
  },
  {
    id: 2,
    name: "vk",
    imgUrl: vk,
    imgUrlHover: vkHover
  },
  {
    id: 3,
    name: "behance",
    imgUrl: behance,
    imgUrlHover: behanceHover
  }
];

const Social = () => {
  return (
    <List>
      {list.map((item) => (
        <ListItem href="/#" key={item.id}>
          <ListImg src={item.imgUrl} alt={item.name} />
        </ListItem>
      ))}
    </List>
  );
};

const ListImg = styled.img`
  width: 2.22vw;
  height: 2.22vw;
`;

const ListItem = styled.a``;

const List = styled.div`
  display: flex;
  gap: 1.25vw;
`;

export default Social;
