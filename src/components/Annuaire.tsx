import "./Annuaire.css";
import data from "../users.json";
import { Link } from "react-router-dom";

function Annuaire() {
  return (
    <main className="directory">
      <header className="directory-header">
        <h1>Annuaire</h1>
      </header>

      <section className="users-grid">
        {data.users.map((user) => (
          <Link to={`/user/${user.id}`} className="user-card" key={user.id}>
            <img
              src={user.image}
              alt={user.username}
              className="user-image"
            />

            <div className="user-content">
              <h2>{user.username}</h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Annuaire;
