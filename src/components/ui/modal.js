import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { H3 } from "./typography";

export const Modal = ({
  open,
  closeModal,
  title,
  subtitle,
  children,
  zIndex,
  height,
  width,
  titleMargin,
  onScroll,
}) => (
  <>
    {open && (
      <ModalBackground open={open} onClick={closeModal} zIndex={zIndex}>
        <ModalContainer
          height={height}
          width={width}
          onClick={(event) => event.stopPropagation()}
          onScroll={onScroll}
        >
          <ModalHeader>
            <Title titleMargin={titleMargin} subtitle={subtitle}>
              {title}
            </Title>

            <SubTitle subtitle={subtitle}>{subtitle}</SubTitle>
            <CloseButton onClick={closeModal}>X</CloseButton>
          </ModalHeader>

          {children}
        </ModalContainer>
      </ModalBackground>
    )}
  </>
);

Modal.propTypes = {
  zIndex: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.string,
  titleMargin: PropTypes.string,
  overflow: PropTypes.string,
  alignVerticalCenter: PropTypes.bool,
};

Modal.defaultProps = {
  zIndex: 105,
  width: 87,
  subtitle: "",
  titleMargin: "0",

  alignVerticalCenter: false,
};

const ModalHeader = styled.div`
  position: relative;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  z-index: ${(props) => props.zIndex};
`;

const ModalContainer = styled.div`
  background-color: #f5f5f5;
  /* padding: 3.8rem 3.2rem; */
  padding: 3.2rem;
  width: ${(props) => props.width}rem;
  position: relative;
  height: ${(props) => props.height};

  display: flex;
  flex-direction: column;
  border-radius: 4px;

  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15);

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  margin: auto;
`;

const Title = styled(H3)`
  overflow: hidden;
  text-overflow: ellipsis;
  margin: ${(props) => props.titleMargin};
  ${(props) => {
    if (props.subtitle) {
      return `
        font-weight: normal;
        font-size: 1.2rem;
        letter-spacing: normal;
        margin-bottom: 0.5rem;
      `;
    }
  }}
`;

const SubTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.03em;
  color: #5c5c5c;
  margin: 0;
  display: none;
  ${(props) => {
    if (props.subtitle) {
      return `display: block;
      `;
    }
  }}
`;

const CloseButton = styled.span`
  position: absolute;
  top: -2.2rem;
  right: -1.6rem;
  cursor: pointer;
`;
