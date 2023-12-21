import React from "react";
import UserImg from "../assets/images/userImg.png";
import MeatingCard from "../components/MeatingCard";

const Sec2 = () => {
  return (
    <section className="  flex-col md:flex-row flex gap-4  py-4 ">
      <div className=" flex items-center p-8 w-[100%] h-[40rem] md:h-auto  md:w-[45%] bg-[#ACB4FF]  ">
        <div className="flex flex-col space-y-4">
          <div className="rounded-full w-44 h-44 cursor-pointer ">
            <img src={UserImg} alt="image hai ye " className=" " />
          </div>
          <p className="font-bold text-4xl sm:text-5xl ">Sameer Khan</p>
          <p className="font-semibold text-lg md:text-xl ">
            i Broke into data with non--technical background. Let me help you do
            this same
          </p>
          <div className="flex gap-2 md:gap-6 ">

            {['fa-linkedin','fa-github'].map((items)=>(
            <span className="bg-[#C3C8FF] text-5xl md:text-6xl  p-2 rounded-lg ">
            <i className={`fa-brands ${items}`}></i>
            </span> ))}
            
          </div>
        </div>
      </div>
      <div className=" w-[100%] md:w-[55%] flex flex-col gap-6 px-4    ">
        {[1, 2, 3].map((item) => {
          return (
            <span>
              <MeatingCard />
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Sec2;
