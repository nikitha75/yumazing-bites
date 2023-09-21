import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import RecipeList from "./../components/RecipeList";
import SearchForm from "./../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const recipeSearchUrl = import.meta.env.VITE_RECIPE_SEARCH_URL;

const searchRecipesQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${recipeSearchUrl}${searchTerm}`);
      return response.data.meals;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchRecipesQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: meals } = useQuery(searchRecipesQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <RecipeList meals={meals} />
    </>
  );
};

export default Landing;

// import React from "react";
// import { useLoaderData } from "react-router-dom";
// import axios from "axios";
// import RecipeList from "./../components/RecipeList";
// import SearchForm from "./../components/SearchForm";

// const recipeSearchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// export const loader = async ({ request }) => {
//   const url = new URL(request.url);
//   const searchTerm = url.searchParams.get("search") || "";
//   const response = await axios.get(`${recipeSearchUrl}${searchTerm}`);
//   return { meals: response.data.meals, searchTerm };
// };

// const Landing = () => {
//   const { meals, searchTerm } = useLoaderData();
//   return (
//     <>
//       <SearchForm searchTerm={searchTerm} />
//       <RecipeList meals={meals} />
//     </>
//   );
// };

// export default Landing;
