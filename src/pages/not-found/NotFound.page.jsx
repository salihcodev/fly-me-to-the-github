import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const NotFound = () => {
  const ErrMsg = `Dead end buddy :'( You probably hit a non existed link`;

  return (
    <ErrorMessage className="flex justify-center items-center h-screen text-center">
      <p>
        <div className="text-gray-900 font-extrabold text-6xl">404</div>
        <h2 className=" font-medium text-2xl text-teal-800">{ErrMsg}</h2>
      </p>
    </ErrorMessage>
  );
};

export default NotFound;

const ErrorMessage = styled.section``;
