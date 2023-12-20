import React from "react";

const UserCard = ({ bgcolor, name, desc }) => {
  return (
    <div className="relative  w-[16rem] lg:w-[18rem] min-h-[22rem]  bg-white rounded-lg overflow-hidden ">
      <div className={`h-32   ${bgcolor}`}></div>
      <div className="p-4 flex flex-col  text-center gap-3 absolute top-8 ">
        <i className="fa-solid fa-user text-8xl md:text-9xl "></i>

        <p className="font-bold text-2xl ">{name}</p>
        <p className="px-4 text-lg"> {desc}</p>
      </div>
    </div>
  );
};

export default UserCard;
