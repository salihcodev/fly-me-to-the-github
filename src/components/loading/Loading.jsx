import React from "react";
import styled from "styled-components";
import loadingImage from "../../assets/preloader.gif";

const MainLoading = () => {
  return (
    <LoadingWrapper className="fixed inset-y-0 inset-x-0 bg-white bg-opacity-25">
      <div
        style={{ backgroundImage: `url(${loadingImage})` }}
        className="loading-holder w-16 h-16 border-4 border-black border-solid rounded-lg bg-cover bg-center absolute "
      ></div>
    </LoadingWrapper>
  );
};

export default MainLoading;

const LoadingWrapper = styled.section`
  .loading-holder {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
  }
`;
