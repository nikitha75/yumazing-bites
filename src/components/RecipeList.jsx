import React from "react";
import Wrapper from "../assets/wrappers/RecipeList";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ meals }) => {
  if (!meals) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching recipes found...</h4>
    );
  }

  const formattedMeals = meals.map((item) => {
    const { idMeal, strMeal, strMealThumb, strCategory, strArea } = item;

    return {
      id: idMeal,
      name: strMeal,
      image: strMealThumb,
      category: strCategory,
      placeOfOrigin: strArea,
    };
  });

  return (
    <Wrapper>
      {formattedMeals.map((item) => {
        return <RecipeCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default RecipeList;
