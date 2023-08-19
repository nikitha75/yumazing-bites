import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import Wrapper from "../assets/wrappers/RecipeCard";

const RecipeCard = ({ id, name, image, category, placeOfOrigin }) => {
  // const data = useOutletContext();

  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h3>{name}</h3>
        <h5>{category}</h5>
        <p>{placeOfOrigin}</p>
        <Link to={`/recipe/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};

export default RecipeCard;
