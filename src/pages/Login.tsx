import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import data from "../users.json";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        const user = data.users.find(
            (user) =>
                user.username === username &&
                user.password === password
        );

        if (user) {
            setError("");
            navigate("/profile");
        } else {
            setError("Nom d'utilisateur ou mot de passe incorrect.");
        }
    };

    return (
        <main className="login">
            <div className="login-card">
                <h1>Connexion</h1>

                <p className="login-description">
                    Connectez-vous à votre compte
                </p>

                <form>
                    <div className="form-group">
                        <label htmlFor="username">
                            Nom d'utilisateur
                        </label>

                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            placeholder="Votre nom d'utilisateur"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            Mot de passe
                        </label>

                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Votre mot de passe"
                            required
                        />
                    </div>

                    {error && <p className="login-error">{error}</p>}

                    <button
                        type="button"
                        className="login-button"
                        onClick={handleLogin}
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Login;