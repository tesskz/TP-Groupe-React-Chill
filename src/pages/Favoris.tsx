import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
import "./Home.css"
import { addFavourite, removeFavourite } from "../store/reducers/favourite.ts";

function Favoris() {
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const favouriteIds = useSelector((state: RootState) => state.favourite.recipeIds);

  const dispatch = useDispatch();

  const favouriteRecipes = recipes.filter((recipe) =>
    favouriteIds.includes(recipe.id)
  );

  return (
    <main className="favourites">
      <h1>Mes favoris</h1>

      {favouriteRecipes.length === 0 ? (
        <p>Vous n'avez encore aucune recette favorite.</p>
      ) : (
        <section className="recipes-grid">
          {favouriteRecipes.map((recipe) => {
            const isFavourite = favouriteIds.includes(recipe.id);

            const handleFavourite = (e: React.MouseEvent) => {
              e.preventDefault();
              dispatch(
                isFavourite ? removeFavourite(recipe.id) : addFavourite(recipe.id)
              );
            };

            return (
              <Link
                to={`/recipes/${recipe.id}`}
                className="recipes-card"
                key={recipe.id}
              >
                <div className="recipe-detail-image-wrapper">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="recipe-image"
                  />
                  <button
                    type="button"
                    className={`heart-button-home ${isFavourite ? "is-favourite" : ""}`}
                    onClick={handleFavourite}
                  >
                    {isFavourite ? "❦" : "♡"}
                  </button>
                </div>
                <h2>{recipe.name}</h2>
              </Link>
            );
          })}

        </section>
      )}
    </main>

  );
}

export default Favoris;