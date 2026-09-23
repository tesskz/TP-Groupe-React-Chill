import { Link } from "react-router-dom";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store.ts";
import { addFavourite, removeFavourite } from "../store/reducers/favourite.ts";


function Home() {

  const recipes = useSelector((state: RootState) => state.recipe.recipes)
  const favouriteIds = useSelector((state: RootState) => state.favourite.recipeIds);

  const dispatch = useDispatch();  

  return (
    <main className="home">
      <header className="home-header">
        <h1>Abdelmalek / Dylan / Ranya</h1>
        <p>Mes recettes de cuisine</p>
      </header>

      <section className="recipes-grid">
        {recipes.map((recipe) => {
          const isFavourite = favouriteIds.includes(recipe.id);

          const handleFavourite = (e: React.MouseEvent) => {
            e.preventDefault(); // prevents Link navigation
            dispatch(
              isFavourite
                ? removeFavourite(recipe.id)
                : addFavourite(recipe.id)
            );
          };

          return (
          <Link
            to={`/recipes/${recipe.id}`}
            className="recipe-card"
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

            <div className="recipe-content">
              <h2>{recipe.name}</h2>
              <p>Préparation : {recipe.prepTimeMinutes} min</p>
            </div>
          </Link>
        );
      })}
      </section>
    </main>
  );
}

export default Home;
