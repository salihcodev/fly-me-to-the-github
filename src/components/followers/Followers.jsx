import React from "react";
import { AppStateContext } from "../../context/Context";
import styled from "styled-components";

// component:
import FollowerTemp from "./FollowerTemp";

const Followers = () => {
  const { Followers } = React.useContext(AppStateContext);

  return (
    <FollowersWrapper className="followers-section user-section">
      <div className="followers">
        {Followers.map((follower) => (
          <FollowerTemp {...follower} />
        ))}
      </div>
    </FollowersWrapper>
  );
};

const FollowersWrapper = styled.section`
  background: #fff;

  .followers {
    overflow-y: scroll;
    height: 300px;
  }
`;
export default Followers;
