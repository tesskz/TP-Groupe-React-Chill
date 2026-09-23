import "./Users.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Link } from "react-router-dom";

function Users() {
    const users = useSelector((state: RootState) => state.user.users);
  return (
    <main className="directory">
      <header className="directory-header">
        <h1>Annuaire</h1>
      </header>

      <section className="users-grid">
        {users.map((user) => (
          <Link to={`/users/${user.id}`} className="user-card" key={user.id}>
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

export default Users;
