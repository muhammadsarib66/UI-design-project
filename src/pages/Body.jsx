import React from "react";
import Button from "../components/common/Button";
import UserCard from "../components/UserCard";

const Body = () => {
  const tags = [
    "View All",
    "AL & ML",
    "Software Engineer",
    "Data Science",
    "Cyber Security",
  ];
  let UserCardDetail = [
    {
      bgcolor: "bg-[#BCDAD0]",
      name: "John Doe",
      desc: " Coaches on building personal brand and getting into data science",
    },
    {
      bgcolor: "bg-[#DCD1FC]",
      name: "Jack Smith",
      desc: "Gives consultant for AL AND ML ",
    },
    {
      bgcolor: "bg-[#F9D8ED]",
      name: "Person-3",
      desc: " Gives consultant for Cyber Security",
    },
  ];
  return (
    <section className="flex flex-col space-y-4 gap-5 items-center ">
      <p className="text-2xl sm:text-3xl md:text-5xl">
        For people <span className="font-bold"> making impact</span>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-flow-col  text-center items-center gap-4">
        {tags.map((tags, index) => {
          return (
            <Button
              btnText={tags}
              style="text-md sm:text-xl md:text-2xl  hover:bg-black hover:text-white rounded-full bg-[#EDECE8]"
            />
          );
        })}
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:gap-14 gap-8  pb-8">
        {UserCardDetail.map((UserCardDetail) => {
          return (
            <UserCard
              bgcolor={UserCardDetail.bgcolor}
              name={UserCardDetail.name}
              desc={UserCardDetail.desc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Body;
