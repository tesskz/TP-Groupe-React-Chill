import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <nav className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          🍴 Accueil
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/Favoris">Favoris</Link>
          </li>
          <li>
            <Link to="/login">Connexion</Link>
          </li>
          <li>
            <Link to="/users">Annuaire</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
