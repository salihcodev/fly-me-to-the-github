import React from "react";
import styled from "styled-components";

const FollowerTemp = ({ login, avatar_url, html_url }) => {
  return (
    <Follower>
      <div className="follower-block">
        <div className="follower-avatar">
          <img src={avatar_url} alt={login} />
        </div>
        <div className="follower-info">
          <h5 className="follower-name">{login}</h5>
          <span className="follower-profile">{html_url}</span>
        </div>
      </div>
    </Follower>
  );
};

export default FollowerTemp;

const Follower = styled.div`
  .follower-block {
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .follower-info {
      .follower-profile {
        padding: 12px;
        font-size: 13px;
        color: #777;
        text-decoration: underline;
      }
    }
    h5 {
      padding: 15px;
      padding-bottom: 0;
    }

    .follower-avatar {
      width: 55px;
      height: 55px;
      border-radius: 50%;
    }

    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
`;
