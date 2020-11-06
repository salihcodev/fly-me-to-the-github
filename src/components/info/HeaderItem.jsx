import React from 'react';

const HeaderItem = ({ icon, numberFlag, subtitle }) => {
  return (
    <div className="flex justify-center items-center border border-solid border-gray-300 rounded-lg">
      <div className="">
        <span className="text-gray-600 flex justify-center items-center w-16 h-16 item-icon p-4 text-2xl">
          {icon}
        </span>
      </div>
      <div className="text">
        <h4 className="font-bold text-teal-800 text-2xl w-20">{numberFlag} </h4>
        <span className="text-gray-600">{subtitle} </span>
      </div>
    </div>
  );
};

export default HeaderItem;
