import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ size = 60 }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
      <ClipLoader
        size={size}
        speedMultiplier={1}
        color={"#7B4BF2"} // middle between #632EE3 and #9F62F2
      />
    </div>
  );
};

export default Loader;
