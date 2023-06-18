import React from "react";
import CustomImage from "../components/CustomImage";

const RecipesCard = ({ recip }) => {
  return (
    <div className="recipes-card">
      <CustomImage src={recip.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="author-img" src={recip.authorImg} alt="" />
        <p className="recipe-title">{recip.title}</p>
        <p className="recipe-desc">
          Lorem Ipsume is siple dummy text of the printing and typesetting
          industry.
        </p>
        <a href="#!" className="view-btn">
          VIEW RECIPE
        </a>
      </div>
    </div>
  );
};

export default RecipesCard;
