import React from "react";

const Button = ({ btnText, style, icon, onclick }) => {
  return (
    <>
      {icon ? (
        <div
          onClick={onclick}
          className={`${style} cursor-pointer text-lg md:text-2xl  border-black rounded-md px-4 py-2 active:text-white active:bg-black flex gap-4 items-center`}
        >
          <i className={`fa-solid ${icon}`}></i>
          {btnText}
        </div>
      ) : (
        <div
          onClick={onclick}
          className={`${style} cursor-pointer text-lg md:text-2xl px-4 py-2  inline-block`}
        >
          {btnText}
        </div>
      )}
    </>
  );
};

export default Button;
