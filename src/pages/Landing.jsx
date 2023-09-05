import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import RecipeList from "./../components/RecipeList";
import SearchForm from "./../components/SearchForm";

const recipeSearchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  const response = await axios.get(`${recipeSearchUrl}${searchTerm}`);
  return { meals: response.data.meals, searchTerm };
};

const Landing = () => {
  const { meals, searchTerm } = useLoaderData();
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <RecipeList meals={meals} />
    </>
  );
};

export default Landing;
