import { Link } from "react-router-dom";
import "./Home.css";
import data from "../recipes.json";

function Home() {
  return (
    <main className="home">
      <header className="home-header">
        <h1>Kévin Joffret</h1>
        <p>Mes recettes de cuisine</p>
      </header>

      <section className="recipes-grid">
        {data.recipes.map((recipe) => (
          <Link
            to={`/recipes/${recipe.id}`}
            className="recipe-card"
            key={recipe.id}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="recipe-image"
            />

            <div className="recipe-content">
              <h2>{recipe.name}</h2>
              <p>Préparation : {recipe.prepTimeMinutes} min</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Home;
