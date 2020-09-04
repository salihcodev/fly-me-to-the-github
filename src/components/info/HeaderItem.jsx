import React from "react";
import styled from "styled-components";

const HeaderItem = ({ icon, numberFlag, subtitle }) => {
  return (
    <ItemWrapper>
      <div className="item-icon">
        <span>{icon}</span>
      </div>
      <div className="text">
        <h3 className="num-flag">{numberFlag} </h3>
        <span className="subtitle-flag">{subtitle} </span>
      </div>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddd;

  .item-icon {
    width: 50px;

    span {
      font-size: 24px;
      background: #e8e8e8;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      align-items: center;
    }
  }

  h3 {
    margin: 0;
    padding: 0;
  }

  .text {
    .subtitle-flag {
      color: #888;
    }
  }
`;

export default HeaderItem;
