import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Menu.css";
import { clearLoggedUser } from "../store/reducers/auth";

function Menu() {
  const loggedUser = useSelector((state: any) => state.auth.loggedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearLoggedUser());
    navigate("/login");
  };

  return (
    <nav className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          🍴 Accueil
        </Link>

        <ul className="nav-links">
          {loggedUser && (
            <>
              <li>{loggedUser.firstName}</li>
              <li>
                <button onClick={handleLogout}>Déconnexion</button>
              </li>
            </>
          )}

          {!loggedUser && (
            <li>
              <Link to="/login">Connexion</Link>
            </li>
          )}

          <li>
            <Link to="/users">Annuaire</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;