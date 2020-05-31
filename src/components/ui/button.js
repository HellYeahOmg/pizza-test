import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { ContentMediumBold } from "./typography";

export const Button = ({
  type,
  onClick,
  disabled,
  className,
  transparent,
  style,
  inverted,
  stopPropagation = false,
  children,
}) => {
  let _class = "";
  const calculatedClassName = className ? _class + className : _class;

  const handleClick = (ev) => {
    if (stopPropagation) {
      ev.stopPropagation();
      ev.preventDefault();
    }

    onClick && onClick(ev);
  };

  return (
    <Btn
      onClick={handleClick}
      disabled={disabled}
      type={type}
      className={calculatedClassName}
      transparent={transparent}
      style={style}
      inverted={inverted}
    >
      <ContentMediumBold>{children}</ContentMediumBold>
    </Btn>
  );
};

const Btn = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  outline: none;
  padding: 0.4rem 1.6rem 0.6rem;
  height: 3.2rem;
  color: #fff;

  border: none;

  cursor: pointer;
  &:disabled {
    cursor: default;
  }

  ${(props) => props.type === "primary" && PrimaryCss};
  ${(props) =>
    props.type === "secondary" &&
    (props.inverted ? SecondaryInvertedCss : SecondaryCss)};
  ${(props) => props.type === "danger" && DangerCss};

  ${({ transparent }) =>
    transparent &&
    css`
      background-color: transparent;
    `};

  /* some workaround for buttons with <a /> in it */
  a {
    display: flex;
  }
`;

Btn.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  isLoading: PropTypes.bool,
};

Btn.defaultProps = {
  type: "primary",
  isLoading: false,
};

const PrimaryCss = css`
  background-color: #15bf95;

  &:enabled:hover {
    background-color: #15bf95;
  }

  &:active,
  &:enabled:active {
    background-color: #15bf95;
    color: rgba(255, 255, 255, 0.6);
  }

  &:disabled {
    background-color: rgba(21, 191, 149, 0.4);
    color: rgba(255, 255, 255, 0.9);
  }
`;

const SecondaryCss = css`
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--black-lt-1);

  &:enabled:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }

  &:active,
  &:enabled:active {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(92, 92, 92, 0.6);
  }

  &:disabled {
    background-color: rgba(235, 235, 235, 0.4);
    color: rgba(92, 92, 92, 0.4);
  }
`;

const SecondaryInvertedCss = css`
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;

  &:enabled:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active,
  &:enabled:active {
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
  }

  &:disabled {
    background-color: rgba(255, 255, 255, 0.07);
    color: rgba(255, 255, 255, 0.4);
  }
`;

const DangerCss = css`
  background-color: var(--accent-two);
  color: var(--white);

  &:enabled:hover {
    background-color: var(--accent-two-1);
  }

  &:active,
  &:enabled:active {
    background-color: var(--accent-two-1);
    color: rgba(255, 255, 255, 0.6);
  }

  &:disabled {
    background-color: rgba(202, 88, 85, 0.4);
    color: rgba(255, 255, 255, 0.9);
  }
`;
