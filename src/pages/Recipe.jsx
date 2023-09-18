import { Link, useLoaderData, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/RecipePage";
import { useQuery } from "@tanstack/react-query";

const singleRecipeUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const singleRecipeQuery = (id) => {
  return {
    queryKey: ["recipe", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleRecipeUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    // const { data } = await axios.get(`${singleRecipeUrl}${id}`);
    // return { id, data };

    await queryClient.ensureQueryData(singleRecipeQuery(id));
    return { id };
  };

const Recipe = () => {
  const { id } = useLoaderData();
  // const [showInstructions, setShowInstructions] = useState(false);

  // if (!data) return <h2>Something went wrong...</h2>;

  const { data } = useQuery(singleRecipeQuery(id));

  if (!data.meals) {
    return <Navigate to="/" />;
  }

  const singleRecipe = data.meals[0];

  const {
    strMeal: name,
    strMealThumb: image,
    strArea: placeOfOrigin,
    strCategory: category,
    strInstructions: instructions,
  } = singleRecipe;

  const validIngredients = Object.keys(singleRecipe)
    .filter(
      (key) => key.startsWith("strIngredient") && singleRecipe[key] !== ""
    )
    .map((key) => singleRecipe[key]);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="recipe">
        <img src={image} alt={name} className="img" />
        <div className="recipe-info">
          <p>
            <span className="recipe-data">name : </span> {name}
          </p>
          <p>
            <span className="recipe-data">category : </span>
            {category}
          </p>
          <p>
            <span className="recipe-data">place of origin : </span>
            {placeOfOrigin}
          </p>
          <p>
            <span className="recipe-data">ingredients : </span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ingred" key={index}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="recipe-data">instructions :</span>
            <span className="inst">{instructions}</span>
          </p>
          {/* <p>
            <span className="recipe-data">instructions :</span>
            <span
              className={`${showInstructions} ? show-instructions : instructions `}
            >
              {instructions}
            </span>
            <div className="btn" onClick={() => setShowInstructions(true)}>
              show
            </div>
          </p> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Recipe;
