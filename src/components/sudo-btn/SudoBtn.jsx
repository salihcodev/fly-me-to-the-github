import React from "react";
import styled from "styled-components";

const SudoBtn = ({ children, bkgColor, Color }) => {
  return (
    <button
      style={{
        backgroundColor: bkgColor,
        color: Color,
      }}
    >
      {children}
    </button>
  );
};

export default SudoBtn;
