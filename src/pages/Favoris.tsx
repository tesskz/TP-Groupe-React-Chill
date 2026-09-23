import { useParams } from "react-router-dom";
import "./RecipeDetail.css";
import NotFound from "./NotFound.tsx";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";

function RecipeDetail() {
  const { id } = useParams();

  const recipes = useSelector((state: RootState) => state.recipe.recipes)

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  if (!recipe) {
    return (<NotFound />);
  }

  return (

    <main className="recipe-detail">
      <div className="recipe-detail-image-wrapper">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipe-detail-image"
        />
        <button type="button" id="heart-button">♡</button>
      </div>
      <div className="recipe-detail-content">
        <h1>{recipe.name}</h1>

        <p>
          Temps de préparation : {recipe.prepTimeMinutes} min
        </p>

        <p>
          Temps de cuisson : {recipe.cookTimeMinutes} min
        </p>

        <h2>Ingrédients</h2>

        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2>Instructions</h2>

        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </main >
  );
}

export default RecipeDetail;
