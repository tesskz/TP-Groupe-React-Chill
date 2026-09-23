import { useParams } from "react-router-dom";
import "./RecipeDetail.css";
import NotFound from "./NotFound.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
import { addFavourite, removeFavourite } from "../store/reducers/favourite.ts";

function RecipeDetail() {
  const { id } = useParams();

  const recipes = useSelector((state: RootState) => state.recipe.recipes)
  const favouriteIds = useSelector((state: RootState) => state.favourite.recipeIds);

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  const dispatch = useDispatch();

  if (!recipe) {
    return (<NotFound />);
  }

  const isFavourite = favouriteIds.includes(recipe.id)

  const handleFavourite = () => {
    dispatch(isFavourite ? removeFavourite(recipe.id) : addFavourite(recipe.id))
  }

  return (
    <main className="recipe-detail">
      <div className="recipe-detail-image-wrapper">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipe-detail-image"
        />

        <button
          type="button"
          className={`heart-button ${isFavourite ? "is-favourite" : ""
            }`}
          onClick={handleFavourite}
          aria-label={
            isFavourite
              ? "Retirer des favoris"
              : "Ajouter aux favoris"
          }
        >
          {isFavourite ? "♥" : "♡"}
        </button>
      </div>

      <div className="recipe-detail-content">
        <h1>{recipe.name}</h1>

        <div className="recipe-summary">
          <p><strong>Note :</strong> {recipe.rating}/5</p>
          <p><strong>Difficulté :</strong> {recipe.difficulty}</p>
          <p><strong>Cuisine :</strong> {recipe.cuisine}</p>
          <p><strong>Préparation :</strong> {recipe.prepTimeMinutes} min</p>
          <p><strong>Cuisson :</strong> {recipe.cookTimeMinutes} min</p>
          <p><strong>Portions :</strong> {recipe.servings}</p>
        </div>

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
