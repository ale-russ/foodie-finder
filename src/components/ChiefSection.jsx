import React from "react";
import ChiefCard from "./ChiefCard";

const chiefsList = [
  {
    name: "Juan Carlos",
    img: "/img/top-chiefs/img_1.jpg",
    recipes: 10,
    cuisine: "Mexican",
  },
  {
    name: "Hashiro Moto",
    img: "/img/top-chiefs/img_2.jpg",
    recipes: 5,
    cuisine: "Japanese",
  },
  {
    name: "Eric DeAntonio",
    img: "/img/top-chiefs/img_3.jpg",
    recipes: 13,
    cuisine: "Italian",
  },
  {
    name: "Chris Stevens",
    img: "/img/top-chiefs/img_4.jpg",
    recipes: 8,
    cuisine: "American",
  },
  {
    name: "Tarik Ahmed",
    img: "/img/top-chiefs/img_5.jpg",
    recipes: 9,
    cuisine: "Emaratee",
  },
  {
    name: "Olev Mikale",
    img: "/img/top-chiefs/img_6.jpg",
    recipes: 4,
    cuisine: "Russian",
  },
];

const ChiefSection = () => {
  return (
    <div className="section chiefs">
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-chiefs-container">
        {chiefsList.map((chief, index) => (
          <ChiefCard key={index} chief={chief} />
        ))}
      </div>
    </div>
  );
};

export default ChiefSection;
