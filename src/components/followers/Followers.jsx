import React from "react";
import { AppStateContext } from "../../context/Context";
import styled from "styled-components";

// component:
import FollowerTemp from "./FollowerTemp";

const Followers = () => {
  const { Followers } = React.useContext(AppStateContext);

  return (
    <FollowersWrapper className="followers-section user-section border-gray-500 border border-solid rounded-md p-4 pr-0">
      <div className="followers">
        {Followers.map((follower) => (
          <FollowerTemp {...follower} />
        ))}
      </div>
    </FollowersWrapper>
  );
};

const FollowersWrapper = styled.section`
  .followers {
    height: 33rem;
    overflow-y: scroll;

    section.follower-temp:not(:last-child) {
      border-bottom: 1px solid #cbd5e0;
    }
  }
`;
export default Followers;
