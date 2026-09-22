import { useParams } from "react-router-dom";
import "./RecipeDetail.css";
import data from "../recipes.json";
import Error from "./Error.tsx";

function RecipeDetail() {
  const { id } = useParams();

  const recipe = data.recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  if (!recipe) {
    return (<Error />);
  }

  return (
    <main className="recipe-detail">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="recipe-detail-image"
      />

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
    </main>
  );
}

export default RecipeDetail;
