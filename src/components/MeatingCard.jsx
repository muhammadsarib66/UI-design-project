import React, { useState } from "react";

const MeatingCard = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleCardClick = () => {
    setPopoverVisible(!popoverVisible);
  };

  return (
    <div
      onClick={handleCardClick}
      className=" bg-white py-4 rounded-xl shadow-lg hover:scale-95  duration-300	 cursor-pointer"
    >
      <div className="flex justify-between px-4">
        <span className="bg-[#F4F4F4]  text-gray-500 inline-block  md:text-xl font-bold px-4 py-2 rounded-lg">
          <i class="fa-regular fa-calendar"></i> 1:1 Call
        </span>
        <span className="mr-5 md:text-2xl flex  w-8 h-8 md:w-10 md:h-10 justify-center items-center border-4 border-black  rounded-full ">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </div>

      <div>
        <p className="text-xl md:text-2xl font-bold px-4 ">
          Resume / Protfolio Review
        </p>
        <p className="  md:text-lg font-semibold px-4 text-gray-500">
          This is a 30 minute 1:1 call to discuss
        </p>
      </div>
      <span className="border-b-[.2px]  border-gray-300 block pt-4  "> </span>
      <div className=" px-4 py-2 flex items-center justify-between mr-4">
        <p className="md:text-lg font-semibold  text-gray-500">
          60 min meating
        </p>
        <span className="bg-[#EDEDED] rounded-full px-2 font-semibold">
          $ 100
        </span>
      </div>

      {popoverVisible && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
              onClick={() => setPopoverVisible(false)}
            >
              Confirm?
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeatingCard;
