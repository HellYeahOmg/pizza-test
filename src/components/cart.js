import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  ContentLarge,
  ContentLargeBold,
  ContentMediumBold,
  H3,
} from "./ui/typography";
import { Button } from "./ui/button";

export const Cart = ({
  cartItems,
  handleQuantity,
  showModal,
  showMobileCart,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryCost = 5;

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((i) => {
      sum += i.price * i.quantity;
    });
    setTotalPrice(sum);
  }, [cartItems]);

  return (
    <Wrapper itemsCount={cartItems.length} showMobileCart={showMobileCart}>
      <H3 style={{ marginBottom: "2rem" }}>Корзина</H3>
      {cartItems.length === 0 ? (
        <ContentLarge>В корзине пусто</ContentLarge>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <Item key={index}>
              <Title>{item.title}</Title>
              <QuantityWrapper>
                <ContentLargeBold
                  onClick={() =>
                    handleQuantity({ title: item.title, task: "reduce" })
                  }
                >
                  -
                </ContentLargeBold>
                <Count>{item.quantity} шт.</Count>
                <ContentLargeBold
                  onClick={() =>
                    handleQuantity({ title: item.title, task: "add" })
                  }
                >
                  +
                </ContentLargeBold>
              </QuantityWrapper>
              <ItemPrice>{item.price * item.quantity} $</ItemPrice>
            </Item>
          ))}
          <Item>
            <Title>Стоимость доставки</Title>

            <ItemPrice>{deliveryCost} $</ItemPrice>
          </Item>
        </>
      )}

      <OrderItem>
        <Button disabled={!cartItems.length} onClick={showModal}>
          Заказать
        </Button>
        <ContentMediumBold>
          Итого: {totalPrice + deliveryCost} $
        </ContentMediumBold>
      </OrderItem>
    </Wrapper>
  );
};

const Title = styled(ContentLarge)`
  width: 20rem;
`;

const OrderItem = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 4.8rem;
  min-width: 35rem;
  background-color: #fff;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  height: ${(props) => `calc(20rem + ${props.itemsCount * 4.15}rem)`};
  @media (max-width: 880px) {
    margin-top: 0;
  }
`;

const Item = styled.div`
  display: flex;
  height: 4.8rem;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: space-between;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: baseline;
  ${ContentLargeBold} {
    cursor: pointer;
  }
`;

const Count = styled(ContentLarge)`
  margin: 0 1rem;
`;

const ItemPrice = styled(ContentMediumBold)`
  margin-left: 1rem;
`;
