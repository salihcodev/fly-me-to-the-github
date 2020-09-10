import React from "react";
import styled from "styled-components";

const HeaderItem = ({ icon, numberFlag, subtitle }) => {
  return (
    <article>
      <div className="item-icon">
        <span>{icon}</span>
      </div>
      <div className="text">
        <h3 className="num-flag">{numberFlag} </h3>
        <span className="subtitle-flag">{subtitle} </span>
      </div>
    </article>
  );
};

export default HeaderItem;
