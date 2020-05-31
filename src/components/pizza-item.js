import React from "react";
import styled from "styled-components";
import { Caption, ContentLarge, ContentMediumBold } from "./ui/typography";
import { Button } from "./ui/button";

export const PizzaItem = ({ img, price, title, ingredients, handleItem }) => (
  <Wrapper>
    <img src={img} alt={title} />
    <InfoWrapper>
      <ContentLarge>Пицца «{title}»</ContentLarge>
      <Caption>{ingredients}</Caption>
      <BottomContainer>
        <ContentMediumBold>{price} $</ContentMediumBold>
        <Button onClick={() => handleItem({ title, price })}>В корзину</Button>
      </BottomContainer>
    </InfoWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: #fff;
  width: 24rem;
  height: 40rem;
  margin: 0 1.6rem 1.6rem 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 880px) {
    //margin-right: 0;
    :nth-child(3n + 3) {
      margin-right: 0;
    }
  }
  @media (max-width: 767px) {
    :nth-child(2n + 2) {
      margin-right: 0;
    }
    :nth-child(3n + 3) {
      margin-right: 1.6rem;
    }
  }

  @media (max-width: 511px) {
    flex-direction: row;
    width: 100%;
    margin-right: 0 !important;
    height: 16rem;
    align-items: center;
    img {
      width: 10rem;
      height: 10rem;
    }
  }

  @media (max-width: 350px) {
    height: 20rem;
  }
`;

const InfoWrapper = styled.div`
  padding: 1rem 1.2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 511px) {
    width: 100%;
  }
`;

const BottomContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
