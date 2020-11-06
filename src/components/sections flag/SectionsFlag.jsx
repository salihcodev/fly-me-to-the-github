import React from 'react';

import styled from 'styled-components';

const SectionsFlag = ({ children }) => {
  return (
    <Flag className="rounded-tl-md py-1 px-4 absolute text-center bg-gray-600 border border-gray-800 border-solid text-gray-100">
      <span>{children}</span>
    </Flag>
  );
};

const Flag = styled.div`
  top: -34px;
  left: -1px;
`;

export default SectionsFlag;
