import React, { useState } from "react";
import UserImg from "../../assets/images/userImg.png";

const Popover = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger button for popover */}

      <div
        className="rounded-full w-14 h-14 cursor-pointer "
        onClick={() => setPopoverOpen(!isPopoverOpen)}
      >
        <img src={UserImg} alt="image hai ye " className=" " />
      </div>

      {/* Popover content */}
      {isPopoverOpen && (
        <div className="absolute bg-white border border-gray-300 p-4 shadow-md right-0 mt-2 w-48">
          <div className="flex flex-col">
            {/* Dashboard link */}
            <a href="#" className="py-2 hover:text-blue-500">
              Dashboard
            </a>

            {/* Logout link */}
            <a href="*" className="py-2 hover:text-red-500">
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
