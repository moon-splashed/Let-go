import React from 'react'
import styled from 'styled-components'
import Container from '../UI/Container'
import MiniTitleSection from '../UI/MiniTitleSection'
import TitleSection from '../UI/TitleSection'

const list = [
    {
        id: 1,
        question: "Сколько стоит сайт и какие сроки выполнения?",
        answer: "В нашей академии есть обучение во веб-дизайну и программированию, работников мы выбираем среди учеников"
    },
    {
        id: 2,
        question: "Как можно устроиться в вашу академию?",
        answer: "В нашей академии есть обучение во веб-дизайну и программированию, работников мы выбираем среди учеников"
    },
    {
        id: 3,
        question: "Есть ли у вас готовые шаблоны сайтов?",
        answer: "В нашей академии есть обучение во веб-дизайну и программированию, работников мы выбираем среди учеников"
    },
    {
        id: 4,
        question: "С кем я буду вести диалог после заказа?",
        answer: "В нашей академии есть обучение во веб-дизайну и программированию, работников мы выбираем среди учеников"
    },
    {
        id: 5,
        question: "У вас есть скидки постоянным клиентам?",
        answer: "В нашей академии есть обучение во веб-дизайну и программированию, работников мы выбираем среди учеников"
    },
    {
        id: 6,
        question: "Я могу заказать из любой точки мира?",
        answer: "В нашей академии есть обучение во веб-дизайну и программированию, работников мы выбираем среди учеников"
    }
]

const FAQ = () => {
  return (
    <FAQSectionBox>
      <Container>
        <MiniTitleSection>FAQ</MiniTitleSection>
        <TitleSection marginBottom="4.51vw">
            Часто задаваемые вопросы
        </TitleSection>
      </Container>
    </FAQSectionBox>
  )
}

const FAQSectionBox = styled.section`
    margin-bottom: 16.67vw;
`

export default FAQ
