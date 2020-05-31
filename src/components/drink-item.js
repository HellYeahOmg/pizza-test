import React from "react";
import styled from "styled-components";
import { Caption, ContentLarge, ContentMediumBold } from "./ui/typography";
import { Button } from "./ui/button";

export const DrinkItem = ({ title, price, volume, handleItem }) => (
  <Wrapper>
    <ContentLarge>{title}</ContentLarge>
    <Caption>{volume} мл</Caption>
    <BottomContainer>
      <ContentMediumBold>{price} $</ContentMediumBold>
      <Button onClick={() => handleItem({ title, price })}>В корзину</Button>
    </BottomContainer>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: #fff;
  width: 24rem;
  margin: 0 1.6rem 1.6rem 0;
  padding: 1rem 1.2rem;
  @media (max-width: 383px) {
    margin-right: 1.6rem !important;
  }
  @media (max-width: 880px) {
    :nth-child(3n + 3) {
      margin-right: 0;
    }
  }
  @media (max-width: 511px) {
    width: 17rem;
  }
`;

const BottomContainer = styled.div`
  margin-top: 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
