import React from "react";
import styled from "styled-components";
import { PizzaItem } from "./pizza-item";
import { H3 } from "./ui/typography";
import { DrinkItem } from "./drink-item";
import CartIcon from "../assets/cart.svg";

export const Menu = ({ pizza, drinks, handleItem, openCart }) => (
  <Wrapper>
    <H3>Пицца</H3>
    <Container>
      {pizza.map((item, index) => (
        <PizzaItem handleItem={handleItem} {...item} key={index} />
      ))}
    </Container>
    <H3>Напитки</H3>
    <Container>
      {drinks.map((item, index) => (
        <DrinkItem handleItem={handleItem} {...item} key={index} />
      ))}
    </Container>
    <MobileCart onClick={openCart}>
      <img src={CartIcon} alt="Корзина" />
    </MobileCart>
  </Wrapper>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  @media (max-width: 880px) {
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  max-width: 91.4rem;
  position: relative;
`;

const MobileCart = styled.div`
  display: none;
  background-color: #fff;
  border: 0.5px solid black;
  border-radius: 50%;
  width: 4.8rem;
  height: 4.8rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  right: 3rem;
  @media (max-width: 880px) {
    display: flex;
  }

  img {
    width: 50%;
  }
`;
