import React from "react";
import styled from "styled-components";

const FollowerTemp = ({ login, avatar_url, html_url }) => {
  return (
    <FollowerTemplate className="follower-temp">
      <div className="follower-block flex align-start  mb-1 py-2">
        <div className="follower-avatar w-12 rounded-full mr-3">
          <img src={avatar_url} alt={login} className="rounded-full w-full" />
        </div>
        <div className="follower-info">
          <h5 className="follower-name font-bold text-gray-700">{login}</h5>
          <a href={html_url} className="follower-profile text-gray-500 text-sm">
            {html_url}
          </a>
        </div>
      </div>
    </FollowerTemplate>
  );
};

export default FollowerTemp;

const FollowerTemplate = styled.section``;
