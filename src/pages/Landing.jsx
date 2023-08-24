import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import RecipeList from "./../components/RecipeList";

const recipeSearchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "";
  const response = await axios.get(`${recipeSearchUrl}${searchTerm}`);
  console.log(response);
  return { meals: response.data.meals, searchTerm };
};

const Landing = () => {
  const { meals, searchTerm } = useLoaderData();
  return (
    <>
      <RecipeList meals={meals} />
    </>
  );
};

export default Landing;
