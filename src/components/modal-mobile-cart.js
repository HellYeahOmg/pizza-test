import React from "react";
import { Modal } from "./ui/modal";
import { Cart } from "./cart";

export const ModalMobileCart = ({
  open,
  cartItems,
  handleQuantity,
  closeModal,
  showOrder,
}) => (
  <Modal closeModal={closeModal} open={open}>
    <Cart
      showModal={showOrder}
      cartItems={cartItems}
      handleQuantity={handleQuantity}
    />
  </Modal>
);
