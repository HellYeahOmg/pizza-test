import React from "react";
import { Modal } from "./ui/modal";
import styled from "styled-components";
import { Button } from "./ui/button";

export const ModalOrder = ({ open, closeModal }) => (
  <Modal width={35} open={open} closeModal={closeModal}>
    <form>
      <Label>
        Адрес доставки
        <Input type="text" required />
      </Label>
      <Label>
        ФИО
        <Input type="text" required />
      </Label>
      <Label>
        Номер телефона
        <Input type="tel" required />
      </Label>
      <Button style={{ marginTop: "2rem" }}>Подтвердить заказ</Button>
    </form>
  </Modal>
);

const Label = styled.label`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.4rem 0.6rem;
  margin-top: 1rem;
`;
