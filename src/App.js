import React, { useEffect, useState } from "react";
import { Menu } from "./components/menu";
import styled from "styled-components";
import { H1 } from "./components/ui/typography";
import { Cart } from "./components/cart";
import { ModalOrder } from "./components/modal-order";
import { ModalMobileCart } from "./components/modal-mobile-cart";

export const App = () => {
  const [pizza, setPizza] = useState(null);
  const [drinks, setDrinks] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showOrderModal, setShowModalOrder] = useState(false);
  const [showMobileCart, setShowMobileCart] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/pizza.json`)
      .then((response) => response.json())
      .then((data) => setPizza(data));

    fetch(`${process.env.PUBLIC_URL}/drinks.json`)
      .then((response) => response.json())
      .then((data) => setDrinks(data));
  }, []);

  const handleItem = (item) => {
    const index = cartItems.findIndex((x) => x.title === item.title);
    if (index === -1) {
      setCartItems((items) => [...items, { ...item, quantity: 1 }]);
    } else {
      const newCartItems = [...cartItems];
      const newItem = cartItems[index];
      newItem.quantity++;
      newCartItems[index] = newItem;
      setCartItems(newCartItems);
    }
  };

  const removeItemFromCart = (index, items) => {
    items.splice(index, 1);
    setCartItems(items);
  };

  const handleQuantity = ({ title, task }) => {
    const newCartItems = [...cartItems];
    const index = cartItems.findIndex((x) => x.title === title);
    const newItem = cartItems[index];

    if (task === "add") {
      newItem.quantity++;
    } else {
      if (newItem.quantity === 1) {
        removeItemFromCart(index, newCartItems);
        return;
      }
      newItem.quantity--;
    }
    newCartItems[index] = newItem;
    setCartItems(newCartItems);
  };

  if (!pizza || !drinks) return "Загрузка...";

  return (
    <Wrapper>
      <H1 style={{ marginBottom: "3rem" }}>Pizza shop</H1>
      <MainContainer>
        <Menu
          handleItem={handleItem}
          pizza={pizza}
          drinks={drinks}
          openCart={() => setShowMobileCart(true)}
        />
        <CartWrapper>
          <Cart
            showModal={() => setShowModalOrder(true)}
            handleQuantity={handleQuantity}
            cartItems={cartItems}
            showMobileCart={showMobileCart}
          />
        </CartWrapper>
      </MainContainer>
      <ModalOrder
        open={showOrderModal}
        closeModal={() => setShowModalOrder(false)}
      />
      <ModalMobileCart
        open={showMobileCart}
        showOrder={() => {
          setShowModalOrder(true);
          setShowMobileCart(false);
        }}
        handleQuantity={handleQuantity}
        cartItems={cartItems}
        closeModal={() => setShowMobileCart(false)}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  position: relative;
  padding: 1.2rem 0.8rem;
`;

const CartWrapper = styled.div``;

const MainContainer = styled.div`
  display: flex;
  @media (max-width: 880px) {
    ${CartWrapper} {
      display: none;
    }
  }
`;
