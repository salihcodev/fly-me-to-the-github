import React from "react";
import styled from "styled-components";

const FollowerTemp = ({ login, avatar_url, html_url }) => {
  return (
    <section>
      <div className="follower-block">
        <div
          className="follower-avatar"
        >
          <img
            src={avatar_url}
            alt={login}
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
          />
        </div>
        <div className="follower-info">
          <h5 className="follower-name">{login}</h5>
          <span className="follower-profile">{html_url}</span>
        </div>
      </div>
    </section>
  );
};

export default FollowerTemp;
