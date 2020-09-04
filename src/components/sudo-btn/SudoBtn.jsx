import React from "react";
import styled from "styled-components";

const SudoBtn = ({ children, bkgColor, Color }) => {
  return (
    <SudoButton
      style={{
        backgroundColor: bkgColor,
        color: Color,
      }}
    >
      {children}
    </SudoButton>
  );
};

export default SudoBtn;

const SudoButton = styled.button`
  text-transform: uppercase;
  padding: 0.775rem 0.95rem;
  display: inline-block;
  font-weight: 400;
  transition: all ease-in-out 0.3s;
  font-size: 0.875rem;
  cursor: pointer;
  border: 1px solid #333;

  &.btn:hover {
    background: #f1f1f1;
  }
`;
