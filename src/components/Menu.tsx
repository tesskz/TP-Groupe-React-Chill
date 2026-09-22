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
            <Link to="/Connexion">Connexion</Link>
          </li>
          <li>
            <Link to="/annuaire">Annuaire</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
