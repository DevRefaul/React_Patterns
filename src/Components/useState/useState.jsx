import React, { useState } from "react";

const useStateHook = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h2 className="text-4xl font-semibold text-center mb-12">{num}</h2>
      <button
        className="btn btn-primary"
        onClick={() => setNum(Math.random() * 100)}
      >
        Get Random Number
      </button>
    </div>
  );
};

export default useStateHook;
