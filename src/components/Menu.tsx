import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Menu.css";
import type { RootState } from "../store/store";
import { clearLoggedUser } from "../store/reducers/auth";

function Menu() {
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearLoggedUser());
    localStorage.removeItem("token");
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  return (
    <nav className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          🍴 Accueil
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/users">Annuaire</Link>
          </li>
          <li>
            <Link to="/posts">Blog</Link>
          </li>

          <li>
            <Link to="/citation">Citation du jour</Link>
          </li>


          {loggedUser ? (
            <>
              <li>
                <Link to="/profile">Mon Profil</Link>
              </li>
              <li>
                <Link to="/favoris">Mes Favoris</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Déconnexion</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Connexion</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
