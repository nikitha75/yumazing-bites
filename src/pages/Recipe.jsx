import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/RecipePage";

const singleRecipeUrl = "www.themealdb.com/api/json/v1/1/lookup.php?i=";

export const loader = async (data) => {
  return null;
};

const Recipe = () => {
  return <div>Recipe</div>;
};

export default Recipe;
