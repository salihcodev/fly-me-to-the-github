import React from "react";

const HeaderItem = ({ icon, numberFlag, subtitle }) => {
  return (
    <main className="flex justify-center items-center">
      <div className="icon-cont flex justify-center items-center w-12 h-12 mr-4 rounded-full item-icon p-4 text-2xl bg-gray-200">
        <span className="text-gray-600">{icon}</span>
      </div>
      <div className="text">
        <h4 className="num-flag font-bold text-teal-800 text-2xl">
          {numberFlag}{" "}
        </h4>
        <span className="subtitle-flag text-gray-600">{subtitle} </span>
      </div>
    </main>
  );
};

export default HeaderItem;
