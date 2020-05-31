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
  <Modal height={"80vh"} closeModal={closeModal} open={open}>
    <div style={{ overflow: "scroll" }}>
      <Cart
        showModal={showOrder}
        cartItems={cartItems}
        handleQuantity={handleQuantity}
      />
    </div>
  </Modal>
);
